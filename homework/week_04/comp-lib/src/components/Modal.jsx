// i used useEffect with[] because i want it to run once only when it is being called and no other varaiables can change it
// cleanup function remove  keydown event listener

import React from 'react'
import { useEffect } from 'react'

const Modal = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return <div>Modal</div>
}

export default Modal