import { z } from "zod";

export const ContactValidator = z.object({
  name: z
    .string()
    .min(3, { message: "Title must be longer than 3 characters" })
    .max(24, { message: "Title must be atmost 128 characters" }),
  relationship: z.string(),
  duration: z.enum([
    "daily",
    "every-other-day",
    "every-three-day",
    "weekly",
    "bi-weekly",
    "monthly",
    "bi-monthly",
    "quarterly",
    "semi-annually"
  ])
});

export type ContactCreationRequest = z.infer<typeof ContactValidator>;
