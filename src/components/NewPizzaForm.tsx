import { useState } from "react";
import { convertBase64 } from "../helpers/convertBase64";
import { SubmitHandler, useForm } from "react-hook-form"

export default function NewPizzaForm() {
  const [image, setImage] = useState<string | ArrayBuffer | null>('')

  const uploadImage = async (e: any) => {
    const file = e.target.files[0]
    const base64: any = await convertBase64(file)
    setImage(base64)
  }
  const {
    register,
    handleSubmit
  } = useForm()

  const onSubmit = (data: any) => {
    console.log({...data, image})
  }

  return (
    <div className="">
      <h2 className="mt-5">Создать новую пиццу</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/2 gap-2 mt-5 items-start">
        <input type="text" {...register("name")} placeholder="Название"/>
        <input type="text" {...register("ingredients")} placeholder="Ингредиенты"/>
        <input type="text" {...register("weight")} placeholder="Вес"/>
        <input type="text" {...register("calories")} placeholder="Калории"/>
        <input type="text" {...register("cost")} placeholder="Цена"/>
        <input type="file" onChange={e => uploadImage(e)}/>
        <button className="btn-primary px-10 py-2">Создать</button>
      </form>
    </div>
    
  )
}
