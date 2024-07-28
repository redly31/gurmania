import { IPizza } from "../../types/Pizza";
import Pizza from "./Pizza";
import { useGetPizzasQuery } from "../../store/pizzasApi";

// export const pizzas: IPizza[] = [
//   {
//     id: "1",
//     cost: 479,
//     name: "Сырная",
//     ingredients: "Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо",
//     weight: 470,
//     calories: 292,
//     image: syrnaya,
//   },
//   {
//     id: "2",
//     cost: 529,
//     name: "Ветчина и сыр",
//     ingredients: "Ветчина , моцарелла, фирменный соус альфредо",
//     weight: 480,
//     calories: 282,
//     image: myasnaya,
//   },
//   {
//     id: "3",
//     cost: 719,
//     name: "Мясная",
//     ingredients:
//       "Цыпленок , ветчина , пикантная пепперони , острые колбаски чоризо , моцарелла, фирменный томатный соус",
//     weight: 590,
//     calories: 257,
//     image: vetchinaisyr,
//   },
// ];

export default function PizzaList() {
  const {data: pizzas, isLoading} = useGetPizzasQuery('')
  if(isLoading) {
    return <h2 className="mt-5">Загрузка...</h2>
  }
  
  return (
    <div className="mt-5">
      <h2>Пиццы ({pizzas.length})</h2>
      <div className="grid grid-cols-3 mt-5 gap-5">
        {pizzas.map((pizza: IPizza) => (
          <Pizza key={pizza.id} {...pizza}/>
        ))}
      </div>
    </div>
  );
}
