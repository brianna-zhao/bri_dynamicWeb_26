import {useState} from 'react'
import BookForm from './components/BookForm'
import BookList from './components/BookList'
const App = () => {
  const [books, setBooks] = useState([])

  const addBook = async (book) => {
  // stands in for the network. In your midterm this line is the axios call.
  await new Promise((resolve) => setTimeout(resolve, 800))
  setBooks([...books, {...book, id: Date.now()}])
}

  console.log(books)
  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Reading List</h1>
      <BookForm onAdd={addBook} />
      <BookList books={books} />
    </div>
  )
}

export default App
