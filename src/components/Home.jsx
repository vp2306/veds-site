import React from "react";
import Me from "../assets/me-lol.png";
import { AiOutlinePaperClip } from "react-icons/ai";
import Typical from "react-typical";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-40 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hey, It's Vedant
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm{" "}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "an engineering student⚙️",
                500,
                "a full-stack developer💻",
                500,
                "a boxing enthusiast🥊",
                500,
              ]}
            />
          </p>
          <div>
            <a href="FinalResume.pdf" download={true}>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-tr from-cyan-500 to-blue-500 cursor-pointer">
                Resume
                <span className="group-hover:rotate-90 duration-300">
                  <AiOutlinePaperClip className="ml-1" />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div>
          <img
            src={Me}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
