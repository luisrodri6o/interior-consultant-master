document.querySelector(".ul").addEventListener("click", function ({ target }) {
  if (target.tagName === "A") document.getElementById("togle").click();
});
