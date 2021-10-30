import {React,useState} from 'react'
import "./Sidebar.css"
import Profile from "./Profile.ico"
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { BsCardText } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
export default function Sidebar(props) {
  const [hide,Sethide] =useState(true)
  const handleView=(e)=>{
    e.preventDefault();

    Sethide(false)
    props.handleformmodal()
  }
  return (
    <div className="Sidebar">
    <Card
className="card"
style={{
backgroundColor:'white',
borderColor: '#333',
marginTop: '15%',
}}
>
<CardBody className="cardbody">
    <CardImg src={Profile} className="icon"></CardImg>
    <div className="profile">
      <h3>Hi Reader,</h3>
      <h5>Here's your News!</h5>
    </div>
</CardBody>

</Card>
{(hide || !props.view) ? (
  <Card
  className="card"
  style={{
  backgroundColor:'white',
  borderColor: '#333',

  }}
  >
  <CardTitle tag="h2" style={{textAlign: 'center'}} >View Toggle</CardTitle>
  <CardBody className="cardbody" style={{justifyContent: 'space-between'}}>
    <button onClick={props.handletoggle}><BsCardText size="100%" style={{backgroundColor:"#DCE5EC" }}/></button>
  <button onClick={props.handletoggle1}><BsListUl size="100%" style={{backgroundColor:"#99F1CA"}}/></button>

  </CardBody>

  </Card>
):(<hr/>)}


<Card
className="card"
style={{
backgroundColor:'white',
borderColor: '#333'
}}
>
<CardTitle tag="h2" style={{textAlign: 'center'}} >Have A Feedback?</CardTitle>
<CardBody>
<Button color="secondary" style={{width:"100%",backgroundColor:"rgb(148,234,198)",color:"black",fontSize:"20px",fontWeight:"600"}} onClick={handleView}>We're Listening</Button>
</CardBody>
</Card>
    </div>
  )
}
