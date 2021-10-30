import {React,useState,useEffect} from 'react'
import "./Posts.css"
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar.js';
import {BsXLg} from "react-icons/bs";
import CardView from "./Components/Posts/CardView.js";
import _ from 'lodash';
import {Form, FormGroup,Row,Col,Label,Input} from 'reactstrap'
import {AiOutlineDoubleRight} from "react-icons/ai"
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap"
import { db } from "./DataBase/Firebase"
import SimpleReactValidator from 'simple-react-validator';
const pageSize = 34
function App() {
  const validator= new SimpleReactValidator()
  const [view,Setview] = useState(false)
  const [post,SetPost] =useState([])
const [card,setcard]=useState(false)
const [currentPage,setCurrentPage] = useState(1)// state for currentPage
const [pagination,Setpagination]=useState([]);
const [modal,setModal] = useState(false);
const [country,Setcountry] = useState('')
const [region,Setregion] = useState('')
const [firstName,SetfirstName] = useState('')
const [lastName,SetlastName] = useState('')
const [email,Setemail] = useState('')
const [number,Setnumber] = useState('')
const [address,Setaddress] = useState('')
  const URL='https://jsonplaceholder.typicode.com/posts'
  useEffect(() => {
    async function fetchMyAPI() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts')
  response = await response.json()
  console.log(response);
  SetPost(response)
  Setpagination(_(response).slice(0).take(pageSize).value())// setting the pagination post per page
  }

  fetchMyAPI()
  }, [])
  /*pagination*/
  const pageCount=post?Math.ceil(post.length/pageSize):0
  console.log(pageCount);
  if(pageCount ===1) return null;
     const pages = _.range(1, pageCount + 1);// taking page count
     // remove post
  function removeData(index){
  console.log(index);
  Setpagination(pagination.filter(item=>item.id!==index))
  console.log(pagination);
  }
  const handletoggle=(e)=>{
    e.preventDefault();
    setcard(true)
  }
  const handletoggle1=(e)=>{
    e.preventDefault();
    setcard(false)
  }
  //function to move to other pages
  console.log(pagination);
  const paginFunc=(page)=>{
    setCurrentPage(page)
    const startindex=(page-1)*pageSize
    const paginatedpost=_(post).slice(startindex).take(pageSize).value()
    Setpagination(paginatedpost)
  }
  const toggle=()=>{
    setModal(!modal)
    Setview(!view)
  }
  //function to select Country and region
  const selectCountry =(val)=>{
    Setcountry({country:val})
  }
  //storing data to database add is used in place of set becoz its adds a new data whereas set is used to update
  const onSubmitHandler=(e)=>{
    e.preventDefault()
    toggle()
    db.collection("contacts").add({
      firstName:firstName,
      lastName:lastName,
      email:email,
      number:number,
      address:address,
      country:country,

    })
    .then(()=>{
      console.log("done");
    })
    .catch((e)=>{
      console.error(e);
    })

  }
console.log(country.country);
  return (
    <div className="App">
     <Sidebar handletoggle={handletoggle} handletoggle1={handletoggle1} handleformmodal={toggle} view={view}/>
       <Modal isOpen={modal} toggle={toggle} style={{borderRadius:"10px"}}>
                  <ModalHeader
                      toggle={toggle} style={{backgroundColor:"#EBF2F7",borderRadius:"10px"}}>Thank you so much for taking the time!
                      <h6>Please provide the below details! </h6>
                    </ModalHeader>
                  <ModalBody style={{backgroundColor:"#EBF2F7",borderRadius:"10px"}}>
                    <Form onSubmit={onSubmitHandler}>
<Row form>
  <Col md={6}>
    <FormGroup>
      <Label for="exampleName">
        First Name:
      </Label>
      <Input
        id="exampleName"
        name="name"
        placeholder="John"
        type="text"
        value={firstName}
        onChange={(e)=>SetfirstName(e.target.value)}
      />
    </FormGroup>
  </Col>
  <Col md={6}>
    <FormGroup>
      <Label for="exampleLastName">
        Last Name:
      </Label>
      <Input
        id="exampleLastName"
        name="name"
        placeholder="Doe"
        type="text"
        value={lastName}
        onChange={(e)=>SetlastName(e.target.value)}
      />
    </FormGroup>
  </Col>
</Row>
<FormGroup>
  <Label for="exampleAddress">
    Address:
  </Label>
  <Input
    id="exampleAddress"
    name="address"
    placeholder="Enter your full Postal Address"
    value={address}
    onChange={(e)=>Setaddress(e.target.value)}
  />
</FormGroup>

<Row form>
  <Col md={6}>
    <FormGroup>
      <Label for="exampleCountry">
        Country:
      </Label>

          <CountryDropdown
            value={country}
            onChange={(val) => selectCountry(val)} />
          <Input value={country.country} placeholder="India" type="text" onChange={(val) => Setcountry(val)}/>
    </FormGroup>
  </Col>
  <Col md={6}>
    <FormGroup>
      <Label for="exampleemail">
        Email Id:
      </Label>
      <Input
        id="exampleemail"
        name="email"
        placeholder="example@sample.com"
        value={email}
        onChange={(e)=>Setemail(e.target.value)}
      />
    {validator.message('email', email, 'required|email', { className: 'text-danger' })}
    </FormGroup>
  </Col>
  <Col md={12}>
    <FormGroup>
      <Label for="exampleZip">
         Phone Number:
      </Label>
      <div style={{display: 'flex'}}>
          <Col md={2}>
        <Input
          id="exampleZip"
          name="code"
          placeholder="+91"

        />
    </Col>
      <Col md={4}>
        <Input
          id="exampleZip"
          name="phone"
          placeholder="123456789"
          value={number}
          onChange={(e)=>Setnumber(e.target.value)}
        />
    </Col>
      </div>

    </FormGroup>
  </Col>
</Row>

<Button style={{backgroundColor:"#5CC8A1",color:"white",borderRadius:"8px"}}>
  Submit Feedback
</Button>
</Form>

                  </ModalBody>

              </Modal>
     <div className="container">

 {card?(<div style={{margin:"1em"}} className="card-view">  { pagination.map(item => <CardView key={item.id} item={item} removeData={removeData}/> )}</div>):
   (
     <div className="post">
         {  !pagination ? ("No Data Found"):(
             <table className="table table-hover">
             <tbody style={{border: "2px solid white "}} >
               {
                pagination.map((posts,index)=>(
                    <tr key={index} className="head">

                              <td>{posts.id}</td>
                              <td>{posts.userId}</td>
                              <td>{posts.title}</td>
                              <td><button onClick={(e)=>{
                                    e.preventDefault();
                                    removeData(posts.id)}}><BsXLg/></button></td>


                    </tr>
                  ))
                }
            </tbody>
             </table>
           )
         }
     </div>
   )
}
<nav className="d-flex justify-content-center">
  <ul className="pagination">
    {
      pages.map((page)=>(
        <>
          <li className={
              page==currentPage ? "page-item active" : "page-item"
            }><p className="page-link" onClick={()=>paginFunc(page)}>{page}</p>
              <button onClick={()=>paginFunc(page)}><AiOutlineDoubleRight/></button>

          </li>

            </>
      ))
    }


  </ul>
</nav>

 </div>
    </div>
  );
}

export default App;
