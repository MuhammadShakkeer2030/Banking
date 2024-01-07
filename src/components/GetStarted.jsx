import styles from "../style";
import { arrowUp } from "../assets";
import { useState } from "react";

const GetStarted = () => {
  const [holdBtn, setHoldBtn] = useState(false);
  console.log(holdBtn);
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full  p-[2px] cursor-pointer bg-blue-gradient `}
      onClick={() => setHoldBtn(!holdBtn)}
    >
      <div
        className={` ${styles.flexCenter} flex-col ${
          holdBtn ? "bg-[#535080]": "bg-primary"}  w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow-up"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};
export default GetStarted;
