import{useState} from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'

const LIPSUM = 'Your session was open without any activity for a while, so you need to sign in again. This is to ensure your account is not accessed by someone else.'
const ModalPage = () => {
const [modalOpen, setModalOpen] = useState(false)

    const handleClick =() => {
        setModalOpen(true)
    }
    const handleCloseClick=()=>{
     setModalOpen(false)
    }


const modalContent (
    <p>This is modal content populated by children prop</p>
)

    const actionBar = (
        <>
        <Button success outline         onClick={() => {
          console.log('Other button function fired!')
        }}>
        some Prompt
        </Button>
        <Button danger outline onClick={handleCloseClick} className="ml-4">
        Close
      </Button>
        </>
    )

  return (
        <div className="relative">
        {[...Array(15)].map((_,index)=>(
            <p key={index} className='mb-8'>{LIPSUM}</p>
        ))}
        <Button success rounded onClick = {handleClick}>
            Open Modal!
        </Button>
        {modalOpen && <Modal onClose = {handleCloseClick} title = 'Yay modal!' actionBar = {actionBar}>{modalContent}</Modal>}
    </div>
  )
}

export default ModalPage