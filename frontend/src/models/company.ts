import { z } from "zod"

export const companySchema = z.object({
  id: z.string(),
  company_name: z.string(),
  cnpj: z.string(),
  address: z.string(),
  phone: z.string(),
  whatsapp: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
})

export type Company = z.infer<typeof companySchema>
