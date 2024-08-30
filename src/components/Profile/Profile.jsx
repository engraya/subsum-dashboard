import React from 'react'
import PagesWrapper from '../Wrapper/PagesWrapper'
import { copy, camera, bak } from "../../assets";
function Profile() {
  return (
    <PagesWrapper>
             <div className="w-full flex flex-col justify-between rounded-lg">
             <div className="flex flex-col md:flex-row">
                {/* end can help image */}
                <div className="grid gap-4 md:grid-cols-1 lg:gap-1 p-6 space-y-4 md:p-6">
                <div className="flex flex-col lg:flex-row items-center justify-center cursor-pointer p-6 gap-4 bg-white border border-indigo-100 rounded-2xl shadow transition-all duration-500 hover:shadow-xl w-full lg:w-[416px] h-auto lg:h-[184px]">
  <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
    <img src={bak} alt="Icon" className="w-auto h-auto" />
    <div className="flex items-center gap-2.5">
      <img src={camera} alt="Upload" className="w-auto h-auto" />
      <span className="text-[#4169E1] font-semibold">Upload Image</span>
    </div>
  </div>
</div>

<div className="card flex flex-col md:flex-row items-center p-6 gap-4 bg-white border border-indigo-100 rounded-2xl shadow w-full md:w-[416px] h-auto md:h-[271px]">
  {/* Left side */}
  <div className="flex-1 text-center md:text-left flex flex-col gap-4">
    <p className="font-normal text-[#4C689E]">Name</p>
    <p className="font-normal text-[#4C689E]">Email</p>
    <p className="font-normal text-[#4C689E]">Phone Number</p>
    <p className="font-normal text-[#4C689E]">Account status</p>
    <p className="font-normal text-[#4C689E]">Referral link</p>

    <span className="font-bold text-[#4169E1] mt-8 cursor-pointer">Edit Details</span>
  </div>

  {/* Right side */}
  <div className="flex-1 text-center md:text-right flex flex-col gap-4">
    <p className="font-bold whitespace-nowrap text-[#4C689E]">Lawal Wahab Babatunde</p>
    <p className="font-bold whitespace-nowrap text-[#4C689E]">wabdotmail@gmail.com</p>
    <p className="font-bold whitespace-nowrap text-[#4C689E]">09088776655</p>
    <p className="font-bold whitespace-nowrap text-[#2DAE32]">Active</p>
    <div className="flex flex-col">
      <p className="font-bold whitespace-nowrap text-[#4C689E]">www.subsum.com/tre/wdd..</p>
      <div className="flex gap-2.5 justify-center md:justify-end cursor-pointer">
        <img src={copy} alt="Copy" className="w-auto h-auto" />
        <span className="text-[#4169E1] font-semibold">Copy</span>
      </div>
    </div>
  </div>
</div>

              </div>
            {/* can help image */}
            <div className="mr-0 md:mr-8 mb-6 md:mb-0 justify-center items-center">
  <div className="w-full sm:w-1/2 md:w-full mx-auto">
    <div className="flex flex-col md:flex-row gap-[10px] w-full md:w-[432px] h-auto p-[8px] border border-[#D7E1F4] rounded-full">
      <div className="w-full md:w-[204px] h-[56px] cursor-pointer rounded-full border border-gray-300 bg-[#EFF5FB] flex items-center justify-center text-center font-bold text-[#3C517C]">
        Change Password
      </div>
      <div className="w-full md:w-[204px] h-[56px] cursor-pointer rounded-full border border-gray-300 bg-white flex items-center justify-center text-center font-bold text-[#A9BADA]">
        Change Pin
      </div>
    </div>

    <div className="mt-8 w-full">
      <div className="bg-white py-6 px-6 shadow rounded-2xl border border-[#D7E1F4]">
        <form>
          <div className="space-y-4">
            <div>
              <label htmlFor="current-password" className="block text-sm font-medium text-[#4C689E]">
                Current Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="current-password"
                  name="current-password"
                  type="password"
                  placeholder="Enter Current Password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-[#D7E1F4] rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="new-password" className="block text-sm font-medium text-[#4C689E]">
                New Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="new-password"
                  name="new-password"
                  type="password"
                  placeholder="Enter New Password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-[#D7E1F4] rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-[#4C689E]">
                Confirm New Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  placeholder="Confirm New Password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-[#D7E1F4] rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#9bafeb] focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

          </div>

        </div>
    </PagesWrapper>
  )
}

export default Profile
