import React, { useState } from "react"
import ValidationActionValidator from "../../app/Validator/ValidationActionValidator"
import BoxChannel from "./BoxChannel"

const ModalAddValidationAction = (props) => {
  const [nameAction, setNameAction] = useState("")
  const [action, setAction] = useState("")
  const [manyTimes, setManyTimes] = useState("")
  const [errors, setErrors] = useState({})

  // data checked
  const [boxChannelSms, setBoxChannelSms] = useState(false)
  const [boxChannelEmail, setBoxChannelEmail] = useState(false)
  const [boxChannelApp, setBoxChannelApp] = useState(false)

  const [messageChannelSms, setMessageChannelSms] = useState("")
  const [titleChannelEmail, setTitleChannelEmail] = useState("")
  const [messageChannelEmail, setMessageChannelEmail] = useState("")
  const [titleChannelApp, setTitleChannelApp] = useState("")
  const [messageChannelApp, setMessageChannelApp] = useState("")

  function closeModal() {
    props.setModalAdd(false)
    clearForm()
    setErrors({})
  }

  async function submitValidationAction(e) {
    e.preventDefault()
    props.setIsLoading(true)
    setErrors({})

    const dataChannel = []
    if (boxChannelSms) {
      dataChannel.push({
        channel: "sms",
        title: "sms",
        message: messageChannelSms,
      })
    }

    if (boxChannelEmail) {
      dataChannel.push({
        channel: "email",
        title: titleChannelEmail,
        message: messageChannelEmail,
      })
    }

    if (boxChannelApp) {
      dataChannel.push({
        channel: "app",
        title: titleChannelApp,
        message: messageChannelApp,
      })
    }

    const data = { nameAction, action, manyTimes, channel: dataChannel }
    const { errors: errorValidate, formIsValid } =
      ValidationActionValidator.validatePostValidationAction(data)

    if (!formIsValid) {
      console.log(errorValidate)
      setErrors(errorValidate)
      props.setIsLoading(false)
      return false
    }

    const result = await props.postValidationAction(data)
    if (result) clearForm()
  }

  function clearForm() {
    setNameAction("")
    setAction("")
    setManyTimes("")

    setBoxChannelSms(false)
    setBoxChannelEmail(false)
    setBoxChannelApp(false)

    setMessageChannelSms("")
    setTitleChannelEmail("")
    setMessageChannelEmail("")
    setTitleChannelApp("")
    setMessageChannelApp("")
  }

  function checkBoxChannel(channel) {
    switch (channel) {
      case "sms":
        setBoxChannelSms(!boxChannelSms)
        break
      case "email":
        setBoxChannelEmail(!boxChannelEmail)
        break
      default:
        setBoxChannelApp(!boxChannelApp)
    }
  }

  return (
    <div
      tabIndex='-1'
      aria-hidden='true'
      className={`${
        !props.modalAdd ? "invisible" : ""
      } fixed inset-0 z-30 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center overflow-auto`}>
      <div className='w-full min-h-max max-h-[85vh] px-4 py-4 overflow-auto bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl'>
        <div className='relative bg-white rounded-lg p-2 dark:bg-gray-700'>
          <div className='flex justify-between items-start rounded-t'>
            <h3 className='p-2 font-semibold text-gray-900 dark:text-white'>
              Add Validation
            </h3>
            <button
              onClick={closeModal}
              type='button'
              className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
              data-modal-toggle='defaultModal'>
              <svg
                aria-hidden='true'
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'></path>
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>
          </div>
          {/* Form Add Data Tagihan */}
          <form onSubmit={(e) => submitValidationAction(e)}>
            <div className='max-w-lg m-auto space-y-3 my-4 text-sm'>
              <div>
                <label
                  className='block text-gray-700 text-sm font-bold mb-1 dark:text-gray-300'
                  htmlFor='nameAction'>
                  Name Action
                </label>
                <input
                  className={`shadow appearance-none border ${
                    errors.nameAction ? "border-red-500" : ""
                  } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-gray-300`}
                  id='nameAction'
                  type='text'
                  placeholder='Top Up'
                  value={nameAction}
                  onChange={(e) => setNameAction(e.target.value)}
                />
                <div className='text-error'>{errors.nameAction}</div>
              </div>
              <div>
                <label
                  className='block text-gray-700 text-sm font-bold mb-1 dark:text-gray-300'
                  htmlFor='action'>
                  Action
                </label>
                <input
                  className={`shadow appearance-none border ${
                    errors.action ? "border-red-500" : ""
                  } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-gray-300`}
                  id='action'
                  type='text'
                  placeholder='Transaction'
                  value={action}
                  onChange={(e) => setAction(e.target.value)}
                />
                <div className='text-error'>{errors.action}</div>
              </div>
              <div>
                <label
                  className='block text-gray-700 text-sm font-bold mb-1 dark:text-gray-300'
                  htmlFor='manyTimes'>
                  Many Times
                </label>
                <input
                  className={`shadow appearance-none border ${
                    errors.manyTimes ? "border-red-500" : ""
                  } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-gray-300`}
                  id='manyTimes'
                  type='number'
                  placeholder='1'
                  value={manyTimes}
                  onChange={(e) => setManyTimes(e.target.value)}
                />
                <div className='text-error'>{errors.manyTimes}</div>
              </div>
              <div>
                <label
                  className='block text-gray-700 text-sm font-bold mb-1 dark:text-gray-300'
                  htmlFor='channel'>
                  Channel
                </label>
                <div className='text-error'>{errors.channel}</div>
                <BoxChannel
                  checkBoxChannel={checkBoxChannel}
                  boxChannelSms={boxChannelSms}
                  boxChannelEmail={boxChannelEmail}
                  boxChannelApp={boxChannelApp}
                  errors={errors}
                  messageChannelSms={messageChannelSms}
                  setMessageChannelSms={setMessageChannelSms}
                  titleChannelEmail={titleChannelEmail}
                  setTitleChannelEmail={setTitleChannelEmail}
                  messageChannelEmail={messageChannelEmail}
                  setMessageChannelEmail={setMessageChannelEmail}
                  titleChannelApp={titleChannelApp}
                  setTitleChannelApp={setTitleChannelApp}
                  messageChannelApp={messageChannelApp}
                  setMessageChannelApp={setMessageChannelApp}
                />
              </div>
            </div>
            <div className='flex justify-end items-center p-6 pb-0 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'>
              <button
                data-modal-toggle='defaultModal'
                type='submit'
                className='text-white bg-primary dark:bg-gray-700 dark:border-white dark:border hover:drop-shadow-xl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-gray-600 dark:hover:text-gray-200'>
                Save
              </button>
              <button
                onClick={closeModal}
                data-modal-toggle='defaultModal'
                type='reset'
                className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-white dark:text-gray-700 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalAddValidationAction
