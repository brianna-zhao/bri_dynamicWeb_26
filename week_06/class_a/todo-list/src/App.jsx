import { useState } from 'react'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'


const App = () => {
  const [todos, setTodos] = useState([])

  const createTodo = (title)=>{

const updatedTodos = [
     ...todos, {id: crypto.randomUUID(), title: title}
   ]
    setTodos(updatedTodos)
  }

  const deleteTodoById = (id) =>{
    const updatedTodos = todos.filter((todo)=>{
      return todo.id !==id
    })

    setTodos(updatedTodos)

  }

  const editTodoById = (id, newTitle) =>{
    const updatedTodo = todos.map((todo)=>{
      if (todo.id === id){
      return {...todo, title:newTitle}
      }
      return todo
    })

  }


  console.log(todos)
  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Todo List</h1>
      <TodoCreate onCreate={createTodo}/>
      <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById}/>

    </div>
  )
}

export default App