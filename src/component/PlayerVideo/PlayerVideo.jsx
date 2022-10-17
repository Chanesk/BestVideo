import React from 'react';
import {useParams} from 'react-router-dom';
import YouTube  from 'react-youtube';
import './PlayerVideo.css';

const PlayerVideo = () =>{
   let {videoId} = useParams();
   
   return(
    <>
        <div className='video-box'>
            <YouTube width={750} height={400}videoId={videoId} />
        </div>
    </>
   )
}

export default PlayerVideo
