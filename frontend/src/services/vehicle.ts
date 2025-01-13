import { Vehicle } from "@/models/vehicle"
import { api } from "."

export async function getVehicleById(id: string) {
  return await api.get(`vehicles/${id}`).json<Vehicle>()
}
