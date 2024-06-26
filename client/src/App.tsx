import { BrowserRouter as Router, Routes,Route} from "react-router-dom"
import { lazy,Suspense } from "react"
import Loader from "./components/Loader"
import PrivateRoute from "./hooks/providers/PrivateRoute";

const Home = lazy(()=> import('./pages/Home'))

const Chat = lazy(()=> import('./pages/Chat'));
const Groups = lazy(()=> import('./pages/Groups'));
const Login = lazy(()=> import('./pages/Login'))


function App() {


  return (
    <Router>

      <Suspense fallback = {<Loader/>}>

      <Routes>
       
       <Route  path="/" element={ <PrivateRoute>  <Home /> </PrivateRoute>} />
       <Route  path="/login" element={<Login />} />
       <Route path="/chat/:chatid" element={  <PrivateRoute>
        <Chat />
       </PrivateRoute> } />
       <Route path="/groups" element={ <PrivateRoute> <Groups /> </PrivateRoute> } />
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App
