import { discount, cards } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex md:items-center flex-col md:flex-row gap-10 md:gap-0"
    >
      <div className="flex flex-col gap-5 flex-1 pr-10 md:pr-0 hero-fade-in">
        <div className="flex items-center gap-2 font-poppins bg-discount-gradient py-2 px-3 xs:px-5 text-lg rounded-xl w-[100%] xs:w-fit hero-slide-up hero-delay-1">
          <img src={discount} alt="discount" />
          <p className="sm:text-base text-xs">
            2x faster{" "}
            <span className="text-[#5A595E] font-[500]">banking for</span>{" "}
            digital creators
          </p>
        </div>

        <div className="relative hero-slide-up hero-delay-2">
          <h1 className="text-[3.3rem] sm:text-6xl leading-snug sm:leading-normal md:text-7xl md:leading-snug font-[600] font-poppins">
            Smart <br className="md:block hidden" />{" "}
            <span className="text-gradient">Banking</span>{" "}
            <br className="md:block hidden " /> for the{" "}
            <br className="md:block hidden " />
            Modern World.
          </h1>
          <div className="absolute top-0 left-[350px] md:left-[400px] md:block hidden">
            <GetStarted />
          </div>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-dimWhite sm:mt-5 md:max-w-[470px] hero-slide-up hero-delay-3">
          Manage all your accounts, payments, and savings goals in one simple
          dashboard. Track real-time spending, automate bills, and grow your
          balance with intelligent insights.
        </p>
      </div>

      <div className="flex-1 relative flex items-center justify-center hero-fade-in hero-delay-2">
        <img
          src={cards}
          alt="cards"
          className="w-full h-full object-contain hero-slide-in-right hero-delay-2"
        />
        <div className="absolute w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />

        <div className="absolute -top-4 left-5 sm:left-[60px] md:hidden">
          <GetStarted />
        </div>
      </div>
    </section>
  );
};

export default Hero;
