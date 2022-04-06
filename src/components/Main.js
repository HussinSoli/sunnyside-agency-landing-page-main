import React from "react";
import InfoCard from "./InfoCard";
import OffersCard from "./OffersCard";
import imgOrange from "../images/desktop/image-photography.jpg";
import imgAplle from "../images/desktop/image-graphic-design.jpg";
import imgCup from "../images/desktop/image-stand-out.jpg";
import imgEgg from "../images/desktop/image-transform.jpg";
import "../styles/main.css";

export default function Main() {
  return (
    <main>
      <section className="offers--section ">
        <img src={imgEgg} alt="" className="egg" />
        <OffersCard
          title="Transform your brand"
          info="We are a full-service creative agency specializing in helping brands grow fast. 
  Engage your clients through compelling visuals that do most of the marketing for you."
          colorShadow="hsl(51, 100%, 49%)"
        />

        <img src={imgCup} alt="" />
        <OffersCard
          title="Stand out to the right audience"
          info=" Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. "
          colorShadow="hsl(7, 99%, 70%)"
        />
      </section>
      <section
        className="info--section
      "
      >
        <InfoCard
          img={imgOrange}
          title="Photography"
          info="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          colorFont="hsl(198, 62%, 26%)"
          classEgg={"b"}
        />
        <InfoCard
          img={imgAplle}
          title="Graphic design"
          info="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
          colorFont="hsl(167, 40%, 24%)"
        />
      </section>
    </main>
  );
}
