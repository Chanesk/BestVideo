import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../ContextBox/ContextBox";
import axios from "axios";
import './Login.css';
import imgcover from '../asset/imgcover.svg';

const Login= (props) => {
  const  {setLinkFacebook, linkFacebook, setLinkTwitter, linkTwitter, setLinkInsta, linkInsta, user} = useContext(UserContext)
  
 
    return(
        <>
        <main className="bck-login">
            <div className="cover-login">
                <div className="box-cover">
                    <img src={imgcover} alt="view video" className="img-cover"/>
                </div>
                <div className="content-login">
                   <h2><span>bestvideo </span></h2> 
                   <div className='login-input'>
                        <input type="url" placeholder='lien instagram' onChange={(e) =>setLinkInsta(e.target.value)} value={linkInsta}  />
                   </div>
                   <div className='login-input'>
                        <input type="url" placeholder='lien twitter' onChange={(e) =>setLinkTwitter(e.target.value)} value={linkTwitter} />
                   </div>
                   <div className='login-input'>
                        <input type="url" placeholder='lien facebook' onChange={(e) =>setLinkFacebook(e.target.value)} value={linkFacebook} />
                   </div>
                   <div className='btn-login'>
                        <div id={props.id} className='googleButton' >
                            connect with google
                        </div>
                   </div>
                </div>
            </div>
            
        </main> 
        </>
    )
}
export default Login