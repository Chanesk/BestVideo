import React from 'react';
import {useParams} from 'react-router-dom';
import YouTube  from 'react-youtube';
import { useContext } from 'react';
import { UserContext } from '../../ContextBox/ContextBox';
import './PlayerVideo.css';
import CommentVideo from '../CommentVideo/CommentVideo';

const PlayerVideo = () =>{
    const {sidebar}= useContext(UserContext);
   let {videoId} = useParams();
   
   return(
    <>
        <div className='video-box' style={{width: sidebar? "100%" : "80%"}}>
            <YouTube width={750} height={400}videoId={videoId} />
            <div>
                <CommentVideo />
            </div>
        </div>
    </>
   )
}

export default PlayerVideo
