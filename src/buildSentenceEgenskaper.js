const sentences = [
 
  {
    "norwegian": "Jeg kom til arbeidsplassen for et intervju om en jobb med datamaskiner og kunstig intelligens.",
    "russian": "Я пришёл на рабочее место для собеседования на работу в сфере компьютеров и искусственного интеллекта.",
    "english": "I came to the workplace for an interview about a job with computers and artificial intelligence."
  },
  {
    "norwegian": "Hei, jeg er her for et intervju. Kan du vise meg veien?",
    "russian": "Привет, я пришёл на собеседование. Можете показать мне дорогу?",
    "english": "Hi, I'm here for an interview. Can you show me the way?"
  },
  {
    "norwegian": "Ja, selvfølgelig. Intervjurommet er rett rundt hjørnet.",
    "russian": "Да, конечно. Комната для интервью находится прямо за углом.",
    "english": "Yes, of course. The interview room is just around the corner."
  },
  {
    "norwegian": "Takk skal du ha. Jeg er spent på å lære mer om jobben.",
    "russian": "Большое спасибо. Я с нетерпением жду, чтобы узнать больше о работе.",
    "english": "Thank you very much. I'm excited to learn more about the job."
  },
  {
    "norwegian": "Ingen årsak! Lykkelig til!",
    "russian": "Без проблем! Удачи!",
    "english": "No problem! Good luck!"
  },
  {
    "norwegian": "Hei, jeg heter [Navn]. Hyggelig å møte deg.",
    "russian": "Привет, меня зовут [Имя]. Приятно познакомиться.",
    "english": "Hi, my name is [Name]. Nice to meet you."
  },
  {
    "norwegian": "Hyggelig å møte deg også. Jeg har noen spørsmål om jobben.",
    "russian": "Приятно познакомиться. У меня есть несколько вопросов о работе.",
    "english": "Nice to meet you too. I have a few questions about the job."
  },
  {
    "norwegian": "Selvfølgelig! Hva vil du vite?",
    "russian": "Конечно! Что ты хочешь узнать?",
    "english": "Of course! What would you like to know?"
  },
  {
    "norwegian": "Hvordan ser en vanlig dag ut i denne jobben?",
    "russian": "Как выглядит обычный день на этой работе?",
    "english": "What does a typical day look like in this job?"
  },
  {
    "norwegian": "Vi jobber med mange forskjellige prosjekter, fra dataanalyse til utvikling av AI-modeller.",
    "russian": "Мы работаем над множеством различных проектов, от анализа данных до разработки моделей ИИ.",
    "english": "We work on a variety of projects, from data analysis to developing AI models."
  },
  {
    "norwegian": "Hvor lenge har du jobbet her?",
    "russian": "Как долго ты работаешь здесь?",
    "english": "How long have you worked here?"
  },
  {
    "norwegian": "Jeg har jobbet her i tre år. Jeg trives veldig godt.",
    "russian": "Я работаю здесь три года. Мне здесь очень нравится.",
    "english": "I've worked here for three years. I really enjoy it."
  },
  {
    "norwegian": "Hva er det beste med å jobbe med kunstig intelligens?",
    "russian": "Что самое лучшее в работе с искусственным интеллектом?",
    "english": "What's the best thing about working with artificial intelligence?"
  },
  {
    "norwegian": "Det mest spennende er å løse komplekse problemer og se resultatene.",
    "russian": "Самое интересное - решать сложные задачи и видеть результаты.",
    "english": "The most exciting thing is solving complex problems and seeing the results."
  },
  {
    "norwegian": "Jeg ser frem til å lære mer om dette feltet.",
    "russian": "Я с нетерпением жду, чтобы узнать больше об этой области.",
    "english": "I'm looking forward to learning more about this field."
  },
  {
    "norwegian": "Hei, jeg er klar for intervjuet nå.",
    "russian": "Здравствуйте, я готов к собеседованию.",
    "english": "Hello, I'm ready for the interview now."
  },
  {
    "norwegian": "Velkommen! La oss begynne med noen spørsmål om dine kvalifikasjoner.",
    "russian": "Добро пожаловать! Давайте начнем с нескольких вопросов о ваших квалификациях.",
    "english": "Welcome! Let's start with some questions about your qualifications."
  },
  {
    "norwegian": "Kan du fortelle meg om din erfaring med kunstig intelligens?",
    "russian": "Можете рассказать о своем опыте работы с искусственным интеллектом?",
    "english": "Can you tell me about your experience with artificial intelligence?"
  },
  {
    "norwegian": "Ja, jeg har arbeidet med flere prosjekter som involverer maskinlæring og dataanalyse.",
    "russian": "Да, я работал над несколькими проектами, которые включают машинное обучение и анализ данных.",
    "english": "Yes, I have worked on several projects involving machine learning and data analysis."
  },
  {
    "norwegian": "Det er flott å høre. Hvordan tror du din erfaring kan hjelpe oss her?",
    "russian": "Прекрасно. Как вы думаете, как ваш опыт может помочь нам здесь?",
    "english": "That's great to hear. How do you think your experience can help us here?"
  },
  {
    "norwegian": "Kan du forklare hvordan dere bruker AI i deres prosjekter?",
    "russian": "Можете объяснить, как вы используете ИИ в ваших проектах?",
    "english": "Can you explain how you use AI in your projects?"
  },
  {
    "norwegian": "Vi bruker AI til å forbedre effektiviteten og løse komplekse problemer.",
    "russian": "Мы используем ИИ для повышения эффективности и решения сложных задач.",
    "english": "We use AI to improve efficiency and solve complex problems."
  },
  {
    "norwegian": "Er det noen spesifikke prosjekter du jobber med for øyeblikket?",
    "russian": "Есть ли какие-то конкретные проекты, над которыми вы работаете в данный момент?",
    "english": "Are there any specific projects you are currently working on?"
  },
  {
    "norwegian": "Ja, vi jobber med en AI-modell for å forbedre kundeservice.",
    "russian": "Да, мы работаем над моделью ИИ для улучшения обслуживания клиентов.",
    "english": "Yes, we are working on an AI model to improve customer service."
  },
  {
    "norwegian": "Hvordan samarbeider teamet ditt på disse prosjektene?",
    "russian": "Как ваша команда сотрудничает на этих проектах?",
    "english": "How does your team collaborate on these projects?"
  },
  {
    "norwegian": "Vi har regelmessige møter og bruker samarbeidsverktøy for å holde alle informert.",
    "russian": "У нас регулярные встречи, и мы используем инструменты для сотрудничества, чтобы все были в курсе.",
    "english": "We have regular meetings and use collaboration tools to keep everyone informed."
  },
  {
    "norwegian": "Hva forventer du fra en ny ansatt i denne stillingen?",
    "russian": "Чего вы ожидаете от нового сотрудника на этой должности?",
    "english": "What do you expect from a new employee in this position?"
  },
  {
    "norwegian": "Vi ser etter noen som er lidenskapelig opptatt av AI og ønsker å lære og vokse.",
    "russian": "Мы ищем кого-то, кто увлечен ИИ и хочет учиться и развиваться.",
    "english": "We are looking for someone who is passionate about AI and eager to learn and grow."
  },
  {
    "norwegian": "Hvordan måler dere suksess i deres prosjekter?",
    "russian": "Как вы измеряете успех в ваших проектах?",
    "english": "How do you measure success in your projects?"
  },
  {
    "norwegian": "Vi bruker ulike KPIer og regelmessige vurderinger for å måle fremgang.",
    "russian": "Мы используем различные ключевые показатели эффективности и регулярные оценки для измерения прогресса.",
    "english": "We use various KPIs and regular evaluations to measure progress."
    },
  {
    "norwegian": "Hva er de viktigste ferdighetene for denne stillingen?",
    "russian": "Какие основные навыки важны для этой должности?",
    "english": "What are the key skills for this position?"
  },
  {
    "norwegian": "Vi ser etter noen med sterke analytiske ferdigheter og erfaring med AI.",
    "russian": "Мы ищем кого-то с сильными аналитическими навыками и опытом работы с ИИ.",
    "english": "We are looking for someone with strong analytical skills and experience with AI."
  },
  {
    "norwegian": "Hvordan ser en typisk arbeidsdag ut i denne stillingen?",
    "russian": "Как выглядит типичный рабочий день на этой должности?",
    "english": "What does a typical workday look like in this position?"
  },
  {
    "norwegian": "Du vil jobbe selvstendig på ulike AI-prosjekter og rapportere til teamlederen.",
    "russian": "Вы будете работать самостоятельно над различными проектами ИИ и отчитываться перед руководителем команды.",
    "english": "You will work independently on various AI projects and report to the team leader."
  },
  {
    "norwegian": "Er det muligheter for å utvikle seg og lære nye ferdigheter?",
    "russian": "Есть ли возможности для развития и изучения новых навыков?",
    "english": "Are there opportunities to develop and learn new skills?"
  },
  {
    "norwegian": "Absolutt, vi tilbyr kontinuerlig opplæring og ressurser for din faglige vekst.",
    "russian": "Безусловно, мы предлагаем постоянное обучение и ресурсы для вашего профессионального роста.",
    "english": "Absolutely, we provide ongoing training and resources for your professional growth."
  },
  {
    "norwegian": "Hvordan vil suksess bli målt i denne rollen?",
    "russian": "Как будет измеряться успех в этой роли?",
    "english": "How will success be measured in this role?"
  },
  {
    "norwegian": "Suksess vil bli målt gjennom oppnådde resultater og din evne til å løse komplekse problemer.",
    "russian": "Успех будет измеряться достигнутыми результатами и вашей способностью решать сложные проблемы.",
    "english": "Success will be measured by the results achieved and your ability to solve complex problems."
  },
  {
    "norwegian": "Kan du beskrive en utfordring du nylig løste?",
    "russian": "Можете описать проблему, которую вы недавно решили?",
    "english": "Can you describe a challenge you recently solved?"
  },
  {
    "norwegian": "Jeg utviklet en AI-løsning for å forbedre effektiviteten i et dataanalytisk system.",
    "russian": "Я разработал решение на основе ИИ для повышения эффективности аналитической системы.",
    "english": "I developed an AI solution to improve efficiency in a data analysis system."
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