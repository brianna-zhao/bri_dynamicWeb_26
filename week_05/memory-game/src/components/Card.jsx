import cx from 'classnames'
import styles from './Card.module.css'
import CardPattern from '../assets/moroccan-flower-dark.png'

// The card knows how one card LOOKS. It does not know the rules of the game,
// and by the end of class it still will not.
const Card = (props) => {
  const {card, handleChoice, flipped} = props

  const handleClick = () =>{
    handleChoice(card)

  }

  return (
    <div className={styles.card}>
      <div 
      onClick={handleClick}
      className={cx(styles.inner, {[styles.flipped]: flipped})}>
        <div className={styles.front}>
          <img src={CardPattern} alt="" />
        </div>
        <div className={styles.back}>
          <img src={card.src} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Card
