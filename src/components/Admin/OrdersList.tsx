import Order from "./Order";
import { IOrder } from "../../types/Order";
import { findActiveOrders } from "../../helpers/findActiveOrders";
import { findInactiveOrders } from "../../helpers/findInactiveOrders";
import { useGetOrdersQuery } from "../../store/ordersApi";

export default function Orders() {

  const {data: orders, isLoading} = useGetOrdersQuery('')
  
  if(isLoading) {
    return <h2 className="mt-5">Загрузка...</h2>
  }

  const activeOrders = findActiveOrders(orders)
  const inactiveOrders = findInactiveOrders(orders)

  return (
    <div>
      <h2 className="mt-5">Активные заказы ({activeOrders.length})</h2>
      <div className="grid grid-cols-3 mt-5 gap-5">
        {activeOrders.map((order: IOrder) => 
          <Order key={order.id} {...order} />
        )}
      </div>
      <h2 className="mt-5">История заказов ({inactiveOrders.length})</h2>
      <div className="grid grid-cols-3 mt-5 gap-5">
        {inactiveOrders.map((order: IOrder) => 
          <Order key={order.id} {...order} />
        )}
      </div>
    </div>
  );
}
