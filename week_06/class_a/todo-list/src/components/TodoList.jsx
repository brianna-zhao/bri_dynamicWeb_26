import TodoItem from './TodoItem'

const TodoList = (props) => {
    const {todos, onDelete, onEdit} = props

    const renderedTodos = todos.map((todo)=>{
        <TodoItem key={todo.id} todo={todo} onDelete = {onDelete}/>
    })
  return (
    <div>TodoList</div>
  )
}

export default TodoList