import ReactPlayer from "react-player"

export function VideoPlayer({ videoUrl }: { videoUrl: string }) {
  return (
    <div className='aspect-video max-h-screen w-full'>
      <ReactPlayer width='100%' height='100%' url={videoUrl} playing={false} />
    </div>
  )
}
