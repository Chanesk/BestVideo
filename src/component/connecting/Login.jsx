import React, {forwardRef} from 'react';
import './Login.css';
import imgcover from '../asset/imgcover.svg';


const Login= forwardRef((props, ref) => {
   
    return(
        <main className="bck-login">
            <div className="cover-login">
                <div className="box-cover">
                    <img src={imgcover} alt="view video" className="img-cover"/>
                </div>
                <div className="content-login">
                   <h2>Profiter des videos et de la musique que vous êtes abonnés </h2> 
                   <p>La chaîne officielle <span>bestvideo </span> vous aide à découvrir vos abonnements et les tendances mondiales. Regardez des vidéos incontournables, de la musique à la culture en passant par les phénomènes Internet.</p>
                   <div className='btn-login'>
                        <div {...props} ref={ref}></div>
                   </div>
                </div>
            </div>
            
        </main> 
    )
})
export default Login