import ReactDOM from "react-dom/client";
import Routes from "./routes/Routes";

import { Provider } from "react-redux";
import { store, persistor } from "@/store";

import "./services/axios-global";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/global.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);
