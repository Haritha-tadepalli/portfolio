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
              <ul className="about_me">
                <li className="about_me_rows">Hi, I am Haritha. I am currently working as a Systems Engineer
                in Tata Consultancy Services. I have good hold on DSA and love
                to code during my free time.</li>
                <li className="about_me_rows">
                I am a Frontend Developer with
                extensive knowledge on ReactJS, JavaScript, HTML, CSS, Git,
                MongoDB, MySQL, PostgreSQL and AWS - S3, DynamoDB, RDS.
                </li>
                <li className="about_me_rows">
                I have completed my Bachelors
                on Electronics and Communication Engineering at Gayatri Vidya
                Parishad College of Engineering, Vizag.
                </li>
                <li className="about_me_rows">
                During my Bachelors, I
                was a part of National Service Scheme which brought me more
                closer to serving people. We as a Unit adopted a near by village
                and made major developments there. I won the Best Volunteer
                </li>
                <li className="about_me_rows">
                We as a Unit adopted a near by village
                and made major developments there. I won the Best Volunteer
                </li>
              </ul>
              {/* <p className="about__me">
                Hi, I am Haritha. I am currently working as a Systems Engineer
                in Tata Consultancy Services. I have good hold on DSA and love
                to code during my free time. I am a Frontend Developer with
                extensive knowledge on ReactJS, JavaScript, HTML, CSS, Git,
                MongoDB, MySQL, PostgreSQL and AWS - S3, DynamoDB, RDS.
                <br/><br/>I have completed my Bachelors
                on Electronics and Communication Engineering at Gayatri Vidya
                Parishad College of Engineering, Vizag. During my Bachelors, I
                was a part of National Service Scheme which brought me more
                closer to serving people. We as a Unit adopted a near by village
                and made major developments there. I won the Best Volunteer
                Award.
              </p> */}
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
