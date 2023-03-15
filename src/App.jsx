import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import LogTracker from "./pages/LogTracker"
import ValidationAction from "./pages/ValidationAction"

import "react-toastify/dist/ReactToastify.css"
import LogTrackerAmount from "./pages/LogTrackerAmount"

const App = () => {
  const [pageActive, setPageActive] = useState("")

  return (
    <BrowserRouter basename='/'>
      <ToastContainer />
      <Routes>
        <Route
          index
          element={
            <LogTracker pageActive={pageActive} setPageActive={setPageActive} />
          }></Route>
        <Route
          path='/validation-action'
          element={
            <ValidationAction
              pageActive={pageActive}
              setPageActive={setPageActive}
            />
          }></Route>
        <Route
          path='/log-tracker-amount'
          element={
            <LogTrackerAmount
              pageActive={pageActive}
              setPageActive={setPageActive}
            />
          }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
