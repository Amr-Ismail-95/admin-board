// import React,{useState} from 'react'
// import RiFolderInfoFill from 'react-icons/ti'
// import Tooltip from '../Tooltip'

// const Group = () => {

//   const [tooltipActive, setTooltipActive] = useState(false)

//   return (
//     <div className='w-full min-h-20 bg-red-950 flex flex-col gap-2'>
//       <div className='bg-red-950 text-zinc-200 px-10 flex justify-between items-center texl-xl font-bold text-left h-20'>
//         <h2>Group title</h2>
//         <h2>Number of members: 3</h2>
//         <div className='relative rounded-full bg-zinc-200 text-red-950 w-9 text-center cursor-pointer' onMouseEnter={()=>{setTooltipActive(true)}} onMouseLeave={()=>setTooltipActive(false)}>
//         <h2>i</h2>
//         {tooltipActive && <Tooltip text='Group info' />}
//         </div>
//       </div>

//       <div className='w-full mx-auto h-96 bg-green-500 p-4 flex justify-evenly'> 
//         <div className='bg-zinc-200 w-2/5 h-full'></div>
//         <div className='bg-zinc-200 w-2/5 h-full'></div>
//       </div>

//     </div>
//   )
// }

// export default Group