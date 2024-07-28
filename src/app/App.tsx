import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";
import Admin from "../pages/Admin";
import Navigation from "../components/Navigation";

export default function App() {
  return (
    <main>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </main>
    
  )
}

