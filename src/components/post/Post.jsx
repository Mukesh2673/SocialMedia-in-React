import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./post.css"
export default function Post() {
  return (<div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="abc.jpg"/>
                    <span className="postUsername">saflkadkf</span>
                    <span className="postDate">5 min ago</span>
                </div>
             <div className="postTopRight">
                 <MoreVertIcon />
            </div>   
        </div>
        <div className="postCenter">
            <span className="postText">Hey its my first Post</span>
            <img  className='postImg' src="snv.jpg" alt=""/>
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" src="like.png" alt=""/>
                <img className="likeIcon" src="heart.png" alt=""/>
                <div className="postLIkeCounter">32 People like it</div>



            </div>
            <div className="postBottomRight">
                <div className="postCommentText">9 comments</div>
            </div>
        </div>
        </div>
      </div>
  )
}
