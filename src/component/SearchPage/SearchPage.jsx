import React,{useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../ContextBox/ContextBox';
import './SearchPage.css';


const SearchPage = () =>{

    let {inputSearch} = useParams();
    const [videoRows, setVideoRows]= useState([]);
    const [channelRows, setChannelRows] = useState([]);
    const [channelId, setChannelId] = useState([]);
    const {sidebar}= useContext(UserContext) 

        useEffect(() =>{
        
        const setSearchVideo = async() =>{
            try{
                const reponse= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${inputSearch}&safeSearch=none&type=video&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
                const searchVideo = await reponse.json();
            
                setVideoRows(searchVideo.items);
                console.log(searchVideo.items);
                
            }
            catch(error){
                console.log("error", error);
            }

        }
        setSearchVideo();
    }, [inputSearch]) ; 

  
 
    return(
        <>
        <div className='videorow' style={{width: sidebar? "100%" : "80%"}}>
            {videoRows?.map((item, index)=>(
            
                <Link key={index} className="videorow-cards" to={`/playervideo/${item.id.videoId}`}>
                    <div className='videorow-image'>
                        <img className='videorow-logo' src={item.snippet.thumbnails.medium.url} alt="" />
                    </div>
                     <div className='videorow-text'>
                        <h4>{item.snippet.channelTitle}</h4>
                        <p className='videorow-headline'>{item.snippet.title}</p>
                        <p className='videorow-description'>{item.snippet.description}</p>
                    </div>
                
                </Link>

            ))}
        </div>
        </>
    )
}

export default SearchPage