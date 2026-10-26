//i use exmpt bracket because i want i want it to only run once when page open/refresh and not everytime state. changes
//i assume it will cause the search to update and call another search, and goes into a never ending loop until reach api limit



import {useState, useEffect} from 'react'
import SearchBar from '../components/SearchBar'
import ImageList from '../components/ImageList'
import {searchImages} from './api'

const App = () => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searched, setSearched] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = async (term) => {
    setIsLoading(true)
    setError(null)
    setSearched(true)
    setSearchTerm(term)

    try {
      const results = await searchImages(term)
      setImages(results)
    } catch (err) {
      console.error(err)
      setError('The search did not work. Check the console.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => { 
    handleSubmit('brownie')
}, [])

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} /> <br />
      {isLoading && <p className="p-4 text-gray-500">Searching ...</p>}
      {error && <p className="p-4 text-red-500">{error}</p>}
      {!isLoading && !error && searched && images.length === 0 && (
        <p className="p-4 text-gray-500">
          No photos for that one. Try another word!
        </p>
      )}
      {searchTerm && (
        <h2 className="p-4 text-xl font-bold">
          Search results for: {searchTerm}
        </h2>
      )}
      <ImageList images={images} />
    </div>
  )
}

export default App