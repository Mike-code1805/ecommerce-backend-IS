import * as yup from "yup";

export const productValidationSchema = yup.object({
  body: yup.object({
    title: yup.string().required("Title is required"),
    price: yup.number().required("Price is required"),
    description: yup.string(),
    category: yup.string().required("Category is required"),
    image: yup.string(),
    inStock: yup.boolean(),
    rating: yup.number(),
  }),
});
