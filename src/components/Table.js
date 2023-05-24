import React,{useState, useEffect} from "react";

function Table() {
  const [data,setData]=useState([])
  useEffect(()=> {
    async function fetchData() {
      let result = await fetch("http://localhost:8000/api/view");
      result = await result.json();
      setData(result)
    }
    fetchData()
  },[])
  console.warn(data)
  let i = 1
  return (
    <div className="container mt-3">
      <table className="table table-striped">
        <tbody>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>USN</th>
            <th>Phone</th>
            <th>Year</th>
          </tr>
          {
            data.map((item)=> 
            <tr>
            <td>{i++}</td>
            <td>{item.name}</td>
            <td>{item.usn}</td>
            <td>{item.phone}</td>
            <td>{item.branch}</td>
            </tr>
            )
          }
          
        </tbody>

        
      </table>
    </div>
  );
}

export default Table;
