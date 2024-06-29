import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "../hooks/supabase/auth";
import { useNavigate } from "react-router-dom";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userInfo } from "../recoil/atom/user";
import { User } from "../types/typeUtils";

const Login = () => {
  const navigate = useNavigate(); 
  const setUserInfo = useSetRecoilState<User | null>(userInfo);
  const info = useRecoilValue(userInfo);
  console.log(info);

  useEffect(() => {
    const getUserDetail = async () => {
      console.log("hi from login page");
      const result = await supabase.auth.getSession();
      console.log(result.data.session?.user?.user_metadata);
      if (result.data.session) {
        setUserInfo({
          email: result.data.session.user?.user_metadata.email,
          id: result.data.session.user?.id,
          username: result.data.session.user?.user_metadata.name
        });
      }
    };

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(session)
      if (session) {
        getUserDetail();
        navigate('/');
      } else {
        console.log(event);
        navigate('/login');
      }
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, [navigate, setUserInfo]);

  return (
    <div className="mx-auto mt-20 rounded p-6 w-96 bg-gray-900">
      <Auth  
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={['google','github']}
      />
    </div>
  );
};

export default Login;
