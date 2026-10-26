import { useState, useEffect } from 'react'
import TodoEdit from './TodoEdit'

const TodoItem = (props) => {
  const {todo, onDelete, onEdit} = props

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

  let countdownColor = 'text-gray-500'

  if (minutesLeft !== null) {
    if (minutesLeft > 30) {
      countdownColor = 'text-green-700'
    } else if (minutesLeft > 10) {
      countdownColor = 'text-orange-600'
    } else {
      countdownColor = 'text-red-600'
    }
}

  if (showEdit) {
    return <TodoEdit todo={todo} onSubmit={handleSubmit} />
  }

  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-3">
      <div>
        <span>{todo.title}</span>

        <p className="mt-1 text-sm text-gray-500">
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
      <p className="mt-1 text-sm text-gray-500">
        Commute from home: {todo.commuteMinutes != null
          ? `${todo.commuteMinutes} min`
          : 'Not set'}
      </p>

     <p className="mt-1 text-sm text-blue-700">
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

      {minutesLeft !== null && ( <p className={`mt-1 text-sm font-semibold ${countdownColor}`}>
    {minutesLeft > 0
      ? `Leave in ${minutesLeft} min`
      : 'Time to leave or departure time has passed'}
  </p>
)}
</div>
      <div className="text-sm">
        <button onClick={handleEditClick} className="text-blue-700">
          edit
        </button>
        <button onClick={handleDelete} className="text-red-600">
          delete
        </button>
      </div>
    </div>
  )
}

export default TodoItem
