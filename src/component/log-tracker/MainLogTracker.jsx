import React, { useEffect, useState } from "react"
import LogTrackerService from "../../app/Services/LogTrackerService"
import ToastNoify from "../../utils/ToastNotify"
import LoadingSpinner from "../template/LoadingSpinner"
import TableLogTracker from "./TableLogTracker"

const MainLogTracker = () => {
  const logTrackService = new LogTrackerService()
  const [isLoading, setIsLoading] = useState(false)
  const [dataLogTracks, setdataLogTracks] = useState([])
  const [totalData, setTotalData] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(15)
  const [search, setSearch] = useState("")

  useEffect(() => {
    getDataLogTracks(page, limit, search)
  }, [])

  const changePage = ({ selected }) => {
    setPage(selected + 1)
    getDataLogTracks(selected + 1, limit, search)
  }

  function changeData(data, value) {
    switch (data) {
      case "limit":
        setPage(1)
        setLimit(value)
        getDataLogTracks(1, value, search)
        break
      default:
        setPage(1)
        setSearch(value)
        getDataLogTracks(1, limit, value)
    }
  }

  async function getDataLogTracks(page, dataLimit, dataSearch) {
    setIsLoading(true)
    const result = await logTrackService.getLogTracks({
      page,
      limit: dataLimit,
      search: dataSearch,
    })

    if (result.status === "success") {
      setdataLogTracks(result.data.logTrackers)
      setTotalData(result.totalData)
      setTotalPages(result.totalPages)
    } else {
      ToastNoify("error", result.message)
    }

    setIsLoading(false)
  }

  return (
    <main className='h-full overflow-y-auto'>
      <div className='mx-auto'>
        {isLoading && <LoadingSpinner />}
        <TableLogTracker
          dataLogTracks={dataLogTracks}
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

export default MainLogTracker
