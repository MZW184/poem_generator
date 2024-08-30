function generateApoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "In morning’s hush, the sun awakes",
    autoStart: true,
    display: 1,
    cursor: "",
  });
}

let poemForm = document.querySelector("#poem-gen-form");
poemForm.addEventListener("submit", generateApoem);

