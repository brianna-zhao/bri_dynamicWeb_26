import {useState} from 'react'
import SearchBar from '../components/SearchBar'
import ImageList from '../components/imageList'
import {searchImages} from  './api'

const App = () => {

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searched, setSearched] = useState(false)

  const handleSubmit = async (term) =>{
    setIsLoading(true)
    setError(null)
    setSearched(true)

    try {
      const result = await searchImages(term)
      setImages(result)

    }catch(err){
      console.error(err)
      setError('The search did not work check console.')

    }finally{
      setIsLoading(false)
    }

  }

  console.log(images)

  return (
    <div>
      <SearchBar onSubmit = {handleSubmit}/>
      {isLoading && <p className="p-4 text-grey-500">searching...</p>}
      {error && <p className="p-4 text-red-500">{error}</p>}
      {!isLoading && !error && searched && images.length ===0 && <p className="p-4 text-grey-500">nO PHOTOS try another word</p>}
      <ImageList images={images} />

    </div>
  )
}

export default App