import React from "react";
import Study from "../assets/teaching-tech (1).jpg";

export default function StudyPlans() {
  return (
    <div className="w-100 about-container" id="about">
      <div className="max-width-large about-block-bg about-block">
        <div className="row w-100">
          <div className="col-md-12 d-flex justify-content-center align-items-center">
            <img src={Study} alt="study" className="img-fluid rounded h-100" />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-10">
            <div className="about-content w-100">
              <h1 className="text-start about-title">
                <span>Study Plans</span>
              </h1>
              <p className="text-normal">
                Embarking on an ambitious journey, I am resolute in my pursuit
                of a master's degree that aligns with my aspirations and
                encompasses both education and professional growth. My desired
                path involves enrolling in a master's program specializing in
                Information Technology with a focus on Software Development.
                <br />
                <br />
                <span className="fw-bold">
                  Navigating Selectivity and Barriers:
                </span>
                <br />
                <br />
                The tech landscape in Nigeria, while brimming with potential,
                poses unique challenges. Job opportunities are often elusive,
                skewed toward selectiveness, and hampered by disheartening pay
                scales. Particularly concerning is the disparity that women face
                in this field, along with the age-related barriers that persist.
                <br />
                <br />
                <span className="fw-bold">
                  The Synergy of Learning and Work:
                </span>
                <br />
                <br />
                Amid these challenges, my approach is strategic and unyielding.
                My study plans are tailored to bridge these gaps. By pursuing a
                master's program and concurrently gaining real-world experience,
                I aim to stand resilient against these constraints.
                <br />
                <br />
                The knowledge and practical skills acquired will empower me to
                transcend selectivity, break through pay barriers, and defy
                age-related limitations.
                <br />
                <br />
                <span className="fw-bold">Strategic Study Destinations:</span>
                <br />
                <br />
                In this pursuit, I am drawn to educational institutions across
                continents that offer a global perspective. The allure of
                Europe, the dynamic landscape of the United States, and the
                enriching academic environment of Canada all hold the promise of
                cultivating not only academic excellence but also a mindset that
                challenges norms.
                <br />
                <br />
                These locales offer fertile ground for academic excellence and
                diverse opportunities to integrate learning with real-world
                applications.
                <br />
                <br />
                <span className="fw-bold">A Vision Beyond Borders: </span>
                <br />
                <br />
                My journey extends beyond personal growth. By simultaneously
                studying and working, I aim to be a beacon of inspiration to
                individuals navigating similar paths. My success story seeks to
                empower others to chase their dreams and simultaneously shape
                their own destinies.
                <br />
                <br />
                <span className="fw-bold">
                  {" "}
                  Your support will not only empower my educational endeavors
                  but also contribute to the synergy of learning and
                  practicality that I am steadfastly embracing.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
