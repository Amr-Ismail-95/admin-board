import React,{useState, useEffect} from 'react'
import Request from './Request'
import { getRequests } from '../../config'



const Requests = ({user}) => {

const [requests, setRequests] = useState([])

const refresh = () => {
  setRequests([])
}
useEffect(() => {
  getRequests(user.id, setRequests)
}, [])


  return (
    <div className='pt-14 h-screen w-full flex justify-center items-center' >
      <div className='w-11/12 min-h-11/12 bg-zinc-50/70 p-4 flex flex-col gap-2 m-auto'>
        
        {requests?.length !== 0 ? requests.map((request)=><Request refresh={refresh} key={request.id} request={request} />): <p>No current Requests</p>}
      </div>
    </div>
  )
}

export default Requests