import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="hero-section">
      <div className="content">
        <div className="title-content">
          <h1>Sales</h1>
          <p>
            This is the shopping website demo here website to provide best
            technologey gajest.
          </p>
          <div className="ctas">
            <div className="banner-cta">Reade More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
