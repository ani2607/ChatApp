import { useNavigate } from "react-router-dom";
import { supabase } from "../hooks/supabase/auth"


const Home = () => {
  const navigate = useNavigate();
  async function signoutUser(){
    await supabase.auth.signOut();
    
    navigate('/login')
  }

  return (
    <div className="text-white">
      Home
      <button onClick={()=> signoutUser()} >Logout</button>
    </div>
  )
}

export default Home
