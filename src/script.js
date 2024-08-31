function getTheGeneratedPoem(response) {
  const poemText = response.data.answer;
  const poemContainer = document.querySelector(".poem");

  document.querySelector(".loading-icon").style.display = "none";

  new Typewriter(poemContainer, {
    strings: [poemText],
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generateApoem(event) {
  event.preventDefault();

  const userInstruction = document.querySelector("#user_instructions").value;

  const context = `You are a romantic poet, weaving delicate verses. Your task: create four short lines of beauty. Beneath each line, place a <br/> to let the words breathe. Finally, sign off with: <strong>“SheCodes AI Generator.” 🌸✨</strong>`;

  const prompt = `Write a poem about ${userInstruction}`;

  const apiKey = "248a5b083cf5484310345e4f53aedobt";
  const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  document.querySelector(".loading-icon").style.display = "block";

  setTimeout(() => {
    axios.get(apiUrl).then(getTheGeneratedPoem);
  }, 2000);
}

const poemForm = document.querySelector("#poem-gen-form");
poemForm.addEventListener("submit", generateApoem);
