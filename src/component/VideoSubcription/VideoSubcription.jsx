import React, { useEffect, useState } from "react";
import { useContext } from "react";
import './VideoSubcription.css';
import { UserContext } from "../../ContextBox/ContextBox";
import { Link } from "react-router-dom";


const VideoSubcription = () => {
    const [subscribe, setSubscribe] = useState([]);
    const {data} = useContext(UserContext);

    useEffect(() =>{
        const setSubscribeVideo = async() =>{
            try{
                const reponse= await fetch(`https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet&maxResults=21&mine=true&key=${import.meta.env.VITE_YOUTUBE_API_KEY}&access_token=`+ data)
    
                const subscribe = await reponse.json();
                setSubscribe(subscribe)
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
                <Link key={item.id} to={`viewvideo/${item.snippet.resourceId.channelId}`}>
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