import {useState} from 'react'

const TodoCreate = (props) => {

  const [values, setValues] = useState({
  title: '',
  startTime: '',
})
  const {onCreate} = props

  //const [title, setTitle] = useState('')


  const handleChange = (event) => {
    //setTitle(event.target.value)
    const {name, value} = event.target

  setValues({
    ...values,
    [name]: value,
  })
  }

  const handleSubmit = (event) => {
    // dont allow the form field to refresh the page
    event.preventDefault()
    // pass local title state up to app parent via onCreate prop
    //onCreate(title)
    onCreate(values.title, values.startTime)
    // clearing out the form after the user submits
    //setTitle('')

  }

  return (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="title"
      value={values.title}
      onChange={handleChange}
      placeholder="What needs to be done?"
      className="w-full border border-gray-300 py-3 rounded"
    />

    <label htmlFor="startTime" className="block mt-3">
      Start date and time
    </label>

    <input
      id="startTime"
      name="startTime"
      type="datetime-local"
      value={values.startTime}
      onChange={handleChange}
      className="w-full border border-gray-300 p-3 rounded mt-1"
      required
    />

    <button className="bg-blue-900 text-white px-5 py-2 rounded mt-3">
      Add Todo
    </button>
  </form>
)
}

export default TodoCreate
