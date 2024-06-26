import { useNavigate } from "react-router-dom";
import { supabase } from "../hooks/supabase/auth"
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { userInfo} from "../recoil/atom/user";
import { User } from "../types/typeUtils";



const Home = () => {
  const setUserInfo = useSetRecoilState<User | null>(userInfo);
  
  const navigate = useNavigate();
  async function signoutUser(){
    await supabase.auth.signOut();
    setUserInfo(null)
    
    navigate('/login')
  }
  const getUserDetail = async()=>{
    const result = await supabase.auth.getSession()
      console.log(result.data.session?.user?.user_metadata);
      setUserInfo({
        email : result.data.session?.user?.user_metadata.email,
        id : result.data.session?.user?.user_metadata.sub,
        username : result.data.session?.user?.user_metadata.name
      })
      
  }
  useEffect(()=>{
    getUserDetail();
  },[])


  return (
    <div className="text-white flex flex-col">
      <p className="text-5xl ">Hi from home </p>
      <button onClick={()=> signoutUser()} >Logout</button>
    </div>
  )
}

export default Home
