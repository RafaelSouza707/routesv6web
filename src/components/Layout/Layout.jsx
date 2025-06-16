import { Outlet } from "react-router-dom";
import Header from 'C:/Users/gamer/Desktop/PGW 1/routesv6web/src/components/Header'; 
import Footer from 'C:/Users/gamer/Desktop/PGW 1/routesv6web/src/components/Footer'

const Layout = () => {
  return (
    <div className="layout">
        <Header/>

        <main>
            <Outlet/>
        </main>
        
        <Footer/>
    </div>
  )
}

export default Layout;