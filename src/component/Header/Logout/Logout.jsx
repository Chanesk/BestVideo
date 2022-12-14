import React, {useEffect} from 'react';
import { gapi, loadAuth2 } from 'gapi-script';
import { useContext } from 'react';
import { UserContext } from '../../../ContextBox/ContextBox';
import './Logout.css'


 const Logout = () => {
    const {setUser}= useContext(UserContext);
    const client_id="541439065925-f2hihosft648nfsi0hoit6ne20dub8ui.apps.googleusercontent.com";
  useEffect(() =>{
    const setAuth2 = async () => {
      const auth2 = await loadAuth2(gapi,client_id,'https://www.googleapis.com/auth/youtube.force-ssl')
      
    }
    setAuth2();
  }, []);

  const signOut = () => {
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(() => {
        window.localStorage.removeItem('token')
        setUser(null);
        
      });
    }
    return(
        <div id='btn-logout' onClick={signOut} className='google-btn'>Disconnect</div>
    )
}

export default Logout