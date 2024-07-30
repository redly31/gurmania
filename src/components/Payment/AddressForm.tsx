import { useForm } from "react-hook-form"
import { nanoid } from "nanoid";
import { useAddOrderMutation } from "../../store/ordersApi";

export default function AddressForm() {
  const [addOrder] = useAddOrderMutation()
  const {
    register,
    handleSubmit,
  } = useForm()

  const createNewPizza = async (data: any) => {
    await addOrder({...data, id: nanoid()})
  }

  return (
    <div className="">
      <h2 className="mt-5">Укажите адрес доставки</h2>
      <form onSubmit={handleSubmit(createNewPizza)} className="flex flex-col w-1/2 gap-2 mt-5 items-start">
        <input type="text" {...register("name", { required: true })} placeholder="Город, улица, дом, подъезд, квартира"/>
        <button className="btn-primary px-10 py-2">Оплата</button>
      </form>
    </div>
    
  )
}
