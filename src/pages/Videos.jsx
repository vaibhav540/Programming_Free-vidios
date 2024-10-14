import React from 'react'
import {Stack,Box} from '@mui/material'
import ChannelCard from '../components/ChannelCard'
import VideoCard from '../components/VideoCard'
const Videos = ({videos,direction}) => {
  // console.log(videos)
  if(!videos) return 'Loading....'
  return (
    <Stack
    direction={direction || 'row'}
     flexWrap="wrap"
     justifyContent="start" gap={2}> 
    {videos.map((item,idx)=>{
return(
    <Box key={idx}>
      {item.id.videoId && <VideoCard video={item} />}
      {item.id.channelId && <ChannelCard channelDetail={item} />}
  </Box>
)
    })}
    </Stack>
  )
}

export default Videos