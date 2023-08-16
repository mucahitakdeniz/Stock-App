import  Login  from "../pages/Login"
import {BrowresRouter,Routes,Route} from "react-router-dom"
import Register from "../pages/Register"
import PrivateRouter from "./PrivateRouter"
import  Dashboard  from "../pages/Dashboard"
const AppRouter = () => {
  return (
    <BrowresRouter>
    <Routes>
      <Route path="/" element={<Login/>}  />
      <Route path="register" element={<Register/>}  />
      <Route path="stock" element={<PrivateRouter/>}>
        <Route path="Dashboard" element={<Dashboard/>} />   
      </Route>

    </Routes> 
    </BrowresRouter>
  )
}

export default AppRouter