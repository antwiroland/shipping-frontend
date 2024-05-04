import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import AuthProvider from "./provider/AuthProvider";
import "./global.css";
import "./assets/css/animate.css";
import "./assets/css/nice-select.css";
// import "assets/css/video.min.css"
import "./assets/css/jquery.mCustomScrollbar.min.css";
import "./assets/css/slick.css";
import "./assets/css/slick-theme.css";
import "./assets/css/style.css";
// import "./assets/css/bootstrap.min.css"
import "./assets/css/custom-animate.css";
import "./assets/css/jquery-ui.css";
import "./assets/css/fontawesome-all.css";
import "./assets/css/flaticon-02.css";
import "./assets/css/animated-slider.css";
import "./assets/css/jquery.fancybox.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
        <Toaster visibleToasts={1} position="top-right" richColors />
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
