import React,{useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import './SearchPage.css';


const SearchPage = () =>{

    let {inputSearch} = useParams();
    const [videoRows, setVideoRows]= useState([]);

        useEffect(() =>{
            console.log(inputSearch);
        const setSearchVideo = async() =>{
            try{
                const reponse= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${inputSearch}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
                const searchVideo = await reponse.json();
                console.log(searchVideo);
                setVideoRows(searchVideo.items);
            }
            catch(error){
                console.log("error", error);
            }
        }
        setSearchVideo();
    }, [inputSearch]) ;   
    return(
        <>
        <div className='videorow'>
            {videoRows?.map((item)=>(
                <div>
                    <img className='videorow-logo' src={item.snippet.thumbnails.medium.url} alt="" />
                     <div className='videorow-text'>
                        <h4>{item.snippet.channelTitle}</h4>
                        <p className='videorow-headline'>{item.snippet.title}</p>
                        <p className='videorow-description'>{item.snippet.description}</p>
                    </div>
                </div>

            ))}
        </div>
        </>
    )
}

export default SearchPage