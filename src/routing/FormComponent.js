import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const FormComponent = ({inputarr,setInputArr,inputdata,updateinfo,formOpen, setInputData}) => {
    
    
   const changeHandle = (e) => {
        setInputData({...inputdata,[e.target.name]:e.target.value})
    }

    let {name ,address ,phoneNo} = inputdata;
    const saveHandle = (e) => {
        if(name==="" && address==="" && phoneNo===""){
            alert("Enter Name and Roll no ")
        }
        else{
        setInputArr([...inputarr,{name ,address ,phoneNo}])
        console.log("inputdata...",inputdata)
        setInputData({name:"",address:"",phoneNo:""})
    }
    }
    const consoleHandle = () => {
        console.log("object...",inputarr)
    }
    return(
        <div className="form-wrapped">
        <h2>Form</h2>

        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type='text' name='name' onChange={changeHandle} value={inputdata.name} placeholder='enter name'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Address</Form.Label>
        <Form.Control as="textarea" rows={3} name='address' onChange={changeHandle} value={inputdata.address} placeholder='enter address'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>PhoneNo</Form.Label>
        <Form.Control type='text' name='phoneNo' onChange={changeHandle} value={inputdata.phoneNo} placeholder='enter phoneNo' />
      </Form.Group>
    </Form>
    <Button variant="primary" size="sm" onClick={!formOpen?saveHandle:()=>updateinfo()}>
    {!formOpen?`Add data`:`Update data`}
      </Button>
      <Button variant="secondary" size="sm" onClick={consoleHandle}>
      Console
      </Button>
        {/* <button onClick={!formOpen?saveHandle:()=>updateinfo()}>{!formOpen?`Add data`:`Update data`}</button>

        <button onClick={consoleHandle}>Console</button> */}
        </div>
    )
}
{/* <input type='submit' onClick={saveHandle} value='Submit'/> */}
export default FormComponent