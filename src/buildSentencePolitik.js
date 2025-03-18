const sentences = [
  {
    "norwegian": "Hvilke komponenter trenger vi for billettsiden?",
    "russian": "Какие компоненты нам нужны для страницы с билетами?",
    "english": "What components do we need for the ticket page?"
  },
  {
    "norwegian": "Vi må legge til en komponent for å vise tilgjengelige billetter.",
    "russian": "Нам нужно добавить компонент для отображения доступных билетов.",
    "english": "We need to add a component to show available tickets."
  },
  {
    "norwegian": "Hvordan skal vi validere billettskjemaet?",
    "russian": "Как мы будем валидировать форму с билетами?",
    "english": "How will we validate the ticket form?"
  },
  {
    "norwegian": "Vi kan bruke Formik og Yup for validering.",
    "russian": "Мы можем использовать Formik и Yup для валидации.",
    "english": "We can use Formik and Yup for validation."
  },
  {
    "norwegian": "Bør vi bruke server-side rendering for festivalsiden?",
    "russian": "Нужно ли использовать серверный рендеринг для страницы фестиваля?",
    "english": "Should we use server-side rendering for the festival page?"
  },
  {
    "norwegian": "Ja, Next.js er perfekt for server-side rendering.",
    "russian": "Да, Next.js отлично подходит для серверного рендеринга.",
    "english": "Yes, Next.js is perfect for server-side rendering."
  },
  {
    "norwegian": "Hvordan laster vi inn data om festivaler fra API?",
    "russian": "Как загрузить данные о фестивалях из API?",
    "english": "How do we load festival data from the API?"
  },
  {
    "norwegian": "Vi kan bruke getServerSideProps for å hente data.",
    "russian": "Мы можем использовать getServerSideProps для получения данных.",
    "english": "We can use getServerSideProps to fetch the data."
  },
  {
    "norwegian": "Skal vi bruke Tailwind CSS for design?",
    "russian": "Мы будем использовать Tailwind CSS для дизайна?",
    "english": "Should we use Tailwind CSS for the design?"
  },
  {
    "norwegian": "Tailwind er raskt og effektivt for små prosjekter.",
    "russian": "Tailwind быстрый и эффективный для небольших проектов.",
    "english": "Tailwind is fast and efficient for small projects."
  },
  {
    "norwegian": "Hvordan håndterer vi brukerens tilstand?",
    "russian": "Как мы будем управлять состоянием пользователя?",
    "english": "How will we handle the user's state?"
  },
  {
    "norwegian": "Vi kan bruke Context API for å lagre brukerdata.",
    "russian": "Мы можем использовать Context API для хранения данных пользователя.",
    "english": "We can use Context API to store user data."
  },
  {
    "norwegian": "Kan vi teste festival-API med Postman?",
    "russian": "Можем ли мы протестировать API фестиваля с помощью Postman?",
    "english": "Can we test the festival API with Postman?"
  },
  {
    "norwegian": "Ja, det er en god idé for å sjekke alle endepunkter.",
    "russian": "Да, это хорошая идея для проверки всех эндпоинтов.",
    "english": "Yes, that's a good idea to check all endpoints."
  },
  {
    "norwegian": "Hvordan deployer vi appen på Vercel?",
    "russian": "Как задеплоить приложение на Vercel?",
    "english": "How do we deploy the app on Vercel?"
  },
  {
    "norwegian": "Vi må sette opp et Git-repository og koble det til Vercel.",
    "russian": "Нам нужно настроить Git-репозиторий и подключить его к Vercel.",
    "english": "We need to set up a Git repository and connect it to Vercel."
  },
  {
    "norwegian": "Skal vi bruke Swagger for API-dokumentasjon?",
    "russian": "Мы будем использовать Swagger для документации API?",
    "english": "Should we use Swagger for API documentation?"
  },
  {
    "norwegian": "Ja, Swagger hjelper med å dokumentere alle endepunkter tydelig.",
    "russian": "Да, Swagger помогает чётко документировать все эндпоинты.",
    "english": "Yes, Swagger helps clearly document all endpoints."
  },
  {
    "norwegian": "Hvordan integrerer vi Bruno for API-testing?",
    "russian": "Как интегрировать Bruno для тестирования API?",
    "english": "How do we integrate Bruno for API testing?"
  },
  {
    "norwegian": "Vi kan bruke Bruno til å skrive og kjøre testskript for API-en vår.",
    "russian": "Мы можем использовать Bruno для написания и запуска тестов для нашего API.",
    "english": "We can use Bruno to write and run tests for our API."
  },
  {
    "norwegian": "Hvilke hooks trenger vi for å håndtere brukerens pålogging?",
    "russian": "Какие хуки нам нужны для обработки авторизации пользователя?",
    "english": "What hooks do we need to handle user login?"
  },
  {
    "norwegian": "Vi kan bruke useState til å lagre brukerdata og useEffect for å sjekke token.",
    "russian": "Мы можем использовать useState для хранения данных пользователя и useEffect для проверки токена.",
    "english": "We can use useState to store user data and useEffect to verify the token."
  },
  {
    "norwegian": "Hvordan konfigurerer vi Bitbucket-repositoriet for teamarbeid?",
    "russian": "Как настроить репозиторий в Bitbucket для командной работы?",
    "english": "How do we configure the Bitbucket repository for teamwork?"
  },
  {
    "norwegian": "Vi kan opprette branches for hver oppgave og bruke pull requests for kodegjennomgang.",
    "russian": "Мы можем создавать ветки для каждой задачи и использовать pull requests для ревью кода.",
    "english": "We can create branches for each task and use pull requests for code review."
  },
  {
    "norwegian": "Skal vi lage en side for å vise billettdetaljer?",
    "russian": "Нужно ли создавать страницу для отображения деталей билета?",
    "english": "Should we create a page to display ticket details?"
  },
  {
    "norwegian": "Ja, brukerne trenger å se billettype, pris og antall.",
    "russian": "Да, пользователи должны видеть тип билета, цену и количество.",
    "english": "Yes, users need to see ticket type, price, and quantity."
  },
  {
    "norwegian": "Hvordan håndterer vi feilmeldinger når API ikke svarer?",
    "russian": "Как обрабатывать ошибки, если API не отвечает?",
    "english": "How do we handle errors when the API doesn't respond?"
  },
  {
    "norwegian": "Vi kan vise en feilmelding med en knapp for å prøve igjen.",
    "russian": "Мы можем показать сообщение об ошибке с кнопкой «Повторить попытку».",
    "english": "We can display an error message with a retry button."
  },
  {
    "norwegian": "Kan vi bruke Next.js for dynamiske ruter for festivaler?",
    "russian": "Можно ли использовать Next.js для динамических маршрутов фестивалей?",
    "english": "Can we use Next.js for dynamic routes for festivals?"
  },
  {
    "norwegian": "Ja, vi kan lage [festivalId].js for å vise unike festivaler.",
    "russian": "Да, мы можем создать [festivalId].js для отображения уникальных фестивалей.",
    "english": "Yes, we can create [festivalId].js to display unique festivals."
  },
  {
    "norwegian": "Hva er den beste måten å optimalisere sideinnlasting?",
    "russian": "Как оптимизировать загрузку страницы?",
    "english": "What is the best way to optimize page loading?"
  },
  {
    "norwegian": "Vi kan bruke lazy loading for tunge komponenter.",
    "russian": "Мы можем использовать ленивую загрузку для тяжёлых компонентов.",
    "english": "We can use lazy loading for heavy components."
  },
  {
    "norwegian": "Hvordan kan vi sikre at TypeScript-filer blir riktig kompilert?",
    "russian": "Как мы можем убедиться, что файлы TypeScript компилируются корректно?",
    "english": "How can we ensure that TypeScript files are compiled correctly?"
  },
  {
    "norwegian": "Vi bør opprette en tsconfig.json med riktige innstillinger.",
    "russian": "Нужно создать tsconfig.json с правильными настройками.",
    "english": "We should create a tsconfig.json with the correct settings."
  },
  {
    "norwegian": "Bør vi lage en mock-server for å teste API-et vårt?",
    "russian": "Нужно ли создать mock-сервер для тестирования нашего API?",
    "english": "Should we create a mock server to test our API?"
  },
  {
    "norwegian": "Ja, en mock-server hjelper oss med å simulere API-svar under utvikling.",
    "russian": "Да, mock-сервер поможет имитировать ответы API во время разработки.",
    "english": "Yes, a mock server helps simulate API responses during development."
  },
  {
    "norwegian": "Hvordan logger vi feil i brukergrensesnittet?",
    "russian": "Как мы будем логировать ошибки в интерфейсе?",
    "english": "How do we log errors in the user interface?"
  },
  {
    "norwegian": "Vi kan bruke Sentry for overvåking og logging.",
    "russian": "Мы можем использовать Sentry для мониторинга и логирования.",
    "english": "We can use Sentry for monitoring and logging."
  },
  {
    "norwegian": "Hvordan implementerer vi sikkerhet for kjøpsprosessen?",
    "russian": "Как реализовать безопасность процесса покупки?",
    "english": "How do we implement security for the purchase process?"
  },
  {
    "norwegian": "Vi må legge til HTTPS og beskytte sensitive data.",
    "russian": "Нужно добавить HTTPS и защитить чувствительные данные.",
    "english": "We need to add HTTPS and secure sensitive data."
  },
  {
    "norwegian": "Skal vi lage en egen modal for betalingsfeil?",
    "russian": "Стоит ли создать отдельное модальное окно для ошибок оплаты?",
    "english": "Should we create a separate modal for payment errors?"
  },
  {
    "norwegian": "Ja, brukeren må få tydelig beskjed hvis betalingen mislykkes.",
    "russian": "Да, пользователь должен чётко видеть уведомление, если оплата не прошла.",
    "english": "Yes, the user needs clear feedback if the payment fails."
  },
  {
    "norwegian": "Hvilke tester skal vi skrive for betalingssystemet?",
    "russian": "Какие тесты нам нужно написать для платёжной системы?",
    "english": "What tests should we write for the payment system?"
  },
  {
    "norwegian": "Vi kan skrive enhetstester for validering og integrasjonstester for hele prosessen.",
    "russian": "Мы можем написать модульные тесты для валидации и интеграционные для всей системы.",
    "english": "We can write unit tests for validation and integration tests for the whole process."
  },
  {
    "norwegian": "Hvordan kan vi gjøre sidene raskere for mobilbrukere?",
    "russian": "Как ускорить страницы для мобильных пользователей?",
    "english": "How can we make pages faster for mobile users?"
  },
  {
    "norwegian": "Vi kan aktivere bildeoptimalisering i Next.js.",
    "russian": "Мы можем включить оптимизацию изображений в Next.js.",
    "english": "We can enable image optimization in Next.js."
  },
  {
    "norwegian": "Bør vi implementere en dark mode for festivalappen?",
    "russian": "Стоит ли внедрить тёмный режим для приложения фестиваля?",
    "english": "Should we implement a dark mode for the festival app?"
  },
  {
    "norwegian": "Ja, mange brukere foretrekker å ha en slik funksjon.",
    "russian": "Да, многим пользователям нравится иметь такую функцию.",
    "english": "Yes, many users like having this feature."
  },
  {
    "norwegian": "Kan vi bruke Bitbucket Pipelines til CI/CD?",
    "russian": "Можем ли мы использовать Bitbucket Pipelines для CI/CD?",
    "english": "Can we use Bitbucket Pipelines for CI/CD?"
  },
  {
    "norwegian": "Ja, det vil hjelpe oss med automatisering av bygg og distribusjon.",
    "russian": "Да, это поможет автоматизировать сборку и деплой.",
    "english": "Yes, it will help us automate builds and deployments."
  },
  {
    "norwegian": "Hvordan sikrer vi at brukernes data er trygge?",
    "russian": "Как мы можем гарантировать безопасность данных пользователей?",
    "english": "How do we ensure that user data is safe?"
  },
  {
    "norwegian": "Vi bør bruke kryptering og følge GDPR-reglene.",
    "russian": "Нужно использовать шифрование и соблюдать правила GDPR.",
    "english": "We should use encryption and follow GDPR rules."
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


// function getRandomSentence() {
//   return sentences[Math.floor(Math.random() * sentences.length)];
// }

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// function getRandomWords(words, count) {
//   const shuffledWords = shuffleArray([...words]);
//   return shuffledWords.slice(0, count);
// }

// function displaySentence() {
//   currentSentence = getRandomSentence();
//   document.getElementById("russianSentence").textContent = currentSentence[selectedLanguage];
//   document.getElementById("sentence").textContent = "";
//   const words = currentSentence.norwegian.split(/(\s|,|\.|!|\?)/).filter(word => word.trim() !== "");
//   const randomExtraWords = getRandomWords(extraWords, 16 - words.length);
//   const allWords = shuffleArray([...words, ...randomExtraWords]);
//   const wordsContainer = document.getElementById("wordsContainer");
//   wordsContainer.innerHTML = "";
//   allWords.forEach(word => {
//     const wordElement = document.createElement("button");
//     wordElement.textContent = word;
//     wordElement.classList.add("word");
//     wordElement.onclick = () => selectWord(word, wordElement);
//     wordsContainer.appendChild(wordElement);
//   });
// }

// function selectWord(word, wordElement) {
//   selectedWords.push(word);
//   wordElement.style.display = "none";
//   const selectedSentence = selectedWords.join(" ").replace(/\s*([,\.!?])\s*/g, "$1 ");
//   document.getElementById("sentence").textContent = selectedSentence;
//   document.getElementById("feedback").textContent = "";
//   document.getElementById("correctAnswer").textContent = "";
//   document.getElementById("userAnswer").textContent = "";
//   speak(word); // Озвучиваем выбранное слово
// }

// function removeLastWord() {
//   if (selectedWords.length > 0) {
//     const lastWord = selectedWords.pop();
//     const wordsContainer = document.getElementById("wordsContainer");
//     const wordElement = document.createElement("button");
//     wordElement.textContent = lastWord;
//     wordElement.classList.add("word");
//     wordElement.onclick = () => selectWord(lastWord, wordElement);
//     wordsContainer.appendChild(wordElement);
//     const selectedSentence = selectedWords.join(" ").replace(/\s*([,\.!?])\s*/g, "$1 ");
//     document.getElementById("sentence").textContent = selectedSentence;
//   }
// }

// function normalizeSentence(sentence) {
//   return sentence.replace(/\s*([,\.!?])\s*/g, "$1").trim();
// }

// function formatSentence(sentence) {
  
//   sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

  
//   if (!/[.!?]$/.test(sentence)) {
//     sentence += '.';
//   }

//   return sentence;
// }

// function checkAnswer() {
//   const selectedSentence = normalizeSentence(selectedWords.join(" "));
//   const correctSentence = normalizeSentence(currentSentence.norwegian);
//   const formattedSelectedSentence = formatSentence(selectedSentence);
//   const formattedCorrectSentence = formatSentence(correctSentence);

//   if (formattedSelectedSentence === formattedCorrectSentence) {
//     document.getElementById("feedback").textContent = "Riktig!";
//     document.getElementById("feedback").style.color = "green";
//     document.getElementById("correctAnswer").textContent = "";
//     document.getElementById("userAnswer").textContent = "";
//     correctCount++;
//     document.getElementById("correctCount").textContent = correctCount;
//   } else {
//     document.getElementById("feedback").textContent = "Feil. Prøv igjen.";
//     document.getElementById("feedback").style.color = "red";
//     document.getElementById("correctAnswer").textContent = `Riktig svar: ${formattedCorrectSentence}`;
//     document.getElementById("userAnswer").textContent = `Din svar: ${formattedSelectedSentence}`;
//     incorrectCount++;
//     document.getElementById("incorrectCount").textContent = incorrectCount;
//   }
//   selectedWords = [];
//   displaySentence();
//   speak(formattedCorrectSentence); 
// }

// function speak(text) {
//   const utterance = new SpeechSynthesisUtterance(text);
//   utterance.lang = "nb-NO"; 
//   window.speechSynthesis.speak(utterance);
// }

// function startVoiceInput() {
//   if (!recognition) {
//     recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognition.lang = "nb-NO"; 
//     recognition.interimResults = false;
//     recognition.maxAlternatives = 1;

//     recognition.onresult = function(event) {
//       const transcript = event.results[0][0].transcript;
//       const words = transcript.split(/\s+/);
//       selectedWords = words;
//       const selectedSentence = selectedWords.join(" ").replace(/\s*([,\.!?])\s*/g, "$1 ");
//       const formattedSentence = formatSentence(selectedSentence);
//       document.getElementById("sentence").textContent = formattedSentence;
//       document.getElementById("feedback").textContent = "";
//       document.getElementById("correctAnswer").textContent = "";
//       document.getElementById("userAnswer").textContent = "";
//     };

//     recognition.onerror = function(event) {
//       console.error("Ошибка распознавания речи: ", event.error);
//     };
//   }

//   recognition.start();
// }

// function stopVoiceInput() {
//   if (recognition) {
//     recognition.stop();
//   }
// }

// window.onload = function() {
//   displaySentence();
//   document.getElementById("checkAnswer").onclick = checkAnswer;
//   document.getElementById("removeLastWord").onclick = removeLastWord;
//   const micButton = document.getElementById("startVoiceInput");
//   micButton.onmousedown = startVoiceInput;
//   micButton.onmouseup = stopVoiceInput;
//   micButton.ontouchstart = startVoiceInput;
//   micButton.ontouchend = stopVoiceInput;
// };










  