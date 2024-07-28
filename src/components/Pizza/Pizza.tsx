import { IPizza } from "../../types/Pizza";

export default function Pizza(pizza: IPizza) {
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
        <button className="btn-primary py-2 px-5">В корзину</button>
      </div>
    </div>
  );
}
