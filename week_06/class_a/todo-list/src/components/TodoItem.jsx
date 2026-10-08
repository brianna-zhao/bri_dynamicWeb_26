import React from 'react'
import {useState} from 'react'
import TodoEdit from './TodoEdit'

const TodoItem = (props) => {
    const {todo, onDelete, onEdit} = props

    const [showEdit, setShowEdit] =useState(false)

    const handleDelete = () =>{
        onDelete(todo.id)
    }

    const handleEditClick = ()=>{
        setShowEdit(!showEdit)
    }

    const handleSubmit = (id, newTitle)=>{
        onEdit(id, newTitle)
        setShowEdit(false)
    }

  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-3">
      <span>{todo.title}</span>
      <button onClick={handleEditClick} className="text-sm text-blue-700">edit</button>
      <button onClick={handleDelete} className="text-sm text-red-600">
        delete
      </button>
    </div>
  )
}

export default TodoItem