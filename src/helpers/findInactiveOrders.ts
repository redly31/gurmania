import { IOrder } from "../types/Order";

export const findInactiveOrders = (orders: IOrder[]) => {
    return orders.map(order => !order.isActive ? order : null).filter(order => order !== null);
}