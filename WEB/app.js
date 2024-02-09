document.addEventListener("DOMContentLoaded", function () {
  // Function to update the total amount and total price in the cart
  function updateCartTotals() {
    const cartItems = document.querySelectorAll(".cart-item");
    const totalAmountElement = document.querySelector(".cart1");
    const totalPriceElement = document.getElementById("total-price");

    let cart1 = 0;
    let totalPrice = 0;

    cartItems.forEach((item) => {
      const quantity = parseInt(
        item.querySelector(".quantity-value").textContent
      );
      const price = parseFloat(item.querySelector(".pricec").textContent);

      cart1 += quantity;
      totalPrice += quantity * price;
    });

    totalAmountElement.textContent = cart1;
    totalPriceElement.textContent = totalPrice.toFixed(2);
  }

  // Add click event listeners to each "Add Cart" button
  const addCartButtons = document.querySelectorAll(".addbtn");
  addCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Retrieve item information
      const itemContainer = this.closest(".ui");
      const itemImageSrc = itemContainer.querySelector("img").src;
      const itemName = itemContainer.querySelector(".name").textContent;
      const itemPrice = parseFloat(
        itemContainer.querySelector(".price").textContent
      );

      // Create a new cart item element
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
              <div class="image">
                  <img src="${itemImageSrc}" alt="${itemName}">
              </div>
              <div class="namec">${itemName}</div>
              <div class="pricec" data-original-price="${itemPrice.toFixed(
                2
              )}">${itemPrice.toFixed(2)}</div>
              <div class="quantity">
                  <samp class="min"> < </samp>
                  <samp class="quantity-value"> 1 </samp>
                  <samp class="max"> > </samp>
              </div>
          `;

      // Append the cart item to the cart container
      const cartContainer = document.getElementById("cart");
      cartContainer.appendChild(cartItem);

      // Update the total amount and total price in the cart
      updateCartTotals();
    });
  });

  // Event delegation for quantity value changes
  // Event delegation for quantity value changes
  // Event delegation for quantity value changes
  // Event delegation for quantity value changes
  document.addEventListener("click", function (event) {
    if (
      event.target.classList.contains("min") ||
      event.target.classList.contains("max")
    ) {
      const quantityElement =
        event.target.parentElement.querySelector(".quantity-value");
      let quantity = parseInt(quantityElement.textContent);

      if (event.target.classList.contains("min")) {
        quantity = Math.max(0, quantity - 1);
      } else {
        quantity += 1;
      }

      quantityElement.textContent = quantity;

      // Hide the item if quantity is 0
      const cartItem = event.target.closest(".cart-item");
      const priceElement = cartItem.querySelector(".pricec");

      // Update the price based on the quantity
      const itemPrice = parseFloat(
        priceElement.getAttribute("data-original-price")
      );
      const updatedPrice = quantity * itemPrice;
      priceElement.textContent = updatedPrice.toFixed(2);

      if (quantity === 0) {
        cartItem.style.display = "none";
      } else {
        // cartItem.style.display = 'block';
      }

      // Update the total amount and total price in the cart
      updateCartTotals();
    }
  });

  // Close the cart when clicking on the cart image or the close button
  function toggleCart() {
    document.querySelector(".right-cart").classList.toggle("show-cart");
    if (document.querySelector(".right-cart").classList.contains("show-cart")) {
      updateCartTotals();
    }
  }

  // Add click event listeners to the cart image and the close button
  document.querySelector(".cart-img").addEventListener("click", toggleCart);
  document.querySelector(".close").addEventListener("click", toggleCart);

  let uniform = document.querySelector(".Uniform");
  let uniformitem = document.querySelector(".hidden1");
  let equipment = document.querySelector(".Equipment");
  let equipmentitem = document.querySelector(".hidden2");
  let weapons = document.querySelector(".Weapons");
  let weaponsitem = document.querySelector(".hidden3");

  uniform.addEventListener("click", function () {
    if (uniformitem.style.display === "none") {
      uniformitem.style.display = "grid";
      equipmentitem.style.display = "none";
      weaponsitem.style.display = "none";
    } else {
      // uniformitem.style.display = "none";
    }
  });
  equipment.addEventListener("click", function () {
    if (equipmentitem.style.display === "none") {
      equipmentitem.style.display = "grid";
      uniformitem.style.display = "none";
      weaponsitem.style.display = "none";
    } else {
      equipmentitem.style.display = "none";
      uniformitem.style.display = "grid";
    }
  });
  weapons.addEventListener("click", function () {
    if (weaponsitem.style.display === "none") {
      weaponsitem.style.display = "grid";
      equipmentitem.style.display = "none";
      uniformitem.style.display = "none";
    } else {
      weaponsitem.style.display = "none";
      uniformitem.style.display = "grid";
    }
  });

  // FOR TESPONSIVE
  let menu = document.querySelector("#micon");
  let submain = document.querySelector(".submain");

  menu.addEventListener("click", function () {
    if (submain.style.display === "none") {
      submain.style.display = "block";
    } else {
      submain.style.display = "none";
    }
  });

  // LOG IN JS START
  const container = document.getElementById("container");
  const registerBtn = document.getElementById("register");
  const loginBtn = document.getElementById("login");

  registerBtn.addEventListener("click", () => {
    container.classList.add("active");
  });

  loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
  });

  // LOG IN JS END
});
