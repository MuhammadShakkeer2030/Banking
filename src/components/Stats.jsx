import styles from "../style";
import { useState, useEffect, useRef } from "react";

const Stats = ({ stat }) => {
  const [counting, setCounting] = useState(0);
  const counterRef = useRef();

  useEffect(() => {
    const targetValue = stat?.value;

    const startCounting = () => {
      const timer = setInterval(() => {
        setCounting((prev) => {
          const nextCount = prev + 1;
          return nextCount > targetValue ? targetValue : nextCount;
        });
      }, 300);
      return () => clearInterval(timer);
    };

    const options = {
      root:null,
      rootMargin:'100px',
      threshold:.5
    }

    if(counterRef?.current){
      const observer = new IntersectionObserver((entries)=>{

        entries?.forEach((entry)=>{
          if(entry.isIntersecting){
            startCounting()
          }
        })
      },options)
      observer.observe(counterRef?.current)
    }

  }, [counting]);

  return (
    <div
      ref={counterRef}
      key={stat.id}
      className={`flex-1 flex justify-start items-center flex-row m-3`}
    >
      <h4 className="font-poppins w-[3em] font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
        {counting}K+
      </h4>
      <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
        {stat.title}
      </p>
    </div>
  );
};

export default Stats;
