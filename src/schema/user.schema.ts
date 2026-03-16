import * as z from "zod";

export const UserSchema = z.object({
  name: z.string().nonempty('El nombre (s) es requerido.'),
  lastName: z.string().nonempty('El apellido (s) es requerido.'),
  phoneNumber: z.string().nonempty('El telefono es requerido.'),
  email: z.string().nonempty('El correo electrónico es requerido.'),
  rolId: z.number().min(1, { error: 'El rol es requerido.' }),
  password: z.string().nonempty('La contraseña es requerida.'),
  isEnabled: z.boolean().default(true),
});
