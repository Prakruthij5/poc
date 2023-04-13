import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => {
  return(
    <>
     <li>
    <NavLink className="menu-item" to={props.to}>
      <div className="menu-icon">
        {/* {<props.icon/>} */}
        {<props.icon/>}
      </div>
      <span> {props.name} </span></NavLink>
  </li>
    </>
  )
}

export default MenuItem;