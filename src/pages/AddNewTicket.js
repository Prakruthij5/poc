import React, {useState, useEffect} from 'react'
import { Button, Col, Form, Row, Alert, Container, Card, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import validator from 'validator'

const AddNewTicket = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        name: "",
        email:"",  
        seatNo:"",
        priority: "",
        description:"",
        successMessage: null,
      });
    const [success,setSuccess]=useState(false)
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [priorityErrorMessage,setPriorityErrorMessage]=useState('');
    
    const handleDetailsChange = (e) => {
        e.preventDefault()
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value?.trim()
        }))
          if(e.target.name==='email'){
        validateEmail(e.target.value);
        }
        else if(e.target.name==='priority'){
        validatePriority(e.target.value);
        }
     
    }


    const validateEmail=(email)=>{
    if(validator.isEmail(email)){
      setEmailErrorMessage('')
      }
    else{
        setEmailErrorMessage('Invalid Email Address')
        }
 }

const validatePriority = (priority) => {
    if (priority<5 ) {
        setPriorityErrorMessage('')
      } else {
        setPriorityErrorMessage('Please choose a priority between 1 to 4')
       
      }
  }


     const handleAddTicket=(e)=>{
        // console.log("called post function")
        e.preventDefault();
        const ticket={
            "id" :11,
            "name":state.name,
            "description":state.description,
            "email": state.email,
            "priority":state.priority,
            "seat_number":state.seatNo
        };
        let data=JSON.stringify(ticket)
        console.log(data);
        const res=fetch("https://6409bc8e6ecd4f9e18b9913a.mockapi.io/Tickceting",{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'X-API-Key': '0b8fe110',
            },
            body:JSON.stringify(ticket)
        }).then(
            function (response) {
                if(response.status===201)
                {
                    setSuccess(true)
                    
                    // navigate('/ticketDetails');
                }
            })      

    }
    const handleAlert=()=>{
     setSuccess(false);
     navigate('/ticketDetails')
    }
    const handleCancel=()=>{
        navigate('/ticketDetails')
    }

  return (<>
  
  {success===true&&
 <div className="d-flex justify-content-center m-t-0 m-b-5rem">
 <Alert className="commonAlertElement center" variant="success" 
     onClose={handleAlert} dismissible>
     <p className="xs m-0">
         Ticket Added Successfully
     </p>
 </Alert>
</div>
        }


<div className='containerAddTicket'>  
           <>
            <Card>
            <Card.Header className='card-header' as="h5" >Add New Ticket</Card.Header>
            <Card.Body>
            <Container fluid>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column md={{ span: 5, offset: 0 }} lg={5} sm={5}  className="headingFont" >
                            Name:
                            <Form.Control name="name" value={state.name}  size="sm" type="text" onChange={handleDetailsChange} maxLength={30}/>
                        </Form.Label>

                        <Form.Label column md={{ span: 5, offset: 0 }} lg={5} sm={5} className="headingFont" >
                            Seat No
                            :
                            <Form.Control name="seatNo" type="text" value={state.seatNo} size="sm" onChange={handleDetailsChange} maxLength={25} />
                        </Form.Label>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column md={{ span: 5, offset: 0 }} lg={5} sm={5} className="headingFont" >
                            priority
                            :
                            <Form.Control name="priority" type="number" value={state.priority} size="sm" onChange={handleDetailsChange} maxLength={25} />
                            <span  className={`show-errorMessage ${priorityErrorMessage ? "errorColorRed" : "none"}`}><small>{priorityErrorMessage}</small></span>
                        </Form.Label>
                        <Form.Label column md={{ span: 5, offset: 0 }} lg={5} sm={5} className="headingFont" >
                            Email
                            <Form.Control name="email" type="email" value={state.email} size="sm" onChange={handleDetailsChange} />
                        <span  className={`show-errorMessage ${emailErrorMessage ? "errorColorRed" : "none"}`}><small>{emailErrorMessage}</small></span>
                        </Form.Label>
                    </Form.Group>

                 <Form.Group as={Row}>
                        <Form.Label column md={{ span: 5, offset: 0 }} lg={5} sm={5} className="headingFont" >
                             discription
                            :
                            <Form.Control  name="description" type="text" value={state.discription} size="sm" onChange={handleDetailsChange} maxLength={100}/>
                          
                            
                        </Form.Label>

                      
                    </Form.Group>

<p>  </p><p> </p>
                    <Form.Group>
                        <Col className="center fontFamilyCalibri">
                            <Button  type="Submit" variant="primary" onClick={handleAddTicket}  disabled={!state.name || 
                                    !state.email|| !state.priority || !state.seatNo }>Save</Button> 
                            
                            <span>{' '}</span>
                           <Button variant="primary" onClick={handleCancel}>Cancel</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
            </Card.Body>
            </Card>
        </>
    </div>
  </>
  
  )
}

export default AddNewTicket
