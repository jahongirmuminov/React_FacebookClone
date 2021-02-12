import { Avatar } from '@material-ui/core'
import React,{useState} from 'react'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {  useStateValue} from "./StateProvider";
import db from './ferebase';
import firebase from './ferebase'


const MessageSender = () => {
      const [{ user } , dispatch] =useStateValue()

 const [input,setInput]=useState("")
 const [imgUrl,setImgUrl]=useState("")

 const handleSubmit=(e)=>{
       e.preventDefault()
       
       db.collection('posts').add({
             message:input,
             timestamp:firebase.firestore.FieldValue.serverTimestamp(),
              profilePic:user.photoURL,
              username:user.displayName,
              image:imgUrl,
            

        })

        setImgUrl("")
        setInput("")
    }
    return (
        <div  className="messageSender">
              <div className="messageSender-top">
                    <Avatar  src={user.photoURL}/>
                  <form >
                  <input   value={input}
                   onChange={(e)=>setInput(e.target.value)}
                    style={{flex:5,}}  placeholder={`What's in your mind? ${user.displayName}`}  />
                    <input value={imgUrl} 
                    onChange={(e)=>setImgUrl(e.target.value)}
                    placeholder="image URL (Optional)"/>
                    <button  type="submit"  onClick={handleSubmit} > Hided Submit</button>
                  </form>
              </div>
               <div className="messageSender-bottom">
                            <div className="messageSener-option">
                                  <VideocamIcon style={{color:"red"}}/>
                                  <h3>Live Video</h3>
                            </div>
                            <div className="messageSener-option">
                                  <PhotoLibraryIcon style={{color:"green"}}/>
                                  <h3> Photo/Video</h3>
                            </div>
                            <div className="messageSener-option">
                                  <InsertEmoticonIcon style={{color:"orange"}}/>
                                  <h3>Feeling/Activity</h3>
                            </div>
               </div>
        </div>
    )
}

export default MessageSender
