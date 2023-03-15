import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

createApp(App).mount("#app");

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.documentElement.scrollTop > 250) {
    document.getElementById("navbar").className += " fixed";
    document.getElementById("toTop").classList.remove("hidden");
  } else {
    document.getElementById("navbar").classList.remove("fixed");
    document.getElementById("toTop").className += " hidden";
  }
}
