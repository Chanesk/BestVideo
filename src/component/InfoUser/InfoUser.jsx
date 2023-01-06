import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useForm} from "react-hook-form";
import { UserContext } from "../../ContextBox/ContextBox";
import './InfoUser.css'

function InfoUser(){
    const  {setLinkMediaSocial,linkMediaSocial, user} = useContext(UserContext);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) =>{
        
        let instagram= data.linkInsta;
        let facebook = data.linkFacebook;
        let twitter = data.linkTwitter;
        
        const getDataUser = async() =>{
            try{
            const request = await axios(
            {
            url:"http://localhost:5500/",
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            data: {
                name: user.name,
                avatarUrl:user.profileImg,
                facebook: facebook,
                twitter:twitter,
                instagram:instagram,
                email:user.email 
            }
            }).then((response)=> {
                console.log(response.data);
                setUserId(response.data.user._id);
                console.log(response.data/user._id)
                }
            )
            }
            catch(error){
            console.log({error})
            }
        }
  getDataUser();
    setLinkMediaSocial([...linkMediaSocial, {facebook, instagram, twitter}]);
    navigate('/home')

    }
    return(
        <main className="info-box">
            <div className="info-cover">
                <h3>Ajouter vos liens de réseaux sociaux</h3>
                <form className="info-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="box-input">
                            <label htmlFor="">Instagram</label>
                            <input type="url"  {...register("linkInsta", {required: true, pattern:/^(https?:\/\/){0,1}(www\.){0,1}instagram\.com/})} />
                            <span>{errors.linkInsta && "veuillez entrez un lien instagram valid"}</span>
                        </div>
                        <div className="box-input">
                            <label htmlFor="">Twitter</label>
                            <input type="url"  {...register("linkTwitter", {required: true, pattern:/^(https?:\/\/){0,1}(www\.){0,1}twitter\.com/})}/>
                            <span>{errors.linkTwitter && "veuillez entrez un lien twitter valide"}</span>
                        </div>
                        <div className="box-input">
                            <label htmlFor="">Facebook</label>
                            <input type="url" {...register("linkFacebook", {required: true, pattern:/^(https?:\/\/){0,1}(www\.){0,1}facebook\.com/})}/>
                            <span>{errors.linkFacebook && "veuillez entrez un lien facebook valid"}</span>
                        </div>
                    <button className="info-btn-user" type="submit">Enregister</button>
                </form>
            </div>
        </main>
    )
}

export default InfoUser;