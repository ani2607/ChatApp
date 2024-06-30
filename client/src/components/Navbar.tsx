import { useSetRecoilState } from "recoil";
import { supabase } from "../hooks/supabase/auth";
import { CurrentComponent, User } from "../types/typeUtils";
import { userInfo } from "../recoil/atom/user";
import { useNavigate } from "react-router-dom";
// icons from react-icons
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { Open } from "../recoil/atom/show";

const Navbar = () => {
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState<User | null>(userInfo);
  const setCurrentComponent = useSetRecoilState<CurrentComponent | null>(Open);
  async function signoutUser() {
    // logout functionaliy
    await supabase.auth.signOut();
    setUserInfo(null);
    setCurrentComponent(null);

    navigate("/login");
  }

  const handleProfile = () => {
    setCurrentComponent(CurrentComponent.Profile);
  };
  const handleHome = () => {
    setCurrentComponent(CurrentComponent.Home);
  };
  const handleNotification = () => {
    setCurrentComponent(CurrentComponent.Notification);
  };
  const handleSearchPeople = () => {
    setCurrentComponent(CurrentComponent.Search);
  };
  return (
    <nav className="text-center">
      <h1 className="text-xl mt-4">CC</h1>
      <br />

      <div className="flex flex-col p-1 items-center gap-y-4 ">
        <div className="mt-1 mb-2 cursor-pointer" onClick={handleSearchPeople}>
          <IoSearchOutline size={25} />
        </div>
        <div className="cursor-pointer" onClick={handleHome}>
          <HiOutlineHome size={25} />
        </div>
        <div className="cursor-pointer" onClick={handleNotification}>
          <IoNotificationsOutline size={25} />
        </div>
        <div className="cursor-pointer" onClick={handleProfile}>
          <IoIosContact size={25} />
        </div>
        <div>
          <button onClick={() => signoutUser()}>
            <IoIosLogOut size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
