import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Table } from "react-bootstrap";

function ProductList() {
  const [data, setData] = useState([]);
  const deleteStyle = { 
    color: '#FFF',
    backgroundColor: '#dc3545',
    borderRadius:'5px', 
    padding:'5px',
    cursor: 'pointer'
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    getData();
  }, []);

  async function deleteOperation(id){
    let result = await fetch("http://backend/api/delete/"+id, {
      method:'DELETE'
    })
    result=await result.json();
    console.log(result)
    getData();
  }
  console.log(data);

  async function getData(){
    let result = await fetch("http://backend/api/list");
    result = await result.json();
    setData(result);
  }

  return (
    <div>
      <Header />
      <h1>Product List</h1>
      <div className="col-sm-8 offset-sm-2">
        <Table>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Price</td>
            <td>Description</td>
            <td>Image</td>
            <td>Operations</td>
          </tr>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <img
                  style={{ width: 100 }}
                  src={"http://backend/" + item.file_path}
                  alt={""}
                />
              </td>
              <td>
                <span onClick={()=>deleteOperation(item.id)} style={deleteStyle}>Delete</span>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default ProductList;
