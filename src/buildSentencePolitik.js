const sentences = [
  {
    "norwegian": "Krigen i Ukraina er vanskelig og påvirker mange mennesker.",
    "russian": "Война в Украине трудная и затрагивает многих людей.",
    "english": "The war in Ukraine is difficult and affects many people."
  },
  {
    "norwegian": "Situasjonen i Midtøsten er fortsatt spent.",
    "russian": "Ситуация на Ближнем Востоке остается напряженной.",
    "english": "The situation in the Middle East remains tense."
  },
  {
    "norwegian": "Trump har gjort mange endringer i USA.",
    "russian": "Трамп внес много изменений в США.",
    "english": "Trump has made many changes in the USA."
  },
  {
    "norwegian": "Norge spiller en viktig rolle i verdenspolitikken.",
    "russian": "Норвегия играет важную роль в мировой политике.",
    "english": "Norway plays an important role in world politics."
  },
  {
    "norwegian": "Krigen i Ukraina har store konsekvenser for Europa.",
    "russian": "Война в Украине имеет большие последствия для Европы.",
    "english": "The war in Ukraine has big consequences for Europe."
  },
  {
    "norwegian": "Forholdet mellom Israel og Palestina er komplekst.",
    "russian": "Отношения между Израилем и Палестиной сложные.",
    "english": "The relationship between Israel and Palestine is complex."
  },
  {
    "norwegian": "Trump er kjent for sin uvanlige politiske stil.",
    "russian": "Трамп известен своим необычным политическим стилем.",
    "english": "Trump is known for his unusual political style."
  },
  {
    "norwegian": "Norge støtter fredsforhandlinger i verden.",
    "russian": "Норвегия поддерживает мирные переговоры в мире.",
    "english": "Norway supports peace negotiations in the world."
  },
  {
    "norwegian": "Konflikter i Midtøsten skaper mange flyktninger.",
    "russian": "Конфликты на Ближнем Востоке создают много беженцев.",
    "english": "Conflicts in the Middle East create many refugees."
  },
  {
    "norwegian": "Norge arbeider for å beskytte miljøet globalt.",
    "russian": "Норвегия работает над охраной окружающей среды во всем мире.",
    "english": "Norway works to protect the environment globally."
  },
  {
    "norwegian": "Valget i USA har ført til mange diskusjoner om demokrati.",
    "russian": "Выборы в США привели к множеству обсуждений о демократии.",
    "english": "The election in the USA has led to many discussions about democracy."
  },
  {
    "norwegian": "Flyktningskrisen påvirker mange land i Europa.",
    "russian": "Кризис беженцев затрагивает многие страны в Европе.",
    "english": "The refugee crisis affects many countries in Europe."
  },
  {
    "norwegian": "Det er viktig å forstå konflikten i Gaza.",
    "russian": "Важно понимать конфликт в Газе.",
    "english": "It is important to understand the conflict in Gaza."
  },
  {
    "norwegian": "Norges rolle i NATO er viktig for sikkerheten.",
    "russian": "Роль Норвегии в НАТО важна для безопасности.",
    "english": "Norway's role in NATO is important for security."
  },
  {
    "norwegian": "Brexit har hatt stor innflytelse på Europa.",
    "russian": "Brexit оказал большое влияние на Европу.",
    "english": "Brexit has had a big impact on Europe."
  },
  {
    "norwegian": "Forhandlinger om fred er nødvendige i Midtøsten.",
    "russian": "Переговоры о мире необходимы на Ближнем Востоке.",
    "english": "Peace negotiations are necessary in the Middle East."
  },
  {
    "norwegian": "Norge bidrar til humanitær hjelp i konfliktområder.",
    "russian": "Норвегия вносит вклад в гуманитарную помощь в зонах конфликтов.",
    "english": "Norway contributes to humanitarian aid in conflict areas."
  },
  {
    "norwegian": "Politikken til Trump har endret USAs forhold til andre land.",
    "russian": "Политика Трампа изменила отношения США с другими странами.",
    "english": "Trump's policies have changed the USA's relations with other countries."
  },
  {
    "norwegian": "Konflikten i Ukraina påvirker verdensøkonomien.",
    "russian": "Конфликт в Украине влияет на мировую экономику.",
    "english": "The conflict in Ukraine affects the global economy."
  },

  {
    "norwegian": "Norge jobber for fred i verden.",
    "russian": "Норвегия работает для мира в мире.",
    "english": "Norway works for peace in the world."
  },
  {
    "norwegian": "Norge er et viktig medlem av NATO.",
    "russian": "Норвегия является важным членом НАТО.",
    "english": "Norway is an important member of NATO."
  },
  {
    "norwegian": "Trump har påvirket amerikansk politikk mye.",
    "russian": "Трамп сильно повлиял на американскую политику.",
    "english": "Trump has influenced American politics a lot."
  },
  {
    "norwegian": "Konflikten i Gaza skaper mye lidelse.",
    "russian": "Конфликт в Газе вызывает много страданий.",
    "english": "The conflict in Gaza causes a lot of suffering."
  },
  {
    "norwegian": "Krigen i Ukraina har stor påvirkning på verden.",
    "russian": "Война в Украине сильно влияет на мир.",
    "english": "The war in Ukraine has a big impact on the world."
  },
  {
    "norwegian": "Norge hjelper andre land med humanitær hjelp.",
    "russian": "Норвегия помогает другим странам с гуманитарной помощью.",
    "english": "Norway helps other countries with humanitarian aid."
  },
  {
    "norwegian": "Midtøsten trenger fred og stabilitet.",
    "russian": "Ближнему Востоку нужны мир и стабильность.",
    "english": "The Middle East needs peace and stability."
  },
  {
    "norwegian": "Trump er en kontroversiell figur i politikken.",
    "russian": "Трамп является спорной фигурой в политике.",
    "english": "Trump is a controversial figure in politics."
  },

  {
    "norwegian": "Konflikten i Ukraina skaper store problemer.",
    "russian": "Конфликт в Украине вызывает большие проблемы.",
    "english": "The conflict in Ukraine creates big problems."
  },
  {
    "norwegian": "BlackRock har stor innflytelse på verdensøkonomien.",
    "russian": "BlackRock оказывает значительное влияние на мировую экономику.",
    "english": "BlackRock has a significant influence on the global economy."
  },
  {
    "norwegian": "BlackRock investerer i teknologi og energi.",
    "russian": "BlackRock инвестирует в технологии и энергию.",
    "english": "BlackRock invests in technology and energy."
  },
  {
    "norwegian": "BlackRock har en stor rolle i global finans.",
    "russian": "BlackRock играет большую роль в глобальных финансах.",
    "english": "BlackRock plays a big role in global finance."
  },
  {
    "norwegian": "BlackRock har stor innflytelse på markedet.",
    "russian": "BlackRock оказывает значительное влияние на рынок.",
    "english": "BlackRock has a significant influence on the market."
  },
  {
    "norwegian": "Norge støtter FN i mange internasjonale spørsmål.",
    "russian": "Норвегия поддерживает ООН по многим международным вопросам.",
    "english": "Norway supports the UN on many international issues."
  },
  {
    "norwegian": "Trump har introdusert mange nye økonomiske tiltak.",
    "russian": "Трамп ввел много новых экономических мер.",
    "english": "Trump has introduced many new economic measures."
  },
  {
    "norwegian": "Konflikten i Gaza påvirker sikkerhet og stabilitet i regionen.",
    "russian": "Конфликт в Газе влияет на безопасность и стабильность в регионе.",
    "english": "The conflict in Gaza affects security and stability in the region."
  },
  {
    "norwegian": "Trump's politikk har påvirket globale markeder.",
    "russian": "Политика Трампа повлияла на мировые рынки.",
    "english": "Trump's policies have affected global markets."
  },
  {
    "norwegian": "Norge spiller en sentral rolle i klimaforhandlinger.",
    "russian": "Норвегия играет центральную роль в климатических переговорах.",
    "english": "Norway plays a central role in climate negotiations."
  },
  {
    "norwegian": "Norge samarbeider med andre land om klimaendringer.",
    "russian": "Норвегия сотрудничает с другими странами по вопросам изменения климата.",
    "english": "Norway cooperates with other countries on climate change."
  },
  {
    "norwegian": "BlackRock har en viktig rolle i globale finansmarkeder.",
    "russian": "BlackRock играет важную роль на мировых финансовых рынках.",
    "english": "BlackRock plays an important role in global financial markets."
  },
  {
    "norwegian": "Norge arbeider for internasjonal utvikling og bistand.",
    "russian": "Норвегия работает над международным развитием и помощью.",
    "english": "Norway works for international development and aid."
  },
  {
    "norwegian": "Trump har skapt debatt om innvandringspolitikk.",
    "russian": "Трамп вызвал дебаты о политике иммиграции.",
    "english": "Trump has sparked debate on immigration policy."
  },
  {
    "norwegian": "Konflikten i Ukraina har ført til økonomiske sanksjoner.",
    "russian": "Конфликт в Украине привел к экономическим санкциям.",
    "english": "The conflict in Ukraine has led to economic sanctions."
  },
  {
    "norwegian": "Norge har en sterk posisjon i verdenspolitikken.",
    "russian": "Норвегия занимает сильную позицию в мировой политике.",
    "english": "Norway has a strong position in world politics."
  },
  {
    "norwegian": "Korupsjon i Ukraina er et stort problem for økonomisk utvikling.",
    "russian": "Коррупция в Украине является большой проблемой для экономического развития.",
    "english": "Corruption in Ukraine is a big problem for economic development."
  },
  {
    "norwegian": "Det er rapportert om alvorlige menneskerettighetsbrudd i TCC.",
    "russian": "Сообщается о серьезных нарушениях прав человека в ТЦК.",
    "english": "There have been reports of serious human rights abuses in the TCC."
  },
  {
    "norwegian": "Folk blir tvunget til å kjempe i TCC i Ukraina.",
    "russian": "Людей заставляют воевать в ТЦК в Украине.",
    "english": "People are forced to fight in the TCC in Ukraine."
  },
  {
    "norwegian": "Trump har hatt stor innvirkning på gasssektoren.",
    "russian": "Трамп оказал значительное влияние на газовую отрасль.",
    "english": "Trump has had a significant impact on the gas sector."
  },
  {
    "norwegian": "Norge spiller en viktig rolle i verdenspolitikken.",
    "russian": "Норвегия играет важную роль в мировой политике.",
    "english": "Norway plays an important role in world politics."
  },
  {
    "norwegian": "Konflikten i Ukraina påvirker verdensøkonomien.",
    "russian": "Конфликт в Украине влияет на мировую экономику.",
    "english": "The conflict in Ukraine affects the global economy."
  },
  {
    "norwegian": "Norge støtter fredsforhandlinger i verden.",
    "russian": "Норвегия поддерживает мирные переговоры в мире.",
    "english": "Norway supports peace negotiations in the world."
  },
  {
    "norwegian": "Trump er kjent for sin uvanlige politiske stil.",
    "russian": "Трамп известен своим необычным политическим стилем.",
    "english": "Trump is known for his unusual political style."
  },
  {
    "norwegian": "Konflikter i Midtøsten skaper mange flyktninger.",
    "russian": "Конфликты на Ближнем Востоке создают много беженцев.",
    "english": "Conflicts in the Middle East create many refugees."
  },
  {
    "norwegian": "Korupsjon i Ukraina hindrer landets utvikling.",
    "russian": "Коррупция в Украине препятствует развитию страны.",
    "english": "Corruption in Ukraine hinders the country's development."
  },
  {
    "norwegian": "Det er mange rapporter om tvangsrekruttering i TCC i Ukraina.",
    "russian": "Есть много сообщений о принудительном наборе в ТЦК в Украине.",
    "english": "There are many reports of forced conscription in the TCC in Ukraine."
  },
  {
    "norwegian": "Menneskerettighetsbrudd i TCC er et alvorlig problem.",
    "russian": "Нарушения прав человека в ТЦК являются серьезной проблемой.",
    "english": "Human rights abuses in the TCC are a serious problem."
  },
  {
    "norwegian": "Trump sin politikk har endret det politiske landskapet i USA.",
    "russian": "Политика Трампа изменила политический ландшафт в США.",
    "english": "Trump's policies have changed the political landscape in the USA."
  },
  {
    "norwegian": "Norge arbeider for fred og stabilitet i verden.",
    "russian": "Норвегия работает для мира и стабильности в мире.",
    "english": "Norway works for peace and stability in the world."
  },
  {
    "norwegian": "Krigen i Ukraina har ført til økonomiske utfordringer globalt.",
    "russian": "Война в Украине привела к экономическим вызовам в глобальном масштабе.",
    "english": "The war in Ukraine has led to economic challenges globally."
  },
  {
    "norwegian": "Situasjonen i Midtøsten er fortsatt vanskelig.",
    "russian": "Ситуация на Ближнем Востоке остается сложной.",
    "english": "The situation in the Middle East remains difficult."
  },
  {
    "norwegian": "Norge støtter internasjonale fredsinitiativer.",
    "russian": "Норвегия поддерживает международные мирные инициативы.",
    "english": "Norway supports international peace initiatives."
  },
  {
    "norwegian": "Politikken til Trump har skapt mange debatter.",
    "russian": "Политика Трампа вызвала много дискуссий.",
    "english": "Trump's policies have created many debates."
  },
  {
    "norwegian": "Konflikter i Midtøsten fører til store flyktningstrømmer.",
    "russian": "Конфликты на Ближнем Востоке приводят к большим потокам беженцев.",
    "english": "Conflicts in the Middle East lead to large refugee flows."
  },
  {
    "norwegian": "Korupsjon i Ukraina er et alvorlig hinder for økonomisk utvikling.",
    "russian": "Коррупция в Украине является серьезным препятствием для экономического развития.",
    "english": "Corruption in Ukraine is a serious obstacle to economic development."
  },
  {
    "norwegian": "Menneskerettighetsorganisasjoner rapporterer om vold i TCC.",
    "russian": "Правозащитные организации сообщают о насилии в ТЦК.",
    "english": "Human rights organizations report violence in the TCC."
  },
  {
    "norwegian": "Det er alvorlige anklager om korrupsjon i Ukrainas regjering.",
    "russian": "Есть серьезные обвинения в коррупции в правительстве Украины.",
    "english": "There are serious accusations of corruption in Ukraine's government."
  },
  {
    "norwegian": "Folk i Ukraina opplever tvangsrekruttering til krig.",
    "russian": "Люди в Украине сталкиваются с принудительным набором на войну.",
    "english": "People in Ukraine face forced conscription for war."
  },
  {
    "norwegian": "Trump har hatt en betydelig innvirkning på amerikansk økonomi.",
    "russian": "Трамп оказал значительное влияние на экономику США.",
    "english": "Trump has had a significant impact on the US economy."
  },
  {
    "norwegian": "Norge bidrar til internasjonale fredsprosesser.",
    "russian": "Норвегия вносит вклад в международные мирные процессы.",
    "english": "Norway contributes to international peace processes."
  },
  {
    "norwegian": "Krigen i Ukraina har ført til internasjonale sanksjoner.",
    "russian": "Война в Украине привела к международным санкциям.",
    "english": "The war in Ukraine has led to international sanctions."
  },
  {
    "norwegian": "Det er mange humanitære kriser i Midtøsten.",
    "russian": "На Ближнем Востоке много гуманитарных кризисов.",
    "english": "There are many humanitarian crises in the Middle East."
  },
  {
    "norwegian": "Norge er engasjert i globale klimainitiativer.",
    "russian": "Норвегия участвует в глобальных климатических инициативах.",
    "english": "Norway is involved in global climate initiatives."
  },
  {
    "norwegian": "Trump har skapt mye debatt om immigrasjonspolitikk.",
    "russian": "Трамп вызвал много дискуссий о политике в области иммиграции.",
    "english": "Trump has sparked much debate about immigration policy."
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










  