import { FaTrashCan } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { IPizzaInCart } from "../../types/PizzaInCart";

export default function PizzaInCart(pizza: IPizzaInCart) {
  return (
    <div className="flex w-[500px] justify-between my-2.5 items-center">
      <div className="flex">
        <h3>{pizza.name}</h3>
        &nbsp; &#8212; &nbsp;
        <h3>{pizza.cost} ₽</h3>
      </div>
      <div className="flex items-center">
        <button className="p-2.5 btn-primary">
          <FaTrashCan color="white" />
        </button>
        <div className="p-2.5 flex items-center gap-5">
          <button className="p-2.5 btn-primary">
            <FaAngleLeft />
          </button>
          <h3>{pizza.count}</h3>
          <button className="p-2.5 btn-primary">
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}
