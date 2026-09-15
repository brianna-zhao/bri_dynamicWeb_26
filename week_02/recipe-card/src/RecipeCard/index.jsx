import { RECIPE_DATA } from "./recipe-data"
import Recipeimg from "./Recipeimg"
import Recipeinfo from "./Recipeinfo"
import IngredientList from "./IngredientList"


const RecipeCard = () => {
  return (
    <div>
        <Recipeimg imgSrc={RECIPE_DATA.imgSrc}/>
        <Recipeinfo/>
        <h3>Ingredients</h3>
        <ul>
        <li>Dark Baking Chocolate 3oz</li>
        <li>Heavy Cream 200ml</li>
        <li>Sugar 1tbs</li>
        <li>Butter 1tbs</li>
        </ul>
        <h3>How to make!</h3>
        <ol>
        <li>Chop up your chocolate, melt it in a double boiler</li>
        <li>Add butter into the melted chocolate</li>
        <li>Add your sugar into the cream and gentlly wip until it doubles it size but is still soft</li>
        <li>Add the wipped cream into your chocolate butter mixture, do not mix, but gentlly fold the mixture until it combined evenly.</li>
        <li>pour it in your cup and let it chill in the firdge for 2-3 hours</li>
        <li>Ready 2 serve!</li>
        </ol>
        </div>
  )
}

export default RecipeCard