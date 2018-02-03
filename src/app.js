import "./stylesheets/main.css";

// Small helpers you might want to keep
import "./helpers/context_menu.js";
import "./helpers/external_links.js";

// ----------------------------------------------------------------------------
// Everything below is just to show you how it works. You can delete all of it.
// ----------------------------------------------------------------------------

import { remote , ipcRenderer} from "electron";
import jetpack from "fs-jetpack";
import { greet } from "./hello_world/hello_world";
import env from "env";

const app = remote.app;
const appDir = jetpack.cwd(app.getAppPath());

// Holy crap! This is browser window with HTML and stuff, but I can read
// files from disk like it's node.js! Welcome to Electron world :)
const manifest = appDir.read("package.json", "json");

const osMap = {
  win32: "Windows",
  darwin: "macOS",
  linux: "Linux"
};


function sideNavClick(element) {
  element.style.color="red";
  var navTrigger = document.getElementById("nav-trigger");
  navTrigger.click();
}


var sideNavs = document.getElementsByClassName("nav-side-item")
var i;
for (i=0; i<sideNavs.length; i++) {
  var nav = sideNavs[i];
  nav.addEventListener("click", function(event) {
    sideNavClick(event.target)
  })
}


