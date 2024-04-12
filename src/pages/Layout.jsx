
import Navigation from "../component/Navigation";
import {Outlet} from "react-router-dom";
import s from "../styles/layout.module.css"

const Layout = function(){
    return (
        <div className={s.layout_container}>
            <Navigation/>
            <div className={s.outlet_container}>
                <Outlet/>
            </div>
        </div>
    );
}

export default Layout;