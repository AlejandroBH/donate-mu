const cardButtons = document.querySelectorAll(".donation-card-button");
const actionSubmit = document.getElementById("actionSubmit");

cardButtons.forEach((element) => {
  const dataAmmount = element.getAttribute("data-ammount");

  element.addEventListener("click", () => {
    console.log("select", dataAmmount);
    actionSubmit.click();
  });
});
