
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout() {
    return (
      <>
      <Header/>

        <div id="detail">
          <Outlet />
        </div>
        <Footer/>

      </>
    );
  }

  
