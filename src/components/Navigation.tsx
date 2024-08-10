import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

export default function Navigation() {
  const pizzasInCartCount = useAppSelector(state => state.pizzasInCart.pizzasInCart.length)
  return (
    <nav className="py-5 flex items-center justify-between sm:flex-row flex-col">
      <Link to='/'><h2>Гурмания</h2></Link>
      <div className="flex gap-5 sm:mt-0 mt-5">
        <Link to='/admin' className="btn-primary py-2 px-5">Админ-панель</Link>
        <Link to='/cart' className="btn-primary py-2 px-5">Корзина ({pizzasInCartCount})</Link>
      </div>
      
    </nav>
  )
}

