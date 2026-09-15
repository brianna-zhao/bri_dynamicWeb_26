// These are all default exports, so we can name them whatever we like.
import Card from './Card'
import RecipeImg from './RecipeImg'
import RecipeInfo from './RecipeInfo'
import IngredientsList from './IngredientsList'
import InstructionsList from './InstructionsList'
import CheckButton from './check_btn'

import {RECIPE} from './recipe-data'

import styles from './RecipeCard.module.css'

export default function RecipeCard() {
  return (
    <Card>
      <RecipeImg imgSrc={RECIPE.imgSrc} />
      <div className={styles.card_text}>
        <RecipeInfo title={RECIPE.title} description={RECIPE.description} />
        <div className={styles.card_lists}>
          <IngredientsList ingredients={RECIPE.ingredients} />
          <InstructionsList instructions={RECIPE.instructions} />
        </div>
        <CheckButton/>
      </div>
    </Card>
  )
}
