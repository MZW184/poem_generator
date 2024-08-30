// API
function getTheGeneratedPoem(response) {
  let poemText = response.data.answer;

  new Typewriter("#poem", {
    strings: [poemText],
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generateApoem(event) {
  event.preventDefault();

  let userInstruction = document.querySelector("#user_instructions").value;

  let context = `You are a romantic poet, weaving delicate verses. Your task: create four short lines of beauty. Beneath each line, place a <br/> to let the words breathe. Finally, sign off with a touch of light pink—bold and sweet: “SheCodes AI Generator.” 🌸✨`;

  let prompt = `Write a poem about ${userInstruction}`;

  let apiKey = "248a5b083cf5484310345e4f53aedobt";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  axios.get(apiUrl).then(getTheGeneratedPoem);
}

let poemForm = document.querySelector("#poem-gen-form");
poemForm.addEventListener("submit", generateApoem);
