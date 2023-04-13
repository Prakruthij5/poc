import { useEffect, useState } from 'react';
import './App.css';
import SideMenu from './pages/SideMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TicketDetails from './pages/TicketDetails';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
import PageLayout from './pages/PageLayout.js';
import AddNewTicket from './pages/AddNewTicket';
import Header from './pages/Header';
import { createHashHistory } from '@remix-run/router';
import {useSelector} from 'react-redux';

function App() {
  const themeState = useSelector((state)=>state.changeTheme);
  console.log(themeState.themeColor);
  // const [inactiveState, setInactiveState] = useState(false);

  useEffect(() => {
    // console.log(inactiveState);
  })

  return (
    <div className="App">
      <BrowserRouter>
     {/* <SideMenu onCollapse={(inactiveState) => setInactiveState(inactiveState)}/>  */}
        {/* <div className={`container ${inactiveState === true ? "inactive" : " "}`}> */}
        <div>
          <Routes>
          <Route element={<PageLayout/>}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/ticketDetails' element={<TicketDetails />}></Route>
              <Route path='ticketDetails/addNewTicket' element={<AddNewTicket></AddNewTicket>}
              >
            </Route>
          </Route>
            <Route index element={<Login />} />
            <Route exact path='/sign-up' element={<Register />} />
            <Route path="login" element={<Login />} /> 
        <Route path="register" element={<Register />} />
            {/* <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='/ticketDetails' element={<TicketDetails />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
