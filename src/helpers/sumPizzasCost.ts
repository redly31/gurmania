import { IOrder } from "../types/Order";

export const sumPizzasCost = (order: IOrder) => order.pizzas.reduce((acc, pizza) => acc + pizza.cost, 0);