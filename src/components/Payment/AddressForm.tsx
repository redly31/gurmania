import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { useAddOrderMutation } from "../../store/ordersApi";
import { nanoid } from "nanoid";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getTime } from "../../helpers/getTime";
import { clearCart } from "../../store/pizzasInCartSlice";

export default function AddressForm() {
  const [addOrder] = useAddOrderMutation()
  const dispatch = useAppDispatch()
  const pizzas = useAppSelector(
    (state) => state.pizzasInCart.pizzasInCart
  );

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
  } = useForm()
  const ordertime = getTime()
  const createNewPizza = async (data: any) => {
    navigate('/thanks')
    await addOrder({...data, id: nanoid(), isActive: true, paid: true, ordertime, pizzas})
    dispatch(clearCart())
  }

  return (
    <div className="">
      <h2 className="mt-5">Укажите адрес доставки</h2>
      <form onSubmit={handleSubmit(createNewPizza)} className="flex flex-col w-1/2 gap-2 mt-5 items-start">
        <input type="text" {...register("address", { required: true })} placeholder="Город, улица, дом, подъезд, квартира"/>
        <button className="btn-primary px-10 py-2">Оплатить</button>
      </form>
    </div>
    
  )
}
function getCurrentTime() {
  throw new Error("Function not implemented.");
}

