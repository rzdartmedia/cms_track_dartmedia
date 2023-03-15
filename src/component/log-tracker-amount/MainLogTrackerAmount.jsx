import React, { useEffect, useState } from "react"
import LogTrackerAmountService from "../../app/Services/LogTrackerAmountService"
import ToastNotify from "../../utils/ToastNotify"
import LoadingSpinner from "../template/LoadingSpinner"
import TableLogTrackerAmount from "./TableLogTrackerAmount"

const MainLogTrackerAmount = () => {
  const logTrackerAmountService = new LogTrackerAmountService()
  const [isLoading, setIsLoading] = useState(false)
  const [dataLogTracksAmount, setdataLogTracksAmount] = useState([])
  const [totalData, setTotalData] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(15)
  const [search, setSearch] = useState("")

  useEffect(() => {
    getDataLogTrackAmounts(page, limit, search)
  }, [])

  const changePage = ({ selected }) => {
    setPage(selected + 1)
    getDataLogTrackAmounts(selected + 1, limit, search)
  }

  function changeData(data, value) {
    switch (data) {
      case "limit":
        setPage(1)
        setLimit(value, "")
        getDataLogTrackAmounts(1, value, search)
        break
      default:
        setPage(1)
        setSearch(value)
        getDataLogTrackAmounts(1, limit, value)
    }
  }

  async function getDataLogTrackAmounts(page, dataLimit, dataSearch) {
    setIsLoading(true)
    const result = await logTrackerAmountService.getLogTrackAmounts({
      page,
      limit: dataLimit,
      search: dataSearch,
    })

    if (result.status === "success") {
      setdataLogTracksAmount(result.data.trackActionAmounts)
      setTotalData(result.totalData)
      setTotalPages(result.totalPages)
    } else {
      ToastNotify("error", result.message)
    }

    setIsLoading(false)
  }

  return (
    <main className='h-full overflow-y-auto'>
      <div className='mx-auto'>
        {isLoading && <LoadingSpinner />}
        <TableLogTrackerAmount
          dataLogTracksAmount={dataLogTracksAmount}
          page={page}
          changePage={changePage}
          totalData={totalData}
          totalPages={totalPages}
          setSearch={setSearch}
          limit={limit}
          setLimit={setLimit}
          changeData={changeData}
        />
      </div>
    </main>
  )
}

export default MainLogTrackerAmount
