import { useState } from "react";


const TodoCreate = (props) => {
    const {onCreate} = props

    const [title, setTitle] = useState('')

    const handleChange = (event) =>{
        setTitle(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        onCreate(title)
        setTitle('')
    }
  return (
    <form onSubmit = {handleSubmit}>
        <input type="text" value={title} onChange={handleChange} placeholder='what need to be done'
        className='flex-1 border border-gray-300 py-3 rounded'></input>
        <button className='bg-blue-900 text-white px-5-py-2 rounded'>add todo</button>

    </form>
  )
}

export default TodoCreate