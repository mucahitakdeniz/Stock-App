import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const currentUser = true;
  return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
