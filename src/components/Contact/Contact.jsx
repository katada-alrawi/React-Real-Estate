import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from 'react-icons/bs';



const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="padding innerWidth flexCenter c-container">
        {/* left said */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            Certainly! Here is an improved version: We are always ready to
            assist you, .committed .<br />
            to enhancing your well-being. We believe that a quality living space
            .<br />
            has the power to elevate your life
          </span>

          <div className="flexColStart contactModes">

            {/* first row */}

            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText"> Contact us</span>
                    <span className="secondaryText">0741 254 654 145</span>
                  </div>
                </div>
              </div>
              <div className="flexCenter button"> Call Now</div>
            </div>

            {/* Second Mode */}

            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Write us</span>
                    <span className="secondaryText">0741 254 654 145</span>
                  </div>
                </div>
              </div>
              <div className="flexCenter button"> Chat Now</div>
            </div>

            {/* Second Mode */}

          

          </div>
          </div>

        {/* right said */}
        <div className="c-right">
          <div className="image-container">
            <img src="/images/hause5.jpg" alt="" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
