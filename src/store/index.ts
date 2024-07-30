import { configureStore } from "@reduxjs/toolkit";
import { pizzasApi } from "./pizzasApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import pizzaInCartReducer from './pizzasInCartSlice'
import { ordersApi } from "./ordersApi";

export const store = configureStore({
    reducer: {
        [pizzasApi.reducerPath]: pizzasApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
        pizzasInCart: pizzaInCartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pizzasApi.middleware, ordersApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch