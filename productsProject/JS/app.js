const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter-btn");
const priceButton = document
  .getElementById("search-price")
  .querySelector("button");

const priceInput = document.getElementById("price-input");

//Functions

const changeclass = (filter) => {
  buttons.forEach((button) => {
    if (button.dataset.filter === filter) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
};

const searchHandeler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();

  products.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();

    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const filterHandler = (event) => {
  const filter = event.target.dataset.filter;
  changeclass(filter);

  products.forEach((product) => {
    const category = product.dataset.category;

    if (filter === "All") {
      product.style.display = "block";
    } else if (filter === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const SearchPriceHandler = (event) => {
  const searchPrice = +priceInput.value;

  products.forEach((product) => {
    const productPrice = product.children[2].innerText;
    const finalPrice = productPrice.split(" ")[0];
    if (!searchPrice) {
      product.style.display = "block";
    } else if (searchPrice > finalPrice) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const SearchPriceHandlerWithEnter = (event) => {
  if (event.key === "Enter") {
    const searchPrice = +priceInput.value;

    products.forEach((product) => {
      const productPrice = product.children[2].innerText;
      const finalPrice = productPrice.split(" ")[0];
      if (!searchPrice) {
        product.style.display = "block";
      } else if (searchPrice > finalPrice) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }
};

//Add event listener

searchInput.addEventListener("keyup", searchHandeler);

buttons.forEach((button) => {
  button.addEventListener("click", filterHandler);
});

priceButton.addEventListener("click", SearchPriceHandler);
priceInput.addEventListener("keypress", SearchPriceHandlerWithEnter);
