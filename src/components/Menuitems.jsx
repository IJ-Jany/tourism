import React from 'react'
import { IoHome } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoLogIn } from "react-icons/io5";

const Menuitems = () => {
  return (
   {
    title: "Home",
    url:"/",
    cName:"nav-links",
    icon:" <IoHome />"
   },
   {
    title: "About",
    url:"/about",
    cName:"nav-links",
    icon:"<IoIosArrowRoundForward />"
   },
   {
    title: "Service",
    url:"/service",
    cName:"nav-links",
    icon:" <FaHandHoldingHeart />"
   },
   {
    title: "Contact",
    url:"/contact",
    cName:"nav-links",
    icon:"<IoMdContact />"
   },
   {
    title: "Signup",
    url:"/signup",
   cName:"nav-links-button"
   }
  )
}

export default Menuitems