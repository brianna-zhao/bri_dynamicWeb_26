import {useState, useEffect} from 'react'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import {fetchTodos, createTodo as createTodoRequest,
   deleteTodo as deleteTodoRequest,
  updateTodo as updatedTodoRequest,} from '../api'

const App = () => {
  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // [] = run once, when the component first appears. NOT every render --
  // that would fetch, set state, re-render, fetch again, forever.
  useEffect(() => {
    const loadTodos = async () => {
      try{
      const todos = await fetchTodos()
      setTodos(todos)
      } catch(err){
        console.error(err)
        setError('could not reach server, is` npm run server` runnng?')

      }finally{
        setIsLoading(false)
      }
    }
    loadTodos()
  }, [])

  const createTodo = async (title, startTime) => {
    // the server makes the id now, so we no longer invent one
    const newTodo = await createTodoRequest(title, startTime)
    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos)
  }

  const deleteTodoById = async(id) => {
    await deleteTodoRequest(id)

    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(updatedTodos)
  }

  const editTodoById = async (id, newTitle) => {
    const todo = todos.find((todo)=> todo.id === id)
    const updated = await updatedTodoRequest({...todo, title: newTitle})




    // map returns a new array the SAME length. Every todo comes back; the one
    // we are editing comes back as a new object with a new title.
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return updated
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
     <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Todo List</h1>
      <TodoCreate onCreate={createTodo} />
      {isLoading && <p className="text-gray-500">Loading your todos...</p>}

      {error && (
        <p className="rounded bg-red-50 p-3 text-red-700">{error}</p>
      )}

      {!isLoading && !error && todos.length === 0 ? (
        <p className="text-gray-500">Nothing yet. Add something above.</p>
      ) : (
        <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById} />
      )}

      <p className="mt-6 text-sm text-gray-500">
        {todos.length} {todos.length === 1 ? 'thing' : 'things'} to do
      </p>
    </div>
  )
}

export default App