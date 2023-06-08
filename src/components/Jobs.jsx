import React, { useEffect } from 'react'
import data from '../data.json'
import Job from './Job';

const Jobs = ({setJobs,setSearchResults,searchResults}) => {


  useEffect(()=>{
    setJobs(data)
    setSearchResults(data)
      },[setJobs, setSearchResults])
    
  return (
 
    <div className='grid sm:grid-cols-2 lg:grid-cols-3   w-10/12 mx-auto  '>
      {
        searchResults.map((job,index)=>{
            return <Job key={index} data={job}/>
        })
      }


    </div>

  

  )
}

export default Jobs