import Order from "./Order";
import { IOrder } from "../../types/Order";
import { findActiveOrders } from "../../helpers/findActiveOrders";
import { findInactiveOrders } from "../../helpers/findInactiveOrders";
import { useGetOrdersQuery } from "../../store/ordersApi";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export default function Orders() {
  const { data: orders = [], isLoading, isError } = useGetOrdersQuery("");
  const [isActiveOrdersOpen, setIsActiveOrdersOpen] = useState<boolean>(false);
  const [isInactiveOrdersOpen, setIsInactiveOrdersOpen] = useState<boolean>(false);

  if (isLoading) {
    return <h2 className="mt-5">Загрузка...</h2>;
  }

  if (isError) {
    return <h2 className="mt-5">Ошибка. Не удалось получить данные</h2>
  }

  const activeOrders = findActiveOrders(orders);
  const inactiveOrders = findInactiveOrders(orders);

  return (
    <div>
      <div className="flex items-center mt-5">
        <h2 className="mr-5">Активные заказы ({activeOrders.length})</h2>
        {isActiveOrdersOpen ? (
          <button
            className="btn-primary p-2"
            onClick={() => setIsActiveOrdersOpen(false)}
          >
            <FaAngleDown size={25} />
          </button>
        ) : (
          <button
            className="btn-primary p-2"
            onClick={() => setIsActiveOrdersOpen(true)}
          >
            <FaAngleUp size={25} />
          </button>
        )}
      </div>
      {isActiveOrdersOpen && (
        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
          {activeOrders.map((order: IOrder) => (
            <Order key={order.id} {...order} />
          ))}
        </div>
      )}

<div className="flex items-center mt-5">
        <h2 className="mr-5">История заказов ({inactiveOrders.length})</h2>
        {isInactiveOrdersOpen ? (
          <button
            className="btn-primary p-2"
            onClick={() => setIsInactiveOrdersOpen(false)}
          >
            <FaAngleDown size={25} />
          </button>
        ) : (
          <button
            className="btn-primary p-2"
            onClick={() => setIsInactiveOrdersOpen(true)}
          >
            <FaAngleUp size={25} />
          </button>
        )}
      </div>
      {isInactiveOrdersOpen && (
        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
          {inactiveOrders.map((order: IOrder) => (
            <Order key={order.id} {...order} />
          ))}
        </div>
      )}
    </div>
  );
}
