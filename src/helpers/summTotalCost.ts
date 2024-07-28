import { IPizzaInCart } from "../types/PizzaInCart"

export const summTotalCost = (arr: IPizzaInCart[]) => {
    return arr.reduce((acc, obj) => acc + obj.cost, 0)
}