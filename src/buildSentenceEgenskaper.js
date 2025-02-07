const sentences = [
 {
    "norwegian": "Jeg er punktlig og kommer alltid i tide.",
    "russian": "Я пунктуальный и всегда прихожу вовремя.",
    "english": "I am punctual and always arrive on time."
  },
  {
    "norwegian": "Jeg jobber godt i team og samarbeider med andre.",
    "russian": "Я хорошо работаю в команде и сотрудничаю с другими.",
    "english": "I work well in a team and collaborate with others."
  },
  {
    "norwegian": "Jeg har gode kommunikasjonsevner.",
    "russian": "У меня хорошие коммуникативные навыки.",
    "english": "I have good communication skills."
  },
  {
    "norwegian": "Jeg er fleksibel og kan tilpasse meg endringer.",
    "russian": "Я гибкий и могу адаптироваться к изменениям.",
    "english": "I am flexible and can adapt to changes."
  },
  {
    "norwegian": "Jeg er motivert og jobber hardt for å nå mine mål.",
    "russian": "Я мотивирован и усердно работаю, чтобы достичь своих целей.",
    "english": "I am motivated and work hard to achieve my goals."
  },
  {
    "norwegian": "Jeg er kreativ og finner nye løsninger på problemer.",
    "russian": "Я креативен и нахожу новые решения для проблем.",
    "english": "I am creative and find new solutions to problems."
  },
  {
    "norwegian": "Jeg har god tidshåndtering og prioriterer oppgaver godt.",
    "russian": "У меня хорошее управление временем, и я хорошо расставляю приоритеты.",
    "english": "I have good time management and prioritize tasks well."
  },
  {
    "norwegian": "Jeg er ansvarsfull og tar eierskap til mitt arbeid.",
    "russian": "Я ответственный и беру на себя ответственность за свою работу.",
    "english": "I am responsible and take ownership of my work."
  },
  {
    "norwegian": "Jeg er detaljorientert og nøyaktig i mitt arbeid.",
    "russian": "Я внимателен к деталям и точен в своей работе.",
    "english": "I am detail-oriented and accurate in my work."
  },
  {
    "norwegian": "Jeg har gode problemløsningsevner.",
    "russian": "У меня хорошие навыки решения проблем.",
    "english": "I have good problem-solving skills."
  }, 
  {
    "norwegian": "Jeg er positiv og ser etter løsninger.",
    "russian": "Я позитивный и ищу решения.",
    "english": "I am positive and look for solutions."
  },
  {
    "norwegian": "Jeg jobber godt under press.",
    "russian": "Я хорошо работаю под давлением.",
    "english": "I work well under pressure."
  },
  {
    "norwegian": "Jeg er pålitelig og holder mine løfter.",
    "russian": "Я надежный и выполняю обещания.",
    "english": "I am reliable and keep my promises."
  },
  {
    "norwegian": "Jeg lærer raskt nye ting.",
    "russian": "Я быстро учусь новому.",
    "english": "I learn new things quickly."
  },
  {
    "norwegian": "Jeg er organisert og planlegger godt.",
    "russian": "Я организованный и хорошо планирую.",
    "english": "I am organized and plan well."
  },
  {
    "norwegian": "Jeg har gode lederegenskaper.",
    "russian": "У меня хорошие лидерские качества.",
    "english": "I have good leadership skills."
  },
  {
    "norwegian": "Jeg er tålmodig og lytter til andre.",
    "russian": "Я терпеливый и слушаю других.",
    "english": "I am patient and listen to others."
  },
  {
    "norwegian": "Jeg er engasjert og motivert.",
    "russian": "Я вовлечен и мотивирован.",
    "english": "I am engaged and motivated."
  },
  {
    "norwegian": "Jeg er pålitelig og holder frister.",
    "russian": "Я надежный и соблюдаю сроки.",
    "english": "I am dependable and meet deadlines."
  },
  {
    "norwegian": "Jeg er kreativ og liker å finne nye ideer.",
    "russian": "Я креативный и люблю находить новые идеи.",
    "english": "I am creative and like to find new ideas."
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