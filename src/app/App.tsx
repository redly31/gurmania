import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";
import Admin from "../pages/Admin";
import Navigation from "../components/Navigation";
import Payment from "../pages/Payment";
import Thanks from "../pages/Thanks";

export default function App() {
  return (
    <main>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/cart/payment" element={<Payment/>}/>
        <Route path="/thanks" element={<Thanks/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </main>
    
  )
}

