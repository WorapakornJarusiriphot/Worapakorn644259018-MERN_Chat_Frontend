import { useState, useEffect, useContext, useRef } from 'react'
import { UserContext } from "../context/UserContext"
import axios from 'axios'
import Logo from './Logo'
import Contact from './Contact'

const Chat = () => {
  return (
    <div className='flex h-screen'>
      <div className='bg white w-1/3 flex flex-col'>
        <div className='flex-grow'>
          <Logo />
          <Contact username={"woja"} id={"65a79fa4a8cdd83a95ce35ae"} online={true} selected={true} />
          <Contact username={"worapakorn"} id={"65a786419337c191d90ae821"} online={false} selected={false} />
        </div>
        <div className='p-2 text-center flex items-center justify-center'>
          <span className='mr-2 text-ms text-gray-600 flex items-center'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5">
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd" />
            </svg>
            Username
          </span>
          <button className='text-sm bg-blue-100 py-1 px-2 text-gray-500 border rounded-sm'>
            Logout
          </button>
        </div>
      </div>
      <div className="flex flex-col bg-blue-50 w-2/3 p-2">
        <div className="flex-grow">
          <div className="relative h-full flex-grow items-center justify-center">
            <div className="text-gray-300">
              &larr; Select a person from sidebar
            </div>
          </div>
        </div>
        <form className="flex gap-2">
          <input type="text" placeholder='Type your message' className="bg-white flex-grow border rounded-sm p-2" />
          <label className="bg-blue-200 p-2 text-gray-600 cursor-pointer rounded-sm border border-blue-200">
            <input type="file" className='hidden' />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
            </svg>
          </label>
          <button type="submit" className="bg-blue-500 p-2 text-white rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chat