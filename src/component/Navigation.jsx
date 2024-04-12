import React from 'react';
import s from "../styles/navigation.module.css";
import Footer from "./Footer";
import Header from "./Header";
import {NavLink} from "react-router-dom";

const Navigation = function(){
    return (
        <div className={s.nav_container}>
            <Header/>
            <nav>
                <NavLink to="exchange-rate" className={s.nav_btn}>
                    Exchange rate
                </NavLink>
                <NavLink to="product" className={s.nav_btn}>
                    Product
                </NavLink>
                <NavLink to="customers" className={s.nav_btn}>
                    Customers
                </NavLink>
            </nav>
            <Footer/>
        </div>
    );
}

export default Navigation;