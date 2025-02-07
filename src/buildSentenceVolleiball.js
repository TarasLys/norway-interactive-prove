const sentences = [
 {
    "norwegian": "Flott slag!",
    "russian": "Отличный удар!",
    "english": "Great hit!"
  },
  {
    "norwegian": "Bra blokk!",
    "russian": "Отличный блок!",
    "english": "Good block!"
  },
  {
    "norwegian": "Vi må snakke mer på banen.",
    "russian": "Нам нужно больше говорить на поле.",
    "english": "We need to talk more on the court."
  },
  {
    "norwegian": "Pass på linjen.",
    "russian": "Следи за линией.",
    "english": "Watch the line."
  },
  {
    "norwegian": "Vær klar til å motta serven.",
    "russian": "Будь готов к приему подачи.",
    "english": "Be ready to receive the serve."
  },
  {
    "norwegian": "Bra forsvar!",
    "russian": "Отличная защита!",
    "english": "Good defense!"
  },
  {
    "norwegian": "Vi må dekke området bedre.",
    "russian": "Нам нужно лучше покрывать зону.",
    "english": "We need to cover the area better."
  },
  {
    "norwegian": "Pass ballen til midten.",
    "russian": "Передай мяч в центр.",
    "english": "Pass the ball to the middle."
  },
  {
    "norwegian": "Hold øynene på ballen.",
    "russian": "Держи глаза на мяче.",
    "english": "Keep your eyes on the ball."
  },
  {
    "norwegian": "Vi må spille som et team.",
    "russian": "Нам нужно играть как команда.",
    "english": "We need to play as a team."
  },
  {
    "norwegian": "Setter du opp en god blokkering?",
    "russian": "Ты ставишь хорошую блокировку?",
    "english": "Are you setting up a good block?"
  },
  {
    "norwegian": "Bra serve! Fortsett sånn!",
    "russian": "Отличная подача! Продолжай в том же духе!",
    "english": "Great serve! Keep it up!"
  },
  {
    "norwegian": "Pass på å dekke området bak deg.",
    "russian": "Следи за зоной позади себя.",
    "english": "Make sure to cover the area behind you."
  },
  {
    "norwegian": "Vi trenger bedre kommunikasjon i forsvar.",
    "russian": "Нам нужна лучшая коммуникация в защите.",
    "english": "We need better communication in defense."
  },
  {
    "norwegian": "Vær klar til å angripe ballen.",
    "russian": "Будь готов атаковать мяч.",
    "english": "Be ready to attack the ball."
  },
  {
    "norwegian": "Hold øye med motstandernes bevegelser.",
    "russian": "Следи за движениями соперников.",
    "english": "Keep an eye on the opponents' movements."
  },
  {
    "norwegian": "Flott blokkering! Det var fantastisk!",
    "russian": "Отличная блокировка! Это было великолепно!",
    "english": "Great block! That was fantastic!"
  },
  {
    "norwegian": "Pass opp for raske angrep fra motstanderne.",
    "russian": "Остерегайся быстрых атак соперников.",
    "english": "Watch out for quick attacks from the opponents."
  },
  {
    "norwegian": "La oss jobbe med vår serverekke.",
    "russian": "Давайте поработаем над нашей подачей.",
    "english": "Let's work on our serving line."
  },
  {
    "norwegian": "Vi må forbedre vårt samarbeid på banen.",
    "russian": "Нам нужно улучшить наше взаимодействие на площадке.",
    "english": "We need to improve our teamwork on the court."
  },
  {
    "norwegian": "God pass! Hold denne kvaliteten!",
    "russian": "Отличный пас! Держи этот уровень!",
    "english": "Good pass! Keep up this quality!"
  },
  {
    "norwegian": "Vær klar til å dekke hele banen.",
    "russian": "Будь готов покрыть всю площадку.",
    "english": "Be ready to cover the whole court."
  },
  {
    "norwegian": "Vi må øve på vår timing.",
    "russian": "Нам нужно отработать наш тайминг.",
    "english": "We need to work on our timing."
  },
  {
    "norwegian": "Bra angrep! Vi trenger mer av det!",
    "russian": "Отличная атака! Нам нужно больше такого!",
    "english": "Great attack! We need more of that!"
  },
  {
    "norwegian": "Vær oppmerksom på blokkeringsforsøk.",
    "russian": "Будь внимателен к попыткам блокировки.",
    "english": "Be aware of blocking attempts."
  },
  {
    "norwegian": "Kommunikasjon er nøkkelen til suksess.",
    "russian": "Коммуникация - ключ к успеху.",
    "english": "Communication is the key to success."
  },
  {
    "norwegian": "Hold øye med ballens bevegelse.",
    "russian": "Следи за движением мяча.",
    "english": "Keep an eye on the ball's movement."
  },
  {
    "norwegian": "Rask reaksjon er viktig i forsvar.",
    "russian": "Быстрая реакция важна в защите.",
    "english": "Quick reaction is important in defense."
  },
  {
    "norwegian": "Flott forsvar! La oss fortsette sånn!",
    "russian": "Отличная защита! Продолжим в том же духе!",
    "english": "Great defense! Let's keep it up!"
  },
  {
    "norwegian": "Vi må jobbe sammen for å vinne.",
    "russian": "Нам нужно работать вместе, чтобы победить.",
    "english": "We need to work together to win."
  },
  {
    "norwegian": "Bra redning! Fortsett å holde ballen i spill.",
    "russian": "Отличное спасение! Продолжай держать мяч в игре.",
    "english": "Great save! Keep the ball in play."
  },
  {
    "norwegian": "Vær rask i bevegelsene dine.",
    "russian": "Будь быстрым в своих движениях.",
    "english": "Be quick in your movements."
  },
  {
    "norwegian": "Pass på å ikke stå for nær nettet.",
    "russian": "Смотри, чтобы не стоять слишком близко к сетке.",
    "english": "Make sure not to stand too close to the net."
  },
  {
    "norwegian": "Gi beskjed om du skal ta ballen.",
    "russian": "Дай знать, если ты будешь брать мяч.",
    "english": "Let us know if you're going to take the ball."
  },
  {
    "norwegian": "Bra blokk! La oss fortsette å dominere nettet.",
    "russian": "Отличный блок! Продолжим доминировать на сетке.",
    "english": "Great block! Let's keep dominating the net."
  },
  {
    "norwegian": "Kommunikasjon er viktig for forsvar.",
    "russian": "Коммуникация важна для защиты.",
    "english": "Communication is important for defense."
  },
  {
    "norwegian": "Husk å være klar til å angripe.",
    "russian": "Не забудь быть готовым к атаке.",
    "english": "Remember to be ready to attack."
  },
  {
    "norwegian": "Vi må forbedre vår serve mottak.",
    "russian": "Нам нужно улучшить прием подачи.",
    "english": "We need to improve our serve reception."
  },
  {
    "norwegian": "Sterk serve! Det skaper press på motstanderne.",
    "russian": "Сильная подача! Это создает давление на соперников.",
    "english": "Strong serve! It puts pressure on the opponents."
  },
  {
    "norwegian": "Fokus på ballen og hold øyekontakt.",
    "russian": "Сосредоточься на мяче и держи зрительный контакт.",
    "english": "Focus on the ball and maintain eye contact."
  },
  {
    "norwegian": "Bøy knærne for bedre balanse ved lave servinger.",
    "russian": "Согни колени для лучшего баланса при низких подачах.",
    "english": "Bend your knees for better balance with low serves."
  },
  {
    "norwegian": "Hold armene strake ved sterke servinger.",
    "russian": "Держи руки выпрямленными при сильных подачах.",
    "english": "Keep your arms straight with strong serves."
  },
  {
    "norwegian": "Bruk fingertuppene for å dempe ballen ved lette servinger.",
    "russian": "Используй кончики пальцев, чтобы смягчить мяч при легких подачах.",
    "english": "Use your fingertips to soften the ball with light serves."
  },
  {
    "norwegian": "Plasser deg riktig for å motta korte servinger.",
    "russian": "Разместись правильно для приема коротких подач.",
    "english": "Position yourself correctly for short serves."
  },
  {
    "norwegian": "Beveg føttene raskt for sideveis servinger.",
    "russian": "Быстро двигай ногами для боковых подач.",
    "english": "Move your feet quickly for side serves."
  },
  {
    "norwegian": "Hold øynene på ballen ved hoppeserver.",
    "russian": "Держи глаза на мяче при прыжковых подачах.",
    "english": "Keep your eyes on the ball with jump serves."
  },
  {
    "norwegian": "Vær klar til å bevege deg bakover ved høye servinger.",
    "russian": "Будь готов двигаться назад при высоких подачах.",
    "english": "Be ready to move back with high serves."
  },
  {
    "norwegian": "Bruk føttene for å justere posisjonen ved snurrende servinger.",
    "russian": "Используй ноги для корректировки позиции при вращающихся подачах.",
    "english": "Use your feet to adjust position with spinning serves."
  },
  {
    "norwegian": "Hold armene strake ved sterke servinger.",
    "russian": "Держи руки выпрямленными при сильных подачах.",
    "english": "Keep your arms straight with strong serves."
  },
  {
    "norwegian": "Fokuser på ballens bane ved kurvede servinger.",
    "russian": "Сосредоточься на траектории мяча при изогнутых подачах.",
    "english": "Focus on the ball's path with curved serves."
  }
];




const extraWords = [ "og", "men", "eller", "fordi", "hvis", "når", "hvorfor", "hvordan", "hva", "hvem", "derfor", "som", "at", "om", "så", 
  "jeg", "du", "han", "hun", "vi", "de", "en", "et", "den", "det", "på", "i", "til", "med", "av", "fra", "for", "over", 
  "under", "eller", "eller", "nå", "her", "der", "hvor", "når", "da", "skal", "kan", "vil", "må", "gå", "spise", "drikke", 
  "se", "høre", "være", "gjøre", "ta", "ha", "få", "sove", "stå", "sitte", "ligge", "leke", "arbeide", "spille", "kjenne"];


let currentSentence = {};
let selectedWords = [];
let correctCount = 0;
let incorrectCount = 0;
let recognition;
let selectedLanguage = localStorage.getItem('selectedLanguage') || 'norwegian';



function getRandomSentence() {
  const weights = sentences.map((_, index) => (index === sentences.length - 1 ? 5 : 1)); // Увеличиваем вес последнего предложения
  const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
  const random = Math.random() * totalWeight;
  let cumulativeWeight = 0;

  for (let i = 0; i < sentences.length; i++) {
    cumulativeWeight += weights[i];
    if (random < cumulativeWeight) {
      return sentences[i];
    }
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getRandomWords(words, count) {
  const shuffledWords = shuffleArray([...words]);
  return shuffledWords.slice(0, count);
}

function displaySentence() {
  currentSentence = getRandomSentence();
  document.getElementById("russianSentence").textContent = currentSentence[selectedLanguage];
  document.getElementById("sentence").textContent = "";
  const words = currentSentence.norwegian.split(/(\s|,|\.|!|\?)/).filter(word => word.trim() !== "");
  const randomExtraWords = getRandomWords(extraWords, 16 - words.length);
  const allWords = shuffleArray([...words, ...randomExtraWords]);
  const wordsContainer = document.getElementById("wordsContainer");
  wordsContainer.innerHTML = "";
  allWords.forEach(word => {
    const wordElement = document.createElement("button");
    wordElement.textContent = word;
    wordElement.classList.add("word");
    wordElement.onclick = () => selectWord(word, wordElement);
    wordsContainer.appendChild(wordElement);
  });
}

function selectWord(word, wordElement) {
  selectedWords.push(word);
  wordElement.style.display = "none";
  const selectedSentence = selectedWords.join(" ").replace(/\s*([,\.!?])\s*/g, "$1 ");
  document.getElementById("sentence").textContent = selectedSentence;
  document.getElementById("feedback").textContent = "";
  document.getElementById("correctAnswer").textContent = "";
  document.getElementById("userAnswer").textContent = "";
  speak(word); // Озвучиваем выбранное слово
}

function removeLastWord() {
  if (selectedWords.length > 0) {
    const lastWord = selectedWords.pop();
    const wordsContainer = document.getElementById("wordsContainer");
    const wordElement = document.createElement("button");
    wordElement.textContent = lastWord;
    wordElement.classList.add("word");
    wordElement.onclick = () => selectWord(lastWord, wordElement);
    wordsContainer.appendChild(wordElement);
    const selectedSentence = selectedWords.join(" ").replace(/\s*([,\.!?])\s*/g, "$1 ");
    document.getElementById("sentence").textContent = selectedSentence;
  }
}

function normalizeSentence(sentence) {
  return sentence.replace(/\s*([,\.!?])\s*/g, "$1").trim();
}

function formatSentence(sentence) {
  // Преобразуем первую букву в заглавную
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

  // Добавляем точку в конце предложения, если её нет
  if (!/[.!?]$/.test(sentence)) {
    sentence += '.';
  }

  return sentence;
}

function checkAnswer() {
  const selectedSentence = normalizeSentence(selectedWords.join(" "));
  const correctSentence = normalizeSentence(currentSentence.norwegian);
  const formattedSelectedSentence = formatSentence(selectedSentence);
  const formattedCorrectSentence = formatSentence(correctSentence);

  if (formattedSelectedSentence === formattedCorrectSentence) {
    document.getElementById("feedback").textContent = "Riktig!";
    document.getElementById("feedback").style.color = "green";
    document.getElementById("correctAnswer").textContent = "";
    document.getElementById("userAnswer").textContent = "";
    correctCount++;
    document.getElementById("correctCount").textContent = correctCount;
  } else {
    document.getElementById("feedback").textContent = "Feil. Prøv igjen.";
    document.getElementById("feedback").style.color = "red";
    document.getElementById("correctAnswer").textContent = `Riktig svar: ${formattedCorrectSentence}`;
    document.getElementById("userAnswer").textContent = `Din svar: ${formattedSelectedSentence}`;
    incorrectCount++;
    document.getElementById("incorrectCount").textContent = incorrectCount;
  }
  selectedWords = [];
  displaySentence();
  speak(formattedCorrectSentence); // Озвучиваем правильное предложение
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "nb-NO"; // Устанавливаем язык на норвежский букмол
  window.speechSynthesis.speak(utterance);
}

function startVoiceInput() {
  if (!recognition) {
    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "nb-NO"; // Устанавливаем язык на норвежский букмол
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript;
      const words = transcript.split(/\s+/);
      selectedWords = words;
      const selectedSentence = selectedWords.join(" ").replace(/\s*([,\.!?])\s*/g, "$1 ");
      const formattedSentence = formatSentence(selectedSentence);
      document.getElementById("sentence").textContent = formattedSentence;
      document.getElementById("feedback").textContent = "";
      document.getElementById("correctAnswer").textContent = "";
      document.getElementById("userAnswer").textContent = "";
    };

    recognition.onerror = function(event) {
      console.error("Ошибка распознавания речи: ", event.error);
    };
  }

  recognition.start();
}

function stopVoiceInput() {
  if (recognition) {
    recognition.stop();
  }
}

window.onload = function() {
  displaySentence();
  document.getElementById("checkAnswer").onclick = checkAnswer;
  document.getElementById("removeLastWord").onclick = removeLastWord;
  const micButton = document.getElementById("startVoiceInput");
  micButton.onmousedown = startVoiceInput;
  micButton.onmouseup = stopVoiceInput;
  micButton.ontouchstart = startVoiceInput;
  micButton.ontouchend = stopVoiceInput;
};