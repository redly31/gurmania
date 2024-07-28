import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="py-5 flex items-center justify-between">
      <Link to='/'><h2>Гурмания</h2></Link>
      <Link to='/admin' className="btn-primary py-2 px-5">Админ-панель</Link>
      <Link to='/cart' className="btn-primary py-2 px-5">Корзина (0)</Link>
    </nav>
  )
}

