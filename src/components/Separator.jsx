import React from 'react'

const Separator = ({direction,className}) => {
  return (
    <div className={`border border-color3 ${direction=='vertical' ? `my-5` : 'mx-5'} w-auto h-auto ${className}`}></div>
  )
}

export default Separator