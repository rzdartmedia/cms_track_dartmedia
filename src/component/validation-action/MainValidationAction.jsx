import React, { useEffect, useState } from "react"
import ValidationActionService from "../../app/Services/ValidationActionService"
import ToastNotify from "../../utils/ToastNotify"
import LoadingSpinner from "../template/LoadingSpinner"
import ModalAddValidationAction from "./ModalAddValidationAction"
import ModalEditValidationAction from "./ModalEditValidationAction"
import TableValidationAction from "./TableValidationAction"

const MainValidationAction = () => {
  const validationActionService = new ValidationActionService()
  const [isLoading, setIsLoading] = useState(false)
  const [dataValidationActions, setDataValidationActions] = useState([])
  const [totalData, setTotalData] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [search, setSearch] = useState("")

  // Modal Add
  const [modalAdd, setModalAdd] = useState(false)

  // Modal Edit
  const [validationId, setValidationId] = useState("")
  const [modalEdit, setModalEdit] = useState(false)

  useEffect(() => {
    getDataValidationActions(page, limit, search)
  }, [])

  const changePage = ({ selected }) => {
    setPage(selected + 1)
    getDataValidationActions(selected + 1, limit, search)
  }

  function changeData(data, value) {
    switch (data) {
      case "limit":
        setPage(1)
        setLimit(value, "")
        getDataValidationActions(1, value, search)
        break
      default:
        setPage(1)
        setSearch(value)
        getDataValidationActions(1, limit, value)
    }
  }

  async function getDataValidationActions(page, dataLimit, dataSearch) {
    setIsLoading(true)
    const result = await validationActionService.getValidationActions({
      page,
      limit: dataLimit,
      search: dataSearch,
    })

    if (result.status === "success") {
      setDataValidationActions(result.data.validationLogsAction)
      setTotalData(result.totalData)
      setTotalPages(result.totalPages)
    } else {
      ToastNotify("error", result.message)
    }

    setIsLoading(false)
  }

  async function postValidationAction(payload) {
    const result = await validationActionService.postValidationActions(payload)

    if (result.status === "success") {
      getDataValidationActions()
      ToastNotify("success", result.message)
      setModalAdd(false)
      return true
    } else {
      setIsLoading(false)
      ToastNotify("error", result.response.data.message)
      return false
    }
  }

  async function deleteValidationAction(id) {
    const confirmation = window.confirm(
      "Are you sure you want to delete this data ?"
    )

    if (confirmation) {
      setIsLoading(true)
      const result = await validationActionService.deleteValidationAction(id)
      if (result.status === "success") {
        getDataValidationActions()
        ToastNotify("success", result.message)
      } else {
        setIsLoading(false)
        ToastNotify("error", result.response.data.message)
      }
    }
  }

  function openModalEdit(id) {
    setValidationId(id)
    setModalEdit(true)
  }

  async function getValidationActionById(id) {
    setIsLoading(true)
    const result = await validationActionService.getValidationActionById(id)
    if (result.status === "success") {
      return result.data.validationLogAction
    } else {
      setIsLoading(false)
      ToastNotify("error", result.response.data.message)
    }
  }

  async function updateValidationActionById(data) {
    setIsLoading(true)

    const result = await validationActionService.updateValidationActionById(
      data
    )

    if (result.status === "success") {
      getDataValidationActions()
      ToastNotify("success", result.message)
      setModalEdit(false)
      return true
    } else {
      setIsLoading(false)
      ToastNotify("error", result.response.data.message)
      return false
    }
  }

  return (
    <main className='h-full overflow-y-auto'>
      <div className='mx-auto'>
        {isLoading && <LoadingSpinner />}
        <TableValidationAction
          dataValidationActions={dataValidationActions}
          page={page}
          changePage={changePage}
          totalData={totalData}
          totalPages={totalPages}
          setModalAdd={setModalAdd}
          deleteValidationAction={deleteValidationAction}
          openModalEdit={openModalEdit}
          setSearch={setSearch}
          limit={limit}
          setLimit={setLimit}
          changeData={changeData}
        />
        <ModalAddValidationAction
          modalAdd={modalAdd}
          setModalAdd={setModalAdd}
          setIsLoading={setIsLoading}
          postValidationAction={postValidationAction}
        />
        <ModalEditValidationAction
          modalEdit={modalEdit}
          setModalEdit={setModalEdit}
          setIsLoading={setIsLoading}
          validationId={validationId}
          setValidationId={setValidationId}
          getValidationActionById={getValidationActionById}
          updateValidationActionById={updateValidationActionById}
        />
      </div>
    </main>
  )
}

export default MainValidationAction
