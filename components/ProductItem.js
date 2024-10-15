export class ProductItem extends HTMLElement {
  constructor() {
    super();
  }
  // is like attaching an component or element to the DOM
  connectedCallback() {
    const template = document.getElementById("product-item-template");
    const content = template.content.cloneNode(true); // clone template content

    this.appendChild(content);

    const product = JSON.parse(this.dataset.product);
    this.querySelector("h4").textContent = product.name;
    this.querySelector("p.price").textContent = `$${product.price.toFixed(2)}`;
    this.querySelector("img").src = `data/images/${product.image}`;
    this.querySelector("a").addEventListener("click", (event) => {
      console.log(event.target.tagName);
      if (event.target.tagName.toLowerCase() == "button") {
        //TODO
      } else {
        app.router.go(`/product-${product.id}`);
      }
      event.preventDefault();
    });
  }
}

customElements.define("product-item", ProductItem);
