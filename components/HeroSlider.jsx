import Link from "next/link";
import React from "react";

const HeroSlider = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">small text</p>
        <h3>MID TEXT</h3>
        <img src="" alt="headphones" className="hero-banner-image" />
        <div>
          <Link href="product/ID">
            <button type="button">Button Text</button>
          </Link>
        </div>
        <div className="desc">
          <h5>Description</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            omnis recusandae dicta eaque rem provident porro minima officiis.
            Quae odio autem molestiae magnam doloribus pariatur quidem quaerat
            omnis sapiente dolore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
