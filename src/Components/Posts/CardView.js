import "./Card.css"
import {React,useState} from 'react'
import {BsXLg} from "react-icons/bs";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

import {
     Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap"
function CardView(props) {
const [modal,setModal] = useState(false);
  const {item} = props;
  const modalcard=(e)=>{
    e.preventDefault();
  toggle()
  }
  const toggle=()=>{
      setModal(!modal)
  }

  return (
    <div >
         <Modal isOpen={modal} toggle={toggle} style={{borderRadius:"10px"}}   size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
           <ModalHeader
               toggle={toggle} style={{backgroundColor:"#4074B0",color:'white'}}>{item.userId} {item.title}</ModalHeader>
             <ModalBody>{item.body}</ModalBody>
         </Modal>
    <Card style={{display: 'flex', flexDirection: 'row',margin:"1rem"}} >

    <CardBody>
     <CardTitle tag="h5" className="ow">
      {item.userId}  {item.title}
      <div>
        <button onClick={(e)=>{
              e.preventDefault();
              {props.removeData(item.id)}}} className="button"><BsXLg/></button>
      </div>

     </CardTitle>

     <CardText className="ow1">
                {item.body}

        </CardText>
        <CardText className="ow1" style={{textAlign: 'center'}}>
                <button onClick={modalcard}>View Details</button>

           </CardText>


    </CardBody>
    </Card>
    </div>
  )
}

export default CardView
