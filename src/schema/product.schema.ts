import * as z from "zod";

export const ProductSchema = z.object({
  name: z.string().nonempty('El nombre es requerido.'),
  description: z.string().nonempty('La descripción es requerida.'),
  categoryId: z.number().nonoptional('La categoria es requerida.'),
  quantity: z.number().min(10, { error: 'La cantidad mínima es de 10.' }),
  price: z.number().min(10, { error: 'El precio mínimo es de 10.' }),
  image: z.string().nonempty('La imagen es requerida.'),
});
