import PizzaInCart from "./PizzaInCart";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { clearCart } from "../../store/pizzasInCartSlice";


export default function PizzaInCartList() {

  const pizzasInCart = useAppSelector(state => state.pizzasInCart.pizzasInCart)
  const dispatch = useAppDispatch()

  return (
    <div className="mt-5">
      <h2>Пиццы в корзине ({pizzasInCart.length})</h2>
      <div className="flex flex-col mt-5">
        {pizzasInCart.map((pizza) => (
          <PizzaInCart key={pizza.id} {...pizza}/>
        ))}
      </div>
      <button className="py-2 px-5 btn-primary" onClick={() => dispatch(clearCart())}>Очистить корзину</button>
    </div>
  );
}
