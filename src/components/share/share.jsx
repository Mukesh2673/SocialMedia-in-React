import React from 'react';
import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function share() {
  return (
  <div className="share">
      <div className="ShareWrapper">
          <div className="shareTop">
              <img className="shareProfileImg" src="la.jpg" alt=""/>
              <input placeholder='abasfdladfjk' className="shareInput"/>
          </div>
          <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className='shareOption'>
                    <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or video</span>
                </div>
            </div>
            <div className="shareOptions">
                <div className='shareOption'>
                    <LabelIcon htmlColor="blue" className="shareIcon" />
                    <span className="shareOptionText">Tag</span>
                </div>
            </div>
            <div className="shareOptions">
                <div className='shareOption'>
                    <RoomIcon  htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
            </div>
            <div className="shareOptions">
                <div className='shareOption'>
                    <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feeling</span>
                </div>
            </div>

            <button className="shareButton">Share</button>
        </div>
    </div>
  </div>
  );
}
