import React from 'react'
import './Table.css'
import {BsFillTrashFill,BsFillPencilFill} from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const TableComponent = ({inputarr, setInputArr,updatedata}) => {
  
  const deleteHandle = (index,e) => {
    setInputArr(inputarr.filter((v, i) => i !== index));
  }
  
    return(
        <>
        <h2>Table</h2>
        {/* <table border={1} cellPadding={10} width='30%'> */}

        <Table striped bordered hover size="sm">

          <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>PhoneNo</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {
            inputarr.map((info,id)=>{
              return(
          <tr key={id}>
            <td>{info.name}</td>
            <td>{info.address}</td>
            <td>{info.phoneNo}</td>
            <td>
            <Button variant="outline-secondary"><BsFillPencilFill onClick={()=>updatedata(id)}/></Button>{' '}
            </td>

            <td>
            <Button variant="outline-danger"><BsFillTrashFill className='delete-btn' onClick={(e)=>deleteHandle(id,e)}/></Button>{' '}
            </td>



          </tr>
              )
            })
          }
          </tbody>
        </Table>
        </>
    )
}
export default TableComponent