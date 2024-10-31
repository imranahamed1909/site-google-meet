import React from 'react'
import Image from "next/image";
function VerificationPage() {
  return (
    <div className="font-roboto mt-5 flex flex-col justify-center items-center bg-white text-[#202124] text-base">
    <div className="w-[350px] h-[600px] border border-slate-300 rounded-lg px-10 py-9 md:w-[450px] md:h-[550px]">
      <div className="flex justify-center">
        <Image src="/images/google_meet_logo.svg" alt="google" width={180} height={65} />
      </div>

      <div className="mt-2.5">
        <div className="text-center">
         
          <p className="mt-3">
          Google wants to make sure it's really you trying to join google meet video call
          </p>
        </div>
        <div className="">
          <div className="">
            <img
              class="w-44 -ml-[70px]"
              src="/images/mobile.gif"
              alt="animation"
            />
          </div>
          <div className="flex flex-col justify-start text-start m-3">
            <h3 className="text-lg font-semibold">Check your phone</h3>
            <p className="mt-3">
              Google sent a notification to your Phone. Tap Yes on the
              notification to verify it's you.
            </p>
            <div className="flex pt-3">
              <input type="checkbox" />
              <p className="ml-3">Don't ask again on this device</p>
            </div>
            <div className=" flex flex-col mt-3 items-start ">
              <button
                className="text-sm text-[#1a73e8] cursor-pointer font-medium pt-3"
               
              >
                Resend it
              </button>
              <button
                className="text-sm text-[#1a73e8] cursor-pointer font-semibold pt-3 pb-5"
               
              >
                Try another way
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default VerificationPage