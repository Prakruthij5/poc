import React, { useEffect, useState } from "react";
// import logo from "../assets/logo/webscript.png";
// import user from "../assets/user.jpg";
import logo from "../assets/images/logo.png";
import {
  FaBars,
  FaRegChartBar,
  FaTh, FaUserAlt,
} from "react-icons/fa";
import MenuItem from "./MenuItem";
import {useSelector} from 'react-redux';

const SideMenu = (props) => {
  const themeState = useSelector((state)=>state.changeTheme);
  const themeColor= themeState.themeColor;
  const [inactive, setInactive] = useState(false);
const menuItems = [
  {name:"Dashboard", to:`/dashboard`, icon: FaTh, to:"/dashboard"},
  {name:"Ticket Details", to:`/ticketDetails`, icon: FaRegChartBar, to:"/ticketDetails"}
]

useEffect(()=>{
  props.onCollapse(inactive);
},[inactive])

  return (
    <>
      <div className={themeState.themeColor === "light"? `side-menu ${inactive ? "inactive" : ""} sideMenuLightTheme` :
    `side-menu ${inactive ? "inactive" : ""} sideMenuDarkTheme`}>
        <div className="top-section">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="toggle-menu-btn">
            <FaBars onClick={() => setInactive(!inactive)} />
          </div>
        </div>
        <div className="divider" />
        <div className="main-menu">
<ul>
  {/* <li>
    <a className="menu-item">
      <div className="menu-icon">
        <FaTh/>
      </div>
      <span> Dashboard </span></a>
  </li>
  <li>
    <a className="menu-item">
      <div className="menu-icon">
        <FaUserAlt/>
      </div>
      <span> Create Tickets </span></a>
  </li>
  <li>
    <a className="menu-item">
      <div className="menu-icon">
        <FaRegChartBar/>
      </div>
      <span> Ticket Details </span></a>
  </li> */}

{menuItems.map((menuItem, index) =>(
  <MenuItem
  key={index}
  name={menuItem.name}
  to={menuItem.to}
  icon={menuItem.icon}
  />
))}

</ul>
        </div>
      </div></>
  );
};

export default SideMenu;