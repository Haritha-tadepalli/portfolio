import React from "react";
import "./about.css";
import ContactBar from "../../components/contactBar/ContactBar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  
    const navigate = useNavigate();

  const navigateToContact = () => {
    navigate("/contact");
  };

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
    <section className="aboutMain">
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
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className="about__item1">
              <p className="about__me">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                reprehenderit cumque cum distinctio illo soluta enim voluptatem
                qui, voluptatibus temporibus expedita illum odit, consectetur
                dicta pariatur? Id quidem necessitatibus temporibus.
              </p>
            </div>
            <div>Item 2</div>
          </Carousel>
        </div>
        <button className="about__letstalk" onClick={navigateToContact}>
          Let's Talk
        </button>
      </div>
      <ContactBar />
    </section>
  );
};

export default About;
