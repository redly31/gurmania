import Payment from "../components/Cart/Payment"
import PizzaInCartList from "../components/Cart/PizzaInCartList"

export default function Cart() {

  return (
    <div>
      <h1>Корзина</h1>
      <PizzaInCartList/>
      <Payment/>
    </div>
  )
}
