
const imageItem = (props) => {
    const {image} = props
  return (
    <img src={image.urls.small}alt={image.alt_description}/>
  )
}

export default imageItem