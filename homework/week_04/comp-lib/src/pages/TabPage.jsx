import React from 'react'
import Tab from '../components/Tab.jsx'

const ITEMS = [
  {
    id: 'about',
    label: 'About',
    content: 'This is the about section.',
  },
  {
    id: 'details',
    label: 'Details',
    content: 'Here are more details about this project.',
  },
  {
    id: 'reviews',
    label: 'Reviews',
    content: 'Here are some customer reviews.',
  },
]


const TabPage = () => {
  return (
    <div>
    <h1 className="text-3xl mb-4">Tab Page</h1>
    <Tab items={ITEMS} />

    </div>
  )
}

export default TabPage