import React from "react";
import { Link } from "react-router-dom";
export default function Login() {

  return (
    <section className="py-4 md:py-8">
    <div className="flex flex-col items-center justify-center px-4 py-8 mx-auto md:h-screen lg:py-0">
      <div  className="flex items-center text-3xl font-bold text-[#4C689E] dark:text-white">
        Login
      </div>
      <div className="w-full md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form id="connect-google-button" method="post" action>
            <button className="w-full inline-flex items-center shadow-lg shadow-blue-200 hover:-tranneutral-y-px justify-center py-5 px-12 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_13183_10121)"><path d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z" fill="#3F83F8" /><path d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z" fill="#34A853" /><path d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z" fill="#FBBC04" /><path d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z" fill="#EA4335" /></g><defs><clipPath id="clip0_13183_10121"><rect width={20} height={20} fill="white" transform="translate(0.5)" /></clipPath></defs>
              </svg>
              Login in with Google
            </button>
          </form>
          <div className="flex items-center">
            <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700" />
            <div className="px-5 text-center whitespace-nowrap text-gray-500 dark:text-gray-400">or continue with</div>
            <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700" />
          </div>
          <form className="space-y-4 md:space-y-6 bg-white rounded-lg  px-4 py-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
              <input type="email" name="login" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="wapdotmail@gmail.com" />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" name="password" id="password" placeholder="Gabon4351" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultValue className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</span>
              </label>
              </div>
              <a href className="text-sm font-medium text-orange-600 hover:underline dark:text-teal-500">Recover password?</a>
            </div>
            <Link to="/dashboard">
            <button type="submit" className="text-white mt-6 bg-[#4169E1] py-2 px-12 rounded-lg font-bold w-full">
              Login
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
}
