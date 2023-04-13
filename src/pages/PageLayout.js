import { Outlet } from 'react-router-dom';
import SideMenu from './SideMenu';
import { useEffect, useState } from 'react';
import Header from './Header.js';
import {useSelector} from 'react-redux';

const PageLayout = () => {
  const [inactiveState, setInactiveState] = useState(false);
  useEffect(() => {
    // console.log(inactiveState);
  })

  const themeState = useSelector((state)=>state.changeTheme);
  console.log("themeState",themeState.themeColor);
  return(
  <>
    <div className={themeState.themeColor === "light" ? "lightTheme" : "darkTheme"}>
    <Header/>
    <SideMenu onCollapse={(inactiveState) => setInactiveState(inactiveState)}/>
    <div className={`container ${inactiveState === true ? "inactive" : " "}`}>
    <Outlet />
    </div>
    </div>
  </>
)};

export default PageLayout;