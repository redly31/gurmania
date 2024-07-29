import Payment from "../components/PizzaInCart/Payment"
import PizzaInCartList from "../components/PizzaInCart/PizzaInCartList"

export default function Cart() {

  return (
    <div>
      <h1>Корзина</h1>
      <PizzaInCartList/>
      <Payment/>
    </div>
  )
}
