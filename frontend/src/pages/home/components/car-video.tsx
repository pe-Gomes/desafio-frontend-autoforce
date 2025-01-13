import { VideoPlayer } from "@/components/video-player"

export function CarVideo() {
  return (
    <div className='container flex w-full flex-col items-start justify-start'>
      <h1 className='text-2xl font-bold'>Conheça o BMW Série 4 Cabrio</h1>
      <div className='mt-8 w-full flex-1 justify-center'>
        <VideoPlayer />
      </div>
    </div>
  )
}
