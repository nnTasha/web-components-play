export const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        // const url1 = a.href; //here is using a closure
        // const url2 = a.getAttribute("href");
        // const url3 = event.target.href;
        const url = event.target.getAttribute("href");
        Router.go(url);
      });
    });
    // Event Handler for URL changes
    window.addEventListener("popstate", (event) => {
      console.log(event, "Router event");
      Router.go(event.state.route);
    });

    //check the initial URL
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`Going to ${route}`);

    if (addToHistory) {
      console.log();
      history.pushState({ route }, "", route);
    }

    let pageElement = null;

    switch (route) {
      case "/":
        pageElement = document.createElement("menu-page");
        break;

      case "/order":
        pageElement = document.createElement("order-page");
        break;

      default:
        if (route.starsWith("/product-")) {
          pageElement = document.createElement("details-page");
          const paramId = route.substring(route.lastIndexOf("-") + 1);
          pageElement.dataset.id = paramId;
        }
    }

    if (pageElement) {
      // document.querySelector("main").children[0].remove();
      const mainElement = document.querySelector("main");
      mainElement.innerHTML = "";
      mainElement.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};
