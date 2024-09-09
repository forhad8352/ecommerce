import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextApi } from "./components/ContextApi.jsx";
import {store} from "./Store.js"
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <ContextApi> 
    <Provider store={store}>
    <App />
    </Provider>
  </ContextApi>
);
