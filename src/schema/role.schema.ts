import * as z from "zod";

export const RoleSchema = z.object({
  name: z.string().nonempty('El nombre es requerido.'),
  description: z.string().nonempty('La descripción es requerida.'),
})