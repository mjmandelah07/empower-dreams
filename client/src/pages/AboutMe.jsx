import React from "react";
import Headshot from "../assets/about-me.png";

export default function AboutMe() {
  return (
    <div className="w-100 about-container" id="about">
      <div className="max-width-large about-block-bg about-block">
        <div className="row w-100">
          <div className="col-md-12 d-flex justify-content-center align-items-center ">
            <img
              src={Headshot}
              alt="moji"
              className="img-fluid rounded-circle"
            />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-10">
            <div className="about-content w-100">
              <h1 className="text-start about-title fw-bolder">
                <span>About Me</span>
              </h1>
              <p className="text-normal">
                Greetings! I'm Mojisola Aramide, a 27-year-old trailblazer. As
                the first child in my family and a first-generation student, my
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
                <br />
                <br />
                <span className="fw-bold">Passion for Progress:</span>
                <br />
                <br />
                My passion lies in the world of technology and development.
                Through self-determination and grit, I've conquered obstacles to
                pave my way.
                <br />
                <br />
                Now, I'm on a mission to break barriers and become a
                professional woman in the tech industry, creating opportunities
                not only for myself but also for future generations. The very
                website you're exploring is a testament to my dedication and
                budding skills in web development.
                <br />
                <br />
                <span className="fw-bold">Inspiring Others:</span>
                <br />
                <br />
                I belong to a family of five strong women, and as the eldest
                sister, I've embraced the role of provider and guide. My journey
                is fueled by the desire to inspire my younger siblings, women
                out there and generations to come, showing them that with
                determination and resilience, barriers can be surpassed.
                <br />
                <br />
                <span className="fw-bold">Your Support Matters:</span>
                <br />
                <br />
                The path to higher education is not without its challenges, but
                I am committed to achieving my dream of becoming a professional
                woman in the tech industry. Your support will not only enable my
                educational pursuits but also stand as a symbol of empowerment
                for all those who dare to dream.
                <br />
                <br />
                <span className="fw-bold">
                  {" "}
                  Thank you for being a part of my story.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
