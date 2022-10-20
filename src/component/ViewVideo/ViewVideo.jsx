import { useParams,Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ViewVideo.css';

const SubcriptionVideo = () =>{
    let {channelId}= useParams();
    const [channel, setChannel] = useState([]);

    useEffect(()=> { fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&maxResults=20&key=AIzaSyBgDejVRUB1-sRFR8tMY1nm8VZb8jPz_o0`)

        .then(response =>{
            return response.json()
        })
        .then(data =>{
            setChannel(data.items);
    
        })
        .catch((error)=> console.log(error))
    },[]);


    return (
        <>
        <div  className='sub-video'>
        {channel?.map((video,index) => {
            const videoId=video.id.videoId;
          return (
            <Link key={index} className="cards" to={`/playervideo/${videoId}`}>
                  <div className="card-video">
                    <div className='card-img'><img src={video.snippet.thumbnails.medium.url}  alt={video.snippet.title} className='card-post'/></div>
                      <div className="card-content">
                          <div>
                            <p className='card-title'>{video.snippet.title}</p>
                            <p>{video.snippet.channelTitle}</p>
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