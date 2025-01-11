import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

function HeaderProducts({data}:any) {
  return (
       <div className="bg-purpuleColor h-52 w-full grid content-center  ">
       <div>
         {" "}
         <h1 className="SpaceAGEfont text-white text-[42px] ml-20 ">
           products
         </h1>
         <div className=" ml-20 text-white  flex  items-center">
           {" "}
           {data &&data.length ? (
             data.length
           ) : (
             <ThreeDots
               height="20"
               width="20"
               color="#fff"
               radius="9"
               ariaLabel="three-dots-loading"
             />
           )}{" "}
           Total products
         </div>
       </div>
     </div>
  )
}

export default HeaderProducts