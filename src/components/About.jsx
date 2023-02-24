import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl">
          I'm a McMaster University student pursuing software engineering and an
          active member of my school's EcoCar engineering team. My primary
          interests lie in data science applications in finance. When I'm not
          studying or collaborating on projects, I like to spend time with
          family, watch boxing, and go on bike rides. My favorite read is
          "Meditations" by Marcus Aurelius.
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
