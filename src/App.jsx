import { Routes, Route, Navigate } from 'react-router-dom';
import React,{useEffect,useState} from 'react';
import {gapi, loadAuth2} from 'gapi-script';
import {UserContext} from './ContextBox/ContextBox';
import Login from './component/Login/Login';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import ViewVideo from './component/ViewVideo/ViewVideo';
import PlayerVideo from './component/PlayerVideo/PlayerVideo';
import SideBar from './component/SideBar/SideBar';
import SearchPage from './component/SearchPage/SearchPage';
import ModifyProfil from './component/modifyProfil/ModifyProfil';
import InfoUser from './component/InfoUser/InfoUser';
import AppPlayer from './component/AppPlayer/AppPlayer';


import './App.css'


export default function App() {

  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [data, setData] = useState(null);
  const [sidebar,setSideBar] = useState(false);
  const [linkInsta, setLinkInsta] = useState('');
  const [linkFacebook, setLinkFacebook] = useState('');
  const [linkTwitter, setLinkTwitter] = useState('');

  const showSidebar = () => setSideBar(!sidebar);
  const client_id="541439065925-f2hihosft648nfsi0hoit6ne20dub8ui.apps.googleusercontent.com"
  
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
  const email = currentUser.wt.cu;
  setUser({
    name: name,
    profileImg: profileImg,
    email: email
  });
  let datas = window.localStorage.getItem('datas')
  localStorage.setItem('datas',(token));
  setData(datas)
};


const attachSignin = (element, auth2) =>{
  auth2.attachClickHandler(element, {}, (googleUser) => {
    updateUser(googleUser);
    
  }, (error) =>{
    console.log(JSON.stringify(error))
  });
}
  return ( 
    <>
    <div className='container'>
    
<UserContext.Provider value={{data, user, setUser, showSidebar, sidebar, setLinkFacebook, linkFacebook, setLinkInsta, linkInsta, setLinkTwitter, linkTwitter, userId, setUserId}} >
  
                
  <Routes element={<appPlayer/>}>
      <Route path='/' element ={ !user ? <Login id='customBtn'/>: <Navigate to='/user'/> } />
      <Route path='/login/user' element={<InfoUser />}/>
    
                  
      <Route >
          <Route path='/home' element={<><Header /><div className='container-palyer'><SideBar /><Home /></div></>}/>
          <Route path="/viewvideo/:channelId" element={<><Header /><div className='container-palyer'><SideBar /><ViewVideo/></div></>}/>
          <Route path="/playervideo/:videoId" element={<><Header /><div className='container-palyer'><SideBar /><PlayerVideo /></div></>} />
          <Route path="/search/:inputSearch" element={<><Header /><div className='container-palyer'><SideBar /><SearchPage /></div></>} />
          <Route path="/modifyprofil" element={<><Header /><div className='container-palyer'><SideBar /><ModifyProfil /></div></>} />
      </Route>
  </Routes>

 </UserContext.Provider>
    </div>
    </>
  )
}