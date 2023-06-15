import "./lib/mithril.min.js"

import Home from "./views/Home.js"
import About from "./views/About.js"

m.route.prefix = ""
m.route(document.querySelector("#root"), "/", {
  "/": Home,
  "/about": About
})