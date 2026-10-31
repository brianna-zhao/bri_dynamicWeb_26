import {useState} from 'react'

const EMPTY = {
  title: '',
  author: '',
  pages: '',
  format: 'paperback',
  dateStarted: '',
  notes: '',
  finished: false,
  rating: 3,
}

const validate = (values) => {
  const errors = {}

  if (!values.title.trim()) {
    errors.title = 'A book needs a title'
  }

  if (!values.author.trim()) {
    errors.author = 'Who wrote it?'
  }

  if (values.pages !== '' && Number(values.pages) < 1) {
    errors.pages = 'Pages has to be at least 1'
  }

  if (values.finished && !values.dateStarted) {
    errors.dateStarted = 'If you finished it, when did you start?'
  }

  return errors
}

const BookForm = (props) => {
  const {onAdd} = props
  // ONE object for the whole form, not one useState per field. Eight fields
  // that always move together -- the same signal we talked about on Tuesday.
  const [values, setValues] = useState(EMPTY)
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const errors = validate(values)

  const showError = (field) => {
    return touched[field] ? errors[field] : undefined
  }

  const handleBlur = (event) => {
  setTouched({
    ...touched,
    [event.target.name]: true,
  })
}

  // One handler for every text field. `event.target.name` is the input's
  // name attribute, and `[name]:` is a computed property -- it uses the
  // VALUE of name as the key, so one function updates whichever field
  // changed.
  const handleChange = (event) => {
    const {name, value, type, checked} = event.target

    setValues({
      ...values,
      // we have to replace this with a ternary to make sure we can  accept out checkbox boolean
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = async(event) => {
    event.preventDefault()
    // console.log(values)
    setTouched({title: true, author: true, pages: true, dateStarted: true})

    if (Object.keys(errors).length > 0) {
      return
    }
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      await onAdd({
      ...values,
      pages: Number(values.pages) || 0,
      rating: Number(values.rating),
    })
    setValues(EMPTY)
    setTouched({})
  } catch (err) {
    console.error(err)
    setSubmitError('Could not save that. Your text is still here — try again.')
  } finally {
    setIsSubmitting(false)
  }
}


  const fieldClass = (field) => {
    const base = 'mt-1 w-full rounded border px-3 py-2'

    return showError(field)
      ? `${base} border-red-500 bg-red-50`
      : `${base} border-gray-300`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium" htmlFor="title">
          Title <span className="text-red-600">*</span>
        </label>
        <input
          required
          maxLength="120"
          id="title"
          name="title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={showError('title') ? true : undefined}
          aria-describedby={showError('title') ? 'title-error' : undefined}
          className={fieldClass('title')}
        />{
          showError('title') && <p id ='author-error' className='mt-1 text-sm text-red-700'>z{errors.title}</p>
        }
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="author">
          Author <span className="text-red-600">*</span>
        </label>
        <input
          required
          id="author"
          name="author"
          value={values.author}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={showError('author') ? true : undefined}
          aria-describedby={showError('author') ? 'author-error' : undefined}
          className={fieldClass('author')}        />
        {
          showError('author') && <p id ='author-error' className='mt-1 text-sm text-red-700'>z{errors.author}</p>
        }
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="pages">
          Pages
        </label>
        {/* input type=number BUT typeOf pages is a string */}
        <input
          type="number"
          name="pages"
          id="pages"
          min="1"
          max="5000"
          value={values.pages}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={showError('pages') ? true : undefined}
          aria-describedby={showError('pages') ? 'title-error' : undefined}
          className={fieldClass('pages')}
        />
        {
          showError('pages') && <p id ='pages-error' className='mt-1 text-sm text-red-700'>z{errors.pages}</p>
        }
      </div>
      <div>
        <label className="block text-sm font-medium" htmlFor="format">
          Format
        </label>
        {/* a select is controlled exactly like a text input value + onchange goes
        ON THE SELECT not the individual options */}
        <select
          id="format"
          name="format"
          value={values.format}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mt-1 w-full rounded border border-gray-300 px-3 py-2"
        >
          <option value="paperback">Paperback</option>
          <option value="hardcover">Hardcover</option>
          <option value="ebook">Ebook</option>
          <option value="audio">Audiobook</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="dateStarted">
          Started
        </label>
        {/* type=date gives you a string shape like YYYY-MM-DD
        Nothing else will load into it, so store it exactly as it comes in */}
        <input
          type="date"
          name="dateStarted"
          id="dateStarted"
          value={values.dateStarted}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mt-1 w-full rounded border border-gray-300 px-3 py-2"
        />
        {
          showError('dateStarted') && <p id ='dateStarted-error' className='mt-1 text-sm text-red-700'>z{errors.dateStarted}</p>
        }
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="notes">
          Notes
        </label>
        {/* a textArea in JSX is controlled with value. NOT with children */}
        <textarea
          id="notes"
          name="notes"
          rows="3"
          maxLength="200"
          value={values.notes}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mt-1 w-full rounded border border-gray-300 px-3 py-2"
        />
        <p className="mt-1 text-xs text-gray-500">{values.notes.length}/200</p>
      </div>

      <div>
        {/* checked, not value receives values.finished
        The label wraps the inout, so the words are clickable too */}
        <label className="block text-sm font-medium" htmlFor="notes">
          <input
            type="checkbox"
            name="finished"
            checked={values.finished}
            onChange={handleChange}
            onBlur={handleBlur}
            className="h-4 w-4 mr-4"
          />
          Finished It
        </label>
      </div>

      <div>
        {/*  */}
        <label className="block text-sm font-medium" htmlFor="rating">
          Rating: {values.rating}
        </label>
        <input
          type="range"
          className="mt-1 w-full"
          id="rating"
          name="rating"
          min="1"
          max="5"
          value={values.rating}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>

      {submitError && (
        <p className="rounded bg-red-50 p-3 text-sm text-red-700">{submitError}</p>
  )}

      <button
        disabled={isSubmitting}
        className="rounded bg-gray-900 px-4 py-2 text-white hover:bg-gray-700 disabled:opacity-50"
      >
        {isSubmitting ? 'Saving...' : 'Add book'}
      </button>

      <button className="rounded bg-gray-900 px-4 py-2 text-white hover:bg-gray-700">
        Add book
      </button>
    </form>
  )
}

export default BookForm
