import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

export default function Navigation() {
  const pizzasInCartCount = useAppSelector(state => state.pizzasInCart.pizzasInCart.length)
  return (
    <nav className="py-5 flex items-center justify-between">
      <Link to='/'><h2>Гурмания</h2></Link>
      <Link to='/admin' className="btn-primary py-2 px-5">Админ-панель</Link>
      <Link to='/cart' className="btn-primary py-2 px-5">Корзина ({pizzasInCartCount})</Link>
    </nav>
  )
}

