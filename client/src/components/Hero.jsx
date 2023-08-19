import React from "react";
import { useState, useEffect } from "react";
import inspiration from "../assets/coding-sch2.jpg";
import inspiration2 from "../assets/study2.jpg";
import inspiration3 from "../assets/teaching-tech (1).jpg";
import inspiration4 from "../assets/programmer (1).jpg";
import { ArrowDown } from "react-bootstrap-icons";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [inspiration, inspiration2, inspiration3, inspiration4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="hero ">
        <div className="row">
          <div className="col-lg-6 image-col overlay h-100">
            <picture>
              <source
                srcSet={images[currentImageIndex]}
                media="(max-width: 767.98px)"
                typeof="image/webp"
                className="img-fluid"
              />
              <img
                src={images[currentImageIndex]}
                alt="welcome"
                className="img-fluid "
              />
            </picture>
          </div>
          <div className="col-lg-6 hero-right d-flex flex-column justify-content-center align-items-center">
            <div className="hero-right-content justify-content-center align-items-center text-center h-100 ">
              <h1 className="text-center text-uppercase">
                Support my jounery <br /> of creating a future <br /> through
                education and technology
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
