import "react-app-polyfill/ie11";

import React from "react";
import ReactDOM from "react-dom";
import { configure } from "mobx";

configure({ useProxies: "never" });

ReactDOM.render(<>Hello World</>, document.getElementById("root"));
