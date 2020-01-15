import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(rootReducer);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
