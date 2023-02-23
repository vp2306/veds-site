import React from "react";
import cpp from "../assets/cpp.png";
import cs from "../assets/cs.png";
import python from "../assets/python.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";

const Stack = () => {
  const languages = [
    {
      id: 1,
      src: cpp,
      title: "C++",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: cs,
      title: "C#",
      style: "shadow-purple-500",
    },
    {
      id: 3,
      src: python,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: react,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: node,
      title: "Node",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-500",
    },
  ];
  return (
    <div
      name="stack"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Tools
          </p>
          <p className="py-6">Here are some technologies I've used</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {languages.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500  rounded-lg ${style}`}
            >
              <img src={src} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
