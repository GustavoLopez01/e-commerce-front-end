import * as z from "zod";

export const LoginSchema = z.object({
  username: z.string().nonempty('El email es requerido.'),
  password: z.string().nonempty('La contraseña es requerida.'),
});



export type LoginType = z.infer<typeof LoginSchema>;