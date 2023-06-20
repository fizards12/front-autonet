import React, { useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import NavBar from "./NavBar";
import styles from "./header.module.css"
import { ModalContext } from "../../../App";
import useCreateModal from "../../../Hooks/useCreateModal";
import { Outlet } from "react-router-dom";


export default function Header() {


  const [showMainHeaderAndHideNavBar, setShowMainHeaderAndHideNavBar] = useState(true);
  const modal = useCreateModal();

  const listenToScroll = () => {
    const yOffset = window.scrollY;
    setShowMainHeaderAndHideNavBar(yOffset < 40);
  };

  const [menu, setMenu] = useState(false);

  const openMenu = (e) => {
    if (e.currentTarget.className !== "") 
      e.preventDefault();
    setMenu(!menu);
  };

  useEffect(() => {
    document.addEventListener("scroll", listenToScroll);
    
    return () => document.removeEventListener("scroll", listenToScroll);
  });
  
  return (
    <ModalContext.Provider value={modal}>
      <Outlet/>
      
      <header className={"position-sticky top-0 w-100 " + styles.index}>
        <NavBar
          styles = {styles}
          isVisible={()=>!showMainHeaderAndHideNavBar}
          menu={menu}
          openMenu={openMenu}
        />
        <MainHeader styles = {styles} isVisible={()=>showMainHeaderAndHideNavBar} />
      </header>
    </ModalContext.Provider>
  );
}
