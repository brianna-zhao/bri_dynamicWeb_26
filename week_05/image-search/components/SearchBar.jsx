import {useState} from 'react'

const SearchBar = (props) => {
    const {onSubmit} = props
    const[term, setTerm] = useState('')

    const handleChange = (event) =>{
        setTerm(event.target.value)


    }

    const handleFormSubmit =(event) =>{
        event.preventDefault()
        onSubmit(term)
    }


  return (
    <div className="p-4">
        <form onSubmit={handleFormSubmit}>
        <input type="text" value={term} onChange = {handleChange} className='border border-gray-300 rounded px-3 py-2 w-80'/>
        </form>
    </div>
  )
}

export default SearchBar