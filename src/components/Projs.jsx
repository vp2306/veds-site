import React from "react";
import qarm2 from "../assets/portfolio/qarm2.jpg";
import Verifme2 from "../assets/portfolio/Verifme2.png";
import vipli2 from "../assets/portfolio/vipli2.png";
const Projs = () => {
  const project = [
    {
      id: 1,
      src: Verifme2,
      href: "https://github.com/vp2306/Code-Against-Covid",
    },
    {
      id: 2,
      src: qarm2,
      href: "https://github.com/vp2306/Get-a-Grip",
    },
    {
      id: 3,
      src: vipli2,
      href: "https://github.com/vp2306/VIPLI",
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">
            Here are some projects I've worked on. Lots more on the way!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {project.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={href} target="_blank">
                  <button className=" w-1/2 px-6 m-4 duration-200 hover:scale-105">
                    View
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projs;
