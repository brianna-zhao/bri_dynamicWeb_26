import {useState} from 'react'
//import {GoChevronDown, GoChevronUp} from 'react-icons/go'


const Tab = (props) => {
  const { items } = props

  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  const renderedTabs = items.map((item, index) => {
    const isActive = index === activeIndex

    return (
      <button
        key={item.id}
        onClick={() => handleClick(index)}
        className={
          isActive
            ? 'px-4 py-2 bg-pink-400 text-gray-800 rounded-lg'
            : 'px-4 py-2 bg-yellow-100 text-gray-700 rounded-lg hover:bg-yellow-200'
        }
      >
        {item.label}
      </button>
    )
  })

  return (
    <div className="max-w-xl mx-auto mt-10 bg-blue-200 p-10 rounded-lg">

      <div className="flex gap-2">
        {renderedTabs}
      </div>

      <div className="border p-4 mt-2">
        {items[activeIndex].content}
      </div>
    </div>
  )
}

export default Tab