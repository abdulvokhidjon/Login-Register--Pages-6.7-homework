// rrd imports
import { Outlet } from "react-router-dom";
// Ensure these paths are correct according to your project structure
import { Footer, Navbar } from "../components";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
