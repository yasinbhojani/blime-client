import { decodeJWT } from "../../utils/utils";
import Workspace from "./components/Workspace";
import { Briefcase, Users } from "lucide-react";

const Home = () => {
  const decodedPayload = decodeJWT();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const yourWorkSpace = [
    {
      title: "project-trees",
      background:
        "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=",
      workSpaceId: "2h54b3hkg",
    },
    {
      title: "project-snow",
      background:
        "https://images.unsplash.com/photo-1552910996-e666ad64695c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25vd3klMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
      workSpaceId: "2hkgb345kg",
    },
    {
      title: "project-colors",
      background: "#0B8D5E",
      workSpaceId: "345kgb3hkg",
    },
  ];

  const guestWorkSpace = [
    {
      title: "Shell",
      background:
        "https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNpdHklMjBhdCUyMG5pZ2h0fGVufDB8fDB8fHww",
      workSpaceId: "2hkgb345kg",
      isReadOnly: true,
    },
    {
      title: "portfolio",
      background: "#AD88C6",
      workSpaceId: "256gb3hkg",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8">
      {decodedPayload && (
        <div className="mb-8">
          <p className="mt-2 ">
            {" "}
            Welcome,{" "}
            <span className="text-primary font-bold text-xl">
              {capitalizeFirstLetter(decodedPayload?.user_details?.first_name)}!
            </span>{" "}
            Happy to see you!
          </p>
        </div>
      )}

      <Workspace title="Your Workspace" icon={<Briefcase />} data={yourWorkSpace} />

      <Workspace title="Guest Workspace" icon={<Users />} data={guestWorkSpace} />
    </section>
  );
};

export default Home;
