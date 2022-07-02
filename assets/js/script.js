let button = document.querySelector("#get-total");
button.addEventListener("click", () => {
  let amount = document.querySelector("#user-amount");
  let userColor = document.querySelector("#user-color");
  let price = document.querySelector("#price");
  document.getElementById('total').innerHTML= price.value*amount.value;
  document.getElementById('amount').innerHTML=amount.value;
  document.getElementById('coloruser').style.backgroundColor= userColor.value;
})




