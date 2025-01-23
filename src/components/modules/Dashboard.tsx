import Dashboardcontent from "./Dashboardcontent";
import Buttonorgi from "../elements/Buttons";

function Dashboard({ email, name }: any) {
  return (
    <div className="*:mx-auto *:text-left *:bg-white *:max-w-[1110px] *:px-[79px] *:py-10 *:my-5 ">
      <Dashboardcontent
        data={null}
        titile1="Recent Orders"
        title2="View All orders"
        subtitle="You haven’t placed any order yet."
      />
      <Dashboardcontent
        data={{ email, name }}
        titile1="My info"
        title2="Manage Info"
        subtitle="Personal Information"
      />
      <Dashboardcontent
        data={null}
        titile1="Address Book"
        title2="Manage Addresses(0)"
        subtitle="You have not yet added address."
      />

      <Buttonorgi text="Add New addres"   customeClassStyle=""  color="#735CFF" />
    </div>
  );
}

export default Dashboard;
