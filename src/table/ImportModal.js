import React, {useState} from "react";
import { Modal, Form,Alert } from "react-bootstrap";
import { json } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';

function ImportModal({
  showModal,
  setShowModal,
}) {

  const [alertMessage, setAlertMessage] = useState("");
  const [alertMessageColor, setAlertMessageColor] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const[file, setFile] = useState()
  const mockData = useSelector((state)=>state.dataFromApi).dataFromApi;

  const fileReader = new FileReader();
  const dispatch = useDispatch();

const handleFile=(e)=>{ 
  e.preventDefault();
  setFile(e.target.files[0]);       
     //console.log(e.target);  
}
const handleUpload=async(e)=>{    
 
  let csvOutput=[];
  let data;
  if (file) {
    fileReader.onload = function (event) {
        let csvOutput = event.target.result;
        csvOutput=JSON.parse(csvOutput);
        console.log(csvOutput)
        csvOutput.map((e)=> mockData.push(e))
        dispatch({ type: "DATA", payload: mockData });
        dispatch({ type: "TICKET_IMPORTED", payload: true });
        // csvOutput.forEach(element => {
        //   // console.log("formdata here ",element)
        // });
       data= JSON.stringify(csvOutput[0])
       console.log("data",mockData)
       setAlertMessageColor("success");
       setShowAlert(true);
       setAlertMessage("file imported successfully");
                setTimeout(() => {
                  setAlertMessageColor("success");
                  setShowAlert(false);
                  setShowModal(false)
                }, 3000);
          };

    fileReader.readAsText(file);
}
 

   
     await axios.post("https://6409bc8e6ecd4f9e18b9913a.mockapi.io/Tickceting" ,'',csvOutput, {
      "headers": {
          'Content-Type': 'application/json', 
      }
      
      
  }).then(function(response){
              if(response.status==201){
                setAlertMessageColor("success");
                setShowAlert(true);
                setAlertMessage("file imported successfully");
                setTimeout(() => {
                  setShowAlert(false);
                  setShowModal(false)
                }, 3000);
                  
              }
          }
      )
   }

 const handleAlert = () => {
  setShowAlert(false);
};
  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
        <Modal.Header className="confirmBoxHeader">
        <h5>Import Modal</h5>
        <button
          type="button"
          class="close"
          aria-label="Close"
          onClick={() => setShowModal(false)}
        >
          x
        </button>
      </Modal.Header>

       

      <Modal.Body style={{ paddingTop: "10px", paddingBottom: "0px" }}>
 <div className="d-flex justify-content-center m-t-0 m-b-5rem">
          <Alert
            className="commonAlertElement center"
            variant={alertMessageColor}
            show={showAlert}
            onClose={handleAlert}
            dismissible
          >
            <p className="xs m-0">{alertMessage}</p>
          </Alert>
        </div>
        <div className="text-center">
          
            <input type={"file"} name="file" accept={""}  onChange={handleFile}/>   
                   
          </div>
        
        <button
              type="button"
              style={{ fontFamily: "Calibri" }}
              class="btn btn-primary btn-sm"
              onClick={(e) => {
                handleUpload(e);
            }}
            >
              Import
            </button>
      </Modal.Body>
    </Modal>
  );
}

export default ImportModal;
