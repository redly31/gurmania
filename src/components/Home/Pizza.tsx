import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { IPizza } from "../../types/Pizza";
import { addPizzaToCart } from "../../store/pizzasInCartSlice";

export default function Pizza(pizza: IPizza) {
  
  const dispatch = useAppDispatch();

  const addNewPizzaToCart = (pizza: IPizza) => {
    dispatch(addPizzaToCart(pizza))
  };

  return (
    <div className="p-2.5 flex flex-col justify-between">
      <div className="">
        <img
          src={pizza.image}
          className="pointer-events-none h-48 mx-auto sm:h-56"
          alt=""
        />
        <h3>{pizza.name}</h3>
        <p className="text-gray-600 mt-2.5">{pizza.ingredients}</p>
        <p className="text-gray-600">{pizza.weight} грамм, {pizza.calories} ккал</p>
      </div>
      <div className="flex justify-between items-center mt-5">
        <h3>{pizza.cost} ₽</h3>
        <button
          className="btn-primary py-2 px-5"
          onClick={() => addNewPizzaToCart(pizza)}
        >
          В корзину
        </button>
      </div>
    </div>
  );
}
