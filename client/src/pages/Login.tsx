import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "../hooks/supabase/auth";
import { useNavigate } from "react-router-dom";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect } from "react";

const Signup = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
     supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        navigate('/');
      } else if (event === 'SIGNED_OUT') {
        navigate('/login');
      }
      
      console.log(event, session);
    });
  }, [navigate]);
  
  return (
    <div className="container">
      <Auth  
        supabaseClient={supabase}
        appearance={{theme : ThemeSupa}}
        theme="dark"
        providers={["github"]}
      />
    </div>
  );
}

export default Signup;
