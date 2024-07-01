import { Outlet } from "react-router-dom";

import { Navbar } from "../pages";
import { Footer } from "../components";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default MainLayout;
