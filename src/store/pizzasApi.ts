import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPizza } from "../types/Pizza";

export const pizzasApi = createApi({
  reducerPath: "pizzasApi",
  tagTypes: ["Pizzas"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (build) => ({
    getPizzas: build.query({
      query: () => `pizzas`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: IPizza) => ({
                type: "Pizzas" as const,
                id,
              })),
              { type: "Pizzas", id: "LIST" },
            ]
          : [{ type: "Pizzas", id: "LIST" }],
    }),
    addPizza: build.mutation({
      query: (body) => ({
        url: "pizzas",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Pizzas", id: "LIST" }],
    }),
  }),
});

export const { useGetPizzasQuery, useAddPizzaMutation } = pizzasApi;








