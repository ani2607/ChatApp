import { useSetRecoilState } from "recoil";
import { supabase } from "../hooks/supabase/auth";
import { User } from "../types/typeUtils";
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
    const setCurrentComponent = useSetRecoilState<string>(Open)
    async function signoutUser(){
      // logout functionaliy
        await supabase.auth.signOut();
        setUserInfo(null)
        
        navigate('/login')
      }

    const handleProfile = ()=>{
      setCurrentComponent('profile')
    }
  return (
    <nav className="text-center">
      <h1 className="text-xl mt-2">CC</h1>
      <br />

      <div className="flex flex-col items-center gap-y-4 ">
     <div className="mt-1 mb-2 cursor-pointer">
     <IoSearchOutline size={25} />
      </div> 
      <div className="cursor-pointer"><HiOutlineHome size={25} /></div>
      <div className="cursor-pointer"><IoNotificationsOutline size={25} /></div>
      <div className="cursor-pointer" onClick={handleProfile}><IoIosContact size={25} /></div>
      <div>

      <button onClick={()=> signoutUser()} ><IoIosLogOut size={25} /></button>
      </div>
      </div>
      
      
    </nav>
  )
}

export default Navbar
