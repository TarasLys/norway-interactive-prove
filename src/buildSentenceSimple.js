const sentences = [
  {
    "norwegian": "Hva synes du om været denne uka?",
    "russian": "Что ты думаешь о погоде на этой неделе?",
    "english": "What do you think about the weather this week?"
  },
  {
    "norwegian": "Tror du vi får mer regn i helgen?",
    "russian": "Думаешь, на выходных будет еще дождь?",
    "english": "Do you think we'll get more rain this weekend?"
  },
  {
    "norwegian": "Eleven har vært veldig urolig i det siste, har du noen tips?",
    "russian": "Ученик был очень беспокойным в последнее время, есть советы?",
    "english": "The student has been very restless lately, any tips?"
  },
  {
    "norwegian": "Hvordan takler du dårlig oppførsel i timen?",
    "russian": "Как ты справляешься с плохим поведением на уроке?",
    "english": "How do you handle bad behavior in class?"
  },
  {
    "norwegian": "Hva er dine tanker om å bruke dårlig vær som en læremulighet?",
    "russian": "Что ты думаешь о использовании плохой погоды как учебной возможности?",
    "english": "What are your thoughts on using bad weather as a teaching opportunity?"
  },
  {
    "norwegian": "Kan du hjelpe meg med å håndtere en elev som er uoppdragen?",
    "russian": "Можешь помочь мне справиться с непослушным учеником?",
    "english": "Can you help me handle a disobedient student?"
  },
  {
    "norwegian": "Hvordan forbereder du elevene på uforutsigbart vær?",
    "russian": "Как ты готовишь учеников к непредсказуемой погоде?",
    "english": "How do you prepare students for unpredictable weather?"
  },
  {
    "norwegian": "Tror du det vil være snøstorm i morgen?",
    "russian": "Думаешь, завтра будет метель?",
    "english": "Do you think there will be a snowstorm tomorrow?"
  },
  {
    "norwegian": "Hva gjør du når en elev er konstant forstyrrende?",
    "russian": "Что ты делаешь, когда ученик постоянно мешает?",
    "english": "What do you do when a student is constantly disruptive?"
  },
  {
    "norwegian": "Hvordan forklarer du vitenskapen bak været til elevene?",
    "russian": "Как ты объясняешь ученикам науку о погоде?",
    "english": "How do you explain the science behind weather to students?"
  },
  {
    "norwegian": "Hva tror du om været i morgen?",
    "russian": "Как ты думаешь, какая будет погода завтра?",
    "english": "What do you think about the weather tomorrow?"
  },
  {
    "norwegian": "Tror du det vil regne senere i dag?",
    "russian": "Ты думаешь, что будет дождь сегодня позже?",
    "english": "Do you think it will rain later today?"
  },
  {
    "norwegian": "Jeg hørte at det vil bli kaldt denne uken.",
    "russian": "Я слышал, что на этой неделе будет холодно.",
    "english": "I heard it will be cold this week."
  },
  {
    "norwegian": "Eleven har vært urolig i det siste.",
    "russian": "Ученик был беспокойным в последнее время.",
    "english": "The student has been restless lately."
  },
  {
    "norwegian": "Hvordan håndterer du elever som forstyrrer i timen?",
    "russian": "Как ты справляешься с учениками, которые мешают на уроке?",
    "english": "How do you handle students who disrupt the class?"
  },
  {
    "norwegian": "Hva gjør du når en elev ikke følger reglene?",
    "russian": "Что ты делаешь, когда ученик не соблюдает правила?",
    "english": "What do you do when a student doesn't follow the rules?"
  },
  {
    "norwegian": "Det ser ut til at vi får snø til helgen.",
    "russian": "Похоже, что на выходных будет снег.",
    "english": "It looks like we will get snow this weekend."
  },
  {
    "norwegian": "Hvordan kan vi forbedre disiplinen i klassen?",
    "russian": "Как мы можем улучшить дисциплину в классе?",
    "english": "How can we improve discipline in the classroom?"
  },
  {
    "norwegian": "Jeg tror det vil være tåkete i morgen tidlig.",
    "russian": "Я думаю, что завтра утром будет туман.",
    "english": "I think it will be foggy tomorrow morning."
  },
  {
    "norwegian": "Hvordan kan vi motivere elevene til å oppføre seg bedre?",
    "russian": "Как мы можем мотивировать учеников вести себя лучше?",
    "english": "How can we motivate students to behave better?"
  },
  {
    "norwegian": "Hvordan er været i dag?",
    "russian": "Как сегодня погода?",
    "english": "How's the weather today?"
  },
  {
    "norwegian": "Elevene oppfører seg bra, men noen ganger er de litt urolige.",
    "russian": "Ученики ведут себя хорошо, но иногда они немного беспокойны.",
    "english": "The students are behaving well, but sometimes they are a bit restless."
  },
  {
    "norwegian": "Hvordan kan jeg rose en elev for gode resultater?",
    "russian": "Как я могу похвалить ученика за хорошие результаты?",
    "english": "How can I praise a student for good performance?"
  },
  {
    "norwegian": "Eleven er ulydig, men jeg prøver å være forståelsesfull.",
    "russian": "Ученик непослушный, но я стараюсь быть понимающим.",
    "english": "The student is disobedient, but I try to be understanding."
  },
  {
    "norwegian": "Kan du hjelpe meg med noe i faget ditt?",
    "russian": "Можешь помочь мне с чем-то по твоему предмету?",
    "english": "Can you help me with something in your subject?"
  },
  {
    "norwegian": "Hvordan roser du en elev for god innsats?",
    "russian": "Как ты хвалишь ученика за хорошую работу?",
    "english": "How do you praise a student for good effort?"
  },
  {
    "norwegian": "Jeg trenger hjelp med å forstå denne oppgaven.",
    "russian": "Мне нужна помощь, чтобы понять это задание.",
    "english": "I need help understanding this assignment."
  },
  {
    "norwegian": "Hvordan takler du urolige elever?",
    "russian": "Как ты справляешься с беспокойными учениками?",
    "english": "How do you handle restless students?"
  },
  {
    "norwegian": "Hva gjør du for å forbedre disiplinen i klassen?",
    "russian": "Что ты делаешь для улучшения дисциплины в классе?",
    "english": "What do you do to improve discipline in the classroom?"
  },
  {
    "norwegian": "Kan du dele noen tips om hvordan jeg kan engasjere elevene bedre?",
    "russian": "Можешь поделиться советами, как лучше вовлечь учеников?",
    "english": "Can you share some tips on how to better engage students?"
  },
  {
    "norwegian": "Hva synes du om å gi elever hjemmelekser?",
    "russian": "Что ты думаешь о том, чтобы давать ученикам домашние задания?",
    "english": "What do you think about giving students homework?"
  },
  {
    "norwegian": "Hvordan takler du elever som ikke gjør leksene sine?",
    "russian": "Как ты справляешься с учениками, которые не делают домашние задания?",
    "english": "How do you handle students who don't do their homework?"
  },
  {
    "norwegian": "Hva er den beste måten å introdusere et nytt emne på?",
    "russian": "Как лучше всего вводить новую тему?",
    "english": "What's the best way to introduce a new topic?"
  },
  {
    "norwegian": "Hvordan holder du elevene motiverte gjennom skoleåret?",
    "russian": "Как ты поддерживаешь мотивацию учеников в течение учебного года?",
    "english": "How do you keep students motivated throughout the school year?"
  },
  {
    "norwegian": "Hvilke strategier bruker du for å håndtere bråk i klassen?",
    "russian": "Какие стратегии ты используешь для борьбы с шумом в классе?",
    "english": "What strategies do you use to manage noise in the classroom?"
  },
  {
    "norwegian": "Hvordan kan jeg hjelpe en elev som sliter med å forstå materialet?",
    "russian": "Как я могу помочь ученику, который не понимает материал?",
    "english": "How can I help a student who is struggling to understand the material?"
  },
  {
    "norwegian": "Kan du anbefale noen gode ressurser for faglig utvikling?",
    "russian": "Можешь посоветовать хорошие ресурсы для профессионального развития?",
    "english": "Can you recommend any good resources for professional development?"
  },
  {
    "norwegian": "Hva gjør du for å forberede elevene til prøver?",
    "russian": "Что ты делаешь, чтобы подготовить учеников к экзаменам?",
    "english": "What do you do to prepare students for exams?"
  },
  {
    "norwegian": "Hvordan gir du effektiv tilbakemelding til elevene?",
    "russian": "Как ты даешь эффективную обратную связь ученикам?",
    "english": "How do you provide effective feedback to students?"
  },
  {
    "norwegian": "Hvordan balanserer du arbeidsmengden mellom undervisning og administrativt arbeid?",
    "russian": "Как ты балансируешь нагрузку между преподаванием и административной работой?",
    "english": "How do you balance the workload between teaching and administrative tasks?"
  },
  {
    "norwegian": "Hva tenker du om dagens undervisning?",
    "russian": "Что ты думаешь о сегодняшнем уроке?",
    "english": "What do you think about today's lesson?"
  },
  {
    "norwegian": "Elevene var veldig engasjerte i dag, ikke sant?",
    "russian": "Ученики сегодня были очень вовлечены, правда?",
    "english": "The students were very engaged today, weren't they?"
  },
  {
    "norwegian": "Hvordan kan vi forbedre samarbeidet mellom lærerne?",
    "russian": "Как мы можем улучшить сотрудничество между учителями?",
    "english": "How can we improve collaboration between teachers?"
  },
  {
    "norwegian": "Har du noen ideer til hvordan vi kan gjøre undervisningen mer interaktiv?",
    "russian": "У тебя есть идеи, как сделать уроки более интерактивными?",
    "english": "Do you have any ideas on how to make the lessons more interactive?"
  },
  {
    "norwegian": "Hvordan balanserer du strenge og vennlige tilnærminger i undervisningen?",
    "russian": "Как ты балансируешь строгий и дружелюбный подход в обучении?",
    "english": "How do you balance strict and friendly approaches in teaching?"
  },
  {
    "norwegian": "Hva gjør du for å holde deg oppdatert på undervisningsmetoder?",
    "russian": "Что ты делаешь, чтобы быть в курсе новых методов обучения?",
    "english": "What do you do to stay updated on teaching methods?"
  },
  {
    "norwegian": "Kan vi diskutere noen utfordringer vi har møtt i klassen?",
    "russian": "Можем ли мы обсудить некоторые проблемы, с которыми столкнулись в классе?",
    "english": "Can we discuss some challenges we've faced in the classroom?"
  },
  {
    "norwegian": "Hvordan håndterer du konflikter mellom elever?",
    "russian": "Как ты справляешься с конфликтами между учениками?",
    "english": "How do you handle conflicts between students?"
  },
  {
    "norwegian": "Hva synes du om å bruke teknologi i undervisningen?",
    "russian": "Что ты думаешь об использовании технологий в обучении?",
    "english": "What do you think about using technology in teaching?"
  },
  {
    "norwegian": "Hvordan gir du tilbakemelding på gruppearbeid?",
    "russian": "Как ты даешь обратную связь по групповым заданиям?",
    "english": "How do you provide feedback on group work?"
  },

  {
    "norwegian": "Hvordan håndterer du en elev som alltid snakker i timen?",
    "russian": "Как ты справляешься с учеником, который постоянно говорит на уроках?",
    "english": "How do you handle a student who always talks in class?"
  },
  {
    "norwegian": "Hva synes du om å bruke gruppearbeid i undervisningen?",
    "russian": "Что ты думаешь об использовании групповой работы в обучении?",
    "english": "What do you think about using group work in teaching?"
  },
  {
    "norwegian": "Kan vi samarbeide om å lage en ny undervisningsplan?",
    "russian": "Можем ли мы сотрудничать, чтобы создать новый план уроков?",
    "english": "Can we collaborate on creating a new lesson plan?"
  },
  {
    "norwegian": "Hvordan gir du ros til elever som har gjort det bra?",
    "russian": "Как ты хвалишь учеников, которые хорошо справились?",
    "english": "How do you praise students who have done well?"
  },
  {
    "norwegian": "Hva gjør du hvis en elev er veldig stille og ikke deltar i timen?",
    "russian": "Что ты делаешь, если ученик очень тихий и не участвует в уроке?",
    "english": "What do you do if a student is very quiet and doesn't participate in class?"
  },
  {
    "norwegian": "Hvordan forbereder du elevene på nasjonale prøver?",
    "russian": "Как ты готовишь учеников к национальным экзаменам?",
    "english": "How do you prepare students for national exams?"
  },
  {
    "norwegian": "Kan du hjelpe meg med å lage noen undervisningsmateriell?",
    "russian": "Можешь помочь мне сделать учебные материалы?",
    "english": "Can you help me create some teaching materials?"
  },
  {
    "norwegian": "Hvordan håndterer du stress i arbeidshverdagen?",
    "russian": "Как ты справляешься со стрессом на работе?",
    "english": "How do you handle stress in your workday?"
  },
  {
    "norwegian": "Hva er din strategi for å håndtere klasser med mange elever?",
    "russian": "Какая у тебя стратегия для работы с классами, где много учеников?",
    "english": "What's your strategy for handling large classes?"
  },
  {
    "norwegian": "Hvordan integrerer du teknologi i undervisningen?",
    "russian": "Как ты интегрируешь технологии в обучение?",
    "english": "How do you integrate technology into your teaching?"
  },
  {
    "norwegian": "Hvordan kan jeg forbedre elevene sine leseferdigheter?",
    "russian": "Как я могу улучшить навыки чтения учеников?",
    "english": "How can I improve the students' reading skills?"
  },
  {
    "norwegian": "Hva er noen gode metoder for å undervise matematikk?",
    "russian": "Какие есть хорошие методы для преподавания математики?",
    "english": "What are some good methods for teaching math?"
  },
  {
    "norwegian": "Kan du hjelpe meg med å organisere et foreldremøte?",
    "russian": "Можешь помочь мне организовать родительское собрание?",
    "english": "Can you help me organize a parent-teacher meeting?"
  },
  {
    "norwegian": "Hvordan integrerer du prosjekter i undervisningsplanen?",
    "russian": "Как ты интегрируешь проекты в учебный план?",
    "english": "How do you integrate projects into the curriculum?"
  },
  {
    "norwegian": "Hva er den beste måten å håndtere elever med spesielle behov?",
    "russian": "Как лучше всего справляться с учениками с особыми потребностями?",
    "english": "What's the best way to handle students with special needs?"
  },
  {
    "norwegian": "Kan du dele noen suksesshistorier fra din undervisning?",
    "russian": "Можешь поделиться успешными историями из твоей практики?",
    "english": "Can you share some success stories from your teaching?"
  },
  {
    "norwegian": "Hvordan kan vi engasjere foreldrene i elevenes læring?",
    "russian": "Как мы можем вовлечь родителей в обучение учеников?",
    "english": "How can we engage parents in the students' learning?"
  },
  {
    "norwegian": "Hva er dine erfaringer med å bruke digitale verktøy i klasserommet?",
    "russian": "Какой у тебя опыт использования цифровых инструментов в классе?",
    "english": "What are your experiences with using digital tools in the classroom?"
  },
  {
    "norwegian": "Hvordan kan vi motivere elever som har liten interesse for skolearbeid?",
    "russian": "Как мы можем мотивировать учеников, которые не заинтересованы в учебе?",
    "english": "How can we motivate students who have little interest in schoolwork?"
  },
  {
    "norwegian": "Hva er noen effektive strategier for å undervise i naturfag?",
    "russian": "Какие есть эффективные стратегии для преподавания естественных наук?",
    "english": "What are some effective strategies for teaching science?"
  },
  {
    "norwegian": "Hvordan planlegger du timeplanen for å sikre at alle emner dekkes?",
    "russian": "Как ты планируешь расписание, чтобы все темы были охвачены?",
    "english": "How do you plan your schedule to ensure all topics are covered?"
  },
  {
    "norwegian": "Hva er dine erfaringer med å undervise på ulike klassetrinn?",
    "russian": "Какой у тебя опыт преподавания в разных классах?",
    "english": "What are your experiences teaching different grade levels?"
  },
  {
    "norwegian": "Hvordan håndterer du situasjoner med mobbing i klassen?",
    "russian": "Как ты справляешься с ситуациями с буллингом в классе?",
    "english": "How do you handle bullying situations in the classroom?"
  },
  {
    "norwegian": "Kan du anbefale noen aktiviteter for å fremme samarbeid mellom elevene?",
    "russian": "Можешь порекомендовать какие-нибудь занятия для продвижения сотрудничества между учениками?",
    "english": "Can you recommend any activities to promote cooperation among students?"
  },
  {
    "norwegian": "Hvordan integrerer du lek i læringsprosessen?",
    "russian": "Как ты интегрируешь игру в учебный процесс?",
    "english": "How do you integrate play into the learning process?"
  },
  {
    "norwegian": "Hva er de største utfordringene du har møtt som lærer?",
    "russian": "Какие самые большие вызовы ты встретил как учитель?",
    "english": "What are the biggest challenges you have faced as a teacher?"
  },
  {
    "norwegian": "Hvordan kan vi støtte elever med ulik kulturell bakgrunn?",
    "russian": "Как мы можем поддержать учеников с различным культурным происхождением?",
    "english": "How can we support students from different cultural backgrounds?"
  },
  {
    "norwegian": "Hva er noen gode strategier for å håndtere elevens atferdsproblemer?",
    "russian": "Какие есть хорошие стратегии для решения проблем поведения у учеников?",
    "english": "What are some good strategies for handling student behavior issues?"
  },
  {
    "norwegian": "Kan du dele noen gode metoder for å forbedre elevernes skriving?",
    "russian": "Можешь поделиться хорошими методами для улучшения письма учеников?",
    "english": "Can you share some good methods for improving students' writing?"
  },
  {
    "norwegian": "Hvordan kan vi gjøre læringen mer relevant for elevenes liv?",
    "russian": "Как мы можем сделать обучение более актуальным для жизни учеников?",
    "english": "How can we make learning more relevant to students' lives?"
  },
  {
    "norwegian": "Hvordan tilpasser du undervisningen til forskjellige læringsstiler?",
    "russian": "Как ты адаптируешь обучение под разные стили обучения?",
    "english": "How do you adapt teaching to different learning styles?"
  },
  {
    "norwegian": "Hva er dine beste tips for å håndtere tid i klasserommet effektivt?",
    "russian": "Какие у тебя лучшие советы по эффективному управлению временем в классе?",
    "english": "What are your best tips for managing time effectively in the classroom?"
  },
  {
    "norwegian": "Hvordan kan vi fremme kritisk tenkning hos elevene?",
    "russian": "Как мы можем развивать критическое мышление у учеников?",
    "english": "How can we promote critical thinking in students?"
  },
  {
    "norwegian": "Hva er noen kreative måter å undervise i historie på?",
    "russian": "Какие есть креативные способы преподавания истории?",
    "english": "What are some creative ways to teach history?"
  },
  {
    "norwegian": "Hvordan samarbeider du med foreldre om elevenes framgang?",
    "russian": "Как ты сотрудничаешь с родителями по поводу прогресса учеников?",
    "english": "How do you collaborate with parents on students' progress?"
  },
  {
    "norwegian": "Kan du dele noen effektive teknikker for å undervise i grammatikk?",
    "russian": "Можешь поделиться эффективными техниками для преподавания грамматики?",
    "english": "Can you share some effective techniques for teaching grammar?"
  },
  {
    "norwegian": "Hvordan motiverer du elever til å delta i diskusjoner?",
    "russian": "Как ты мотивируешь учеников участвовать в обсуждениях?",
    "english": "How do you motivate students to participate in discussions?"
  },
  {
    "norwegian": "Hva er noen gode strategier for å undervise i geografi?",
    "russian": "Какие есть хорошие стратегии для преподавания географии?",
    "english": "What are some good strategies for teaching geography?"
  },
  {
    "norwegian": "Hvordan gir du tilbakemelding som elever kan bruke for å forbedre seg?",
    "russian": "Как ты даешь обратную связь, которую ученики могут использовать для улучшения?",
    "english": "How do you provide feedback that students can use to improve?"
  },
  {
    "norwegian": "Kan du anbefale noen teknikker for å gjøre undervisningen mer engasjerende?",
    "russian": "Можешь порекомендовать техники для того, чтобы сделать обучение более интересным?",
    "english": "Can you recommend any techniques to make teaching more engaging?"
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










  