import { useRecoilValue } from "recoil";
import Dashboard from "../components/Dashboard";
import GroupInfo from "../components/GroupInfo";
import Profile from "../components/Profile";
import Messages from "../components/Messages";
import Navbar from "../components/Navbar";
import { Open } from "../recoil/atom/show";



const Home = () => {
  const currentComponent = useRecoilValue<string>(Open)

  return (
    
    <div className="text-white flex flex-row m-auto w-[80vw] h-[80vh] rounded-xl mt-16   ">
      <div className="bg-gray-800/65 w-1/12   rounded ">
        <Navbar/>
      </div>

      <div className="bg-cyan-600 w-3/12 rounded">
        <Dashboard/>
      </div>
      <div className="bg-green-600 w-7/12 rounded">
        <Messages/>
      </div>

      <div className="bg-purple-800 w-3/12 rounded">
      {
        currentComponent == 'profile' ? <Profile/> : <GroupInfo/>
      }
        
      </div>
      
    </div>
    
  )
}

export default Home
