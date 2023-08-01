import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./styles/globals.css";
import App from "./components/App";
import store from "./redux/store";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<App />);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
