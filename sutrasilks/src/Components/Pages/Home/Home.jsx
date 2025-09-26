import React, { useState, useEffect } from "react";
import './Home.css';
import slide_1 from "../../../assets/slide-1.png";
import Category from "../../Common/Category/Category";

const Home = () => {

  const slides = [
    {
      src: slide_1,
      title: "First slide label",
      desc: "Some representative placeholder content for the first slide and gest heligfhrtrjasanj."
    },
    {
      src: slide_1,
      title: "Second slide label",
      desc: "Some representative placeholder content for the second slide."
    },
    {
      src: slide_1,
      title: "Third slide label",
      desc: "Some representative placeholder content for the third slide."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index) => {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    setCurrentIndex(index);
  };

  const moveSlide = (step) => {
    showSlide(currentIndex + step);
  };

  const goToSlide = (index) => {
    showSlide(index);
  };

  // Auto play
  useEffect(() => {
    const timer = setInterval(() => {
      moveSlide(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className='home'>
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="carousel-item" key={index}>
              <img src={slide.src} alt={slide.title} />
              <div className="carousel-caption">
                {/* <h5>{slide.title}</h5> */}
                {/* <p>{slide.desc}</p> */}
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control prev" onClick={() => moveSlide(-1)}>
          &#10094;
        </button>
        <button className="carousel-control next" onClick={() => moveSlide(1)}>
          &#10095;
        </button>

        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={currentIndex === index ? "active" : ""}
            ></button>
          ))}
        </div>
      </div>
      <div className="collections-title">
          <h2>Shop by Category</h2>
        </div>
      <div className="collections">
        {/* <div className="collections-title">
          <h2>Shop by Category</h2>
        </div> */}
        <div className="category">
           <Category 
            image={slide_1}
            title="Silk Sarees"
          />
          <Category 
            image={slide_1}
            title="Cotton Sarees"
          />
          {/* <Category 
            image={slide_1}
            title="Venkata giri Sarees"
          /> */}
          <Category 
            image={slide_1}
            title="Dharma varam Sarees"
          />
          <Category 
            image={slide_1}
            title="Kanchi Sarees"
          />

          <Category 
            image={slide_1}
            title="Kerala Sarees"
          />
          
        </div>

       

      </div>
    </div>
  );
};

export default Home;
