export const HeroSection = () => {
  return (
    <div className="max-w-[1440px] h-[75%] flex flex-col justify-between lg:flex-row lg:items-end mx-auto p-6 md:p-16 lg:p-32">
      <div className="w-full lg:w-[50%] text-white text-center lg:text-left">
        <h2 className="font-sub tracking-[4px] text-[16px] md:text-[28px] uppercase">So, you want to travel to</h2>
        <h1 className="font-default my-6 text-[80px] md:text-[144px] uppercase">Space</h1>
        <p className="font-body text-[18px] leading-8">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="w-full lg:w-[50%] flex justify-center items-center">
        <button className="w-[144px] h-[144px] md:w-[272px] md:h-[272px] bg-white rounded-full ring-[88px] ring-transparent hover:ring-white hover:ring-opacity-10 transition-shadow duration-700 ease-in-out">
          <p className="uppercase text-navy text-[18px] md:text-[32px]">Explore</p>
        </button>
      </div>
    </div>
  );
};
