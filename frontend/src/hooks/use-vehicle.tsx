import { getVehicleById } from "@/services/vehicle"
import { useQuery } from "react-query"

export function useVehicle(id: string) {
  const { isLoading, isError, data, status } = useQuery({
    queryKey: [`vehicle-${id}`],
    queryFn: () => getVehicleById(id),
  })

  return {
    isError,
    isLoading,
    status,
    vehicle: data,
  }
}
