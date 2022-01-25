import React from 'react';
import './home.css'
import Sidebar from '../../components/sidebar/sidebar';
import Feed from '../../components/feed/feed';
import Rightbar from '../../components/rightbar/rightbar';
import Topbar from '../../components/topbar/Topbar';
export default function Home() {
  return (
  <>
  <Topbar />
  <div className="homeContainer">
    <Sidebar/>
    <Feed/>
    <Rightbar/>
  </div>
  </>
  );

}
