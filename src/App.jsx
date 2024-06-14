import { ConfigProvider, theme } from "antd";
import "./App.css";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </>
  );
};

export default App;
