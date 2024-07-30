import { IOrder } from "../types/Order";

export const findActiveOrders = (orders: IOrder[]) => {
    return orders.map(order => order.isActive ? order : null).filter(order => order !== null);
}