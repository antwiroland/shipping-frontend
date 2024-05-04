import { useUserLogin } from "@/api/Shipment";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import LoginForm, { UserForm } from "@/components/auth/LoginForm";
import { useAuthProvider } from "@/provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginUser, isLoading: isLoadingUser } = useUserLogin();
  const { setAuth } = useAuthProvider();

  const handleLogin = async (userData: UserForm) => {
    try {
      const response = await loginUser(userData);
      if (response && response.token) {
        setAuth(response.token);
        localStorage.setItem("authToken", response.token);
        navigate("/admin");
      } else {
        console.error("No token received in login response:", response);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <Separator />
        </CardHeader>
        <CardContent>
          <LoginForm
            title="Login"
            onSave={handleLogin}
            isLoading={isLoadingUser}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
