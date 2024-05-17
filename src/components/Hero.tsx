import React from "react";
import { FaArrowRight } from "react-icons/fa";
import DownloadButton from "./DownloadButton";
import AppleLogo from "@/images/Applelogo.png";
import GoogleLogo from "@/images/GooglePlaylogo.png";
import herePlayer from "@/images/Video player.png";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer";
const Hero = () => {
  return (
    <div className=" relative ">
      <div className=" hero h-[420px] px-[19px] md:px-0 md:h-[650px] bg-[#EFF9F9]  pt-[39px]">
        <div className="max-w-[367px] flex justify-between pr-[7.33px] items-center mx-auto bg-secondary-500 rounded-[16px] h-[32px] border-primary-500 border-[1.5px]">
          <div className="w-[107px] flex items-center justify-center text-center ml-[4px] mr-[12px] bg-secondary-500 rounded-[16px] h-[24px] border-primary-500 border-[1.5px]">
            <p className="text-primary-500 text-center font-medium md:text-[14px] text-[8px]">
              New feature
            </p>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-primary-500 font-medium md:text-[14px] text-[8px] ">
              Check out the new dashboard
            </span>
            <FaArrowRight color="#96CCCC" />
          </div>
        </div>
        <div className="max-w-[1024px] pt-[16px] mx-auto">
          <h1 className="text-primary-500 text-center font-bold md:leading-[72px] text-[32px] leading-[32px]  md:text-[60px] dm-sans">
            Navigate the dynamic world of financial markets.
          </h1>
        </div>
        <div className="max-w-[768px] pt-[24px] mx-auto">
          <p className="text-primary-500 text-[10px] leading-[16px] text-center font-normal md:leading-[30px]  md:text-[20px]">
            Our mission is to empower you with the tools and knowledge to take
            control of your financial future success should be within reach for
            everyone.
          </p>
        </div>
        <div className=" hidden md:flex  max-w-[340px] pt-[48px] mx-auto items-center justify-between">
          <DownloadButton
            imgSrc={AppleLogo}
            smallText="Download on the"
            bigText="App Store"
            bgColor="bg-black"
          />
          <DownloadButton
            imgSrc={GoogleLogo}
            smallText="Get IT ON"
            bigText="Google Play"
            bgColor="bg-black"
          />
        </div>
      </div>

      <div className="absolute md:h-[432px]  rounded-md overflow-hidden z-20 bottom-[-115px] md:bottom-[-270px] left-1/2 transform -translate-x-1/2 w-full max-w-[768px] ">
        <Image
          alt="vido"
          src={herePlayer}
          width={768}
          height={432}
          className=""
        />
        {/* <VideoPlayer /> */}
      </div>
      <div className="md:hidden block">
        <div className="absolute  bottom-[-10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={154}
            height={43}
            fill="none"
          >
            <path
              fill="#DAECEC"
              d="M.543 19.407 154 .22v23.384L.543 42.79V19.407Z"
            />
          </svg>
        </div>
        <div className="absolute bottom-[-45px]">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={37}
            height={43}
            fill="none"
          >
            <path
              fill="#96CCCC"
              d="M-117 19.188 36.457 0v23.384L-117 42.572V19.188Z"
            />
          </svg>
        </div>
        <div className="absolute right-0 bottom-[80px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={121}
            height={38}
            fill="none"
          >
            <path
              fill="#96CCCC"
              d="M.59 16.934 136.016 0v20.636L.59 37.57V16.934Z"
            />
          </svg>
        </div>
        <div className="absolute right-0 bottom-[53px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={172}
            height={46}
            fill="none"
          >
            <path
              fill="#AFD9D9"
              d="M0 25.046 197.336.279v20.637L0 45.682V25.046Z"
            />
          </svg>
        </div>
        <div className="absolute right-0 bottom-[40px]">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={33}
            height={38}
            fill="none"
          >
            <path
              fill="#DAECEC"
              d="M.29 17.012 135.715.078v20.637L.289 37.648V17.012Z"
            />
          </svg>
        </div>
      </div>

      <div className="hidden md:block left2 z-10 absolute bottom-[-80px]">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={387}
          height={130}
          fill="none"
        >
          <path
            fill="#DAECEC"
            d="M-80 58.813 386.667.46v71.11L-80 129.925V58.813Z"
          />
        </svg>
      </div>
      <div className="hidden md:block left1 absolute bottom-[-160px] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={218}
          height={131}
          fill="none"
        >
          <path
            fill="#FD891C"
            fillOpacity={0.24}
            d="M-248.889 59.022 217.778.67v71.111l-466.667 58.352v-71.11Z"
          />
        </svg>
      </div>
      <div className="hidden md:block right1 absolute right-0 bottom-[80px]">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={423}
          height={130}
          fill="#f2dec4"
        >
          <path
            fill="#f2dec4"
            // fillOpacity={0.24}
            d="M.777 58.703 467.444.35v71.112L.777 129.814V58.703Z"
          />
        </svg>
      </div>
      <div className="hidden md:block right2 absolute right-0  bottom-[-10px]">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={600}
          height={158}
          fill="none"
        >
          <path fill="#AFD9D9" d="M0 86.137 680 .795v71.11L0 157.249v-71.11Z" />
        </svg>
      </div>
      <div className=" hidden md:block right3 absolute right-0 bottom-[-20px]">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={120}
          height={130}
          fill="none"
        >
          <path
            fill="#DAECEC"
            d="M0 58.356 466.667.004v71.11L0 129.468V58.356Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
