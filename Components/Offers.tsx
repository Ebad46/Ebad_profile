import Image from 'next/image'
import react, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import C1 from './C1'
function Offers (){
    useEffect(() => {
        AOS.init({
          duration: 800,
          offset: 160,
          once: false,
          mirror: true,
        });
      }, []);
    return(
    <><div className="bg-gray-900 mt-32">
    <div className="text-center text-blue-600 brightness-200 text-2xl">
      What I Offer
    </div>
    <div className="sm:text-5xl text-center text-3xl">
      Ai is the future of everything
    </div>
    <div className="w-[100%] mt-10">
      <div className="flex justify-evenly flex-wrap ">
        <div
          data-aos="zoom-in"
          className="bg-gradient-radial border-x-[1px] border-b-[1px] rounded-xl border-white from-gray-900/5 to-white/20 h-60 w-80 "
        >
          <div className=" flex justify-center">
            <Image
              className=" mt-5"
              src="/9.png"
              height={0}
              width={80}
              alt="Card"
            />
          </div>
          <h3 className="text-center text-xl">Video ADDS</h3>
          <p className="text-sm mt-2 text-center">
            Crafting compelling video advertisements that captivate and
            convert audiences, delivering impactful marketing results.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          className="bg-gradient-radial border-x-[1px] border-b-[1px] rounded-xl border-white from-gray-900/5 to-white/20 h-60 w-80"
        >
          <div className=" flex justify-center">
            <Image
              className="h-[40%] mt-5"
              src="/7.png"
              height={0}
              width={100}
              alt="Card"
            />
          </div>
          <h3 className="text-center text-xl">Music Video</h3>
          <p className="text-sm mt-2 text-center">
            Crafting visually stunning music videos that magnificently
            amplify the artistic essence of your music.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          className="bg-gradient-radial border-x-[1px] border-b-[1px] rounded-xl border-white from-gray-900/5 to-white/20 h-60 w-80"
        >
          <div className=" flex justify-center">
            <Image
              className="h-[40%] mt-5"
              src="/4.png"
              height={0}
              width={120}
              alt="Card"
            />
          </div>
          <h3 className="text-center text-xl">Cloud Computing</h3>
          <p className="text-sm mt-2 text-center">
            Utilizing serverless computing and containerization, I harness
            the power of the cloud to enhance application deployment, reduce
            infrastructure overhead, and optimize overall performance.
          </p>
        </div>
      </div>
    </div>
    <div className="w-[100%] mt-10">
      <div className="flex justify-evenly flex-wrap ">
        <div
          data-aos="zoom-in"
          className="bg-gradient-radial border-x-[1px] border-b-[1px] rounded-xl border-white from-gray-900/5 to-white/20 h-60 w-80"
        >
          <div className=" flex justify-center">
            <Image
              className="h-[40%] mt-5"
              src="/Asset-11.png"
              height={0}
              width={140}
              alt="Card"
            />
          </div>
          <h3 className="text-center text-xl">Gaming</h3>
          <p className="text-sm mt-2 text-center">
            Elevating gaming content with dynamic visuals and seamless
            editing, enhancing the gaming experience
          </p>
        </div>
        <div
          data-aos="zoom-in"
          className="bg-gradient-radial border-x-[1px] border-b-[1px] rounded-xl border-white from-gray-900/5 to-white/20 h-60 w-80"
        >
          <div className=" flex justify-center">
            <Image
              className="h-[40%] mt-1"
              src="/2.png"
              height={0}
              width={100}
              alt="Card"
            />
          </div>
          <h3 className="text-center text-xl">SEO</h3>
          <p className="text-sm mt-2 text-center">
            Implementing relevant meta tags, such as title and description,
            along with optimizing content for target keywords will enhance
            our website`s visibility and SEO performance.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          className="bg-gradient-radial border-x-[1px] border-b-[1px] rounded-xl border-white from-gray-900/5 to-white/20 h-60 w-80"
        >
          <div className=" flex justify-center">
            <Image
              className="h-[40%] mt-5"
              src="/5.png"
              height={0}
              width={100}
              alt="Card"
            />
          </div>
          <h3 className="text-center text-xl">Data Management</h3>
          <p className="text-sm mt-2 text-center">
            I leverage robust data management practices to ensure efficient
            organization, retrieval, and analysis of critical information,
            enhancing our decision-making processes and overall operational
            effectiveness.
          </p>
        </div>
      </div>
    </div>

    <div className=" flex justify-center">
      <div
        className=" h-[40rem] bg-center bg-cover "
        style={{
          backgroundImage:
            "url(https://s27932.n3cdn1.secureserver.net/wp-content/uploads/2023/09/back-view-of-young-man-watching-graphs-on-monitors.jpg?time=1701190903)",
        }}
      >
        <div className=" mt-6 h-[40rem] bg-purple-900/30 flex justify-center ">
          <div className="w-[40%] flex flex-col items-center justify-center font-bold md:text-4xl text-2xl ml-0 md:ml-10">
            <span data-aos="flip-up">
              Trusted by 100 world-class brands and organizations of all
              sizes
            </span>
            <p data-aos="flip-up" className="text-sm font-normal">
              Having earned the trust of 100+ clients, my dedication and
              excellence make me a proven, reliable choice in the industry.
            </p>
          </div>
          <div data-aos="zoom-up" className="w-[40%]  xl:space-y-20 mt-14 ml-0 md:ml-10 sm:block hidden ">
            <div className="flex space-x-5 flex-wrap">
              <div data-aos="flip-right" className="bg-gradient-radial border-x-[1px] border-b-[1px] rounded-xl border-white from-gray-900/5 to-white/20 h-32 w-60">
                <Image
                  className="mt-6 ml-6"
                  src="/fiver.png"
                  width={200}
                  height={100}  
                  alt="png"
                />
              </div>
              <div data-aos="flip-left" className="bg-gradient-radial border-x-[1px] border-b-[1px] rounded-xl border-white from-gray-900/5 to-white/20 h-32 w-60">
                <Image
                  className="mt-3 ml-5"
                  src="/upwork.png"
                  width={200}
                  height={100}
                  alt="png"
                />
              </div>
            </div>
            <div className="flex space-x-5 flex-wrap">
              <div data-aos="flip-right" className="bg-gradient-radial border-x-[1px] border-b-[1px] rounded-xl border-white from-gray-900/5 to-white/20 h-32 w-60">
                <Image
                  className="mt-6 ml-2"
                  src="/freelancer.png"
                  width={230}
                  height={100}
                  alt="png"
                />
              </div>
              <div data-aos="flip-left" className="bg-gradient-radial border-x-[1px] border-b-[1px] rounded-xl border-white from-gray-900/5 to-white/20 h-32 w-60">
                <Image
                  className="mt-7 ml-3"
                  src="/toptal.png"
                  width={200}
                  height={100}
                  alt="png"
                />
              </div>
            </div>
          </div>
        </div>
        <C1/>





      </div>
    </div>
  </div></>
  )
}

export default Offers