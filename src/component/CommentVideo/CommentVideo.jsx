import React, {useEffect} from 'react';
import {useContext} from 'react';
import { UserContext } from '../../ContextBox/ContextBox';
import  Avatar  from '@material-ui/core/Avatar';
import './CommentVideo.css'


const CommentVideo = () =>{
    const {user} = useContext(UserContext);
    return(
        <div className='box-comment'>
            <div className='box-comment-user'>
                <div className='comment-avatar'><Avatar alt={user.name} src={user.profileImg} /></div>
                <div className='box-comment-input'>
                    <input type="text" className='comment-input' placeholder='Ajouter un commentaire'/>
                </div>
            </div>
            <div className='comment-btn'>
                <div className='btn-annuler'><button>Annuler</button></div>
                <div className='btn-valider'><button>Valider</button></div>
            </div>
        </div>
    )
}

export default CommentVideo