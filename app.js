function insertAfter(newEl, existingEl) {
  existingEl.insertAdjacentElement("afterend", newEl);
}

const li = document.createElement("li");
li.textContent = "Insert After Me";

const firstItem = document.querySelector("li:first-child");

insertAfter(li, firstItem);
