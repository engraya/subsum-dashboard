import { Outlet } from "react-router";
import LandingHeader from "./LandingHeader";
import SideLanding from "./SideLanding";

function Welcome() {


  return (
    <>
      <div className="flex bg-[#F7F9FD]">
        <SideLanding />
        <div className="relative w-full lg:ml-64">
          <LandingHeader/>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Welcome;
