import Footer from "@/components/custom/footer/Footer";
import Header from "@/components/custom/header/Header";
import { Outlet } from "react-router-dom";
import "../sharedStyles/SharedStyles.css";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-124px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
