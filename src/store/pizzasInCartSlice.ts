import { createSlice } from "@reduxjs/toolkit";
import { IPizza } from "../types/Pizza";
import { nanoid } from "nanoid";
import { saveToLocalStorage } from "../helpers/saveToLocalStorage";

const pizzasInCart = localStorage.getItem('pizzasInCart') !== null ? JSON.parse(localStorage.getItem('pizzasInCart')!) : []


const pizzasInCartSlice = createSlice({
    name: 'pizzaInCart',
    initialState: {
        pizzasInCart: pizzasInCart as IPizza[],
    },
    reducers: {
        addPizzaToCart(state, action) {
            state.pizzasInCart.push({...action.payload, id: nanoid()})
            saveToLocalStorage(state)
        },
        deletePizzaFromCart(state, action) {
            state.pizzasInCart = state.pizzasInCart.filter((pizzaInCart) => pizzaInCart.id !== action.payload)
            saveToLocalStorage(state)
        },
        clearCart(state) {
            state.pizzasInCart = []
            saveToLocalStorage(state)
        }
    }
})

export const { addPizzaToCart, deletePizzaFromCart, clearCart } = pizzasInCartSlice.actions
export default pizzasInCartSlice.reducer




