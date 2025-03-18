import React from "react";

function FoodWater() {
  return (
    <>
      <div
        id="mainFoodWater"
        className="h-screen w-screen bg-white flex flex-col mt-[20px] mb-[108px]"
      >
        <h1 className="text-blac font-bold text-lg pl-4 sm:text-2xl pl-8 md:text-3xl pl-10">
          Driven by Our Mission, We Aim to
          <span className="text-[#ed9455]"> Support Them</span>
        </h1>
        <div className="bg-[url(../../public/image-11.png)] bg-cover bg-center h-screen w-screen  flex px-[40px] mt-[40px]">
          <div
            className="h-full w-1/2 bg-red-200 flex
            justify-end
            bg-[url(../../public/image-12.png)]
            bg-cover
            bg-center
            relative"  

          >
            <div className="absolute bg-red-400 top-[145px] left-[460px] z-99">
                <p className="text-5xl ">01 <span className="text-3xl">Food & Water</span>
                </p>

            </div>
            <p className="w-1/2 absolute text-sm bottom-[25px] right-[25px] text-white tracking-wideset text-center">Volunteers help bridge gaps by providing additional manpower and enthusiasm, helping NGOs extend their reach and impact within communities. In return, volunteers gain valuable life skills, exposure to different cultures and challenges,</p>
          </div>
          <div className="h-full w-1/2 bg-transparent relative">
            <img
              className="w-[60%] absolute bottom-[75px] right-[40px] "
              src="../../public/image-13.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodWater;
