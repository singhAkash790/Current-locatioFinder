import React, { useEffect } from "react";
import { ImLocation2 } from 'react-icons/im'
import getLocation from "../pages/Location"
export default function Home() {

    const location = getlocation.lat;

    return (
    <>
      <div className="background">
        <div className=" flex justify-center items-center h-screen ">
          <div className=" w-1/3 h-1/3 place-content-center bg-[#ffffff] bg-opacity-20 rounded-3xl p-5 backdrop-blur-lg shadow-2xl">
            <div className=" text-blue-700  flex justify-center items-center uppercase  font-extrabold text-6xl pb-4">
            <ImLocation2/>
            </div>
            <div className="uppercase text-3xl font-extrabold">
            <span>{currLoaction}</span>
              city 
            </div>

            <div className="flex justify-center items-center uppercase pt-4 font-extrabold">
              <h1>
              location.loaded ? json.stringify(location)
              </h1>
                  </div>
          </div>
        </div>
      </div>
    </>
  );
}
