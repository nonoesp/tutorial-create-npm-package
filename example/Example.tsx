import * as React from "react";
import * as Server from "react-dom/server";
import { BrokenString } from "broken-string";

console.log(Server.renderToString(<BrokenString text={"HELLO WORLD"} />));
