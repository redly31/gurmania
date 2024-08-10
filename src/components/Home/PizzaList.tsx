import { IPizza } from "../../types/Pizza";
import Pizza from "./Pizza";
import { useGetPizzasQuery } from "../../store/pizzasApi";

export default function PizzaList() {
  const {data: pizzas = [], isLoading, isError} = useGetPizzasQuery('')

  if(isLoading) {
    return <h2 className="mt-5">Загрузка...</h2>
  }

  if (isError) {
    return <h2 className="mt-5">Ошибка. Не удалось получить данные</h2>
  }

  console.log(pizzas)
  
  return (
    <div className="mt-5">
      <h2>Пиццы ({pizzas.length})</h2>
      <div className="grid grid-cols-1 min-[450px]:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
        {pizzas.map((pizza: IPizza) => (
          <Pizza {...pizza} key={pizza.id} />
        ))}
      </div>
    </div>
  );
}
