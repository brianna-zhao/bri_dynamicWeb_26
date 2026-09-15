
const IngredientList = (props) => {
    const{ingredients} = props
  return (
    <>
     <h3>Ingredients</h3>
     <ul>
        {ingredients.map((ingred, index) =>{
            return <li key={index} >{ingred}</li>
        })}
     </ul>
    </>
  )
}

export default IngredientList