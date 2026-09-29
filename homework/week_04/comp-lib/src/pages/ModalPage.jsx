// i only called handleClose here, other change in Modal/jsx
//i used useEffect with[] because i want it to run once only when it is being called and no other varaiables can change it
// cleanup function remove  keydown event listener on modal.jsx


import{useState} from 'react'
import { useEffect } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'

const ModalPage = () => {
const [modalOpen, setModalOpen] = useState(false)

    const handleClick =() => {
        setModalOpen(true)
    }
      const handleClose = () => {
    setModalOpen(false)
  }

  return (
    <div>
        <Button success rounded onClick = {handleClick}>
            Open Modal!
        </Button>
        {modalOpen && <Modal onClose={handleClose}/>}
    </div>
  )
}

export default ModalPage