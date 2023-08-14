function findOutMore() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");

  alert("Thank you " + name + ", we will be in touch!");
}
let fomButton = document.querySelector("button");
fomButton.addEventListener("click", findOutMore);
