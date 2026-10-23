import {useState} from 'react'

const EMPTY = {
  title: '',
  author: '',
  pages: '',
  format: 'paperback',
  finished: false,
  rating: 3,
  dateStarted: '',
  notes: '',
}

const validate = (values)=>{
    const errors = {}

    if (!values.title.trim()){
        errors.title = 'A book needs a title'
    }

    if (!values.author.trim()){
        errors.author = "Who wrote it"
    }
    
    if (values.pages!=='' && Number(values.pages)<1){
        errors.pages = 'Pages need to be at least 1'
    }

    if(values.finished && !values.dateStarted){
        errors.dateStarted = 'If you finished it when did u start'
    }

    return errors
}

const BookForm = (props) => {
  const {onAdd} = props
  const [values, setValues] = useState(EMPTY)
  const [touched, setTouched] = useState({})

  const errors = validate(values)

  const showError = (field) =>{
    return touched[field] ? errors[field] : undefined
  }

  const handleChange = (event) => {
    const {name, value, type, checked} = event.target
    setValues({
      ...values,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setTouched({title: true, author: true, pages:true, dateStarted:true})

    if (Object.keys(errors).length > 0){
        return 
    }

    // Cast on the way OUT, in one place. Numbers stored as strings are the
    // reason your sort puts "10" before "9".
    onAdd({
      ...values,
      pages: Number(values.pages) || 0,
      rating: Number(values.rating),
    })

    // setting state back to EMPTY clears every field, because every field
    // is reading its value from state
    setValues(EMPTY)
    setTouched({})
  }

  const fieldClass = (field) =>{
    const base = 'mt-1 w-full rounded border px-3 py-2'

    return showError(field) ? `${base} border-red-500 bg-red-50` : `${base} border-red-300`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium" htmlFor="title">
          Title <span className='text-red-600'>*</span>
        </label>
        <input
        required
        maxLength='120'
          id="title"
          name="title"
          value={values.title}
          onChange={handleChange}
          className="mt-1 w-full rounded border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="author">
          Author<span className='text-red-600'>*</span>
        </label>
        <input
        required
          id="author"
          name="author"
          value={values.author}
          onChange={handleChange}
          className="mt-1 w-full rounded border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="pages">
          Pages
        </label>
        <input
          id="pages"
          name="pages"
          type="number"
          min="1"
          max='5000'
          value={values.pages}
          onChange={handleChange}
          className="mt-1 w-32 rounded border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="format">
          Format
        </label>
        <select
          id="format"
          name="format"
          value={values.format}
          onChange={handleChange}
          className="mt-1 w-full rounded border border-gray-300 px-3 py-2"
        >
          <option value="paperback">Paperback</option>
          <option value="hardback">Hardback</option>
          <option value="ebook">Ebook</option>
          <option value="audio">Audiobook</option>
        </select>
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-medium">
          <input
            name="finished"
            type="checkbox"
            checked={values.finished}
            onChange={handleChange}
            className="h-4 w-4"
          />
          Finished it
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="rating">
          Rating: {values.rating}/5
        </label>
        <input
          id="rating"
          name="rating"
          type="range"
          min="1"
          max="5"
          value={values.rating}
          onChange={handleChange}
          className="mt-1 w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="dateStarted">
          Started
        </label>
        <input
          id="dateStarted"
          name="dateStarted"
          type="date"
          value={values.dateStarted}
          onChange={handleChange}
          className="mt-1 rounded border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="notes">
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows="3"
          maxLength ='200'
          value={values.notes}
          onChange={handleChange}
          className="mt-1 w-full rounded border border-gray-300 px-3 py-2"
        />
        <p className='mt-1 text-xs text-gray-500'>{values.notes.length}/200</p>
      </div>

      <button className="rounded bg-gray-900 px-4 py-2 text-white hover:bg-gray-700">
        Add book
      </button>
    </form>
  )
}

export default BookForm