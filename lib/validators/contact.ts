import { z } from "zod";
import categoriesData from "@/data/categories";
import frequencyData from "@/data/callFrequency";

const relationValues = categoriesData.map((c) => c.code) as [
  string,
  ...string[]
];
const callFrequency = frequencyData.map((f) => f.code) as [string, ...string[]];

export const ContactValidator = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be longer than 3 characters" })
    .max(24, { message: "Name must be atmost 128 characters" }),
  relation: z.enum(relationValues),
  callFrequency: z.enum(callFrequency)
});

export type ContactCreationRequest = z.infer<typeof ContactValidator>;
