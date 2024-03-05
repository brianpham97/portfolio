import React from "react";
import elementLoader from "../images/element-loader.png";

const ElementLoader = () => {
  return (
    <div className="h-screen w-screen bg-[#161d22]">
      <div className="loader-container absolute top-1/2 left-1/2 overflow-hidden">
        <img
          className="element-loader absolute top-[500px] left-[0] w-full h-[100px]"
          src={elementLoader}
          // src="https://yuanshen.site/imgs/loading-bar.png"
          alt="Loading..."
        />
      </div>
    </div>
  );
};

export default ElementLoader;
