import { IOrderPizza } from "../../types/Order";

export default function OrderPizza(pizza: IOrderPizza) {
  return (
    <div>
        <h3>{pizza.name} &mdash; {pizza.cost} ₽</h3>
    </div>
  )
}
