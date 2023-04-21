import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Utforsk min portfolio
          </p>
          <h1 className="py-4 text-gray-700">
            Hei, Jeg er <span className="text-[#5651e5]"> Tobias</span>
          </h1>
          <h1 className="py-2 text-gray-700">En Full Stack Developer</h1>
          <p className="py-4 text-gray-600 max-w[70%] m-auto">
            Jeg er en full stack utvikler som liker å jobbe med alt mulig koding
            å lærer nye ting fort.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href={"https://www.linkedin.com/in/tobias-stokken-54b83a235/"}>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedin />
            </div>
            </Link>
            <Link href={"https://github.com/TobiasStokken"}>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
            </div>
            </Link>
            <Link href={"https://www.instagram.com/chips_godt/"}>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaInstagram />
            </div>
            </Link>
            <Link href={"mailto:tobias@stokken.net"}>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
