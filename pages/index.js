import React, { useEffect } from "react";
import { ImLocation2 } from 'react-icons/im'
import { useState } from "react";
import axios from "axios"
import Main from "../components/Main";
import  Router  from "next/router";

export default function Home() {
  const [curenntLocation, setCurrentLocation] = useState({}); 

  useEffect(() => {
    getLocation() 

  }, [])

  const getLocation = async () => {
    const locatiom = await axios.get("http://ip-api.com/json");
  }
  
  return (
    <>
      <div className="background">
        <div className=" flex justify-center items-center h-screen ">
          <div className=" w-1/3 h-1/3 place-content-center bg-[#ffffff] bg-opacity-20 rounded-3xl p-5 backdrop-blur-lg shadow-2xl">
            <div className=" text-blue-700  flex justify-center items-center uppercase  font-extrabold text-6xl pb-4">
            <ImLocation2/>
            </div>
            <div className="uppercase text-3xl font-extrabold">
              Get your current LOCATION
            </div>

            {/* <div className="flex justify-center items-center uppercase pt-4 font-extrabold">
         <span className=" uppercase pt-4 font-extrabold  border-4  border-white rounded-2xl p-3">current location </span>
        </div> */}

            <div class="flex space-x-2 justify-center pt-8">
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => Router.push("Locpage")}
              >
                get Location
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
