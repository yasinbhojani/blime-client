import { decodeJWT } from "../../utils/utils";
import WorkSpaceCard from "./WorkSpaceCard";

const Workspace = ({ title, icon, data }) => {
  const userDetails = decodeJWT();
  return (
    <section className="mb-20">
      <h1 className="text-xl font-bold flex items-center gap-3 my-8">
        {icon}
        {title}
      </h1>

      {data.map((item) => {
        let boards = item.boards;

        if (userDetails.user_details.user_id === item.user_id) {
          boards.push({
            board_id: "697f4119",
            createBtn: true,
          });
        }

        return (
          <div key={item.workspace_id}>
            <h1 className="font-bold my-4 mb-5">{item.workspace_name}</h1>
            <div className="my-4 grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 mb-10">
              {boards.map((item) => {
                return <WorkSpaceCard item={item} key={item.board_id} />;
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default Workspace;
