import { BrowserRouter as Router, Routes,Route} from "react-router-dom"
import { lazy,Suspense } from "react"
import Loader from "./components/Loader"

const Home = lazy(()=> import('./pages/Home'))

const Chat = lazy(()=> import('./pages/Chat'));
const Groups = lazy(()=> import('./pages/Groups'));
const Login = lazy(()=> import('./pages/Login'))


function App() {


  return (
    <Router>

      <Suspense fallback = {<Loader/>}>

      <Routes>
       
       <Route  path="/" element={<Home />} />
       <Route  path="/login" element={<Login />} />
       <Route path="/chat/:chatid" element={<Chat />} />
       <Route path="/groups" element={<Groups />} />
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App
