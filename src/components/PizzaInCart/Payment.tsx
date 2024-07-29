import { summTotalCost } from "../../helpers/summTotalCost";
import { useAppSelector } from "../../hooks/redux";

export default function Payment() {
    const pizzasInCart = useAppSelector(state => state.pizzasInCart.pizzasInCart)
    const totalCost = summTotalCost(pizzasInCart);

    if(pizzasInCart.length === 0) {
        return null
    }

  return (
    <div className="mt-5">
        <h2>Оплата</h2>
        <h3 className="mt-5">Итого: {totalCost} ₽</h3>
        <button className="mt-5 py-2 px-5 btn-primary">Перейти к оплате</button>
    </div>
  )
}
