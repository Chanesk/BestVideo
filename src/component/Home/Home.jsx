import React,  { useEffect, useState} from 'react';
import { useContext } from 'react';
import { UserContext } from '../../ContextBox/ContextBox';
import  {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import './Home.css'

const Home = () =>{
    const [videoPop, setVideoPop]= useState([]);
    const {data, sidebar}= useContext(UserContext);

        useEffect(() =>{
        const setVideopopu = async() =>{
            try{
                const reponse= await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&key=${import.meta.env.VITE_YOUTUBE_API_KEY}}&access_token=`+ data)
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
        <div className='video-pop' style={{width: sidebar? "100%" : "80%"}}>
            {
                videoPop.items?.map((videopop,index)=> {
                    const videoId= videopop.id;
                    const views= videopop.statistics.viewCount;
                    const viewsFormat = numeral(views).format("0.000a");
                    const time=videopop.snippet.publishedAt;
                    
                    return(
                        <Link key={index} className="cards-videopop" to={`/playervideo/${videoId}`}>
                            <div className='card-video'>
                                <div className='cardpop-img'>
                                    <img src={videopop.snippet.thumbnails.medium.url} alt="" /> 
                                    <p className='card-titlepop-duration'>{moment.utc((moment.duration(`${videopop.contentDetails.duration}`).asSeconds())*1000).format("mm:ss")}</p>
                                </div>
                                <div className='cardpop-content'>
                                    <p  className='card-titlepop'> {videopop.snippet.channelTitle} </p>
                                    <p className='card-titlepop-content'> {videopop.snippet.localized.title} </p>
                                    <p className='card-titlepop-stat'>{viewsFormat}  views  •  {moment(time,"YYYYMMDD").fromNow()}</p>
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