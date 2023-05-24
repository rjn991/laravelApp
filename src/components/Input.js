import React,{useState} from 'react'

export default function Input() {
    const [name,setName]=useState("");
    const [usn,setUsn]=useState("");
    const [phone,setPhone]=useState("");
    const [branch,setBranch]=useState("");
    
    async function send() {
        let item={name,usn,phone,branch};
        console.warn(item)

        let result = await fetch("http://localhost:8000/api/send", {
            method: "POST",
            body:JSON.stringify(item),
            headers: {
               "Content-Type":"application/json",
               "Accept":"application/json"
            }
        })
        result = await result.json();
        console.warn(result)
        alert("Data sent")
        setName("")
        setUsn("")
        setPhone("")
        setBranch("")
        
    }
    
    return (
        <div className='container' style={{marginTop:'50px',maxWidth:'700px'}} >
        <div className='my-4'>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" placeholder="Student Name"/>
        </div>
        <div className='my-4'>
            <input type="text" value={usn} onChange={(e) => setUsn(e.target.value)} className="form-control" id="usn" placeholder="Student USN"/>
        </div>
        <div className='my-4'>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="phone" placeholder="Phone Number"/>
        </div>
        <div className='my-4'>   
        <select value={branch} onChange={(e) => setBranch(e.target.value)} className="form-select" aria-label="year">
            <option defaultValue>Branch</option>
            <option value="CSE">CSE</option>
            <option value="ISE">ISE</option>
            <option value="MECH">MECH</option>
            <option value="CIVIL">CIVIL</option>
        </select>
        </div>
        <div className="my-4 text-center">
            <button onClick={send} className="btn btn-primary">Send Data</button>
        </div>
        </div>
    
  )
}
