import { proxiedStore } from "./services/Store.js";
import { API } from "./services/API.js";
import { loadData } from "./services/Menu.js";
import { Router } from "./services/Router.js";
//Link a web component to Dom, at least HTML knows to treat it as a html tag and not ignoring unknown HTML element
import { MenuPage } from "./components/MenuPage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { OrderPage } from "./components/OrderPage.js";
import { ProductItem } from "./components/ProductItem.js";

window.app = {};
app.store = proxiedStore;
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  loadData();
  app.router.init();
});
