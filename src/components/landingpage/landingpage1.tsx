import React from "react";
import womanImage from "../../assets/woman.png";
type Props = {};

const LandingPage1 = (props: Props) => {
  return (
    <div className="lg:h-[100vh] bg-white lg:grid grid-cols-6 flex-col-reverse flex">
      <div className="col-span-3 lg:h-[100vh] flex items-center justify-center flex-col px-[7rem]">
        <h1 className="text-[3rem] font-semibold">Become a Merchant</h1>
        <p>
          We strive to provide a space where guests can connect with themselves
          and explore their full potential, offering a safe place.
        </p>
      </div>
      <div className="col-span-3 lg:h-[100vh] flex justify-end w-full">
        <img src={womanImage} alt="woman" className="lg:h-[100vh] w-full" />
      </div>
    </div>
  );
};

export default LandingPage1;
