export interface IOrder {
    id: string;
    pizzas: IOrderPizza[];
    ordertime: string;
    address: String;
    isActive: boolean;
}

export interface IOrderPizza {
    id: string;
    cost: number;
    name: string;
}