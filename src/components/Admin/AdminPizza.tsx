import { IPizza } from "../../types/Pizza";
import { FaTrashCan } from "react-icons/fa6";
import { useDeletePizzaMutation } from "../../store/pizzasApi";

export default function AdminPizza(pizza: IPizza) {
  const [deletePizza] = useDeletePizzaMutation()
  const removePizza = async (id: string) => {
    deletePizza(id)
  };

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
        <p className="text-gray-600">{pizza.weight} грамм, {pizza.calories} ккал</p>
      </div>
      <div className="flex justify-between items-center mt-5">
        <h3>{pizza.cost} ₽</h3>
        <button className="p-2.5 btn-primary" onClick={() => removePizza(pizza.id)}>
          <FaTrashCan color="white" />
        </button>
      </div>
    </div>
  );
}
