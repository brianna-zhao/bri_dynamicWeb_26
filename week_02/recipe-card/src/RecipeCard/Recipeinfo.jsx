import { RECIPE_DATA } from "./recipe-data";

const Recipeinfo = () => {
  return (
    <div>
        <h2>{RECIPE_DATA.title}</h2>
        <h3>{RECIPE_DATA.description}</h3>

    </div>
  )
}

export default Recipeinfo