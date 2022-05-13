import axios from "axios"
import { useState, useEffect } from "react"

export function CreateDonation(){
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState(null)
  const [owner, setOwner] = useState(1)

  const [successData, setSuccessData] = useState(null)

  const [usersOptions, setUsersOptions] = useState([])

  useEffect(()=>{
    function fetchStatus(){
      axios.get('http://localhost:8080/status')
        .then(({data}) => {
          setStatus(data.find(st => st.value === 'Pendente').id)
        })
        .catch(error => console.error(error))
    }

    function fetchUsers(){
      axios.get("http://localhost:8080/users")
        .then(({data}) => setUsersOptions(data))
    }

    fetchStatus()
    fetchUsers()
  },[])

  function resetForm(){
    setName('')
    setDescription('')
  }

  function handleSubmit(e){
    e.preventDefault()

    axios.post("http://localhost:8080/donations/create", {
      name, description, status, owner
    })
      .then(({data}) => {
        alert('Doação criada com sucesso')
        setSuccessData({
          user: data.user.name,
          donation: data.donation
        })
        resetForm()
      })
      .catch(error => alert("Erro ao criar doação"))
  }

  return (
    <div>
      <h1> Criar Doação </h1>
      <form onSubmit={handleSubmit}>
        <label><b>Título: </b></label>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        
        <br />
        <br />

        <label><b>Descrição: </b></label>
        <input value={description} onChange={(e) => setDescription(e.target.value)}/>
        
        <br />
        <br />

        <label><b>Usuário: </b></label>
        <select value={owner} onChange={(e) => setOwner(e.target.value)}>
          {
            usersOptions.map((user) => (
              <option key={user.id} value={user.id}> {user.name} </option>
            ))
          }
        </select>

        <br />
        <br />

        <button type="reset" onClick={resetForm}>Resetar</button>
        <button type="submit">Criar</button>
      </form>

      {
        successData && (
          <div>
            <h3>Doação do usuário {successData.user}</h3>
            <p><b>Título: </b>{successData.donation.name}</p>
            <p><b>Descrição:</b></p>
            <textarea defaultValue={successData.donation.description} readOnly/>
          </div>
        )
      }
    </div>
  )
}
