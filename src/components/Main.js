import React from 'react'

export default function Main() {
  return (
    <form>
    <div className='container' style={{marginTop:'50px',maxWidth:'700px'}} >
    <div className='my-4'>
        <input type="text" class="form-control" id="name" placeholder="Student Name"/>
    </div>
    <div className='my-4'>
        <input type="text" class="form-control" id="usn" placeholder="Student USN"/>
    </div>
    <div className='my-4'>
        <input type="text" class="form-control" id="phone" placeholder="Phone Number"/>
    </div>
    <div className='my-4'>   <select class="form-select" aria-label="year">
        <option selected>Year of Study</option>
        <option value="1">First</option>
        <option value="2">Second</option>
        <option value="3">Thrird</option>
        <option value="4">Fourth</option>
    </select>
    </div>
    <div className="my-4 text-center">
        <button type="submit" class="btn btn-primary">Send Data</button>
    </div>
    </div>
    </form>
    
  )
}
