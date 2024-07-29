import { FaTrashCan } from "react-icons/fa6";
import { IPizza } from "../../types/Pizza";
import { useAppDispatch } from "../../hooks/redux";
import { deletePizzaFromCart } from "../../store/pizzasInCartSlice";

export default function PizzaInCart(pizza: IPizza) {
  const dispatch = useAppDispatch()
  return (
    <div className="p-2.5 flex flex-col justify-between">
      <div className="">
        <img
          src={pizza.image}
          className="pointer-events-none h-56 mx-auto"
          alt=""
        />
        <h3>{pizza.name}</h3>
        <p className="text-gray-600 mt-2.5">{pizza.ingredients}</p>
      </div>
      <div className="flex justify-between items-center mt-5">
        <h3>{pizza.cost} ₽</h3>
        <button className="p-2.5 btn-primary" onClick={() => dispatch(deletePizzaFromCart(pizza.id))}>
          <FaTrashCan color="white" />
        </button>
      </div>
    </div>
  );
}