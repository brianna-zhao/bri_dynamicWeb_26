import Dropdown from '../components/Dropdown'

import {useState} from 'react'

const OPTIONS = [
  {label: 'Red', value: 'red'},
  {label: 'Green', value: 'green'},
  {label: 'Blue', value: 'blue'},
]
const COLOR_MAP = {
  red: 'bg-red-500',
  green: 'bg-green-500',
  blue: 'bg-blue-500',
}

const DropdownPage = () => {
    const[value, setValue] = useState(null)
    const handleChange = (option) =>{
      setValue(option)
    }
  return (
    <>
    <h1 className={COLOR_MAP[value?.value] || undefined}>
       Dropdown page with user selected value of: {value?.label}
    </h1>    
    <Dropdown options={OPTIONS} onChange= {handleChange} value = {value}/>
    </>
  )
}

export default DropdownPage