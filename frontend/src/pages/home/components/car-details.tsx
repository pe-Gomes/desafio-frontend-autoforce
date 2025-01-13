import CarImage from "@/assets/images/car.png"
import { Icons } from "@/components/icons"
import { IconGridItem } from "./icon-grid-item"
import { useVehicle } from "@/hooks/use-vehicle"

export function CarDetails() {
  const { vehicle } = useVehicle("1")

  return (
    <div className='grid grid-cols-1 justify-items-center md:grid-cols-2'>
      <img src={CarImage} />
      <div>
        <h1 className='mb-6 text-2xl font-bold'>Destaques</h1>

        <div className='grid w-full grid-cols-2 gap-8'>
          <IconGridItem
            icon={<Icons.Gas className='h-6 w-6' />}
            title='Consumo'
            description={vehicle?.features.consumption}
          />

          <IconGridItem
            icon={<Icons.Motor className='h-6 w-6' />}
            title='Cilindrada'
            description={vehicle?.features.engine}
          />
          <IconGridItem
            icon={<Icons.Lightning className='h-6 w-6' />}
            title='Potência'
            description={vehicle?.features.power}
          />

          <IconGridItem
            icon={<Icons.Speedometer className='h-6 w-6' />}
            title='Velocidade'
            description={vehicle?.features.speed}
          />
        </div>
      </div>
    </div>
  )
}
