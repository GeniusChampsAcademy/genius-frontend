import React from "react";

export default function JoinUsNow() {
  return (
    <div className="container mb-80">
      <div className="text-center text-2xl md:text-3xl lg:text-5xl text-[#4F4D74]">
        <h1>Join Us Now!</h1>
      </div>

      <div className="cards text-white flex flex-col justify-center gap-8 max-w-[77vw] mx-auto">
        <div className="card-one flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mt-24 max-w-[100vw] bg-[#6072FA] border-8 border-[#f9f9fa] rounded-3xl drop-shadow-2xl">
          <div className="relative bottom-20 -mb-20">
            <img
              src="assets/images/tiger-with-boy.svg"
              alt="tiger with boy"
              className="w-[80%] h-[auto]"
            />
          </div>

          <div className="flex flex-col gap-4 pb-10 px-4">
            <h1 className="text-4xl font-extrabold">Book a Franchise</h1>
            <p>
              Begin your teaching venture now, own your <br /> franchise and
              earn right from your doorstep.
            </p>
            <button className="px-10 py-3 bg-white text-[#6072FA] rounded-3xl border-4 border-[#e3e3e6] w-[180px]">
              Book Now
            </button>
          </div>
        </div>

        <div className="card-two-three-root flex flex-col lg:flex-row gap-10">
          <div className="card-two flex flex-col h-[55vh] lg:w-1/3 gap-14 bg-[#74D997] py-16 px-24 border-8 border-[#f9f9fa] justify-center items-center rounded-3xl drop-shadow-2xl">
            <div className="text-white text-4xl font-extrabold whitespace-nowrap">
              <h1>
                Book Demo <br /> Class Now
              </h1>
            </div>
            <button className="px-10 py-3 text-white bg-[#6072FA] rounded-3xl border-4 border-white w-[180px]">
              Book Now
            </button>
          </div>

          <div className="card-three bg-[#17C7EE] h-[55vh] lg:w-2/3 border-8 border-[#f9f9fa] rounded-3xl drop-shadow-2xl">
            <div className="mx-6 min-h-[98%] bg-no-repeat flex justify-center">
              <div className="flex flex-col justify-center items-center md:relative md:top-14 md:left-2">
                <h1 className="mb-6 text-4xl whitespace-nowrap z-10 md:relative md:-left-40">Exam Portal</h1>
                
                <button className="px-10 py-3 bg-white text-[#6072FA] rounded-3xl border-4 z-20 md:relative md:-left-40 border-[#e3e3e6] w-[180px]">
                  Give Exam
                </button>
                <div className="w-[30rem] h-auto relative hidden md:block -z-0 -top-44 xl:-top-36">
                  <img src="assets/images/tiger-on-bench.svg" alt="exam portal tiger" />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
