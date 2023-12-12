// import './App.css';

import {Route, Routes ,useNavigate} from 'react-router-dom'
import FormComponent from './routing/FormComponent';
import TableComponent from './routing/TableComponent';
import NoPage from './routing/NoPage';
import { useState } from 'react';
import Navigationbar from './routing/Navigationbar';
import Home from './routing/Home';
import './routing/Home.css'


function App() {
  const navigate = useNavigate();
 
  const [inputarr, setInputArr] = useState([])
  const [inputdata, setInputData] = useState({
    name:"",address:"",phoneNo:""
  })
  let [index,setIndex]=useState()
  const [ formOpen , setFormOpen ] = useState(false);
  let {name,address,phoneNo}=inputdata;

  function updatedata(i){

    let {name,address,phoneNo}=inputarr[i]
    setInputData({name,address,phoneNo})
    setFormOpen(true)
    setIndex(i)
    navigate("form");
}

function updateinfo(){
  let total=[...inputarr]
  total.splice(index,1,{name,address,phoneNo})
  setInputArr(total)
  setFormOpen(false)
  setInputData({name:"",address:"",phoneNo:""})
  console.log("update...")

}

  
  return (
    <div className="App">

     <h1 className="c1">Table Form Rounting App</h1>
    
    <Navigationbar/>
    <Routes>
      {/* <Route path='/' element={<FormComponent 
      inputarr={inputarr} 
      setInputArr={setInputArr} 
      inputdata={inputdata}
      setInputData={setInputData}
      />}></Route> */}
      
      <Route path='/' element={<Home/>}></Route>
      <Route path='form' element={<FormComponent 
      inputarr={inputarr} 
      setInputArr={setInputArr}
      inputdata={inputdata}
      setInputData={setInputData}
      formOpen={formOpen}
      updateinfo={updateinfo}
      />}></Route>

      <Route path='table' element={<TableComponent 
      inputarr={inputarr} 
      setInputArr={setInputArr}
      inputdata={inputdata}
      setInputData={setInputData}
      updatedata={updatedata} 

      />}></Route>

      <Route path='*' element={<NoPage/>}></Route>
    </Routes>
    </div>
  );
}

export default App;