import React from 'react'


const Tooltip = ({text}) => {
  return (
    <div className='bg-white absolute top-N25 left-N50 clipped text-black text-sm p-1 min-w-8 h-8' >{text}</div>
    )
}

export default Tooltip