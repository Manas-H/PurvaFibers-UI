import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Navigationbar from "../../Navigationbar";
import Form from "./form";
import "./about.css";
import WhoAreWe from "./WhoAreWe";
import QA from "./QA";
import Aim from "./Aim";
import Team from "./Team";

const About = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <Navigationbar />
      <div className="bg-[#8ab5ac] relative top-12 w-full">
        <div className="abt-bx-content flex mt-4 bg-[#414f4f] border text-white font-light text-xl">
          <div
            className={toggleState === 1 ? "bx active-tabs" : "bx"}
            onClick={() => toggleTab(1)}
          >
            AboutUs
          </div>
          <div
            className={toggleState === 2 ? "bx active-tabs" : "bx"}
            onClick={() => toggleTab(2)}
          >
            QA
          </div>
          <div
            className={toggleState === 3 ? "bx active-tabs" : "bx"}
            onClick={() => toggleTab(3)}
          >
            Aim
          </div>
          <div
            className={toggleState === 4 ? "bx active-tabs" : "bx"}
            onClick={() => toggleTab(4)}
          >
            Team
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around my-10">
          <div className="mx-2 mb-4 md:mx-10 md:w-[60%]">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <WhoAreWe />
            </div>
            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <QA />
            </div>

            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <Aim />
            </div>

            <div
              className={
                toggleState === 4 ? "content  active-content" : "content"
              }
            >
              <Team />
            </div>
          </div>
          <div className="m-2 md:w-40%">
            <Form />
          </div>
        </div>
      </div>
      <div className="relative top-8 flex justify-between items-center py-2 px-12">
        <div className="abt-heading">About</div>
        <div className="abt-links">
          <ul>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaWhatsapp />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;
