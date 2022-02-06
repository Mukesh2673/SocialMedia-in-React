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
        <Sidebar/>
        <div className="profileRight">
    
        <div className="profileRightTop">
            <div className="profileCover">
            <img className="profileCoverImg" src="cover.jpg" alt=""/>
            <img className="profileUserImg" src="ajay.jpg" alt=""/>
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Ajay</h4>
                
            </div>
        </div><br/>
        <div className="profileRightBottom mt-2">
            
            </div>
        </div>


        </div>
        
        </>
    );
}


{/* <div className="homeContainer">
<Sidebar/>
<Feed/>
<Rightbar/>
</div>
 */}