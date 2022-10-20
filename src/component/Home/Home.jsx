import React,  { useEffect, useState} from 'react';
import { useContext } from 'react';
import { UserContext } from '../../ContextBox/ContextBox';
import  {Link} from 'react-router-dom';
import './Home.css'

const Home = () =>{
    const [videoPop, setVideoPop]= useState([]);
    const {data}= useContext(UserContext);

        useEffect(() =>{
        const setVideopopu = async() =>{
            try{
                const reponse= await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&key=AIzaSyBgDejVRUB1-sRFR8tMY1nm8VZb8jPz_o0&access_token='+ data)
                const videoPop = await reponse.json();
                setVideoPop(videoPop);
                console.log(videoPop);
            }
            catch(error){
                console.log("error", error);
            }
        }
        setVideopopu();
    }, [])

    return(
        <>
        <div className='video-pop'>
            {
                videoPop.items?.map((videopop,index)=> {
                    const videoId= videopop.id;
                    
                    return(
                        <Link key={index} className="cards" to={`/playervideo/${videoId}`}>
                            <div className='card-video'>
                                <div className='card-img'>
                                    <img src={videopop.snippet.thumbnails.medium.url} alt="" /> 
                                </div>
                                <div className='card-content'>
                                    <p  className='card-title'> {videopop.snippet.channelTitle} </p>
                                    <p className='card-titlepop'> {videopop.snippet.localized.title} </p>
                                </div>
                            </div>
                         </Link>
                    )
                })
            }
            </div>
        </>
    )
}

export default Home