import React from 'react';
import {useParams} from 'react-router-dom';
import YouTube  from 'react-youtube';

const PlayerVideo = () =>{
   let {videoId} = useParams();
   
   return(
    <>
        <div>
            <YouTube width={750} videoId={videoId} />
        </div>
    </>
   )
}

export default PlayerVideo
