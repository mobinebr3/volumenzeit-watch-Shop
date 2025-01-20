import VideoModal from "@/components/elements/VidoeModal";

function HomePage5() {
  return (
    <div className="flex items-center flex-wrap px-32 mt-24 pb-24 justify-between max-xl:px-14 max-lg:flex-col ">
      <div className="flex flex-col  items-start max-w-[396px]  max-lg:mb-20 max-lg:items-center *:max-lg:text-center">
        <h1 className="SpaceAGEfont text-[42px] mb-7">About us</h1>
        <p className="text-textcolor leading-7 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan
          volutpat tristique metus, nibh massa quam iaculis lectus. A dui nam
          phasellus porttitor nisi. Eget a quam est, eget dictum nisi. Sit donec
          aenean vivamus sagittis, blandit. Eleifend bibendum aliquet orci
          risus, velit. Lectus tellus amet
        </p>
      </div>
      <div className="bg-white shadow-lg p-4  max-w-[630px] rounded  max-xl:max-w-[500px]">
        <VideoModal/>

      </div>
    </div>
  );
}

export default HomePage5;
