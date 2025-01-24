
import Returnhomrpage from "@/components/elements/ButtonBacktohomepage";


import Image from "next/image";


async function pageNotfound() {

  return <div className=" flex flex-col items-center mx-auto *:my-2 px-10">
    <h1 className="SpaceAGEfont text-[42px] max-w-[511px] max-md:text-[32px] max-sm:text-[20px] text-center ">Oops, SOmething Went Wrong</h1>
    <Image src={'/images/404page.png'} width={588} height={354} alt='not found' />
   <Returnhomrpage />
    </div>;
}

export default pageNotfound;
