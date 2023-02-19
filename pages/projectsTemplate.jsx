import Image from "next/image";
import React from "react";
import androidAppImg from "../public/assets/projects/dart.png";
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
          src={androidAppImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Random ord generator for Android</h2>
          <h3>Flutter/Dart for Android</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-[#5651e5]">Prosjekt</p>
          <h2>Oversikt</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            deleniti ex minus sit nisi, eligendi labore dolore praesentium dolor
            consequuntur quam. Quae error nesciunt facilis natus, doloribus
            corporis veniam adipisci eius ut. Quidem vitae modi hic deserunt
            labore ut possimus quaerat delectus, neque at, omnis cupiditate,
            veniam maiores. Alias, et.
          </p>
          <a href="/">
            <button className="px-8 py-2 mt-4 mr-8">Kode</button>
          </a>
          <a href="/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Teknologi</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Dart
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Flutter
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Android Studio
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
