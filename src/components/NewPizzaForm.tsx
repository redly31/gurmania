import { useId, useState } from "react";
import { convertBase64 } from "../helpers/convertBase64";
import { useForm } from "react-hook-form"
import { useAddPizzaMutation } from "../store/pizzasApi";
import { nanoid } from "nanoid";

export default function NewPizzaForm() {
  const [image, setImage] = useState<string | ArrayBuffer | null>('')
  const [addPizza, status] = useAddPizzaMutation()
  const uniqueId = useId()
  const uploadImage = async (e: any) => {
    const file = e.target.files[0]
    const base64: any = await convertBase64(file)
    setImage(base64)
  }

  const {
    register,
    handleSubmit,
  } = useForm()

  const createNewPizza = async (data: any) => {
    if(image === '') { null }
    else {
      await addPizza({...data, image, id: nanoid()})
    }
  }

  console.log(status.isSuccess)

  return (
    <div className="">
      <h2 className="mt-5">Создать новую пиццу</h2>
      <form onSubmit={handleSubmit(createNewPizza)} className="flex flex-col w-1/2 gap-2 mt-5 items-start">
        <input type="text" {...register("name", { required: true })} placeholder="Название"/>
        <input type="text" {...register("ingredients", { required: true })} placeholder="Ингредиенты"/>
        <input type="text" {...register("weight", { required: true })} placeholder="Вес (грамм)"/>
        <input type="text" {...register("calories", { required: true })} placeholder="Энергетическая ценность (ккал)"/>
        <input type="text" {...register("cost", { required: true })} placeholder="Цена (₽)"/>
        <input type="file" onChange={e => uploadImage(e)}/>
        <h3>Все поля обязательны</h3>
        <button className="btn-primary px-10 py-2">Создать</button>
      </form>
    </div>
    
  )
}
