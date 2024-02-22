import { z } from "zod";

export const CreateBoard = z.object({
  title: z
    .string({
      required_error: "Please enter a title for the board.",
      invalid_type_error: "Please enter a valid title.",
    })
    .min(3, {
      message: "Title must be at least 3 characters long.",
    }),
});
