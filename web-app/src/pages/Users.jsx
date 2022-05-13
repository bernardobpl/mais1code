import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ShowDonations } from "../components/ShowDonations"

export function Users(){
  const navigate = useNavigate();
  const [users, setUsers] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/users")
      .then(({data}) => setUsers(data))
      .catch(error => alert('Erro ao buscar usuários'))

  },[])

  function navigateToUserDetails(user){
    navigate('/users/details', { state: { user } });
  }

  return (
    <div>
      <h1>Usuários</h1>
      {
        users.map((user) => (
          <div 
            key={user.id} 
            style={{
              border: '1px solid black',
              marginBottom: '16px',
              padding: '8px',
              borderRadius: '4px'
            }}
          >

            <h4 style={{marginBlock: 0}}>
              {user.name} - {user.age}
            </h4>

            <span style={{fontSize: '12px'}}>
              <b>Criado em: </b>
              {new Date(user.created_on).toLocaleDateString()}
            </span>

            <button style={{marginLeft: '1rem'}} onClick={()=>navigateToUserDetails(user) }>
              Detalhes
            </button>
          </div>
        ))
      }
    </div>
  )
}