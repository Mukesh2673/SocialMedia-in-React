import React from 'react';
import "./rightbar.css";
export default function rightbar() {
  return <div className='rightbar'>
      <div className="rightbarwrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="gift.jpg" style={{width:'70px',heigth:'80px'}}/>
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>11other Friends</b>have a birthday today

          </span>
        </div>
        <img className="rightbarAd" src="add.png" alt=""/>
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img className="rightbarProfileImg" src="aman.jpg"/>
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">John carter</span>
        </li>
        
      </ul>
      </div>
    
    
    
    
    rightbar</div>;
}
