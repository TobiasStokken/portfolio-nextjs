import Image from "next/image";
import React from "react";
import nextjsImg from "../public/assets/projects/nextjs.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const androidApp = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={nextjsImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Nextjs portfolio</h2>
          <h3>Nextjs med react og tailwind</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-[#5651e5]">Prosjekt</p>
          <h2>Oversikt</h2>
          <p>
            Dette er en portfolio nettside jeg lagde i nextjs, jeg bruker react
            og tailwind til å lage denne flotte nettsiden. Jeg fulgte en
            tutorial for å lage denne nettsiden fordi dette er min første nextjs
            prosjekt.
          </p>
          <Link href="https://github.com/TobiasStokken/portfolio-nextjs">
            <button className="px-8 py-2 mt-4 mr-8">Kode</button>
          </Link>
          <Link href="https://portfolio-nextjs-mu-ten.vercel.app/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Teknologi</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Nextjs
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Tilbake</p>
        </Link>
      </div>
    </div>
  );
};

export default androidApp;
