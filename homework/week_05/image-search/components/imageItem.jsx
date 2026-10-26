
const imageItem = (props) => {
    const {image} = props
  return (
    <div className="mb-4 ">
    <img src={image.urls.small}alt={image.alt_description}/>
    <a
        href={image.user.links.html}
        target="_blank"
        rel="noreferrer"
        className="block mt-2 text-sm text-blue-600 "
      >
        Photographer: {image.user.name}
      </a>
      </div>
  )
}

export default imageItem