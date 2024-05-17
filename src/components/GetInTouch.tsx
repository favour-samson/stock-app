import React from "react";
import Button from "./Button";
import Avatar3 from "@/images/Avatar (1).png";
import Avatar2 from "@/images/Avatar (2).png";
import Avatar1 from "@/images/Avatar.png";
import Image from "next/image";

const GetInTouch = () => {
  return (
    <div className="h-[405px] px-[32px] md:px-0 pt-[107.51px] md:pt-0">
      <div className="max-w-[1280px] mx-auto px-[32px]">
        <div className="max-w-[1216px] md:h-[294px] relative bg-[#EAF8F8] rounded-[16px]">
          <div className="relative w-[120px] mx-auto flex items-center justify-center ">
            <Image
              src={Avatar1}
              alt="avatar"
              width={48}
              height={48}
              className="object-cover absolute top-[36px] left-2 "
            />
            <Image
              src={Avatar3}
              alt="avatar"
              width={48}
              height={48}
              className="object-cover absolute top-[32px] z-10 "
            />
            <Image
              src={Avatar2}
              alt="avatar"
              width={48}
              height={48}
              className="object-cover absolute top-[36px]   right-2 "
            />{" "}
          </div>
          <div className="pt-[120px] max-w-[768px] text-center mx-auto">
            <p className="font-bold text-[20px] dm-sans leading-[30px] text-primary-400">
              Still have questions?
            </p>
            <p className="font-normal md:text-[18px] text-[16px] leading-[28px] text-[#6B7878]">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
          </div>
          <div className="pt-[32px] w-full flex items-center justify-center">
            <Button text="Get in touch" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
