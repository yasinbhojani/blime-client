import WorkSpaceCard from "./WorkSpaceCard";

const Workspace = ({ title, icon, data }) => {
  return (
    <section className="mb-20">
      <h1 className="text-xl font-bold flex items-center gap-3">
        {icon}
        {title}
      </h1>

      <div className="my-4 flex justify-start items-center gap-4 flex-wrap">
        {data.map((item) => {
          return <WorkSpaceCard item={item} key={item.workSpaceId} />;
        })}
      </div>
    </section>
  );
};
export default Workspace;
