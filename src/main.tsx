import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import { counterStore } from "./redux-stores/redux-store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withCSSVariables
      theme={{ colorScheme: "dark" }}
    >
      <Provider store={counterStore}>
        <App />
      </Provider>
    </MantineProvider>
  </React.StrictMode>
);
