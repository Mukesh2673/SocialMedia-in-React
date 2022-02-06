import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MapsUgcSharpIcon from '@mui/icons-material/MapsUgcSharp';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import TextField from '@mui/material/TextField';
import "./post.css"
import { useState } from 'react';
export default function Post() {
        const [comment,setcomment]=useState(false)
  return (<div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="profile.jpg"/>
                    <span className="postUsername">Aman</span>
                    <span className="postDate">&nbsp;5 min ago</span>
                </div>
             <div className="postTopRight">
                 <MoreVertIcon />
            </div>   
        </div>
        <div className="postCenter">
            <span className="postText">Hey its my first Post</span><br/>
            <img  className='postImg' src="forest.jpg" alt="" />
            <ThumbUpIcon  style={{color:"blue"}}/>
            <FavoriteIcon style={{ color: "red" }}/>
            <MapsUgcSharpIcon 
            onClick={()=>{setcomment(!comment)}}
          
            />
            <br/>
            {comment==true ?
        <TextField
        id="outlined-multiline-static"
        label="Comment"
        multiline
        rows={4}
        style={{ width: '100%' }}
        
      />            :''}

 
        </div>
        <br/><br/><br/><br/><br/>
        </div>
      </div>
  )
}
