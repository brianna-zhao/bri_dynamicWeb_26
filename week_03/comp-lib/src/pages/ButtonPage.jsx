import{GoBell, GoTrash} from 'react-icons/go'
import Button from '../components/Button'

const ButtonPage = () => {
  return (
    <>
      <h1 className="text-3xl mb-4">Button Page!</h1>
      <div className='mb-3'>
      <Button primary onClick={() => console.log('CLICK!')} >
        <GoBell/>
      Primary</Button>
      </div>
      <div className='mb-3'>
      <Button secondary className='mt-8'>
      Secondary </Button>
      </div>
      <div className='mb-3'>
      <Button success>Success</Button>
      </div>
      <div className='mb-3'>
      <Button danger>Danger</Button>
      </div>
      <div className='mb-3'>
      <Button danger outline>
        <GoTrash/>
      danger outline</Button>
      </div>
      <div className='mb-3'>
      <Button success rounded>success rounded</Button>
      </div>
      <div className='mb-3'>
      <Button primary outline rounded>primary outline rounded</Button>
      </div>
      
    </>
  )
}

export default ButtonPage
