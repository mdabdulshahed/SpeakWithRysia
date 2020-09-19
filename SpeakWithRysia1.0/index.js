const btn = document.querySelector(".speak");
const text = document.querySelector(".text");

const greetings = ["Hello,how are you", "Hey! Whats up.."];
const greetreply = ["i am fine", "i am fine how are you", "well i am good"];
const okayfine = ["Fine", "Okay", "Good"];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = () => {
  console.log("VOICE IS ACTIVATED...");
};

recognition.onresult = function (event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  text.textContent = "YOU SAID :" + transcript;
  readoutput(transcript);
};

//on click button method

btn.addEventListener("click", () => {
  recognition.start();
});

function readoutput(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = "I cant help you with that, so look on web instead";

  if (message.includes("hello") || message.includes("hi")) {
    const final = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = final;
  } else if (
    message.includes("ok") ||
    message.includes("i am fine") ||
    message.includes("fine") ||
    message.includes("okay")
  ) {
    const finalokay = okayfine[Math.floor(Math.random() * greetings.length)];
    speech.text = finalokay;
  } else if (
    message.includes("what's your name") ||
    message.includes("who are you")
  ) {
    speech.text = "i am your Assistant rysia";
  } else if (message.includes("how are you")) {
    const greetreplied =
      greetreply[Math.floor(Math.random() * greetreply.length)];
    speech.text = greetreplied;
  } else if (
    message.includes("whats the weather like") ||
    message.includes("what is the weather today") ||
    message.includes("tell me about weather") ||
    message.includes("weather")
  ) {
    speech.text = "Its clear outside";
  } else {
    window.open("http://google.com/search?q=" + text.innerHTML.substr(10));
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
