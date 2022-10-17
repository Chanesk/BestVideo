import React, { useEffect, useState } from "react";
import { useContext } from "react";
import './VideoSubcription.css';
import { UserContext } from "../../ContextBox/ContextBox";
import { Link } from "react-router-dom";
import axios from "axios";


const VideoSubcription = () => {
    const [subscribe, setSubscribe] = useState([]);
    const {data} = useContext(UserContext);
    console.log(data);

    useEffect(() =>{
        const setSubscribeVideo = async() =>{
            try{
                const reponse= await fetch('https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet&maxResults=21&mine=true&key=AIzaSyBgDejVRUB1-sRFR8tMY1nm8VZb8jPz_o0&access_token='+ data)
                const subscribe = await reponse.json();
                setSubscribe(subscribe)
                console.log(subscribe.items);
            }
            catch(error){
                console.log("error", error);
            }
        }
        setSubscribeVideo()
    }, [])

    return(
    <>
      <div className="sub-box" >
         {
            subscribe.items?.map((item) =>(
                <Link key={item.channelId} to={`viewvideo/${item.snippet.resourceId.channelId}`}>
                    <div className="sub-medium" >
                        <div className="sub-img"><img src={item.snippet.thumbnails.medium.url} alt="" /></div>
                        <div className="sub-title">{item.snippet.title}</div>
                    </div>
                </Link>
            ))
        }
       </div> 
    </>
    )
}

export default VideoSubcription