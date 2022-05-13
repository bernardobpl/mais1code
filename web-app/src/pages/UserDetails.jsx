import { useLocation } from "react-router-dom"
import { ShowDonations } from "../components/ShowDonations"

export function UserDetails(){
  const { state } = useLocation()
  const user = state.user

  return (
    <div>
      <h1>
        Detalhes do usuário 
        <span style={{color: "blue"}}> {user.name}</span>
      </h1>

      {user.donations.length > 0 && <h4>Doações</h4>}
      <ShowDonations donations={user.donations}/>
    </div>
  )
}