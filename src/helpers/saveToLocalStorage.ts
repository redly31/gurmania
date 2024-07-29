import { IPizza } from "../types/Pizza";

export function saveToLocalStorage(state:  {pizzasInCart: IPizza[]}) {
    localStorage.setItem('pizzasInCart', JSON.stringify(state.pizzasInCart.map(item => item)))
}
