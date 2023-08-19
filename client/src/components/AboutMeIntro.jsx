import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowDown } from "react-bootstrap-icons";
import Headshot from "../assets/about-me.png";

export default function About() {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/about");
  };

  return (
    <div className="w-100 about-container" id="about">
      <div className="max-width-large about-block-bg about-block">
        <div className="about-block-left">
          <div className="about-content w-100">
            <h1 className="text-start about-title">
              <span>About Me</span>
            </h1>
            <p className="text-normal">
              Greetings! I'm Mojisola Aramide, a 27-year-old trailblazer. As the
              first child in my family and a first-generation student, my
              journey has been one of carving my own path and embracing
              opportunities for growth.
              <br />
              <br />
              <span className="fw-bold">Background and Accomplishments:</span>
              <br />
              <br />
              From a young age, I've been driven to excel. At 17, I started
              working to support my family and put myself through school. I
              proudly hold a Bachelor's degree in Information Technology, a
              testament to my dedication and perseverance.
              <br />
              <br />
              As an aspiring software developer, I've recently taken charge of
              my education once again, investing time in intensive training to
              hone my skills. I've even had the privilege of creating the very
              site you're on now.
            </p>
            <button type="button" onClick={handleReadMore} className="btn mt-3">
              Read More
            </button>
          </div>
        </div>
        <div className="about-block-right">
          <div className="about-img">
            <img src={Headshot} alt="moji" loading="lazy" />
          </div>
        </div>
        <div className="about-scroll-down">
          <div className="scroll-down">
            <a href="#plans">
              <ArrowDown size={36} className="mt-5 mb-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
