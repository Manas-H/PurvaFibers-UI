import React from "react";
//import Navigationbar from "./components/Navigationbar";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/pages/about/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Login from "./components/forms/Login";
import Rectangle from "./components/products/Rectangle";
import Round from "./components/products/Round";
import Register from "./components/forms/RegisterationModal";
import Vertical from "./components/products/Vertical";
import Bowl from "./components/products/Bowl";
import Product from "./components/pages/ProductAll";
import Prd from "./components/products/prdinfo";
import UserProfile from "./components/pages/profile/UserProfile";
import FAQData from "./components/pages/profile/faq/FAQData";
import Success from "./components/pages/Sucess";
import Cart from "./components/products/Cart";
import UserOrders from "./components/pages/UserOrders";
// import RegisterationModal from "./components/forms/RegisterationModal";
// import RegistrationMain from "./components/forms/RegistrationMain";
// import From from './components/'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/orders" element={<UserOrders />}></Route>
        <Route path="/Rectangle" exact element={<Rectangle />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/Rectangle" exact element={<Rectangle />} />
        <Route path="/Round" exact element={<Round />} />
        <Route path="/Vertical" exact element={<Vertical />} />
        <Route path="/Bowl" exact element={<Bowl />} />
        <Route path="/success" exact element={<Success />} />
        {/* <Route path="/All" exact element={<Product/>} /> */}
        <Route path="/allProducts" exact element={<Product />} />
        <Route path="/profile" exact element={<UserProfile />} />
        <Route path="/faq" exact element={<FAQData />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/Rectangle/:id" exact element={<Prd />} />
        <Route path="/Vertical/:id" exact element={<Prd />} />
        <Route path="/Round/:id" exact element={<Prd />} />
        <Route path="/home/:id" exact element={<Prd />} />
        <Route path="/:id" exact element={<Prd />} />
      </Routes>
      {/* <RegistrationMain /> */}
    </div>
  );
}

export default App;
