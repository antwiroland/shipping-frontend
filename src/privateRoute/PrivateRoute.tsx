import { useAuthProvider } from "@/provider/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { auth } = useAuthProvider();

  if (auth === null) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
