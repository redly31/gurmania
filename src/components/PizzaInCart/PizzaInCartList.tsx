import { summTotalCost } from "../../helpers/summTotalCost";
import { IPizzaInCart } from "../../types/PizzaInCart";
import PizzaInCart from "./PizzaInCart";

export const pizzas: IPizzaInCart[] = [
  {
    id: "1",
    cost: 479,
    name: "Сырная",
    count: 1,
  },
  {
    id: "2",
    cost: 529,
    name: "Ветчина и сыр",
    count: 1,
  },
  {
    id: "3",
    cost: 719,
    name: "Мясная",
    count: 1,
  },
];

export default function PizzaInCartList() {
  const totalCost = summTotalCost(pizzas);
  return (
    <div className="mt-5">
      <h2>Пиццы в корзине ({pizzas.length})</h2>
      <div className="flex flex-col mt-5">
        {pizzas.map((pizza) => (
          <PizzaInCart key={pizza.id} {...pizza}/>
        ))}
      </div>
      <h2 className="mt-5">Итого: {totalCost} ₽</h2>
      <button className="mt-5 py-2 px-5 btn-primary">Перейти к оплате</button>
    </div>
  );
}
