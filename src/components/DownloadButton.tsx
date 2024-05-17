// import React from "react";
// import Image from "next/image";
// import { StaticImageData } from "next/image";

// interface DownloadButtonProps {
//   imgSrc: StaticImageData;
//   smallText: string;
//   bigText: string;
// }

// const DownloadButton: React.FC<DownloadButtonProps> = ({
//   imgSrc,
//   smallText,
//   bigText,
// }) => {
//   return (
//     <button className="flex dm-sans items-center  justify-center bg-black border-2  text-white px-2 py-2 rounded-lg transition duration-300 ease-in-out ">
//       <span className="mr-2">
//         <Image src={imgSrc} alt="Download" width={30} height={20} />
//       </span>
//       <span className="flex flex-col leading-5">
//         <small className="text-xs text-left">{smallText}</small>
//         <strong className="text-[20px]">{bigText}</strong>
//       </span>
//     </button>
//   );
// };

// export default DownloadButton;
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface DownloadButtonProps {
  imgSrc: StaticImageData;
  smallText: string;
  bigText: string;
  bgColor: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  imgSrc,
  smallText,
  bigText,
  bgColor,
}) => {
  return (
    <button
      className={`flex dm-sans items-center justify-center ${bgColor} border-2 text-white px-[10px] py-2 rounded-lg transition duration-300 ease-in-out `}
    >
      <span className="mr-2">
        <Image src={imgSrc} alt="Download" width={30} height={20} />
      </span>
      <span className="flex flex-col leading-5">
        <small className="md:text-xs text-left">{smallText}</small>
        <strong className="md:text-[20px] text-[14px]">{bigText}</strong>
      </span>
    </button>
  );
};

export default DownloadButton;
