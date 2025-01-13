import { Skeleton } from "@/components/ui/skeleton"
import { VideoPlayer } from "@/components/video-player"
import { useVehicle } from "@/hooks/use-vehicle"

export function CarVideo() {
  const { vehicle, isLoading } = useVehicle("1")

  return (
    <div className='container flex w-full flex-col items-start justify-start'>
      <h1 className='text-2xl font-bold'>Conheça o BMW Série 4 Cabrio</h1>
      <div className='mt-8 w-full flex-1 justify-center'>
        {isLoading || !vehicle ? (
          <Skeleton className='h-96 w-full' />
        ) : (
          <VideoPlayer videoUrl={vehicle.video} />
        )}
      </div>
    </div>
  )
}
