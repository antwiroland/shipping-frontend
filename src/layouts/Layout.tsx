import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import React from "react";

type Props = {
  showHeader?: boolean;
  children: React.ReactNode;
};

const Layout = ({ showHeader = false, children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      {showHeader && <Header />}
      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
