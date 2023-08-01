import * as z from "zod";

export const noteSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Please, name the todo" })
    .max(30, { message: "Todo name is too long." }),
  content: z
    .string()
    .min(1, { message: "Please, fill up the comments" })
    .max(200, { message: "Todo comment is too long." }),
  category: z.enum(["task", "thought", "idea"]),
});
