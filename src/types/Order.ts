export interface IOrder {
    id: string;
    pizzas: IOrderPizza[];
    ordertime: string;
    address: string;
    isActive: boolean;
    paid: boolean;
}

export interface IOrderPizza {
    id: string;
    cost: number;
    name: string;
}