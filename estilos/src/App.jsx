import { useState } from 'react'
import './styles.css'

function App() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    let newId = Math.random()

    while(todos.find(todo => todo.id === newId)){
      newId = Math.random()
    }

    const newTodo = {
      id: newId,
      name: name,
      description: description,
      completed: false
    }

    setTodos([...todos, newTodo])
    setName('')
    setDescription('')
  }

  const deleteTodo = (id) => {
    const updateList = todos.filter(todo => todo.id !== id)
    setTodos(updateList)
  }

  const toggleTodo = (id) => {
    const updateList = todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })

    setTodos(updateList)
  }

  return (
    <div className='container'>
      <h1 className='title'>My Todos</h1>

      <div className='input-container'>
        <div className='input-with-label'>
          <label className='input-label'>Name</label>
          <br />
          <input value={name} onChange={(e) => setName(e.target.value)}/>
        </div>

        <br />

        <div className='input-with-label'>
          <label className='input-label'>Description</label>
          <br />
          <input value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div>


        <button 
          className='btn-add'
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>

      <div className='todo-container'>

        {
          todos.map(todo => (
            <div key={todo.id} className='todo'>
              <div>
                <h1 className={todo.completed ? 'todo-completed' : 'todo-title'}>{todo.name}</h1>
                <p className={todo.completed ? 'todo-completed' : 'todo-description'}>{todo.description}</p>
              </div>

              <div className='todo-btn-container'>
                <button 
                  className='todo-btn btn-complete'
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.completed ? 'Undo' : 'Complete'}
                </button>
                <button 
                  className='todo-btn btn-delete'
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default App
