import {useState} from 'react'

import {FaHeart} from 'react-icons/fa'

import styles from './RecipeCard.module.css'

const UserRating = () => {
  
  const [count, setCount] = useState(0)

  const handlePlusClick = () => {
    setCount(count + 1)
  }

  const handleMinusClick = () => {
    setCount(count - 1)
  }

  return (
    <div className={styles.rating}>
      <span className={styles.rating_btn_slot}>
        {count > 0 && (
          <button className={styles.rating_btn} onClick={handleMinusClick}>
            [-]
          </button>
        )}
      </span>
      <span className={styles.hearts}>
        {[...Array(count)].map((heart, index) => {
          return (
            <span key={index}>
              <FaHeart />
            </span>
          )
        })}
      </span>
      <span className={styles.rating_btn_slot}>
        {count < 5 && (
          <button className={styles.rating_btn} onClick={handlePlusClick}>
            [+]
          </button>
        )}
      </span>
    </div>
  )
}

export default UserRating
