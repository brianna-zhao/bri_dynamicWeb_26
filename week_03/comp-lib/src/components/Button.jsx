// TODO (in class): build this up together.
import cx from 'classnames'

import{twMerge} from 'tailwind-merge'

const Button = (props) => {
  const {children, primary, secondary, success, danger, warning, rounded, outline,
    ...otherProps

  } = props

  //make sure only use one color varient
 const count=
  Number(!!primary)+
  Number(!!secondary)+
  Number(!!success)+
  Number(!!danger)+
  Number(!!warning)

  if(count>1){
    console.warn('you silly gooes you can only use one color varient at a time')
  }


  const baseClasses = 'flex items-center px-8 py-3 border-2'
  const classes = twMerge(
    cx(otherProps.className, baseClasses,{
    'bg-blue-400 border-blue-400 test-white':primary,
    'bg-gray-400 border-gray-400 test-white': secondary,
    'bg-green-400 border-green-400 test-white': success,
    'bg-red-400 border-red-400 test-white':danger,
    'bg-yellow-400 border-yellow-400 test-white': warning,
    'rounded-full':rounded,
    'bg-white':outline,
    'text-blue-400':outline &&primary,
    'text-gray-400':outline &&secondary,
    'text-green-400':outline &&success,
    'text-red-400':outline &&danger,
    'text-yellow-400':outline &&warning,
  })
)

  // let classes = 'px8 py3 border'
  // if(primary){
  //   classes+= 'bg-blue-400 border-blue-400 test-white'
  // }
  // if(secondary){
  //     classes+= 'bg-gray-400 border-gray-400 test-white'
  //   }
  //   if(success){
  //   classes+= 'bg-green-400 border-green-400 test-white'
  // }
  // if(danger){
  //     classes+= 'bg-red-400 border-red-400 test-white'
  //   }
  // if(warning){
  //     classes+= 'bg-yellow-400 border-yellow-400 test-white'
  //   }

  return <button {...otherProps} className={classes}>{children}</button>
}

export default Button
