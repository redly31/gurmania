import { FaTrashCan } from "react-icons/fa6";
import { IPizza } from "../../types/Pizza";
import { useAppDispatch } from "../../hooks/redux";
import { deletePizzaFromCart } from "../../store/pizzasInCartSlice";

export default function PizzaInCart(pizza: IPizza) {
  const dispatch = useAppDispatch()
  return (
    <div className="flex w-[500px] justify-between my-2.5 items-center">
      <div className="flex">
        <h3>{pizza.name}</h3>
        &nbsp; &#8212; &nbsp;
        <h3>{pizza.cost} ₽</h3>
      </div>
      <button className="p-2.5 btn-primary" onClick={() => dispatch(deletePizzaFromCart(pizza.id))}>
        <FaTrashCan color="white" />
      </button>
    </div>
  );
}
