import React from "react"

const BoxChannel = (props) => {
  return (
    <div>
      {/* SMS */}
      <label className='flex items-center dark:text-gray-400'>
        <input
          type='checkbox'
          checked={props.boxChannelSms}
          onChange={() => props.checkBoxChannel("sms")}
          className='text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray'
        />
        <span className='ml-2'>SMS</span>
      </label>
      <div
        className={`ml-2 mt-1 space-y-2 ${
          props.boxChannelSms ? "" : "hidden"
        }`}>
        <label
          className='block text-gray-700 text-sm dark:text-gray-300'
          htmlFor='messageSms'>
          Message SMS
        </label>
        <textarea
          className={`shadow appearance-none border ${
            props.errors.messageSms ? "border-red-500" : ""
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-gray-300`}
          id='messageSms'
          type='text'
          rows={4}
          value={props.messageChannelSms}
          onChange={(e) => props.setMessageChannelSms(e.target.value)}
          placeholder='You transaction is successfuly'
        />
        <div className='text-error'>{props.errors.messageSms}</div>
      </div>
      {/* Email */}
      <label className='flex items-center dark:text-gray-400'>
        <input
          type='checkbox'
          checked={props.boxChannelEmail}
          onChange={() => props.checkBoxChannel("email")}
          className='text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray'
        />
        <span className='ml-2'>Email</span>
      </label>
      <div
        className={`ml-2 mt-1 space-y-2 ${
          props.boxChannelEmail ? "" : "hidden"
        }`}>
        <label
          className='block text-gray-700 text-sm dark:text-gray-300'
          htmlFor='titleEmail'>
          Subject Email
        </label>
        <input
          className={`shadow appearance-none border ${
            props.errors.titleEmail ? "border-red-500" : ""
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-gray-300`}
          id='titleEmail'
          type='text'
          placeholder='Success Transaction'
          value={props.titleChannelEmail}
          onChange={(e) => props.setTitleChannelEmail(e.target.value)}
        />
        <div className='text-error'>{props.errors.titleEmail}</div>
        <label
          className='block text-gray-700 text-sm dark:text-gray-300'
          htmlFor='messageEmail'>
          Message Email
        </label>
        <textarea
          className={`shadow appearance-none border ${
            props.errors.messageEmail ? "border-red-500" : ""
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-gray-300`}
          id='messageEmail'
          type='text'
          rows={4}
          placeholder='You transaction is successfuly'
          value={props.messageChannelEmail}
          onChange={(e) => props.setMessageChannelEmail(e.target.value)}
        />
        <div className='text-error'>{props.errors.messageEmail}</div>
      </div>
      {/* App */}
      <label className='flex items-center dark:text-gray-400'>
        <input
          type='checkbox'
          checked={props.boxChannelApp}
          onChange={() => props.checkBoxChannel("app")}
          className='text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray'
        />
        <span className='ml-2'>Aplication</span>
      </label>
      <div
        className={`ml-2 mt-1 space-y-2 ${
          props.boxChannelApp ? "" : "hidden"
        }`}>
        <label
          className='block text-gray-700 text-sm dark:text-gray-300'
          htmlFor='titleApp'>
          Title Notif Application
        </label>
        <input
          className={`shadow appearance-none border ${
            props.errors.titleApp ? "border-red-500" : ""
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-gray-300`}
          id='titleApp'
          type='text'
          placeholder='Success Transaction'
          value={props.titleChannelApp}
          onChange={(e) => props.setTitleChannelApp(e.target.value)}
        />
        <div className='text-error'>{props.errors.titleApp}</div>
        <label
          className='block text-gray-700 text-sm dark:text-gray-300'
          htmlFor='messageApp'>
          Message Notif Application
        </label>
        <textarea
          className={`shadow appearance-none border ${
            props.errors.messageApp ? "border-red-500" : ""
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-gray-300`}
          id='messageApp'
          type='text'
          rows={4}
          placeholder='You transaction is successfuly'
          value={props.messageChannelApp}
          onChange={(e) => props.setMessageChannelApp(e.target.value)}
        />
        <div className='text-error'>{props.errors.messageApp}</div>
      </div>
    </div>
  )
}

export default BoxChannel
