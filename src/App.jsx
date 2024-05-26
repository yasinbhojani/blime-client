import { ConfigProvider, theme } from "antd";
import "./App.css";
import Router from "./Router";
// import "antd";

const App = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
            colorPrimary: "#0B8D5E",
          },
        }}
      >
        <Router />
      </ConfigProvider>
    </>
  );
};

export default App;
