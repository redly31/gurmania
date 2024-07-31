import { findInactiveOrders } from "../../helpers/findInactiveOrders"
import { sumPizzasCost } from "../../helpers/sumPizzasCost";
import { useGetOrdersQuery } from "../../store/ordersApi";

export default function Statistics() {

  const {data: orders = [], isLoading, isError} = useGetOrdersQuery('')

  if(isLoading) {
    return <h2 className="mt-5">Загрузка...</h2>
  }

  if (isError) {
    return <h2 className="mt-5">Ошибка. Не удалось получить данные</h2>
  }
  
  const inactiveOrders = findInactiveOrders(orders)
  const totalProfit = inactiveOrders.reduce((acc, order) => acc + sumPizzasCost(order), 0);
  
  return (
    <div className="my-5">
      <h2>Статистика</h2>
      <h3 className="mt-2.5">Прибыль: {totalProfit} ₽</h3>
    </div>
  )
}
