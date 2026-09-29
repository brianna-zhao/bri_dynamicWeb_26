import{useState} from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'

const ModalPage = () => {
const [modalOpen, setModalOpen] = useState(false)

    const handleClick =() => {
        setModalOpen(true)
    }
  return (
    <div>
        <Button success rounded onClick = {handleClick}>
            Open Modal!
        </Button>
        {modalOpen && <Modal/>}
    </div>
  )
}

export default ModalPage