import { FaTrashCan, FaCheck } from "react-icons/fa6";

import { IOrder } from "../../types/Order";
import OrderPizza from "./OrderPizza";
import { summTotalCost } from "../../helpers/summTotalCost";
import {
  useCompleteOrderMutation,
  useDeleteOrderMutation,
} from "../../store/ordersApi";

export default function Order(order: IOrder) {
  const totalCost = summTotalCost(order.pizzas);
  const [deleteOrder] = useDeleteOrderMutation();
  const [completeOrder] = useCompleteOrderMutation();
  const removeOrder = (id: string) => {
    deleteOrder(id);
  };

  return (
    <div className="p-5 rounded-lg flex flex-col justify-between shadow-lg">
      <div className="mt-2.5">
        <time>Время оформления: {order.ordertime}</time>
      </div>
      <div className="mt-2.5">
        {order.pizzas.map((pizza) => (
          <OrderPizza key={pizza.id} {...pizza} />
        ))}
      </div>
      <p className="mt-2.5">Адрес: {order.address}</p>
      {order.isActive && (
        <p className="mt-2.5">
          {order.paid ? "Оплачено" : "Оплата при доставке"}
        </p>
      )}
      <div className="mt-5 flex justify-between items-center">
        <h3>Итого: {totalCost} ₽</h3>
        <div className="">
          {order.isActive && (
            <button
              className="p-2.5 btn-primary mr-2.5"
              onClick={() => completeOrder({ ...order, isActive: false })}
            >
              <FaCheck color="white" />
            </button>
          )}
          <button
            className="p-2.5 btn-primary"
            onClick={() => removeOrder(order.id)}
          >
            <FaTrashCan color="white" />
          </button>
        </div>
      </div>
    </div>
  );
}
