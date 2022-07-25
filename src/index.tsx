import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "redux/store";

import "./index.scss";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";

const Root = createRoot(document.getElementById("root")!);

Root.render(
  <React.StrictMode>
    <Provider store={store as any}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
