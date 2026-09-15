import {useState} from 'react'

import {LuSmile} from 'react-icons/lu'

import styles from './RecipeCard.module.css'

function check_btn() {
  const [madeIt, setMadeIt] = useState(false)
function handleClick() {
    setMadeIt(true)
  }

    return (
        <div className={styles.check_area}>
        <button className={styles.check_btn} onClick={handleClick}>
            Made it
        </button>

        {madeIt && <LuSmile className={styles.smile}/>}
        </div>
    )
    }

export default check_btn