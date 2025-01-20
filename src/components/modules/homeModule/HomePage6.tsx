import Buttonorgi from "@/components/elements/Buttons";

function HomePage6() {
  return (
    <div className=" ">
      <div className=" h-fit  bg-cover bg-[url(/images/bgImageHomePagebottom.jpg)] px-32 pb-5 max-sm:px-14">
        <div className="flex items-center text-center flex-col max-w-[846px]  mx-auto">
          <h1 className="text-white text-4xl max-md:text-3xl leading-[45px]  max-md:font-semibold mt-14 font-bold">
            Don't miss your chance to get free Giveaway Sing up to our
            newsletter
          </h1>
          <p className="text-white my-7">
            We will inform you about coming Giveaways, Offers, Online Store
            preparation progress and start of sales
          </p>
        </div>
        <form
          className=" max-w-[657px]   mx-auto mb-5  grid grid-cols-12  max-md:grid-cols-6 max-md:justify-items-center"
          action="#"
        >
          <input
            placeholder="Name"
            className="bg-white max-w-80 w-fulll max-md:min-w-80  h-14 rounded-md pl-5  mr-1 outline-nonepl-5  max-md:m-0  col-span-6"
          />
          <input
            placeholder="Email"
            className="bg-white max-w-80  w-full max-md:min-w-80 h-14 rounded-md ml-1 pl-5 outline-none col-span-6 max-md:m-0 max-md:mt-5"
          />
          <Buttonorgi
            text="Sign Up"
            customeClassStyle="px-7 hover:text-black mx-auto mt-10 col-span-full  bg-black border-b-black hover:"
          />
        </form>
      </div>
    </div>
  );
}

export default HomePage6;
