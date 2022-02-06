import React from 'react';
import "./sidebar.css"
import SignalWifi0BarIcon from '@mui/icons-material/SignalWifi0Bar';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PeopleIcon from '@mui/icons-material/People';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
/* import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
 */
export default function sidebar() {
  return (<div className='sidebar'>
        <div className='sidebarWrapper'>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <SignalWifi0BarIcon className="sidbarIcon" />
                    <span className="sidebarListItemText">Feed</span>   
                </li>
                <li className="sidebarListItem">
                    <OndemandVideoIcon className="sidbarIcon" />
                    <span className="sidebarListItemText">Video</span>   
                </li>
                <li className="sidebarListItem">
                    <PeopleIcon className="sidbarIcon"/>
                    <span className="sidebarListItemText">Groups</span>   
                </li>
                <li className="sidebarListItem">
                <BookmarksIcon className="sidbarIcon" />
                    <span className="sidebarListItemText">Bookmarks</span>   
                </li>
                <li className="sidebarListItem">
                <HelpOutlineIcon className="sidbarIcon" />
                    <span className="sidebarListItemText">Questions</span>   
                </li>
                <li className="sidebarListItem">
                <WorkOutlineIcon className="sidbarIcon" />
                    <span className="sidebarListItemText">Jobs</span>   
                </li>
              


            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img className='sidbarFriendImg' src="ankit.jpg" alt="" style={{width:'50px'}}/>
                    <span className="sidebarFriendName">aldfajdfk</span>
                </li>

            </ul>
        </div>
        </div>
        );
}
