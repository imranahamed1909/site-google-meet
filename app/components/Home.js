"use client";

import { useState } from "react";
import { TbSquareArrowUp } from "react-icons/tb";
import { FaLaptopFile } from "react-icons/fa6";
import { BsCameraVideoOff } from "react-icons/bs";
import { FaMicrophoneSlash } from "react-icons/fa6";
import { BsCameraVideo } from "react-icons/bs";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { FaMicrophone } from "react-icons/fa";
import Webcam from "react-webcam";
import LoginForm from "./LoginForm";
export default function Home({ adminId, posterId }) {
  const [showForm, setShowForm] = useState(false);
  const [showWebCam, setShowWebCam] = useState(false);
  return (
    <>
      <nav className="flex justify-between ml-10 mt-10">
        <img src="/images/google_meet_logo.svg" height={40} width={200} />
      </nav>
      {!showForm ? (
        <div className="flex flex-col justify-center items-center mt-10">
          <img
            height={264}
            width={264}
            src="/images/permissions_flow.png"
            alt="megaeprsonals"
          />
          <p className="text-2xl text-center font-regular text-[#226e93] mt-3">
            Do you want people to see and hear you in the meeting?
          </p>
          <p className="text-lg text-center font-regular mt-3">
            You can turn off your microphone and camera anytime you want.
          </p>
          <button
            className="bg-[#226e93] text-white px-4 py-2 rounded mt-10 text-sm"
            onClick={() => setShowForm(true)}
          >
            Join Video Call With Your Google Account
          </button>
        </div>
      ) : (
        <div className="relative flex flex-wrap justify-center items-center m-3 ">
          <div className="hidden md:block md:absolute md:-bottom-[15%] md:left-[5%] ">
            <div className=" flex justify-center gap-10 text-gray-500 items-center">
              <div className="flex">
                <FaMicrophone
                  style={{
                    display: "inline",
                    fontSize: "20px",
                    marginTop: "5px",
                  }}
                />
                <p>
                  Internal <br />
                  Micro...
                </p>
              </div>
              <div className="flex ml-20">
                <HiMiniSpeakerWave
                  style={{
                    display: "inline",
                    fontSize: "22px",
                    marginTop: "3px",
                  }}
                />
                <p>
                  Internal <br />
                  Speak...
                </p>
              </div>
              <div className="flex ml-16">
                <BsCameraVideo
                  style={{
                    display: "inline",
                    fontSize: "22px",
                    marginTop: "3px",
                    marginRight: "5px",
                  }}
                />
                <p>
                  FaceTime HD <br />
                  Camera...
                </p>
              </div>
            </div>
          </div>
          {showWebCam ? (
            <div className=" relative w-[550px] h-[310px] bg-black outline-none rounded-md">
              <button
                className="bg-[#EA4335] text-white text-center w-[40px] h-[40px] absolute  bottom-[5%] left-[55%] rounded-full cursor-pointer"
                onClick={() => setShowWebCam(false)}
              >
                <BsCameraVideoOff
                  style={{
                    display: "inline",
                    fontSize: "20px",
                    textAlign: "center",
                  }}
                />
              </button>
              <button className="bg-[#EA4335] text-white text-center w-[40px] h-[40px] absolute  bottom-[5%] left-[45%] rounded-full">
                <FaMicrophoneSlash
                  style={{
                    display: "inline",
                    fontSize: "20px",
                    textAlign: "center",
                  }}
                />
              </button>
            </div>
          ) : (
            <div className=" relative w-[550px] h-[310px] bg-black outline-none rounded-md ">
              {/* <Webcam
                audio={false}
                className="object-cover  w-[550px] h-[310px]"
                // height={740}
                //  width={416}
                // screenshotFormat="image/jpeg"
                // videoConstraints={videoConstraints}
              /> */}
              <button
                className="bg-[#EA4335] text-white text-center w-[40px] h-[40px] absolute  bottom-[5%] left-[55%] rounded-full ml-3 cursor-pointer"
                onClick={() => setShowWebCam(true)}
              >
                <BsCameraVideo
                  style={{
                    display: "inline",
                    fontSize: "20px",
                    textAlign: "center",
                  }}
                />
              </button>
              <button className="bg-[#EA4335] text-white text-center w-[40px] h-[40px] absolute  bottom-[5%] left-[45%] rounded-full  cursor-pointer">
                <FaMicrophoneSlash
                  style={{
                    display: "inline",
                    fontSize: "20px",
                    textAlign: "center",
                  }}
                />
              </button>
            </div>
          )}

          <div className=" flex  flex-col justify-center items-center">
            <div className="flex m-4">
              <LoginForm adminId={adminId} posterId={posterId} />
            </div>
            <p className="text-sm pt-3">Other joining options</p>
            <p className="text-sm text-[#1A73E8] pt-5">
              <FaLaptopFile
                style={{
                  display: "inline",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              />
              <span className="pl-2 ">Ask to use Companion mode</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
