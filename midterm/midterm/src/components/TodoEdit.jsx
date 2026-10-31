import { useState, useEffect } from 'react'


const TodoEdit = (props) => {
  const {todo, onSubmit} = props

  // receive the todo prop and pull out the title as the starting input value
  //const [title, setTitle] = useState(todo.title)
  const [values, setValues] = useState({
    title: todo.title,
    startTime: todo.startTime || '',
    commuteMinutes: todo.commuteMinutes ?? '',
})

  // this updates the local state for the form input value
  const handleChange = (event) => {
    //setTitle(event.target.value)
    const {name, value} = event.target

    setValues({
      ...values,
      [name]: value,
  })
  }

  // this passes the new title and todo.id all the back up to App which handles the editBy Id
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(todo.id, values.title, values.startTime, Number(values.commuteMinutes))
  }


  return (
    <form onSubmit={handleSubmit} className="create-panel mb-4">
      <input
        type="text"
        name="title"
        value={values.title}
        onChange={handleChange}
        className="w-full rounded border p-3"
        required
      />
      <label className="block">
        Start date and time
      <input
        type="datetime-local"
        name="startTime"
        value={values.startTime}
        onChange={handleChange}
        className="mt-1 w-full border border-gray-300 rounded py-2 px-3"
        required
      />
      <label className="block">
        Commute from home (minutes)
      <input
        name="commuteMinutes"
        type="number"
        min="0"
        step="1"
        value={values.commuteMinutes}
        onChange={handleChange}
        className="mt-1 w-full border border-gray-300 rounded py-2 px-3"
        required
      />
</label>
      <button type="submit" className="add-button mt-5 rounded-lg px-4 py-2 font-medium">Save</button>
    </label>

    </form>
  )
}

export default TodoEdit
