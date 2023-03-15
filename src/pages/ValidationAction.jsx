import React, { useEffect, useState } from "react"
import Header from "../component/template/Header"
import Sidebar from "../component/template/Sidebar"
import MainValidationAction from "../component/validation-action/MainValidationAction"

const ValidationAction = (props) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  useEffect(() => {
    props.setPageActive("Validation Action")
  }, [])

  function toggleSideMenu() {
    const hamburger = document.getElementById("humbergerButton")
    hamburger.classList.toggle("hamburger-active")
    setIsSideMenuOpen(!isSideMenuOpen)
  }

  return (
    <div className='flex h-screen bg-gray-50 dark:bg-gray-900'>
      <Sidebar pageActive={props.pageActive} isSideMenuOpen={isSideMenuOpen} />
      <div className='flex flex-col flex-1 w-full overflow-auto'>
        <Header pageActive={props.pageActive} toggleSideMenu={toggleSideMenu} />
        <MainValidationAction />
      </div>
    </div>
  )
}

export default ValidationAction
