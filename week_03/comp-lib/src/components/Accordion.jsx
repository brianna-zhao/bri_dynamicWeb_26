import {useState} from 'react'
import {GoChevronDown, GoChevronUp} from 'react-icons/go'



const Accordion = (props) => {
    const{items} = props

    const [expandedIndex, setExpandedIndex] = useState(-1)

    const handleClick = (nextIndex) =>{
        setExpandedIndex ((currentExpandedIndex)=>{
            if(currentExpandedIndex === nextIndex){
                return -1
            }
            return nextIndex
        })
    }
    
const renderedItems = items.map((item, index)=>{
    const isExpanded = expandedIndex === index

    const icon = isExpanded ? <GoChevronDown/> : <GoChevronUp/>

    return(
        <div key={item.id}>
            <div 
            onClick= {() => handleClick(index)} 
            className="flex justify-between items-center p-3 bg-gray-100 border-b">
                {item.label}
                {icon}
            </div>
            {isExpanded && <div className="border-b p-5">{item.content}</div>}        
        </div>
        )
    })


  return (
    <div>{renderedItems}</div>
  )
}

export default Accordion