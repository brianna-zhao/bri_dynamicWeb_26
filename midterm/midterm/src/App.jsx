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
  const [filter, setFilter] = useState('all')
  const [now, setNow] = useState(Date.now())  

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now())
    }, 60000)

    return () => clearInterval(timer)
  }, [])

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
      }}
    loadTodos()
  }, [])

  /*
  const toggleTodoById = async (id, done) => {
      // same shape as every other one: ask the server, then map the answer in
      const updated = await toggleTodoRequest(id, done)
  
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return updated
        }
        return todo
      })
      setTodos(updatedTodos)
    }

    
*/

const filteredTodos = todos.filter((todo) => {
  let isOverdue = false
  if (todo.startTime && todo.commuteMinutes != null) {
    const departureTime =
      new Date(todo.startTime).getTime() -
      todo.commuteMinutes * 60 * 1000
    isOverdue = departureTime <= now
  }
  if (filter === 'active') {
    return !todo.done && !isOverdue
  }
  if (filter === 'past') {
    return !todo.done && isOverdue
  }
  if (filter === 'done') {
    return !!todo.done
  }
  return true
})
const sortedTodos = [...filteredTodos].sort((a, b) => {
  if (a.done && !b.done) {
    return 1
  }
  if (!a.done && b.done) {
    return -1
  }
  return 0
})





  const toggleTodoById = async (id, done) => {
  try {
    const todo = todos.find((todo) => todo.id === id)
    const updated = await updatedTodoRequest({
      ...todo,
      done: done,
    })
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return updated
      }
      return todo
    })
    setTodos(updatedTodos)
  } catch (err) {
    console.error(err)
    setError('Could not save completion. Is npm run server running?')
  }
}


  const createTodo = async (title, startTime, commuteMinutes) => {
    // the server makes the id now, so we no longer invent one
    const newTodo = await createTodoRequest(title, startTime, commuteMinutes)
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

  const editTodoById = async (id, newTitle, newStartTime, newCommuteMinutes) => {
    const todo = todos.find((todo)=> todo.id === id)
    const updated = await updatedTodoRequest({...todo, title: newTitle, startTime: newStartTime, commuteMinutes: newCommuteMinutes,})

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
  <div className="mx-auto max-w-6xl px-4 py-8">
    <h1 className=" app-title mb-8 text-4xl sm:text-5xl"> Time 2 Leave</h1>

    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
      <div>
      <div className="create-panel">
        <TodoCreate onCreate={createTodo} /></div>
        <div className='mt-3 flex flex-wrap gap-3'>

  <button
            type="button"
            onClick={() => {
              setFilter('all')
              setNow(Date.now())}}
            aria-pressed={filter === 'all'}
           className="filter-button rounded-full px-4 py-2 text-sm font-medium">
      All
    </button>

        <button
          type="button"
          onClick={() => {
            setFilter('active')
            setNow(Date.now())
          }}
          aria-pressed={filter === 'active'}
          className="filter-button rounded-full px-4 py-2 text-sm font-medium">
          Active
    </button>

    <button
      type="button"
      onClick={() => {
        setFilter('past')
        setNow(Date.now())
      }}
      aria-pressed={filter === 'past'}
     className="filter-button rounded-full px-4 py-2 text-sm font-medium">
      Past
    </button>

    <button
      type="button"
      onClick={() => {
        setFilter('done')
        setNow(Date.now())
      }}
      aria-pressed={filter === 'done'}
      className="filter-button rounded-full px-4 py-2 text-sm font-medium">
      Done
    </button>  </div></div>

      <div>
        {isLoading && (
          <p className="text-gray-500">Loading your events...</p>
        )}

        {error && (
          <p className="mb-4 rounded bg-red-50 p-3 text-red-700">
            {error}
          </p>
        )}

        {!isLoading && !error && (
          sortedTodos.length === 0 ? (
            <p className="text-gray-500">
              {todos.length === 0
                ? 'Nothing yet. Add your first event on the form.'
                : 'No events match this filter.'}
            </p>
          ) : (
            <TodoList
              todos={sortedTodos}
              onDelete={deleteTodoById}
              onEdit={editTodoById}
              onToggle={toggleTodoById}
            />
          )
        )}
      </div>
    </div>
  </div>
)
}

export default App