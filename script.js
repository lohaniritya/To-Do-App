const inputbox = document.querySelector("#inputBox");
const item = document.querySelector("#item");

inputbox.addEventListener("keyup", function (Event) {
  if (Event.key == "Enter") {
    addItem(this.value);
    this.value = "";
  }
});

const addItem = (data) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
         ${data}
        <i class="fa-solid fa-circle-check"></i>
    `;

  listItem.addEventListener("click", function () {
    this.classList.toggle("toggleStyle");
  });

  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
  });

  item.appendChild(listItem);
};