import NewPizzaForm from "../components/NewPizzaForm";


export default function Admin() {
  return (
    <div>
      <h1>Админ-панель</h1>
      <NewPizzaForm/>
      <h2 className="mt-5">Статистика</h2>
    </div>
  )
}
