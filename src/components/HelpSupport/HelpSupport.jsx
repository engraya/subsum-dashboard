import React from 'react'
import PagesWrapper from '../Wrapper/PagesWrapper'
import { whatsapp, report, faq, live, phone, review } from '../../assets'
function HelpSupport() {
  return (
    <PagesWrapper>
    <div className="flex flex-col space-y-6 md:flex-row w-full">
        <div className="px-6 md:px-2 lg:px-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
  <div className="flex flex-col sm:flex-row p-3 w-full gap-2.5 transition-all duration-500 bg-white border border-indigo-100 rounded-2xl shadow hover:shadow-xl">
    <img src={faq} alt="" className="w-24 sm:w-auto max-w-[120px] mx-auto sm:mx-0" />
    <div className="flex-1 space-y-4 text-center sm:text-left cursor-pointer">
      <p className="text-sm text-gray-600">Frequently Asked Questions</p>
      <span className="flex items-center justify-center sm:justify-start text-sm font-bold text-indigo-600">
        See FAQ
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>
    </div>
  </div>

  <div className="flex flex-col sm:flex-row p-3 w-full gap-2.5 transition-all duration-500 bg-white border border-indigo-100 rounded-2xl shadow hover:shadow-xl">
    <img src={whatsapp} alt="" className="w-24 sm:w-auto max-w-[120px] mx-auto sm:mx-0" />
    <div className="flex-1 space-y-4 text-center sm:text-left cursor-pointer">
      <p className="text-sm text-gray-600">Whatsapp</p>
      <span className="flex items-center justify-center sm:justify-start text-sm font-bold text-indigo-600">
        Drop a message
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>
    </div>
  </div>

  <div className="flex flex-col sm:flex-row p-3 w-full gap-2.5 transition-all duration-500 bg-white border border-indigo-100 rounded-2xl shadow hover:shadow-xl">
    <img src={report} alt="" className="w-24 sm:w-auto max-w-[120px] mx-auto sm:mx-0" />
    <div className="flex-1 space-y-4 text-center sm:text-left cursor-pointer">
      <p className="text-sm text-gray-600">Report our Support</p>
      <span className="flex items-center justify-center sm:justify-start text-sm font-bold text-indigo-600">
        Not satisfied?
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>
    </div>
  </div>

  <div className="flex flex-col sm:flex-row p-3 w-full gap-2.5 transition-all duration-500 bg-white border border-indigo-100 rounded-2xl shadow hover:shadow-xl">
    <img src={live} alt="" className="w-24 sm:w-auto max-w-[120px] mx-auto sm:mx-0" />
    <div className="flex-1 space-y-4 text-center sm:text-left cursor-pointer">
      <p className="text-sm text-gray-600">Live Chat</p>
      <span className="flex items-center justify-center sm:justify-start text-sm font-bold text-indigo-600">
        Chat Now
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>
    </div>
  </div>

  <div className="flex flex-col sm:flex-row p-3 w-full gap-2.5 transition-all duration-500 bg-white border border-indigo-100 rounded-2xl shadow hover:shadow-xl">
    <img src={phone} alt="" className="w-24 sm:w-auto max-w-[120px] mx-auto sm:mx-0" />
    <div className="flex-1 space-y-4 text-center sm:text-left cursor-pointer">
      <p className="text-sm text-gray-600">Phone Call</p>
      <span className="flex items-center justify-center sm:justify-start text-sm font-bold text-indigo-600">
        Call Us
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>
    </div>
  </div>

  <div className="flex flex-col sm:flex-row p-3 w-full gap-2.5 transition-all duration-500 bg-white border border-indigo-100 rounded-2xl shadow hover:shadow-xl">
    <img src={review} alt="" className="w-24 sm:w-auto max-w-[120px] mx-auto sm:mx-0" />
    <div className="flex-1 space-y-4 text-center sm:text-left cursor-pointer">
      <p className="text-sm text-gray-600">Review Our App</p>
      <span className="flex items-baseline justify-center sm:justify-start text-sm font-bold text-indigo-600">
        <div className="h-[22px] px-1 py-0.5 bg-[#e1effe] rounded-md inline-flex items-center gap-1">
          <div className="text-center text-[#4169E1] whitespace-nowrap text-xs font-semibold leading-[18px]">Coming soon</div>
        </div>
      </span>
    </div>
  </div>
</div>

      </div>
    </PagesWrapper>
  )
}

export default HelpSupport
