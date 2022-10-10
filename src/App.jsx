import {BrowserRouter, Routes, Route} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import React,{useEffect,useRef, useState} from 'react';
import Login from './component/connecting/Login';
import Header from './component/Header/Header';


import './App.css'
   
export default function App() {

   const [user, setUser] =useState({});


  function handleCallbackReponse(reponse) {
    console.log("encoded jwt id token"+ reponse.credential);
    let userObject= jwt_decode(reponse.credential);
    console.log(userObject);
    setUser(user);
  }

   let googleSignInbutton= useRef(null);
   let googleSignOutButton = useRef(null);

    useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: "541439065925-f2hihosft648nfsi0hoit6ne20dub8ui.apps.googleusercontent.com",
      callback: handleCallbackReponse,
    });

    window.google.accounts.id.renderButton(
      googleSignInbutton.current,
      {theme:"outline", size: "medium"}
    );

    window.google.accounts.id.renderButton(
      googleSignOutButton.current,
      {theme:"outline", size:"small"}
    )
  

  }, []);
  

  return ( 
    <>
    
        <BrowserRouter>   
{
            !user ?
          <Routes>
            <Route path='/' element={<Login ref={googleSignInbutton}/>} />
          </Routes>
           :
            <>
            <Header ref={googleSignOutButton}/>

            </>
           }
        </BrowserRouter> 
    </>
  )
}
