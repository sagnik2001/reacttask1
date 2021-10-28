import React from 'react'
import "./Sidebar.css"
import Profile from "./Profile.ico"
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { BsCardText } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
export default function Sidebar() {
  return (
    <div className="Sidebar">
    <Card
className="card"
style={{
backgroundColor:'white',
borderColor: '#333'
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
<Card
className="card"
style={{
backgroundColor:'white',
borderColor: '#333'
}}
>
<CardTitle tag="h2" style={{textAlign: 'center'}} >View Toggle</CardTitle>
<CardBody className="cardbody" style={{justifyContent: 'space-between'}}>
<BsCardText size="40%" style={{color:"#98EEC8"}}/>
<BsListUl size="40%" style={{color:"#9C9C9C"}}/>
</CardBody>

</Card>
<Card
className="card"
style={{
backgroundColor:'white',
borderColor: '#333'
}}
>
<CardTitle tag="h2" style={{textAlign: 'center'}} >Have A Feedback?</CardTitle>
<CardBody>
<Button color="secondary" style={{width:"100%",backgroundColor:"rgb(148,234,198)",color:"black",fontSize:"20px",fontWeight:"600"}}>We're Listening</Button>
</CardBody>
</Card>
    </div>
  )
}
