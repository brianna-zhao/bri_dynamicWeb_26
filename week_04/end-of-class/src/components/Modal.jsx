import React from 'react'
import {createProtal} from 'react-dom'
import { useEffect } from 'react'
import cx from 'classname'

const Modal = (props) => {

  const{onClose, title, children, actionBar} = props

  useEffect (() =>{
    document.body.classList.add('overflow-hidden')
    return ()=>{
    document.body.classList.remove('overflow-hidden')

    }
  },[])

  const overlayClass = crazy 
  ?'fixed inset-0 bg-teal-300 opacity-50'
  :'fixed inset-0 bg-gray-300 opacity-50'

  const windowClass = cx(
    'fixed inset-40 p-10 bg-white', {
      'rounded-lg':crazy, 
    })


  return createProtal(
    <>
      <div className={overlayClass} onClick={onClose}></div>
      <div className={windowClass}>
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
        {children}
        <div className="flex flex-row justify-end absolute bottom-0 right-0 p-4">
          {actionBar}
        </div>
      </div>
    </>,
    document.getElementById('portal')

  )
}

export default Modal