import "./profile.css"
import Topbar from "../topbar/Topbar"
import Sidebar from "../sidebar/sidebar"
import Feed from "../feed/feed";
import Rightbar from "../rightbar/rightbar"
export default function Profile(){
    return(
        <>
        <Topbar/>
        <div className="homeContainer">
        <Sidebar />
        <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img className="profileCoverImg" src="a1.jpg" alt=""/>
            <img className="profileUserImg" src="b1.jpg" alt=""/>
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">aldfjdkla</h4>
                <span className="profileInfoDesc">aldfjdklafasdafdadsfasffdas</span>
            </div>
        </div>
        <div className="profileRightBottom">
            <Feed/>
            <Rightbar/>
            </div>
        </div>


        </div>
        
        </>
    );
}
1:59