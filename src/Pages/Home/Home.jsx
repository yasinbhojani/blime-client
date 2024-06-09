import { useQuery } from "@tanstack/react-query";
import Workspace from "../../components/Home/Workspace";
import { Briefcase, Users } from "lucide-react";
import { getGuestWorkspaceData, getYourWorkspaceData } from "../../http/get/getAPIs";
import WelcomeText from "../../components/Home/WelcomeText";

const Home = () => {
  const {
    data: yourWorkSpace,
    isLoading: yourWorkSpaceLoading,
    isError: yourWorkSpaceError,
  } = useQuery({
    queryKey: ["get-your-workspace-data"],
    queryFn: getYourWorkspaceData,
  });

  const {
    data: guestWorkSpace,
    isLoading: guestWorkSpaceLoading,
    isError: guestWorkSpaceError,
  } = useQuery({
    queryKey: ["get-guest-workspace-data"],
    queryFn: getGuestWorkspaceData,
  });

  return (
    <section className="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8">
      <WelcomeText />

      {!yourWorkSpaceLoading && <Workspace title="Your Workspace" icon={<Briefcase />} data={yourWorkSpace} />}

      {!yourWorkSpaceLoading && yourWorkSpace.length === 0 && (
        <div className="mt-8 p-4 bg-[#17202A] border rounded">
          <p className="text-center font-semibold">Add your first Workspace to get started</p>
        </div>
      )}

      {!guestWorkSpaceLoading && <Workspace title="Guest Workspace" icon={<Users />} data={guestWorkSpace} />}
    </section>
  );
};

export default Home;
