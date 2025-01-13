import { Company } from "@/models/company"
import { api } from "."

export async function getCompanyById(id: string) {
  return await api.get(`companies/${id}`).json<Company>()
}
