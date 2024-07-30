import { Link } from "react-router-dom";
import { summTotalCost } from "../../helpers/summTotalCost";
import { useAppSelector } from "../../hooks/redux";

export default function Payment() {
    const pizzasInCart = useAppSelector(state => state.pizzasInCart.pizzasInCart)
    const totalCost = summTotalCost(pizzasInCart);

    if(pizzasInCart.length === 0) {
        return null
    }

  return (
    <div className="my-5">
        <h2 className="">Оплата</h2>
        <h3 className="mt-5">Итого: {totalCost} ₽</h3>
        <Link to='/cart/payment'><button className="mt-5 py-2 px-5 btn-primary">Перейти к оплате</button></Link>
    </div>
  )
}
