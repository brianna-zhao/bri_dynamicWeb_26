import ImageItem from './imageItem'

const imageList = (props) => {
    const {images} = props
    console.log(images)

    const rendedImages = images.map((img)=>(
        <ImageItem image={img} key={img.id}/>
    ))
  return (
    <div>
        {
        }
        </div>
  )
}

export default imageList