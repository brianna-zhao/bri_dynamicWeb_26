import { useState, useEffect } from 'react'
import TodoEdit from './TodoEdit'

const TodoItem = (props) => {
  const {todo, onDelete, onEdit, onToggle} = props

  const [showEdit, setShowEdit] = useState(false)
  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now())
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  const handleDelete = () => {
    onDelete(todo.id)
  }

  const handleToggle = () => {
    onToggle(todo.id, !todo.done)
}

  // this does not edit anything, it just shows the form
  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }

  // this handle submit is for the edit form
  const handleSubmit = (id, newTitle, newStartTime, newCommuteMinutes) => {
    onEdit(id, newTitle, newStartTime, newCommuteMinutes)
    setShowEdit(false)
  }

  let departureTime = null
  if (todo.startTime && todo.commuteMinutes != null) {
    const startTime = new Date(todo.startTime)

    departureTime = new Date(
      startTime.getTime() - todo.commuteMinutes * 60 * 1000
    )
  }

  let minutesLeft = null

  if (departureTime) {
    minutesLeft = Math.floor(
      (departureTime.getTime() - now) / (60 * 1000)
    )
  }

 let bgColor = 'bg-gray-400'

if (todo.done) {
  bgColor = 'bg-gray-400'
} else if (minutesLeft !== null) {
  if (minutesLeft > 180) {
    bgColor = 'bg-blue-500'
  } else if (minutesLeft > 30) {
    bgColor = 'bg-green-500'
  } else if (minutesLeft > 10) {
    bgColor = 'bg-red-500'
  } else {
    bgColor = 'bg-red-200'
  }
}


  if (showEdit) {
    return <TodoEdit todo={todo} onSubmit={handleSubmit} />
  }

  return (
    <div className={`mb-4 flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between ${bgColor}`}>
      <div>
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={todo.done || false}
            onChange={handleToggle}
            className="h-4 w-4"
          />

          <span className="font-bold text-black"> {todo.title}
</span>
        </label>

        <p className="mt-1 text-sm text-gray-900">
         Due: {todo.startTime
          ? new Date(todo.startTime).toLocaleString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: '2-digit',
            })
          : 'Not set'}
</p>
      <p className="mt-1 text-sm text-gray-900">
        Commute from home: {todo.commuteMinutes != null
          ? `${todo.commuteMinutes} min`
          : 'Not set'}
      </p>

     <p className={`mt-2 text-sm font-medium ${departureTime || todo.done ? 'text-white' : 'text-gray-600'}`}>
      Leave home by: {departureTime
        ? departureTime.toLocaleString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
          })
        : 'Not set'}
      </p>

      {minutesLeft !== null && ( <p className="mt-1 text-sm font-semibold text-white">
    {minutesLeft > 0
      ? `Leave in ${minutesLeft} min`
      : 'Time to leave or departure time has passed'}
  </p>
)}
</div>
      <div className="text-sm">
        <div className="flex shrink-0 gap-2 text-sm">
        <button onClick={handleEditClick} className="rounded-lg bg-white px-3 py-2 font-medium text-gray-800 hover:bg-gray-100">
          Edit
        </button>

        <button onClick={handleDelete} className="rounded-lg bg-white px-3 py-2 font-medium text-red-600 hover:bg-red-50">
          Delete
        </button>
</div>
      </div>
    </div>
  )
}
export default TodoItem