import {useState} from 'react'
import TodoEdit from './TodoEdit'

const TodoItem = (props) => {
  const {todo, onDelete, onEdit} = props

  const [showEdit, setShowEdit] = useState(false)

  const handleDelete = () => {
    onDelete(todo.id)
  }

  // this does not edit anything, it just shows the form
  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }

  // this handle submit is for the edit form
  const handleSubmit = (id, newTitle, newStartTime) => {
    onEdit(id, newTitle, newStartTime)
    setShowEdit(false)
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
