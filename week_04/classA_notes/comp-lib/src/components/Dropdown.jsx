import {useState} from 'react'
import{GoChevronDown} from 'react-icons/go'
import Panel from '../components/Panel'


const Dropdown = (props) => {
//   const {options} = props
const {options, onChange} = props

  const [isOpen, setIsOpen] = useState(false)

  const{handleClick} = () =>{
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setIsOpen(false)
    onChange(option)
  }

  const renderedOptions = options.map((opt, index) => (
    <div
      onclick = {()=>handleOptionClick(opt)}
      key={index}
      className="hover:bg-sky-100 rounded cursor-pointer p-1"
    >
      {opt.label}
    </div>
  ))

  // Everything visible, nothing clickable yet. Get the markup right first.
  return (
    <div  className="w-48 relative">
      <Panel 
      onClick = {handleClick}
      className="flex justify-between items-center cursor-pointer" >
        {/* {value ? value.label : 'Select...'}  */}
        <GoChevronDown />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  )
}

export default Dropdown
