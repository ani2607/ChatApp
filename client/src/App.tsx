import { BrowserRouter as Router, Routes,Route} from "react-router-dom"
import { lazy,Suspense } from "react"
import Loader from "./components/Loader"
import PrivateRoute from "./hooks/providers/PrivateRoute";

const Home = lazy(()=> import('./pages/Home'))
const Login = lazy(()=> import('./pages/Login'))


function App() {


  return (
    <Router>

      <Suspense fallback = {<Loader/>}>

      <Routes>
       
       <Route  path="/" element={ <PrivateRoute>  <Home /> </PrivateRoute>} />
       <Route  path="/login" element={<Login />} />
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App
