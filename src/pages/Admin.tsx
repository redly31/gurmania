import AdminPizzaList from "../components/Admin/AdminPizzaList";
import OrdersList from "../components/Admin/OrdersList";
import Statistics from "../components/Admin/Statistics";
import NewPizzaForm from "../components/NewPizzaForm";


export default function Admin() {
  return (
    <div>
      <h1>Админ-панель</h1>
      <NewPizzaForm/>
      <AdminPizzaList/>
      <OrdersList/>
      <Statistics/>
    </div>
  )
}
