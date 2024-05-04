import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import User from "./pages/User";
import Admin from "./pages/Admin";
import ShippingPage from "./pages/ShippingPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./privateRoute/PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHeader>
            <User />
          </Layout>
        }
      />

      <Route element={<PrivateRoute />}>
        <Route path="/admin" element={<Admin />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/track/:trackingId" element={<ShippingPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
export default AppRoutes;
