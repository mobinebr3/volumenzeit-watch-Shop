import CloseModal from "@/components/modules/CloseModal";

function Dashboardcontent({ titile1, title2, data, subtitle }: any) {
  return (
    <div className="mx-auto text-left bg-white max-w-[1110] px-[79] max-md:px-5 py-10 border-1 rounded-[10] ">
      <div className="flex justify-between  ">
        <h3 className="text-[20px] font-semibold text-textcolor ">{titile1}</h3>
        <h6 className="text-purpuleColor"> {title2}</h6>
      </div>
      <p className="text-textcolor mt-8">{subtitle}</p>
      {data ? (
        <>
          {" "}
          <ul className="*:mt-3">
            <li>Name: {data.name}</li>
            <li>Email: {data.email}</li>
          </ul>
          <div className="text-right text-red-700 font-bold text-lg ">
            <CloseModal />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Dashboardcontent;
