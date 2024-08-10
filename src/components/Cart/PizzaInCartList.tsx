import PizzaInCart from "./PizzaInCart";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { clearCart } from "../../store/pizzasInCartSlice";

export default function PizzaInCartList() {
  const pizzasInCart = useAppSelector(
    (state) => state.pizzasInCart.pizzasInCart
  );
  const dispatch = useAppDispatch();

  return (
    <div className="mt-5">
      <div className="flex">
        <h2>Пиццы в корзине ({pizzasInCart.length})</h2>
      </div>
      
      <div className="grid grid-cols-1 min-[450px]:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
        {pizzasInCart.map((pizza) => (
          <PizzaInCart key={pizza.id} {...pizza} />
        ))}
      </div>
      {pizzasInCart.length !== 0 && (
          <button
            className="py-2 px-5 btn-primary mt-5"
            onClick={() => dispatch(clearCart())}
          >
            Очистить корзину
          </button>
        )}
    </div>
  );
}
