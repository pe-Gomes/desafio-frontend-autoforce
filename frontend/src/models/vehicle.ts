import { z } from "zod"

export const vehicleFeaturesSchema = z.object({
  id: z.string(),
  consumption: z.string(),
  engine: z.string(),
  power: z.string(),
  speed: z.string(),
})

export type VehicleFeatures = z.infer<typeof vehicleFeaturesSchema>

export const vehicleSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  features: vehicleFeaturesSchema,
  image: z.string(),
  video: z.string(),
  legal_text: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
})

export type Vehicle = z.infer<typeof vehicleSchema>
