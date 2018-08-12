import Vue from "vue";
import App from "./components/App";
import store from "./store/store";

const VApp = Vue.extend(App);

new VApp({
  el: "#app",
  store
});
