import ImageItem from './imageItem'

const imageList = (props) => {
    const {images} = props
    console.log(images)

    const renderedImages = images.map((img)=>(
        <ImageItem image={img} key={img.id}/>
    ))
  return (
    <div>
        {renderedImages}
        </div>
  )
}

export default imageList