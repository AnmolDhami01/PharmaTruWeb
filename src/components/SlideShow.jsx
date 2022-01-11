import React from "react";

import BackgroundSlideshow from "react-background-slideshow";

import BANNER1 from "../static/BANNER1.png";
import BANNER2 from "../static/BANNER2.png";
import BANNER3 from "../static/BANNER3.png";

export default function SlideShow() {
  return (
    <div>
      <BackgroundSlideshow
        animationDelay={2000}
        images={[BANNER1, BANNER2, BANNER3]}
      />
    </div>
  );
}
