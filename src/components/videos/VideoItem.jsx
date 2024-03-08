import React from 'react'
import VideoUser from './VideoUser'
import Video from './Video'

const VideoItem = ({ video_id: videoId, author, title, play }) => {
  return (
    <div className='video'>
      <VideoUser  {...author} />
      <Video url={play} videoId={videoId} />
      <div className='video-title'>{title}</div>
    </div>


  )
}

export default VideoItem