import "./Herro.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left said */}
        <div className="flexColStart  hero-left">
          <div className="hero-title">
            <div className="orange-circle" />

            <h1>
            Explore Alrawi<br/>
            Real Estate for the Most<br/> suitable property.
            </h1>
          </div>
          <div className="flexColStart hero-des ">
            <span className="secondaryText">
              Discover a diverse range of properties that effortlessly resonate
              with you.
            </span>
            <span className="secondaryText">
              Ease into the search for your ideal home, leaving behind all
              challenges
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="orange" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8500} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={36} />
                <span>+</span>
              </span>
              <span className="secondaryText">Aword Winnings</span>
            </div>
          </div>
        </div>
        {/* right said */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="/images/main1.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
