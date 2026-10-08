
const TodoEdit = (props) => {
    const {todo, onSubmit} = props

    const[title, setTitle] = useState(todo.title)

    const handleChange = (event) =>{
        setTitle(event.target.title)
    }

    const handleSubmit =(event) =>{
        onEdit(id, newTitle)
    }
  return (
    <form onSubmit = {handleSubmit} className="flex gap-2 py-3">
        <input type='text' value={title}
        className="flex-1 border border-gray-300 rounded py-2 px-3"/>
    </form>
  )
}

export default TodoEdit