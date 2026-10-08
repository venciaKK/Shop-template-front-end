const cartCount = document.querySelector(".count");

let cartItems = 0;

document.querySelectorAll(".add").forEach(button => {
  button.addEventListener("click", () => {
    cartItems += 1;
    cartCount.textContent = cartItems;
    button.textContent = "Dodano";

    setTimeout(() => {
      button.textContent = "Dodaj +";
    }, 850);
  });
});

document.querySelectorAll(".like").forEach(button => {
  button.addEventListener("click", () => {
    button.textContent = button.textContent === "♡" ? "♥" : "♡";
  });
});

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");
  });
});
