import Vue from "vue";
import App from "./App";
import "./style.css";

Vue.config.productionTip = false;

new Vue({
  render() {
    return <App />;
  }
}).$mount("#app");
