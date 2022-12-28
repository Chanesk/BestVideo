import React, {useState} from "react";
import { useContext } from "react";
import { UserContext } from "../../ContextBox/ContextBox";
import { Avatar } from "@material-ui/core";
import './ModifyProfil.css';
import axios from "axios";

const ModifyProfil = () =>{
    const {sidebar,user, setLinkFacebook, linkFacebook, setLinkInsta, linkInsta, setLinkTwitter, linkTwitter, userId } = useContext(UserContext);
    const {modifyName, setModifyName} = ('');

    console.log(userId);
     const editUser =async (event) =>{
    event.preventDefault();
    try{
    const request = await axios(
    {
      url:`http://localhost:5500/${userId}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json", 
      },
      data: {
        name: user.name,
        avatarUrl:user.profileImg,
        facebook: linkFacebook,
        twitter:linkTwitter,
        instagram:linkInsta,
      }
    }).then((response)=> 
          console.log(response.data.message)
    )
    }
    catch(error){
      console.log({error})
    }
  }
  console.log(user)
    return(
        <div style={{width: sidebar? "100%" : "80%"}} className="modify-profil">
            <div className="modify-profil-box">
                <div className="modify-profil-avatar">
                    <Avatar className="profil-modify-avatar" src={user.profileImg} alt={user.name}/>
                    <p>Modifier la photo</p>
                </div>
                <div className="modify-profil-form">
                    <form onSubmit={editUser}>
                        <div>
                            <label htmlFor="">Nom</label>
                            <input type="text" placeholder={user.name} />
                        </div>
                        <div>
                            <label htmlFor="">Instagram</label>
                            <input type="url"  onChange={(e) =>setLinkInsta(e.target.value)} value={linkInsta}/>
                        </div>
                        <div>
                            <label htmlFor="">Twitter</label>
                            <input type="url"  onChange={(e) =>setLinkTwitter(e.target.value)} value={linkTwitter}/>
                        </div>
                        <div>
                            <label htmlFor="">Facebook</label>
                            <input type="url" onChange={(e) =>setLinkFacebook(e.target.value)} value={linkFacebook} />
                        </div>
                    <button className="btn-modify-profile" type="submit">Modifier le profil</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default ModifyProfil