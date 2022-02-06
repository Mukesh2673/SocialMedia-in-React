import Home from './Pages/home/Home'
import {Routes,Route} from "react-router-dom";
import Profile from './components/profile/profile'
function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>

    </Routes>
  );
}

export default App;

