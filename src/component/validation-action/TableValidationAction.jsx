import React from "react"
import ReactPaginate from "react-paginate"
import { MdOutlineLibraryAdd } from "react-icons/md"
import SearchValidationAction from "./SearchValidationAction"

const TableValidationAction = (props) => {
  return (
    <div className='m-4'>
      <div className='w-full overflow-hidden rounded-lg shadow-xs border'>
        <div className='w-full overflow-auto'>
          <div className='flex flex-wrap justify-between items-center m-2 gap-4'>
            <div className='flex flex-wrap items-center gap-5'>
              <button
                onClick={() => props.setModalAdd(true)}
                className='space-x-2 text-sm border border-primary rounded-lg w-max p-2 bg-primary flex items-center text-white hover:bg-purple-600'>
                <MdOutlineLibraryAdd className='w-[20px] h-[20px]' />
                <span className='font-semibold'>Add Validation</span>
              </button>
              <label htmlFor='limitValidationAction'>
                <select
                  id='limitValidationAction'
                  className='block w-full form-select rounded-lg shadow-xs border p-2'
                  value={props.limit}
                  onChange={(e) => props.changeData("limit", e.target.value)}>
                  <option value='10'>10</option>
                  <option value='20'>20</option>
                  <option value='50'>50</option>
                  <option value='100'>100</option>
                </select>
              </label>
            </div>
            <SearchValidationAction
              changeData={props.changeData}
              setSearch={props.setSearch}
            />
          </div>
          <table className='w-full table-auto whitespace-no-wrap'>
            <thead>
              <tr className='text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800'>
                <th className='px-4 py-3'>Action</th>
                <th className='px-4 py-3'>Action Name</th>
                <th className='px-4 py-3'>Action</th>
                <th className='px-4 py-3'>Many Time</th>
                <th className='px-4 py-3'>Channel</th>
                <th className='px-4 py-3'>Created At</th>
                <th className='px-4 py-3'>Updated At</th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y dark:divide-gray-700 dark:bg-gray-800'>
              {props.dataValidationActions?.map((data) => (
                <tr
                  className='text-gray-700 dark:text-gray-400'
                  key={data.idValidation}>
                  <td className='py-3'>
                    <div className='flex items-center space-x-2 text-sm'>
                      <button
                        className='flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray'
                        aria-label='Edit'
                        onClick={() => props.openModalEdit(data.idValidation)}>
                        <svg
                          className='w-5 h-5'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'>
                          <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z'></path>
                        </svg>
                      </button>
                      <button
                        className='flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray'
                        aria-label='Delete'
                        onClick={() =>
                          props.deleteValidationAction(data.idValidation)
                        }>
                        <svg
                          className='w-5 h-5'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'>
                          <path
                            fillRule='evenodd'
                            d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                            clipRule='evenodd'></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className='px-2 py-3 text-sm capitalize'>
                    {data.nameAction}
                  </td>
                  <td className='px-2 py-3 text-sm capitalize'>
                    {data.action}
                  </td>
                  <td className='px-2 py-3 text-sm capitalize'>
                    {data.manyTimes}
                  </td>
                  <td className='px-2 py-3 text-sm normal-case max-w-xs space-y-2'>
                    {data.channel.map((channel, index) => (
                      <div
                        className='rounded-lg shadow-xs border p-2 capitalize'
                        key={index}>
                        <p>
                          Channel :
                          <span>
                            {channel.channel === "sms"
                              ? " SMS"
                              : ` ${channel.channel}`}
                          </span>
                        </p>
                        <p>
                          Title :{" "}
                          {channel.title === "sms" ? "SMS" : channel.title}
                        </p>
                        <p>Message : {channel.message}</p>
                      </div>
                    ))}
                  </td>
                  <td className='px-2 py-3 text-sm capitalize'>
                    {data.createdAt}
                  </td>
                  <td className='px-2 py-3 text-sm capitalize'>
                    {data.updatedAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className='flex flex-wrap justify-between px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800'>
        <p className='flex items-center col-span-3'>
          Data Total : {props.totalData}
          <br /> Page : {props.page} Of {props.totalPages}
        </p>
        <nav
          key={props.totalData}
          role='navigation'
          className='col-span-4 mt-2 sm:mt-4 sm:justify-end'>
          <ReactPaginate
            className='flex flex-wrap justify-center gap-2'
            previousLabel={"<"}
            nextLabel={">"}
            forcePage={props.page - 1}
            pageCount={props.totalPages === 0 ? 1 : props.totalPages}
            onPageChange={props.changePage}
            containerClassName={"flex"}
            pageLinkClassName={
              "text-sm 2xl:text-base inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-primary hover:text-white dark:text-gray-400 dark:bg-gray-700"
            }
            previousLinkClassName={
              "text-sm 2xl:text-base inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-primary hover:text-white"
            }
            nextLinkClassName={
              " text-sm 2xl:text-base inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-primary hover:text-white"
            }
            breakClassName={
              "text-sm 2xl:text-base inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-primary hover:text-white"
            }
            activeLinkClassName={
              "active-paginate dark:text-white dark:bg-gray-700"
            }
            disabledLinkClassName={
              "disable-paginate hover:bg-gray-300 hover:text-gray-500"
            }
          />
        </nav>
      </div>
    </div>
  )
}

export default TableValidationAction
