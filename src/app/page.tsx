"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "@/../Components/styler.module.css"
import Offers from "../../Components/Offers";
import CardComponent from "../../Components/Card";
import Button from "../../Components/Button";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 160,
      mirror: true,
    });
  }, []);
  const handleClick = () => {
    window.open("Ebad's Resume.pdf");
  };
  const sentences: string[] = [
    "Front End developer.",
    "Back End developer.",
    "Let's build Websites!",
    "React developer.",
  ];
  const [currentSentence, setCurrentSentence] = useState("React developer.");
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (typingIndex + 1) % sentences.length;
      const nextSentence = sentences[nextIndex];
      setTypingIndex(nextIndex);
      typeSentence(nextSentence);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [typingIndex]);

  const typeSentence = (sentence: any) => {
    let currentText = "";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < sentence.length) {
        currentText += sentence[currentIndex];
        setCurrentSentence(currentText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
  };
  return (
    <div className="">
      <div className={`bg-black lg:h-screen h-fit 2xl:h-[60rem]`}>
        <div className="flex justify-center sm:justify-evenly flex-wrap-reverse mb-20 h-fit pt-[7rem]">
          <div
            className={`${styles.index} md:mt-40 mt-60 sm:text-4xl text-2xl ml-4 lg:ml-36`}
          >
            <div className="flex">
              Hey its me{" "}
              <div
                className={`h-fit text-7xl  brightness-200 -mb-5 text-blue-500 `}
              >
                Ebad
              </div>
            </div>
            I am a
            <div className="sm:text-5xl ml-3 text-3xl h-fit relative mb-[-1rem]">
              <h1
                className={`text-blue-500 shadow-blue-500 brightness-200 w-fit `}
              >
                {currentSentence}
                <span
                  className="absolute -ml-1 -mb-2 w-[3px] h-10 bg-blue-500  animate-ping transition-transform duration-300 ease-in-out"
                  style={{
                    animationDuration: "0.8s",
                    animationIterationCount: "infinite",
                  }}
                ></span>
              </h1>
            </div>
            <br />
            <div className="-mt-5">
              I learn web designing at the Presidential Initiative for
              Artificial Intelligence & Computing (PIAIC)
            </div>
            <div>
              <Button />
              <div className="text-4xl flex space-x-6 ml-10 text-blue-500 mt-10  ">
                <div className=" mt-5 p-1 ml-10 w-fit text-blue-500 brightness-200 border-2 rounded-3xl border-blue-500 hover:shadow-lg hover:shadow-blue-500 hover:bg-blue-500 hover:text-white active:animate-bounce transition-all duration-300">
                  <button className="" onClick={handleClick}>
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[35rem] md:w-[40rem] absolute md:right-0 top-10 -ml-52 lg:rever 2xl:mr-96">
            <Image
              className=""
              src="/me.png"
              alt="png"
              height={20000000}
              width={10000}
            />
          </div>
        </div>
      </div>

      <div className=" bg-gray-900">
        <div className=" flex justify-evenly flex-wrap">
          <div
            className={`${styles.info} xl:mt-[-4em] mt-[-4rem] sm:mt-[-3rem] lg:mt-[3rem] md:mt-[-6rem] space-y-3`}
            data-aos="fade-up"
          >
            <CardComponent
              Header="Python"
              Parse="Advancing Python static analysis empowers developers with
                enhanced code quality, security, and performance insights,
                fostering more robust and efficient software development."
            />
          </div>
          <div
            className={`${styles.info}  xl:mt-[-4em] sm:mt-[-3rem] lg:mt-[3rem] md:mt-[-6rem] space-y-3`}
            data-aos="fade-up"
          >
            <CardComponent
              Header="Tailwind CSS"
              Parse="Tailwind CSS simplifies and accelerates web development through
                utility-first, responsive, and highly customizable styling with
                a single line of classes.."
            />
          </div>
          <div
            className={`${styles.info}  xl:mt-[-4em] sm:mt-[-3rem] lg:mt-[3rem] md:mt-[-6rem] space-y-3`}
            data-aos="fade-up"
          >
            <CardComponent
              Header="TypeScript"
              Parse="Advancing TypeScript fosters safer and more scalable JavaScript
                development, offering strong typing, modern features, and
                improved tooling for building robust and maintainable
                applications."
            />
          </div>
        </div>

        <div className="justify-between overflow-hidden lg:flex hidden ">
          <div
            data-aos="fade-right"
            className="text-xl w-[40%] mt-28 ml-14 items-center"
          >
            <div className="">
              <h3 className="text-4xl mb-5 underline  -ml-5 text-blue-600 brightness-200">
                <b>Proficient</b>
              </h3>
              Passionate front-end developer with expertise in crafting
              responsive and visually appealing web applications. Proficient in
              HTML, CSS, and JavaScript, I specialize in creating seamless user
              experiences through clean and efficient code. Dedicated to staying
              up-to-date with the latest technologies and design trends to
              deliver modern and user-friendly interfaces.
            </div>
          </div>
          <div className="flex  justify-end pt-14 mt-4 w-[60%]">
            <div className="">
              <Image
                data-aos="fade-left"
                className=" rounded-xl overflow-hidden mt-7 -z-1 brightness-150"
                src="/upper.jpg"
                height={900}
                width={550}
                alt="image"
              />
            </div>
            <div className="hidden lg:block absolute">
              <Image
                data-aos="flip-left"
                className=" rounded-2xl overflow-hidden mt-40 mr-60"
                src="/programmer.jpg"
                height={900}
                width={450}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
      <Offers />
    </div>
  );
}
