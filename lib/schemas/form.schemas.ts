import * as z from "zod";
export const contactFormSchema = () => {
  return z.object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters long"),
  });
};

export type ContactFormData = z.infer<ReturnType<typeof contactFormSchema>>;
