import {useState, useEffect} from 'react'
import Card from './Card'
import Bilbo from '../assets/bilbo-baggins.png'
import Cameron from '../assets/cameron-poe.png'
import Nikki from '../assets/nikki-cage.png'
import Pollux from '../assets/pollux-troy.png'

const cardImages = [{src: Bilbo}, {src: Cameron}, {src: Nikki}, {src: Pollux}]

const Grid = () => {
  // the deck lives in state, because the board has to change when somebody
  // clicks New Game
  const [cards, setCards] = useState([])
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [turns, setTurns] = useState(0)
  const [disabled, setDisabled] = useState(false)
  const [won, setWon] = useState(false)
  const [bestScore, setBestScore] = useState(null)

  const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages]
      // sort calls this for pairs of items. A negative number leaves them
      // alone, a positive number swaps them -- so a random one shuffles.
      .sort(() => Math.random() - 0.5)
      // every card needs its own id: there are two of each image now, so
      // `src` no longer tells the two copies apart
      .map((card) => ({...card, id: crypto.randomUUID()}))

    setCards(shuffled)
    setTurns(0)
    setChoiceOne(null)
    setChoiceTwo(null)
    setDisabled(false)
    setWon(false)
  }

  const handleChoice = (card) => {
    if (disabled || card === choiceOne || card ===choiceTwo){
      return
    }
    // no choice yet? this is choice one. Otherwise it is choice two.
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)

    //this will not work yet
    if (choiceOne && choiceTwo ){
      //console.log('comparing', choiceOne.src, choiceTwo.src)
    }
  }

  const resetTurn = ()=>{
    setChoiceOne(null)
    setChoiceTwo(null)
    setDisabled(false)
    setTurns((prevTurns)=> prevTurns+1)
  }

  useEffect(() => {
  if (cards.length > 0 && cards.every((card) => card.matched)) {
    setWon(true)

    setBestScore((prevBest) => {
      if (prevBest === null || turns < prevBest) {
        return turns
      }
      return prevBest
    })
  }
}, [cards, turns])

  useEffect (()=>{
    if (choiceOne && choiceTwo ){
      setDisabled(true)

      if (choiceOne.src == choiceTwo.src ){
        console.log('match')
        setCards ((prevCards)=>{
          return prevCards.map((card)=>{
            if(card.src === choiceOne.src){
              return{...card, matched: true}
            }
            return card
          })
        })
        resetTurn()
      }else{
        console.log('no match')
        setTimeout(()=>resetTurn(),2000)
      }
    }

  },[choiceOne, choiceTwo])

  return (
    <>
      <button
        onClick={shuffleCards}
        className="bg-blue-900 text-white uppercase px-8 py-4 rounded-lg mb-6"
      >
        New Game
      </button>
      <p className="mb-6 text-lg">Turns used: {turns}</p>
      <p className="mb-6 text-lg">
        Best Score: {bestScore === null ? '—' : bestScore}
      </p>

      {won && (
        <p className="mb-6 text-2xl font-bold text-green-700">
          You cleared the board in {turns} turns!
        </p>
      )}

      <div className="grid grid-cols-4 gap-4 max-w-3xl">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
    </>
  )
}

export default Grid