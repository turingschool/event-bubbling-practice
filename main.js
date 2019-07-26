var dogInput = document.querySelector(".dog");
var addBtn = document.querySelector(".submit-btn");

addBtn.addEventListener("click", addDog);

function addDog(e) {
  e.preventDefault();

  var cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML += `
    <section class="dog-card">
      <h3>${dogInput.value}</h3>
      <div class="icons">
        <img class="icon" src="https://bit.ly/2Y3KdHu" alt="favorite icon">
        <img class="icon" src="https://bit.ly/2YghLNO" alt="trash icon">
      </div>
    </section>
  `;

  dogInput.value = "";
}
