import { IPizza } from "../../types/Pizza";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useGetPizzasQuery } from "../../store/pizzasApi";
import AdminPizza from "./AdminPizza";
import { useState } from "react";

export default function AdminPizzaList() {
  const { data: pizzas = [], isLoading, isError } = useGetPizzasQuery("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (isLoading) {
    return <h2 className="mt-5">Загрузка...</h2>
  } if(isError) {
    return <h2 className="mt-5">Ошибка. Не удалось получить данные</h2>
  }

  return (
    <div className="mt-5">
      <div className="flex items-center">
        <h2 className="mr-5">Пиццы ({pizzas.length})</h2> 
        {isOpen
          ? <button className="btn-primary p-2" onClick={() => setIsOpen(false)}><FaAngleDown size={25}/></button>
          : <button className="btn-primary p-2" onClick={() => setIsOpen(true)}><FaAngleUp size={25}/></button>
        }
      </div>
      
      {isOpen &&
        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
          {pizzas.map((pizza: IPizza) => (
            <AdminPizza {...pizza} key={pizza.id} />
          ))}
        </div>
      }
    </div>
  );
}
