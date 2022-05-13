import { useState } from 'react'
import axios from 'axios'

export const CreateUser = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [userCreated, setUserCreated] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!(name && age)) return
    
    await axios.post('http://localhost:8080/users/create', {name, age})
    .then(({data}) => {
      alert("Usuário criado com sucesso")
      setUserCreated(data)
    })
    .catch(error => alert("Falha ao criar usuário"))
  }

  return (
    <div>
      <h1>Criar Usuário</h1>
      <form onSubmit={handleSubmit}>
        <label> Nome </label>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>

        <br />

        <label> Idade </label>
        <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}/>

        <br />
        <br />

        <button type="submit"> Criar </button>
      </form>

      {
        userCreated 
        ? (
            <fieldset style={{marginTop: '1rem', width: 'fit-content'}}>
              <legend>Usuário</legend>
              <p><b>Nome: </b>{userCreated.name}</p>
              <p><b>Idade: </b>{userCreated.age}</p>
              <p><b>Id: </b>{userCreated.id}</p>
            </fieldset>
          ) 
        : null
      }
    </div>
  )
}