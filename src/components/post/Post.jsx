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
        <div className="postCenter"></div>
        <div className="postBottom"></div>
        </div>
      </div>
  );
}
1:03:32