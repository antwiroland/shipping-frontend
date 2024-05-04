import { useUserCreate } from "@/api/Shipment";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Separator } from "../components/ui/separator";
import LoginForm, { UserForm } from "@/components/auth/LoginForm";
import { useAuthProvider } from "@/provider/AuthProvider";
import { Navigate } from "react-router-dom";

const Register = () => {
  const { createUser, isLoading } = useUserCreate();
  const { setAuth } = useAuthProvider();

  const handleLogin = async (userData: UserForm) => {
    const response = await createUser(userData);
    console.log("Response : ", response);
    setAuth(response.token);
    localStorage.setItem("authToken", JSON.stringify(response));
    <Navigate to="/admin" replace />;
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <Separator />
        </CardHeader>
        <CardContent>
          <LoginForm title="Register" onSave={handleLogin} isLoading={isLoading} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
