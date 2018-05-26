import {render} from "react-dom"
import {App} from "./app";

require("./css/base.css")
require("./less/style.less")

let w = document.documentElement.clientWidth;
let fs = w/580*100;
document.documentElement.style.fontsize = `${fs}px`;

render(<App />,document.getElementById("app"));
