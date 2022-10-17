import { Routes, Route } from 'react-router-dom';
import React,{useEffect,useState} from 'react';
import {gapi, loadAuth2} from 'gapi-script';
import {UserContext} from './ContextBox/ContextBox';
import Login from './component/connecting/Login';
import Header from './component/Header/Header'
import ViewVideo from './component/ViewVideo/ViewVideo';
import PlayerVideo from './component/PlayerVideo/PlayerVideo'
import SideBar from './component/SideBar/SideBar';

import './App.css'


export default function App() {

  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);

  const client_id="541439065925-f2hihosft648nfsi0hoit6ne20dub8ui.apps.googleusercontent.com";
  useEffect(() =>{
    const setAuth2 = async () => {
      const auth2 = await loadAuth2(gapi,client_id,'https://www.googleapis.com/auth/youtube.force-ssl')
      if(auth2.isSignedIn.get()) {
        updateUser(auth2.currentUser.get())
      }else{
        attachSignin(document.getElementById('customBtn'),auth2);
      }
    }
    setAuth2();
  }, []);
  
const updateUser = (currentUser) =>{

  const name = currentUser.getBasicProfile().getName();
  const profileImg = currentUser.getBasicProfile().getImageUrl();
  const token = currentUser.xc.access_token;
  setUser({
    name: name,
    profileImg: profileImg,
  });
  
  let datas = window.localStorage.getItem('datas')
  localStorage.setItem('datas',(token));
  setData(datas)
};
console.log(data);


const attachSignin = (element, auth2) =>{
  auth2.attachClickHandler(element, {}, (googleUser) => {
    updateUser(googleUser);
  }, (error) =>{
    console.log(JSON.stringify(error))
  });
}
  return ( 
    <>
    <main className='container'>
    
      <UserContext.Provider value={{data, user, setUser}} >
  
            {
              !user ?
              <Login id='customBtn'/>
              :
              <>
                <Header />
              <div className='container-palyer'>
                <SideBar />
          <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/viewvideo/:channelId" element={<ViewVideo/>}/>
              <Route path="/playervideo/:videoId" element={<PlayerVideo />} />
          </Routes>
              </div>
              </>
              
            }

      </UserContext.Provider>
    </main>
    </>
  )
}