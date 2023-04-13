import { React, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import ConfirmModal from './ConfirmModal';

function Header(props) {
  const dispatch = useDispatch();
  // const [style, setStyle] = useState('');
  // console.log(props.changeTheme)
  // let changeTheme = (e) => {
  //   // e.target.checked === true ? setStyle("darkTheme") : setStyle("lightTheme");
  //   e.target.checked === true ? props.setChangeTheme("darkTheme") : props.setChangeTheme("lightTheme");
  // }

  const [themeColor, setThemeColor] = useState('light');
  const navigate = useNavigate();
  const [showModal,setShowModal]=useState(false);
  let changeTheme = (e) => {
    let _themeColor = e.target.checked === true ? "dark" : "light";
    // e.target.checked === true ? setThemeColor("light") : setThemeColor("dark");
    setThemeColor(_themeColor);
    // e.target.checked === true ? props.setChangeTheme("darkTheme") : props.setChangeTheme("lightTheme");
    dispatch({ type: "THEME", payload: _themeColor });
  }
  console.log(themeColor);
  const signOut=()=>{
    setShowModal(true);
    console.log("logout clicked")
   }
   const handleYesButton=()=>{
    navigate("../");
   setShowModal(false)
 
  }

  return (<div className={themeColor === "light" ? `Header sideMenuLightTheme` : `Header sideMenuDarkTheme`}>
     {
        showModal===true && <ConfirmModal showConfirmationModal={showModal} setShowConfirmationModal={setShowModal} handleYesButton={handleYesButton} ></ConfirmModal>
      }
    <Navbar variant="dark" expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#home" style={{ marginLeft: "45vw" }}>Ticketing System</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example"/>
        <Navbar.Collapse id="navbar-dark-example">
          {/* <Form style={{marginLeft:"20vw"}}>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Change theme"
          onChange={(e) => { changeTheme(e) }}
          size="lg"
          className="checkbox"
          style={{ float:"right" }}>
        </Form.Check>
        </Form> */}
          <Nav style={{ marginLeft: "29vw"}}>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Dropdown"
              menuVariant="dark"           
            >
              <NavDropdown.Item onClick={signOut}>Sign out</NavDropdown.Item>
              <NavDropdown.Item >
                <Form>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label={themeColor === "light" ? "switch to dark theme" : "switch to light theme"}
                    onChange={(e) => { changeTheme(e) }}
                    size="lg"
                    className="checkbox">
                  </Form.Check>
                </Form>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
}

export default Header;