import { useRecoilState} from "recoil";
import Dashboard from "../components/Dashboard";
import GroupInfo from "../components/GroupInfo";
import Profile from "../components/Profile";
import Messages from "../components/Messages";
import Navbar from "../components/Navbar";
import { Open } from "../recoil/atom/show";
import { CurrentComponent } from "../types/typeUtils";
import Notification from "./Notification";
import { useEffect } from "react";
import SearchPeople from "./SearchPeople";

const Home = () => {
  const [currentComponent,setCurrentComponent] = useRecoilState<CurrentComponent| null>(Open);

  useEffect(()=>{
    setCurrentComponent(CurrentComponent.Home);
  },[])

  return (
    <div className="text-white flex flex-row m-auto w-[80vw] h-[80vh] rounded-xl mt-16   ">
      <div className="bg-gray-800/85 w-1/12  border-r-[1px] border-r-gray-700   rounded ">
        <Navbar />
      </div>

      <div className="bg-gray-900/90 w-3/12 rounded">
        <div>
          <Dashboard />
        </div>
      </div>
      <div className="bg-green-600 w-7/12 rounded">
        <Messages />
      </div>

      {currentComponent !== "Home" && (
        <div className="bg-purple-800 w-3/12 rounded">
          {currentComponent === "Group" && <GroupInfo />}
          {currentComponent === "Profile" && <Profile />}

          {currentComponent === "Notification" && <Notification />}
          {currentComponent === "Search" && <SearchPeople />}
        </div>
      )}
    </div>
  );
};

export default Home;
