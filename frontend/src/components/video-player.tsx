import ReactPlayer from "react-player"

export function VideoPlayer() {
  return (
    <div className='aspect-video max-h-screen w-full'>
      <ReactPlayer
        width='100%'
        height='100%'
        url={`https://www.youtube.com/watch?v=Fr5lt86dPyU`}
        controls
        playing={false}
      />
    </div>
  )
}
