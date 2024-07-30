import { IPizza } from "../../types/Pizza";

import { useGetPizzasQuery } from "../../store/pizzasApi";
import AdminPizza from "./AdminPizza";

export default function AdminPizzaList() {
  const {data: pizzas, isLoading} = useGetPizzasQuery('')

  if(isLoading) {
    return <h2 className="mt-5">Загрузка...</h2>
  }

  return (
    <div className="mt-5">
      <h2>Пиццы ({pizzas.length})</h2>
      <div className="grid grid-cols-3 mt-5 gap-5">
        {pizzas.map((pizza: IPizza) => (
          <AdminPizza {...pizza} key={pizza.id} />
        ))}
      </div>
    </div>
  );
}
