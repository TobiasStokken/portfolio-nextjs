import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Hvem er Jeg</h2>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            itaque similique odit doloribus, dolorem laborum optio neque,
            cupiditate iusto nulla blanditiis quos tempora voluptatum nam
            ratione hic, nisi commodi ea provident quia quasi inventore sint.
            Accusantium, itaque molestiae qui eos mollitia labore voluptatum
            neque dicta earum laboriosam. Expedita quidem atque corporis
            adipisci earum praesentium harum aspernatur deleniti animi
            voluptatem mollitia, ad ducimus impedit est tempora, libero optio
            eum enim ab voluptatum quaerat soluta nisi hic. Veniam ratione nam
            officiis nostrum exercitationem nihil iure laboriosam repellat.
            Voluptates qui repellat modi maxime. Id beatae ea et, temporibus
            atque rem porro alias exercitationem.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
          className="rounded-xl"
            src="/../public/assets/tobiasMotorsykkel.png"
            alt="/"
            width={300}
            height={0}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
