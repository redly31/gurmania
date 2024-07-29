import { createSlice } from "@reduxjs/toolkit";
import { IPizza } from "../types/Pizza";
import { nanoid } from "nanoid";

const pizzasInCartSlice = createSlice({
    name: 'pizzaInCart',
    initialState: {
        pizzasInCart: [] as IPizza[],
    },
    reducers: {
        addPizzaToCart(state, action) {
            state.pizzasInCart.push({...action.payload, id: nanoid()})
        },
        deletePizzaFromCart(state, action) {
            state.pizzasInCart = state.pizzasInCart.filter((pizzaInCart) => pizzaInCart.id !== action.payload)
        },
        clearCart(state) {
            state.pizzasInCart = []
        }
    }
})

export const { addPizzaToCart, deletePizzaFromCart, clearCart } = pizzasInCartSlice.actions
export default pizzasInCartSlice.reducer




