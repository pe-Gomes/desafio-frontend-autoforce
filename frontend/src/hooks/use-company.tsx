import { getCompanyById } from "@/services/company"
import { useQuery } from "react-query"

export function useOneCompany(companyId: string) {
  const { isLoading, status, data, isError } = useQuery({
    queryKey: [`company-${companyId}`],
    staleTime: Infinity, // Never refetches the company data,
    queryFn: () => getCompanyById(companyId),
  })

  return {
    isLoading,
    isError,
    status,
    company: data,
  }
}
