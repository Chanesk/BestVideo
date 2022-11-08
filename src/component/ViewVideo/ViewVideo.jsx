import { useParams,Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../ContextBox/ContextBox';
import './ViewVideo.css';

const SubcriptionVideo = () =>{
    let {channelId}= useParams();
    const [channel, setChannel] = useState([]);
    const {sidebar}= useContext(UserContext);

    useEffect(()=> { fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&maxResults=20&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)

        .then(response =>{
            return response.json()
        })
        .then(data =>{
            setChannel(data.items);
            console.log(data.items);
    
        })
        .catch((error)=> console.log(error))
    },[]);


    return (
        <>
        <div  className='sub-video' style={{width: sidebar? "100%" : "80%"}}>
        {channel?.map((video,index) => {
            const videoId=video.id.videoId;
            const times= Date.fromISO(video.snippet.publishedAt).toRelative();
          return (
            <Link key={index} className="cards" to={`/playervideo/${videoId}`}>
                  <div className="card-video">
                    <div className='card-img'><img src={video.snippet.thumbnails.medium.url}  alt={video.snippet.title} className='card-post'/></div>
                      <div className="card-content">
                          <div>
                            <p className='card-title'>{video.snippet.title}</p>
                            <p>{times}</p>
                          </div>
                      </div>
                  </div>
            </Link>
          );
        })}
      </div>
      </>
    )
}

export default SubcriptionVideo