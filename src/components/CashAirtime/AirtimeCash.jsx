import React from 'react'
import PagesWrapper from '../Wrapper/PagesWrapper'
import { Link } from 'react-router-dom'
import { etisalat } from '../../assets'
function AirtimeCash() {
  return (
    <section className="py-4">
  <div className="flex flex-col items-center justify-center px-4 mx-auto md:h-screen lg:py-0">
  <div className="mb-6 mt-16 md:mt-0">
  <div className="flex flex-col gap-[54px] items-center">
    {/* Progress at the bottom */}
    <nav
      aria-label="Progress"
      className="w-full max-w-[450px]"
    >
      <ol role="list" className="space-y-2 md:flex md:space-x-8 md:space-y-0">
        <li className="md:flex-1">
          <div
            className="group cursor-pointer flex flex-col py-2 pl-4 md:pt-0 md:pl-0 md:pb-4 border-l-4 border-indigo-600 md:border-l-0 md:border-b-4"
            aria-current="step"
          >
            <span className="text-sm font-semibold whitespace-nowrap text-[#4169E1]">
              Fill Info
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div
            className="group cursor-pointer flex flex-col py-2 pl-4 md:pt-0 md:pl-0 md:pb-4 border-l-4 border-gray-200 hover:border-gray-300 md:border-l-0 md:border-b-4"
          >
            <span className="text-sm font-semibold text-[#D7E1F4] whitespace-nowrap group-hover:text-gray-700">
              Make Payment
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div
            className="group cursor-pointer flex flex-col py-2 pl-4 md:pt-0 md:pl-0 md:pb-4 border-l-4 border-gray-200 hover:border-gray-300 md:border-l-0 md:border-b-4"
          >
            <span className="text-sm font-semibold text-[#D7E1F4] whitespace-nowrap group-hover:text-gray-700">
              View Receipt
            </span>
          </div>
        </li>
      </ol>
    </nav>
  </div>
</div>



    <div className="w-full bg-[#F7F9FD] rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <form className="space-y-4 md:space-y-6">
        <div className="mb-5 pt-3">
          <label className="mb-5 block text-base text-center font-semibold text-[#6882B6] sm:text-xl">
            Airtime to Cash
          </label>
          <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
  <label
    htmlFor="countries"
    className="block text-sm font-medium text-[#6882B6] dark:text-white"
  >
    Choose a Country
  </label>
  <div className="relative">
    <img
      src={etisalat} // Replace with your image URL
      alt="country-icon"
      className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
    />
    <select
      id="countries"
      className="bg-white border border-gray-300 text-[#6882B6] font-semibold sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full pl-10 pr-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 appearance-none"
    >
      <option selected>Etisalat</option>
      <option>MTN</option>
      <option>GLO</option>
      <option>Airtel</option>
      <option>Starcom</option>
    </select>
  </div>
</div>


            <div className="w-full px-3 sm:w-1/2">
              <label htmlFor="email" className="block text-sm font-medium text-[#6882B6] dark:text-white">Phone Number</label>
              <input type="text" name="phone" id="phone" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="09077554433" />
            </div>
          </div>
        </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#6882B6] dark:text-white">Amount</label>
            <input type="email" name="login" id="email" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="₦ 5000" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#6882B6] dark:text-white">Airtime Share Pin</label>
            <input type="password" name="password" id="password" placeholder="3543645351" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <Link to="#">
          <button type="submit" className="text-white mt-6 bg-[#4169E1] py-1.5 px-4 rounded font-bold w-full">
            Proceed
          </button>
          </Link>
        </form>
      </div>
    </div>
  </div>
</section>
  )
}

export default AirtimeCash
