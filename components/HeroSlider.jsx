import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

const HeroSlider = ({ bannerInfo }) => {
  console.log(bannerInfo);
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{bannerInfo?.smallText}</p>
        <h3>{bannerInfo.midText}</h3>
        <h1>{bannerInfo.largeText1}</h1>
        <img src={urlFor(bannerInfo.image)} alt="headphones" className="hero-banner-image" />
        <div>
          <Link href="product/ID">
            <button type="button">{bannerInfo.buttonText}</button>
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
