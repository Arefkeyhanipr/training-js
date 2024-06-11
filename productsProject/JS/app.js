const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter-btn");

//Functions

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
};

//Add event listener

searchInput.addEventListener("keyup", searchHandeler);

buttons.forEach((button) => {
  button.addEventListener("click", filterHandler);
});

console.log(buttons);
