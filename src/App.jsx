import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React,{useEffect,useState} from 'react';
import {gapi, loadAuth2} from 'gapi-script';
import {UserContext} from './ContextBox/ContextBox';
import Login from './component/connecting/Login';
import Home from './component/Home/Home';


import './App.css'

export default function App() {

  const [user, setUser] = useState(null)
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
  console.log(currentUser);
  setUser(currentUser);
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
      <UserContext.Provider value={{user}} >
  
       
        <BrowserRouter>
          <Routes>
            {
              !user ?
              <Route path="/" element={<Login id='customBtn'/>} />
              :
              <>
                <Route path="/" element={<Home />} />
              </>
            }
          </Routes>
        </BrowserRouter>

      </UserContext.Provider>
    </>
  )
}
