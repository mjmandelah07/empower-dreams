import React from "react";
import inspiration from "../assets/coding-sch.jpg";
import { ArrowDown } from "react-bootstrap-icons";

export default function Hero() {
  return (
    <>
      <div className="hero ">
        <div className="row">
          <div className="col-lg-6 image-col overlay h-100">
            <img src={inspiration} alt="welcome" className="img-fluid " />
          </div>
          <div className="col-lg-6 hero-right d-flex flex-column justify-content-center align-items-center">
            <div className="hero-right-content justify-content-center align-items-center text-center h-100 ">
              <h1 className="text-center text-uppercase">
                Support my jounery <br /> of creating a future <br />{" "}
                through education 
                and technology
              </h1>
              <div className="scroll-down">
              <a href="#about">
                <ArrowDown size={36} className="mt-5 mb-3" />
                <br />
                <span className="text-uppercase">Discover my story!</span>
              </a>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
