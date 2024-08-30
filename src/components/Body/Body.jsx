import "./body.css";
import { sideFrame } from "../../assets";
import { copy, share, edit, wallet } from "../../assets";
import PagesWrapper from "../Wrapper/PagesWrapper";
export default function Body() {


  return (
      <PagesWrapper>
        <div className="w-full flex flex-col justify-between rounded-lg">
        <div className="flex flex-col space-y-6 md:flex-row w-full">
                {/* end can help image */}
          <div className="grid gap-6 md:grid-cols-1 space-y-3 lg:gap-1 p-6 md:p-6">
          <div className="w-full max-w-[463px] flex flex-col items-center p-4 gap-6 transition-all duration-500 bg-white border-2 border-indigo-100 rounded-2xl shadow hover:shadow-xl lg:flex-row lg:p-6 lg:gap-24">
  <div className="flex-1 text-center w-full max-w-[124px] lg:text-left">
    <p className="text-base text-[#3C517C]">Wallet Balance</p>
    <span className="flex items-baseline text-4xl whitespace-nowrap font-bold text-[#3C517C]">
      ₦3000           
    </span>
  </div>
  <div>
    <button
      type="button"
      className="text-white bg-blue-700 whitespace-nowrap hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-8 py-3 text-center inline-flex items-center lg:px-12 lg:py-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Fund Wallet
    </button>
  </div>
</div>



<div className="w-full max-w-lg p-4 md:p-6 gap-6 md:gap-24 bg-white border-2 border-[#D7E1F4] rounded-2xl shadow flex flex-col md:flex-row" style={{ width: '100%', height: 'auto' }}>
  <div className="flex-grow text-center md:text-left w-full max-w-[234px]">
    <p className="font-normal text-[#3C517C]">Referral</p>
    <p className="mt-2 mb-3 text-[#3C517C]">
      Referral Code: <span className="font-semibold text-[#3C517C]">18/5423ad</span>
    </p>
    <div className="flex flex-col gap-3 md:flex-row md:gap-6">
  <div className="flex gap-2.5 items-center cursor-pointer">
    <img src={copy} alt="Copy" />
    <span className="text-md text-[#4169E1]">Copy</span>
  </div>
  <div className="flex gap-2.5 items-center cursor-pointer">
    <img src={edit} alt="Edit" />
    <span className="text-md text-[#4169E1]">Edit</span>
  </div>
  <div className="flex gap-2.5 items-center cursor-pointer">
    <img src={share} alt="Share" />
    <span className="text-md text-[#4169E1]">Share</span>
  </div>
</div>

  </div>
</div>


<div className="w-full max-w-lg p-4 md:p-6 gap-6 md:gap-8 bg-white border-2 border-indigo-100 rounded-2xl shadow flex flex-col md:flex-row" style={{ width: '100%', height: 'auto' }}>
  <div className="flex flex-grow text-center md:text-left">
    <div>
      <p className="font-normal whitespace-nowrap text-[#3C517C]">Total Referrals made</p>
      <p className="font-bold text-4xl text-[#3C517C]">0</p>
      <div className="flex gap-2 items-center whitespace-nowrap cursor-pointer">
        <img src={wallet} alt="Cashout" />
        <span className="text-md text-[#4169E1]">Cashout</span>
      </div>
    </div>
  </div>
  <div className="flex flex-grow text-center md:text-left">
    <div>
      <p className="font-normal whitespace-nowrap text-[#3C517C]">Current Wallet Bonus</p>
      <p className="font-bold text-4xl text-[#3C517C]">₦6000</p>
    </div>
  </div>
</div>


          </div>
          {/* can help image */}
          <div className="mb-8 md:mb-0">
  <img className="w-full md:w-auto mx-auto" src={sideFrame} alt="can_help_banner" />
</div>

      </div>

        </div>
      </PagesWrapper>
  );
}
