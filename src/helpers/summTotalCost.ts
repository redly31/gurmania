import { IPizza } from "../types/Pizza"

export const summTotalCost = (arr: IPizza[]) => {
    return arr.reduce((acc, obj) => acc + obj.cost, 0)
}