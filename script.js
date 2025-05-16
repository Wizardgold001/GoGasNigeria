document.addEventListener("DOMContentLoaded", function() {
  const orderButton = document.querySelector(".cta");
  orderButton.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Thank you for choosing GoGas! We'll reach out to confirm your order shortly.");
  });
});