import WorkSpaceCard from "./WorkSpaceCard";

const Workspace = ({ title, icon, data }) => {
  return (
    <section className="mb-20">
      <h1 className="text-xl font-bold flex items-center gap-3 my-8">
        {icon}
        {title}
      </h1>

      {data.map((item) => {
        return (
          <div key={item.workSpaceName}>
            <h1 className="font-bold my-4 mb-5">{item.workSpaceName}</h1>
            <div className="my-4 grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 mb-10">
              {item.boards.map((item) => {
                return <WorkSpaceCard item={item} key={item.workSpaceId} />;
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default Workspace;
