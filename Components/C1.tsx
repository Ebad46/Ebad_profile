import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const C1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 160,
      once: false,
      mirror: true,
    });
  }, []);

  const [startCounting, setStartCounting] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    // Stop 1: 0 to 50
    const intervalId1 = setInterval(() => {
      setCount1((prevCount) => (prevCount < 100 ? prevCount + 1 : prevCount));
    }, 30);

    // Stop 2: 0 to 60
    const intervalId2 = setInterval(() => {
      setCount2((prevCount) => (prevCount < 50 ? prevCount + 1 : prevCount));
    }, 30);

    // Stop 3: 0 to 80
    const intervalId3 = setInterval(() => {
      setCount3((prevCount) => (prevCount < 1000 ? prevCount + 1 : prevCount));
    }, 30);

    // Stop 4: 0 to 100
    const intervalId4 = setInterval(() => {
      setCount4((prevCount) => (prevCount < 15 ? prevCount + 1 : prevCount));
    }, 30);

    // Clear intervals after 3 seconds
    setTimeout(() => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
      clearInterval(intervalId3);
      clearInterval(intervalId4);
    }, 3000);

    // Cleanup functions
    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
      clearInterval(intervalId3);
      clearInterval(intervalId4);
    };
  }, []);

  return (
    <div className="bg-gray-900">
      <div className=" w-full flex justify-center">
        <div
          data-aos="flip-right"
          className="-mt-16 md:w-[80%]  flex justify-evenly h-fit bg-gradient-radial border-x-[1px] border-b-[1px] rounded-xl border-white from-gray-900/5 to-white/20"
        >
          <div className="my-auto  border-x-2 border-white ">
            <div className="text-xl md:text-6xl ml-5 font-sans">{count1}%</div>
            <b className="ml-5 md:text-sm text-xs">Happy Client</b>{" "}
          </div>
          <div className="my-auto  border-x-2 border-white   ">
            <div className="text-xl md:text-6xl ml-5 font-sans">{count2}+</div>
            <b className="ml-5 md:text-sm text-xs">Projects Done</b>{" "}
          </div>
          
          <div className="my-auto  border-x-2 border-white   ">
            <div className="text-xl md:text-6xl ml-5 font-sans">{count3}+</div>
            <b className="ml-5 md:text-sm text-xs">Review Customer</b>{" "}
          </div>
          <div className="my-auto   border-x-2 border-white  ">
            <div className="text-xl md:text-6xl ml-5 font-sans ">{count4}</div>
            <b className="ml-5 md:text-sm text-xs ">Months Experience</b>
          </div>
          <div></div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-blue-950 via-gray-950 to-gray-900 pb-60 border-gray-900">
        <div className="sm:text-5xl text-2xl text-center text-blue-500 brightness-200 my-10">
          Why choose Me
        </div>
        <div data-aos="slide-up" className="flex flex-wrap justify-around">
          <div className="md:w-[40%]   rounded flex h-40 bg-gradient-to-br from-gray-950 to-gray-900 text-2xl">
            <Image src="/247.png" width={150} height={150} alt="24/ service" />
            <div className="">
              <div className="text-4xl font-bold">
                Available
                <div className="text-base font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti expedita enim deserunt doloremque minima.
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[40%]   rounded flex h-40 bg-gradient-to-br from-gray-950 to-gray-900 text-2xl">
            <Image
              className="h-32"
              src="/price.png"
              width={120}
              height={120}
              alt="24/ service"
            />
            <div className="">
              <div className="text-4xl font-bold">
                Affordable Price
                <div className="text-base font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti expedita enim deserunt doloremque minima.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-up"
        className="w-[100%] flex flex-wrap -mt-40 justify-center space-x-5"
      >
        <div
          data-aos="slide-down"
          className="rounded text-center h-[33rem] bg-gradient-radial from-gray-900/5 to-white/10 w-80  border-x-[1px] border-b-[1px] border-white"
        >
          <div className="my-10 text-4xl mx-auto">Styling</div>
          <div className="text-6xl mx-auto mb-24">3</div>
          <div className="mx-auto border-b-2 my-3 w-60 text-xl border-gray-950/50">
            CSS
          </div>
          <div className="mx-auto border-b-2 my-3 w-60 text-xl border-gray-950/50">
            Tailwind Css
          </div>
          <div className="mx-auto border-b-2 my-3 w-60 text-xl border-gray-950/50">
            Figma
          </div>
        </div>
        <div
          data-aos="slide-up"
          className="rounded h-[33rem] text-gray-950 bg-white text-center w-80 border-x-[1px] border-b-[1px] border-white"
        >
          <div className="my-10 text-4xl mx-auto">Languages</div>
          <div className="text-6xl mx-auto mb-24">5</div>
          <div className="mx-auto border-b-2 my-3 w-60 text-xl border-gray-950/50">
            JavaScript
          </div>
          <div className="mx-auto border-b-2 my-3 w-60 text-xl border-gray-950/50">
            TypeScript
          </div>
          <div className="mx-auto border-b-2 my-3 w-60 text-xl border-gray-950/50">
            Python
          </div>
          <div className="mx-auto border-b-2 my-3 w-60 text-xl border-gray-950/50">
            C++
          </div>
          <div className="mx-auto border-b-2 my-3 w-60 text-xl border-gray-950/50">
            C
          </div>
        </div>
        <div
          data-aos="slide-down"
          className="rounded text-center h-[33rem] bg-gradient-radial from-gray-900/5 to-white/10 w-80 border-x-[1px] border-b-[1px] border-white"
        >
          <div className="my-10 text-4xl mx-auto">Data Bases</div>
          <div className="text-6xl mx-auto mb-24">3</div>
          <div className="mx-auto border-b-2 my-3 w-60 text-xl border-gray-950/50">
            PostGres
          </div>
          <div className="mx-auto border-b-2 my-3 w-60 text-xl border-gray-950/50">
            MySQL
          </div>
          <div className="mx-auto border-b-2 my-3 w-60 text-xl border-gray-950/50">
            Mongo DB
          </div>
        </div>
      </div>

      <div
        className="w-full h-[38rem] bg-center bg-cover mt-20"
        style={{
          backgroundImage:
            "url(https://s27932.n3cdn1.secureserver.net/wp-content/uploads/2023/09/changing-camera-lens-aperture.jpg?time=1702937994)",
        }}
      >
        <div className="grid content-center  h-[38rem] bg-blue-900/20">
          <div className="text-center brightness-200 text-blue-500 text-xl">
            BOOKING ONLINE
          </div>
          <div className="text-center text-4xl sm:mx-40">
            Have more questions about a package? Need something more custom?
            Send me your info and Ill get back to you
          </div>
        </div>
      </div>
      <div className="text-center text-blue-500 text-3xl brightness-200 mt-10 border-y-2 border-dashed">
        Follow My social media
      </div>
      <div className=" text-4xl brightness-200 flex justify-center space-x-5">
        <AiFillFacebook />
        <AiFillInstagram />
        <AiFillLinkedin />
      </div>
      <div className="border-t-2 mx-10 border-white/20 mt-20">
        <ul className="flex justify-center space-x-10">
          <li>About</li>
          <li>Media</li>
          <li>Contact</li>
        </ul>
        <div className="text-center mt-8">
          Copyright © 2023 All rights reserved. Powered by Vercel
        </div>
      </div>
    </div>
  );
};

export default C1;
