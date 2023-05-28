import React from 'react'
import {BsFillCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs'
import { deleteTaskData, deleteRequest } from '../../config'

const Request = ({request, refresh}) => {
  const handleApprove = () => {
    deleteTaskData(request.requesterId, request.taskId, true, {})
    deleteRequest(request.taskId)
    refresh()
  }
  const handleDisapprove = () => {
    deleteRequest(request.taskId)
    refresh()
  }

  return (
    <table className='bg-zinc-200 text-rose-500 w-full h-4/5 border-separate border-red-950 overflow-scroll'>
      <tbody>
      <tr className='border border-red-950'>
            <th className='w-2/5 border border-red-950' >Submitted By</th>
            <th className='w-2/5 border border-red-950' >Task Requested</th>
          <th className=' w-1/5 border border-red-950'>Desicion</th>
          </tr>
          {<tr className='min-h-min'>
            <td className=' border border-red-950'>{request.requester}</td>
            <td className=' border border-red-950'>{request.taskBody}</td>
            <td className=' border border-red-950 p-2 flex flex-col gap-3'>
              <div onClick={handleApprove} className='h-10 bg-zinc-300 text-green-500 hover:bg-green-500 rounded-full duration-100 ease-in hover:text-zinc-200 flex justify-between items-center p-2 cursor-pointer' >APPROVED <BsFillCheckCircleFill/> </div>
              <div onClick={handleDisapprove} className='h-10 bg-zinc-300 text-red-500 hover:bg-red-500 rounded-full duration-100 ease-in hover:text-zinc-200 flex justify-between items-center p-2 cursor-pointer' >REJECTED <BsFillXCircleFill /> </div>
            </td>
          </tr>}
      </tbody>
    </table>
  )
}

export default Request

{/* <div className='bg-red-950 min-h-16 flex'>

</div> */}