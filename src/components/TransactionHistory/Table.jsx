import React from 'react'
import { success, failed, initialised } from '../../assets'
function Table() {
  return (
<table className="min-w-full divide-y divide-[#D7E1F4] overflow-x-auto">
  <thead className="bg-white text-[#6882B6]">
    <tr>
      <th scope="col" className="px-6 py-3 text-left text-base font-bold whitespace-nowrap text-[#6882B6] tracking-wider">
        Service
      </th>
      <th scope="col" className="px-6 py-3 text-left text-base font-bold whitespace-nowrap text-[#6882B6] tracking-wider">
        Amount
      </th>
      <th scope="col" className="px-6 py-3 text-left text-base font-bold whitespace-nowrap text-[#6882B6] tracking-wider">
        Total Amount
      </th>
      <th scope="col" className="px-6 py-3 text-left text-base font-bold whitespace-nowrap text-[#6882B6] tracking-wider">
        Status
      </th>
      <th scope="col" className="px-6 py-3 text-left text-base font-bold whitespace-nowrap text-[#6882B6] tracking-wider">
        Payment Method
      </th>
      <th scope="col" className="px-6 py-3 text-left text-base font-bold whitespace-nowrap text-[#6882B6] tracking-wider">
        Transaction No
      </th>
      <th scope="col" className="px-6 py-3 text-left text-base font-bold whitespace-nowrap text-[#6882B6] tracking-wider">
        Actions
      </th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y text-[#6882B6] divide-gray-200">
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
        <div className="flex h-8 w-8 justify-center items-center font-semibold rounded-lg bg-[#eec68a]">
        <img src={initialised} alt="d" className="h-4 w-4 object-contain"/>
        </div>
          <div className="ml-4">
            <div className="text-sm font-semibold text-[#4C689E]">
              MTN Airtime VTU
            </div>
            <div className="text-sm text-gray-500">
              08098786755
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 font-semibold text-[#4C689E] whitespace-nowrap">
      ₦ 100.00
      </td>
      <td className="px-6 py-4 font-semibold text-[#4C689E] whitespace-nowrap">
      ₦ 100.00
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#FFB547]">
        Initialised
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-500">
        Transfer
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-semibold text-[#4C689E]">987867327482758274827365325252</div>
        <div className="text-sm text-gray-500">6th January, 2024, 08:30PM</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold text-[#4169E1] rounded-lg bg-[#EFF3FB]">
        Open
        </span>
      </td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
        <div className="flex h-8 w-8 justify-center items-center font-semibold rounded-lg bg-[#47CA4C]">
        <img src={success} alt="d" className="h-4 w-4 object-contain"/>
        </div>
          <div className="ml-4">
            <div className="text-sm font-semibold text-[#4C689E]">
              Airtel Airtime VTU
            </div>
            <div className="text-sm text-gray-500">
              080988900
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 font-semibold text-[#4C689E] whitespace-nowrap">
      ₦ 500.00
      </td>
      <td className="px-6 py-4 font-semibold text-[#4C689E] whitespace-nowrap">
      ₦ 700.00
      </td>
      <td className="px-6 py-4 font-semibold whitespace-nowrap text-sm text-[#2DAE32]">
        Success
      </td>
      <td className="px-6 py-4 whitespace-nowrap font-semibold text-[#4C689E] text-sm">
        Wallet
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-semibold text-[#4C689E]">987867327482758274827365325252</div>
        <div className="text-sm text-gray-500">6th January, 2024, 08:30PM</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold text-[#4169E1] rounded-lg bg-[#EFF3FB]">
        Open
        </span>
      </td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
        <div className="flex h-8 w-8 justify-center items-center font-semibold rounded-lg bg-[#eec68a]">
        <img src={failed} alt="d" className="h-4 w-4 object-contain"/>
        </div>
          <div className="ml-4">
            <div className="text-sm font-semibold text-[#4C689E]">
              Glo Airtime VTU
            </div>
            <div className="text-sm text-gray-500">
              08098786755
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 font-semibold text-[#4C689E] whitespace-nowrap">
      ₦ 100.00
      </td>
      <td className="px-6 py-4 font-semibold text-[#4C689E] whitespace-nowrap">
      ₦ 600.00
      </td>
      <td className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-[#EE5D50]">
        Failed
      </td>
      <td className="px-6 py-4 whitespace-nowrap font-semibold text-[#4C689E]  text-sm">
        Card Payment
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-semibold text-[#4C689E] ">987867327482758274827365325252</div>
        <div className="text-sm text-gray-500">6th January, 2024, 08:30PM</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold text-[#4169E1] rounded-lg bg-[#EFF3FB]">
        Open
        </span>
      </td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
        <div className="flex h-8 w-8 justify-center items-center font-semibold rounded-lg bg-[#eec68a]">
        <img src={initialised} alt="d" className="h-4 w-4 object-contain"/>
        </div>
          <div className="ml-4">
            <div className="text-sm font-semibold text-[#4C689E]">
              MTN Airtime VTU
            </div>
            <div className="text-sm text-gray-500">
              08098786755
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 font-semibold text-[#4C689E] whitespace-nowrap">
      ₦ 100.00
      </td>
      <td className="px-6 py-4 font-semibold text-[#4C689E] whitespace-nowrap">
      ₦ 100.00
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#FFB547]">
        Initialised
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-500">
        Transfer
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-semibold text-[#4C689E]">987867327482758274827365325252</div>
        <div className="text-sm text-gray-500">6th January, 2024, 08:30PM</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold text-[#4169E1] rounded-lg bg-[#EFF3FB]">
        Open
        </span>
      </td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
        <div className="flex h-8 w-8 justify-center items-center font-semibold rounded-lg bg-[#47CA4C]">
        <img src={success} alt="d" className="h-4 w-4 object-contain"/>
        </div>
          <div className="ml-4">
            <div className="text-sm font-semibold text-[#4C689E]">
              Airtel Airtime VTU
            </div>
            <div className="text-sm text-gray-500">
              080988900
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 font-semibold text-[#4C689E] whitespace-nowrap">
      ₦ 500.00
      </td>
      <td className="px-6 py-4 font-semibold text-[#4C689E] whitespace-nowrap">
      ₦ 700.00
      </td>
      <td className="px-6 py-4 font-semibold whitespace-nowrap text-sm text-[#2DAE32]">
        Success
      </td>
      <td className="px-6 py-4 whitespace-nowrap font-semibold text-[#4C689E] text-sm">
        Wallet
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-semibold text-[#4C689E]">987867327482758274827365325252</div>
        <div className="text-sm text-gray-500">6th January, 2024, 08:30PM</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold text-[#4169E1] rounded-lg bg-[#EFF3FB]">
        Open
        </span>
      </td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
        <div className="flex h-8 w-8 justify-center items-center font-semibold rounded-lg bg-[#eec68a]">
        <img src={failed} alt="d" className="h-4 w-4 object-contain"/>
        </div>
          <div className="ml-4">
            <div className="text-sm font-semibold text-[#4C689E]">
              Glo Airtime VTU
            </div>
            <div className="text-sm text-gray-500">
              08098786755
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 font-semibold text-[#4C689E] whitespace-nowrap">
      ₦ 100.00
      </td>
      <td className="px-6 py-4 font-semibold text-[#4C689E] whitespace-nowrap">
      ₦ 600.00
      </td>
      <td className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-[#EE5D50]">
        Failed
      </td>
      <td className="px-6 py-4 whitespace-nowrap font-semibold text-[#4C689E]  text-sm">
        Card Payment
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-semibold text-[#4C689E] ">987867327482758274827365325252</div>
        <div className="text-sm text-gray-500">6th January, 2024, 08:30PM</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold text-[#4169E1] rounded-lg bg-[#EFF3FB]">
        Open
        </span>
      </td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
        <div className="flex h-8 w-8 justify-center items-center font-semibold rounded-lg bg-[#eec68a]">
        <img src={initialised} alt="d" className="h-4 w-4 object-contain"/>
        </div>
          <div className="ml-4">
            <div className="text-sm font-semibold text-[#4C689E]">
              Startime
            </div>
            <div className="text-sm text-gray-500">
              08098786755
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 font-semibold text-[#4C689E] whitespace-nowrap">
      ₦ 100.00
      </td>
      <td className="px-6 py-4 font-semibold text-[#4C689E] whitespace-nowrap">
      ₦ 100.00
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#FFB547]">
        Initialised
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-500">
        Transfer
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-semibold text-[#4C689E]">987867327482758274827365325252</div>
        <div className="text-sm text-gray-500">6th January, 2024, 08:30PM</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold text-[#4169E1] rounded-lg bg-[#EFF3FB]">
        Open
        </span>
      </td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
        <div className="flex h-8 w-8 justify-center items-center font-semibold rounded-lg bg-[#47CA4C]">
        <img src={success} alt="d" className="h-4 w-4 object-contain"/>
        </div>
          <div className="ml-4">
            <div className="text-sm font-semibold text-[#4C689E]">
              Airtel Data VTU
            </div>
            <div className="text-sm text-gray-500">
              080988900
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 font-semibold text-[#4C689E] whitespace-nowrap">
      ₦ 500.00
      </td>
      <td className="px-6 py-4 font-semibold text-[#4C689E] whitespace-nowrap">
      ₦ 700.00
      </td>
      <td className="px-6 py-4 font-semibold whitespace-nowrap text-sm text-[#2DAE32]">
        Success
      </td>
      <td className="px-6 py-4 whitespace-nowrap font-semibold text-[#4C689E] text-sm">
        Wallet
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-semibold text-[#4C689E]">987867327482758274827365325252</div>
        <div className="text-sm text-gray-500">6th January, 2024, 08:30PM</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold text-[#4169E1] rounded-lg bg-[#EFF3FB]">
        Open
        </span>
      </td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
        <div className="flex h-8 w-8 justify-center items-center font-semibold rounded-lg bg-[#eec68a]">
        <img src={failed} alt="d" className="h-4 w-4 object-contain"/>
        </div>
          <div className="ml-4">
            <div className="text-sm font-semibold text-[#4C689E]">
              DSTV
            </div>
            <div className="text-sm text-gray-500">
              08098786755
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 font-semibold text-[#4C689E] whitespace-nowrap">
      ₦ 100.00
      </td>
      <td className="px-6 py-4 font-semibold text-[#4C689E] whitespace-nowrap">
      ₦ 600.00
      </td>
      <td className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-[#EE5D50]">
        Failed
      </td>
      <td className="px-6 py-4 whitespace-nowrap font-semibold text-[#4C689E]  text-sm">
        Card Payment
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-semibold text-[#4C689E] ">987867327482758274827365325252</div>
        <div className="text-sm text-gray-500">6th January, 2024, 08:30PM</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
      <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold text-[#4169E1] rounded-lg bg-[#EFF3FB]">
        Open
        </span>
      </td>
    </tr>
  </tbody>
</table>

  )
}

export default Table
