import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";

import App from "./App";

function AppWithUI() {
  return (
    <BrowserRouter render={routes}>
      <App />
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<AppWithUI />);
