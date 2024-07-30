import { IOrderPizza } from "../types/Order"
import { IPizza } from "../types/Pizza"

export const summTotalCost = (arr: IPizza[] | IOrderPizza[]) => {
    return arr.reduce((acc, obj) => acc + obj.cost, 0)
}