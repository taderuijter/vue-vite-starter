// Import modules
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createHead } from "@vueuse/head";

// Import plugins
import router from "./router";

// CSS global import
import "@/style.css";

// Import main component
import App from "@/App.vue";

const app = createApp(App),
  head = createHead();

// Config vue
app.use(head);
app.use(router);
app.use(createPinia());

// Register app on id #app
app.mount("#app");
