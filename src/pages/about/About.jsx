import React from "react";
import "./about.css";
import ContactBar from "../../components/contactBar/ContactBar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Skills from "../../components/skills/Skills";

const About = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  return (
    <section id="about" className="aboutMain">
      <div className="about__wrapper">
        <h1 className="about__heading">About Me!</h1>
        <div className="about__containers">
          <Carousel
            className="about__carousel"
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className="about__item1">
              <p className="about__me">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                reprehenderit cumque cum distinctio illo soluta enim voluptatem
                qui, voluptatibus temporibus expedita illum odit, consectetur
                dicta pariatur? Id quidem necessitatibus temporibus. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Adipisci facere
              </p>
            </div>
            <div className="about__item2">
              <Skills />
            </div>
          </Carousel>
        </div>
        <a className="about__letstalk" href="#contact">
          Let's Talk
        </a>
      </div>
      <ContactBar />
    </section>
  );
};

export default About;
