import React from 'react';
import {Routes,Route} from "react-router-dom";
import Layout from "./pages/Layout";
import s from "./App.css";
import ExchangeRate from "./component/ExchangeRateComponents/ExchangeRate";
import Product from "./component/Product";
import Customers from "./component/Customers";
import { AppProvider } from './utils/AppContext';

function App() {
  return (
    <AppProvider>
      <div className={s.App}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="exchange-rate" element={<ExchangeRate/>}/>
            <Route path="product" element={<Product/>}/>
            <Route path="customers" element={<Customers/>}/>
          </Route>
        </Routes>
      </div>
    </AppProvider>
  );
}

export default App;
