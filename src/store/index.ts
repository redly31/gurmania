import { configureStore } from "@reduxjs/toolkit";
import { pizzasApi } from "./pizzasApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [pizzasApi.reducerPath]: pizzasApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pizzasApi.middleware)
})

setupListeners(store.dispatch)










