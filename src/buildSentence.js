const sentences = [
    {
    "norwegian": "Jeg liker å lage nettsider med HTML og CSS.",
    "russian": "Мне нравится создавать веб-сайты с использованием HTML и CSS.",
    "english": "I enjoy creating websites with HTML and CSS."
  },
  {
    "norwegian": "Jeg kan bruke JavaScript for å gjøre nettsider interaktive.",
    "russian": "Я могу использовать JavaScript, чтобы сделать веб-сайты интерактивными.",
    "english": "I can use JavaScript to make websites interactive."
  },
  {
    "norwegian": "Jeg skriver ofte tester for å sikre at koden fungerer riktig.",
    "russian": "Я часто пишу тесты, чтобы убедиться, что код работает правильно.",
    "english": "I often write tests to ensure the code works correctly."
  },
  {
    "norwegian": "Jeg bruker moderne verktøy som Git for å administrere prosjekter.",
    "russian": "Я использую современные инструменты, такие как Git, для управления проектами.",
    "english": "I use modern tools like Git to manage projects."
  },
  {
    "norwegian": "Jeg har erfaring med å bruke APIer til å hente data.",
    "russian": "У меня есть опыт использования API для получения данных.",
    "english": "I have experience using APIs to fetch data."
  },
  {
    "norwegian": "Jeg kan jobbe med både frontend- og backend-utvikling.",
    "russian": "Я могу работать как с фронтенд-, так и с бэкенд-разработкой.",
    "english": "I can work with both frontend and backend development."
  },
  {
    "norwegian": "Jeg liker å lære nye programmeringsspråk.",
    "russian": "Мне нравится изучать новые языки программирования.",
    "english": "I enjoy learning new programming languages."
  },
  {
    "norwegian": "Jeg skriver ren og lett forståelig kode.",
    "russian": "Я пишу чистый и легко понятный код.",
    "english": "I write clean and easy-to-understand code."
  },
  {
    "norwegian": "Jeg liker å jobbe med prosjekter som krever kreativ tenkning.",
    "russian": "Мне нравится работать над проектами, которые требуют креативного мышления.",
    "english": "I enjoy working on projects that require creative thinking."
  },
  {
    "norwegian": "Jeg bruker ofte Chrome DevTools for å feilsøke nettsider.",
    "russian": "Я часто использую Chrome DevTools для отладки веб-сайтов.",
    "english": "I often use Chrome DevTools to debug websites."
    },
  
  {
    "norwegian": "Jeg bruker ofte Node.js for backend-utvikling.",
    "russian": "Я часто использую Node.js для бэкенд-разработки.",
    "english": "I often use Node.js for backend development."
  },
  {
    "norwegian": "Jeg kan lage responsive nettsider med CSS.",
    "russian": "Я могу создавать адаптивные веб-сайты с использованием CSS.",
    "english": "I can create responsive websites with CSS."
  },
  {
    "norwegian": "Jeg liker å samarbeide med designere for å lage flotte nettsider.",
    "russian": "Мне нравится сотрудничать с дизайнерами для создания красивых веб-сайтов.",
    "english": "I enjoy collaborating with designers to create beautiful websites."
  },
  {
    "norwegian": "Jeg bruker ofte JSON til å utveksle data mellom server og klient.",
    "russian": "Я часто использую JSON для обмена данными между сервером и клиентом.",
    "english": "I often use JSON to exchange data between server and client."
  },
  {
    "norwegian": "Jeg har erfaring med å lage brukervennlige grensesnitt.",
    "russian": "У меня есть опыт создания удобных пользовательских интерфейсов.",
    "english": "I have experience creating user-friendly interfaces."
  },
  {
    "norwegian": "Jeg kan lage apper med React Native.",
    "russian": "Я могу создавать приложения с React Native.",
    "english": "I can create apps with React Native."
  },
  {
    "norwegian": "Jeg liker å lære nye teknologier og verktøy.",
    "russian": "Мне нравится изучать новые технологии и инструменты.",
    "english": "I enjoy learning new technologies and tools."
  },
  {
    "norwegian": "Jeg skriver ren og godt strukturert kode.",
    "russian": "Я пишу чистый и хорошо структурированный код.",
    "english": "I write clean and well-structured code."
  },
  {
    "norwegian": "Jeg kan jobbe med databasesystemer som MySQL og MongoDB.",
    "russian": "Я могу работать с системами управления базами данных, такими как MySQL и MongoDB.",
    "english": "I can work with database systems like MySQL and MongoDB."
  },
  {
    "norwegian": "Jeg har erfaring med å lage APIer.",
    "russian": "У меня есть опыт создания API.",
    "english": "I have experience creating APIs."
  },
  {
    "norwegian": "Jeg liker å bruke verktøy som VS Code for å skrive kode.",
    "russian": "Мне нравится использовать инструменты, такие как VS Code, для написания кода.",
    "english": "I enjoy using tools like VS Code to write code."
  },
  {
    "norwegian": "Jeg kan lage enkle APIer med Express.js.",
    "russian": "Я могу создавать простые API с использованием Express.js.",
    "english": "I can create simple APIs with Express.js."
  },
  {
    "norwegian": "Jeg bruker ofte verktøy som Postman for å teste APIer.",
    "russian": "Я часто использую инструменты, такие как Postman, для тестирования API.",
    "english": "I often use tools like Postman to test APIs."
  },
  {
    "norwegian": "Jeg liker å jobbe med open source-prosjekter.",
    "russian": "Мне нравится работать с open source проектами.",
    "english": "I enjoy working on open source projects."
  },
  {
    "norwegian": "Jeg kan bruke TypeScript for å forbedre koden.",
    "russian": "Я могу использовать TypeScript для улучшения кода.",
    "english": "I can use TypeScript to improve code."
  },
  {
    "norwegian": "Jeg liker å lære om nye rammeverk som Angular og Vue.",
    "russian": "Мне нравится изучать новые фреймворки, такие как Angular и Vue.",
    "english": "I enjoy learning about new frameworks like Angular and Vue."
  },
  {
    "norwegian": "Jeg kan lage automatiserte tester med Jest.",
    "russian": "Я могу создавать автоматизированные тесты с использованием Jest.",
    "english": "I can create automated tests with Jest."
  },
  {
    "norwegian": "Jeg liker å bruke CSS for å lage vakre nettsider.",
    "russian": "Мне нравится использовать CSS для создания красивых веб-сайтов.",
    "english": "I enjoy using CSS to create beautiful websites."
  },
  {
    "norwegian": "Jeg kan jobbe med verktøy som Docker for å administrere apper.",
    "russian": "Я могу работать с инструментами, такими как Docker, для управления приложениями.",
    "english": "I can work with tools like Docker to manage apps."
  },
  {
    "norwegian": "Jeg liker å bruke GitHub for å samarbeide med andre utviklere.",
    "russian": "Мне нравится использовать GitHub для сотрудничества с другими разработчиками.",
    "english": "I enjoy using GitHub to collaborate with other developers."
  },

  {
    "norwegian": "Jeg kan bruke AJAX til å lage dynamiske nettsider.",
    "russian": "Я могу использовать AJAX для создания динамических веб-сайтов.",
    "english": "I can use AJAX to create dynamic websites."
  },
  {
    "norwegian": "Jeg liker å designe brukergrensesnitt som er enkle å bruke.",
    "russian": "Мне нравится разрабатывать пользовательские интерфейсы, которые легко использовать.",
    "english": "I enjoy designing user interfaces that are easy to use."
  },
  {
    "norwegian": "Jeg kan jobbe med rammeverk som Bootstrap for å lage responsive design.",
    "russian": "Я могу работать с фреймворками, такими как Bootstrap, для создания адаптивного дизайна.",
    "english": "I can work with frameworks like Bootstrap to create responsive designs."
  },
  {
    "norwegian": "Jeg bruker ofte GitHub for å dele koden min med andre.",
    "russian": "Я часто использую GitHub для того, чтобы делиться своим кодом с другими.",
    "english": "I often use GitHub to share my code with others."
  },
  {
    "norwegian": "Jeg liker å eksperimentere med nye teknologier i fritiden min.",
    "russian": "Мне нравится экспериментировать с новыми технологиями в свободное время.",
    "english": "I enjoy experimenting with new technologies in my free time."
  },
  {
    "norwegian": "Jeg kan skrive kode som er lett å vedlikeholde og utvide.",
    "russian": "Я могу писать код, который легко поддерживать и расширять.",
    "english": "I can write code that is easy to maintain and extend."
  },
  {
    "norwegian": "Jeg liker å lage apper som hjelper folk i hverdagen.",
    "russian": "Мне нравится создавать приложения, которые помогают людям в повседневной жизни.",
    "english": "I enjoy creating apps that help people in their daily lives."
  },
  {
    "norwegian": "Jeg bruker ofte VS Code for å skrive og teste koden min.",
    "russian": "Я часто использую VS Code для написания и тестирования своего кода.",
    "english": "I often use VS Code to write and test my code."
  },
  {
    "norwegian": "Jeg har erfaring med å bruke REST APIer for datainnhenting.",
    "russian": "У меня есть опыт использования REST API для получения данных.",
    "english": "I have experience using REST APIs for data fetching."
  },
  {
    "norwegian": "Jeg kan jobbe med ulike typer databaser som SQL og NoSQL.",
    "russian": "Я могу работать с различными типами баз данных, такими как SQL и NoSQL.",
    "english": "I can work with different types of databases like SQL and NoSQL."
  }, 
  {
    "norwegian": "Jeg kan bruke GitLab til å administrere kodeprosjekter.",
    "russian": "Я могу использовать GitLab для управления проектами с кодом.",
    "english": "I can use GitLab to manage code projects."
  },
  {
    "norwegian": "Jeg liker å utvikle nettsider med moderne rammeverk.",
    "russian": "Мне нравится разрабатывать веб-сайты с использованием современных фреймворков.",
    "english": "I enjoy developing websites with modern frameworks."
  },
  {
    "norwegian": "Jeg har erfaring med å jobbe i team med utviklere.",
    "russian": "У меня есть опыт работы в команде с разработчиками.",
    "english": "I have experience working in a team with developers."
  },
  {
    "norwegian": "Jeg kan lage enkle mobilapper med React Native.",
    "russian": "Я могу создавать простые мобильные приложения с React Native.",
    "english": "I can create simple mobile apps with React Native."
  },
  {
    "norwegian": "Jeg bruker ofte Chrome DevTools for å feilsøke problemer.",
    "russian": "Я часто использую Chrome DevTools для отладки проблем.",
    "english": "I often use Chrome DevTools to debug issues."
  },
  {
    "norwegian": "Jeg liker å lage nettsider som fungerer bra på alle enheter.",
    "russian": "Мне нравится создавать веб-сайты, которые хорошо работают на всех устройствах.",
    "english": "I enjoy creating websites that work well on all devices."
  },
  {
    "norwegian": "Jeg kan jobbe med databaser som MySQL og PostgreSQL.",
    "russian": "Я могу работать с базами данных, такими как MySQL и PostgreSQL.",
    "english": "I can work with databases like MySQL and PostgreSQL."
  },
  {
    "norwegian": "Jeg liker å lage apper som hjelper folk i hverdagen.",
    "russian": "Мне нравится создавать приложения, которые помогают людям в повседневной жизни.",
    "english": "I enjoy creating apps that help people in their daily lives."
  },
  {
    "norwegian": "Jeg bruker ofte verktøy som Figma for design.",
    "russian": "Я часто использую инструменты, такие как Figma, для дизайна.",
    "english": "I often use tools like Figma for design."
  },
  {
    "norwegian": "Jeg har erfaring med å jobbe med APIer for datainnhenting.",
    "russian": "У меня есть опыт работы с API для получения данных.",
    "english": "I have experience working with APIs for data fetching."
  },
  {
    "norwegian": "Jeg kan bruke verktøy som Jenkins for kontinuerlig integrasjon.",
    "russian": "Я могу использовать инструменты, такие как Jenkins, для непрерывной интеграции.",
    "english": "I can use tools like Jenkins for continuous integration."
  },
  {
    "norwegian": "Jeg liker å lage nettsider som laster raskt.",
    "russian": "Мне нравится создавать веб-сайты, которые быстро загружаются.",
    "english": "I enjoy creating websites that load quickly."
  },
  {
    "norwegian": "Jeg kan jobbe med forskjellige datastrukturer og algoritmer.",
    "russian": "Я могу работать с различными структурами данных и алгоритмами.",
    "english": "I can work with different data structures and algorithms."
  },
  {
    "norwegian": "Jeg liker å lage brukervennlige grensesnitt med HTML og CSS.",
    "russian": "Мне нравится создавать удобные пользовательские интерфейсы с использованием HTML и CSS.",
    "english": "I enjoy creating user-friendly interfaces with HTML and CSS."
  },
  {
    "norwegian": "Jeg har erfaring med å bruke Node.js for serverutvikling.",
    "russian": "У меня есть опыт использования Node.js для разработки серверов.",
    "english": "I have experience using Node.js for server development."
  },
  {
    "norwegian": "Jeg liker å bruke TypeScript for å skrive tydelig kode.",
    "russian": "Мне нравится использовать TypeScript для написания понятного кода.",
    "english": "I enjoy using TypeScript to write clear code."
  },
  {
    "norwegian": "Jeg kan bruke GitHub Actions for automatisering av arbeidsflyt.",
    "russian": "Я могу использовать GitHub Actions для автоматизации рабочих процессов.",
    "english": "I can use GitHub Actions for workflow automation."
  },
  {
    "norwegian": "Jeg har erfaring med å lage interaktive websider.",
    "russian": "У меня есть опыт создания интерактивных веб-страниц.",
    "english": "I have experience creating interactive web pages."
  },
  {
    "norwegian": "Jeg liker å eksperimentere med nye JavaScript-biblioteker.",
    "russian": "Мне нравится экспериментировать с новыми библиотеками JavaScript.",
    "english": "I enjoy experimenting with new JavaScript libraries."
  },
  {
    "norwegian": "Jeg kan jobbe med både SQL og NoSQL databaser.",
    "russian": "Я могу работать как с SQL, так и с NoSQL базами данных.",
    "english": "I can work with both SQL and NoSQL databases."
  },
  {
    "norwegian": "Jeg liker å lage responsive nettsider.",
    "russian": "Мне нравится создавать адаптивные веб-сайты.",
    "english": "I enjoy creating responsive websites."
  },
  {
    "norwegian": "Jeg kan bruke JavaScript for å lage dynamiske nettsider.",
    "russian": "Я могу использовать JavaScript для создания динамических веб-сайтов.",
    "english": "I can use JavaScript to create dynamic websites."
  },
  {
    "norwegian": "Jeg liker å bruke CSS for å gjøre nettsider vakre.",
    "russian": "Мне нравится использовать CSS, чтобы сделать веб-сайты красивыми.",
    "english": "I like using CSS to make websites beautiful."
  },
  {
    "norwegian": "Jeg har erfaring med å jobbe i team med utviklere.",
    "russian": "У меня есть опыт работы в команде с разработчиками.",
    "english": "I have experience working in a team with developers."
  },
  {
    "norwegian": "Jeg kan lage apper med React Native.",
    "russian": "Я могу создавать приложения с React Native.",
    "english": "I can create apps with React Native."
  },
  {
    "norwegian": "Jeg bruker ofte GitHub for å dele koden min med andre.",
    "russian": "Я часто использую GitHub, чтобы делиться своим кодом с другими.",
    "english": "I often use GitHub to share my code with others."
  },
  {
    "norwegian": "Jeg liker å lære nye teknologier og verktøy.",
    "russian": "Мне нравится изучать новые технологии и инструменты.",
    "english": "I enjoy learning new technologies and tools."
  },
  {
    "norwegian": "Jeg kan jobbe med både frontend- og backend-utvikling.",
    "russian": "Я могу работать как с фронтенд-, так и с бэкенд-разработкой.",
    "english": "I can work with both frontend and backend development."
  },
  {
    "norwegian": "Jeg liker å lage apper som hjelper folk i hverdagen.",
    "russian": "Мне нравится создавать приложения, которые помогают людям в повседневной жизни.",
    "english": "I enjoy creating apps that help people in their daily lives."
  },
  {
    "norwegian": "Jeg bruker ofte Chrome DevTools for å feilsøke nettsider.",
    "russian": "Я часто использую Chrome DevTools для отладки веб-сайтов.",
    "english": "I often use Chrome DevTools to debug websites."
  },

  {
    "norwegian": "Jeg kan bruke Git til å spore endringer i koden.",
    "russian": "Я могу использовать Git для отслеживания изменений в коде.",
    "english": "I can use Git to track changes in the code."
  },
  {
    "norwegian": "Jeg liker å lage nettsider med moderne design.",
    "russian": "Мне нравится создавать веб-сайты с современным дизайном.",
    "english": "I enjoy creating websites with modern design."
  },
  {
    "norwegian": "Jeg kan skrive enkle skript med Python.",
    "russian": "Я могу писать простые скрипты на Python.",
    "english": "I can write simple scripts with Python."
  },
  {
    "norwegian": "Jeg liker å bruke APIer for å hente data.",
    "russian": "Мне нравится использовать API для получения данных.",
    "english": "I enjoy using APIs to fetch data."
  },
  {
    "norwegian": "Jeg kan jobbe med både SQL og NoSQL databaser.",
    "russian": "Я могу работать как с SQL, так и с NoSQL базами данных.",
    "english": "I can work with both SQL and NoSQL databases."
  },
  {
    "norwegian": "Jeg bruker ofte verktøy som Postman for å teste APIer.",
    "russian": "Я часто использую инструменты, такие как Postman, для тестирования API.",
    "english": "I often use tools like Postman to test APIs."
  },
  {
    "norwegian": "Jeg kan lage responsivt design med CSS.",
    "russian": "Я могу создавать адаптивный дизайн с использованием CSS.",
    "english": "I can create responsive designs with CSS."
  },
  {
    "norwegian": "Jeg liker å samarbeide med andre utviklere på prosjekter.",
    "russian": "Мне нравится сотрудничать с другими разработчиками над проектами.",
    "english": "I enjoy collaborating with other developers on projects."
  },
  {
    "norwegian": "Jeg kan skrive ren og godt strukturert kode.",
    "russian": "Я могу писать чистый и хорошо структурированный код.",
    "english": "I can write clean and well-structured code."
  },
  {
    "norwegian": "Jeg bruker ofte verktøy som GitHub for å administrere prosjekter.",
    "russian": "Я часто использую инструменты, такие как GitHub, для управления проектами.",
    "english": "I often use tools like GitHub to manage projects."
  },
  {
    "norwegian": "Jeg kan lage enkle spill med JavaScript.",
    "russian": "Я могу создавать простые игры с использованием JavaScript.",
    "english": "I can create simple games with JavaScript."
  },
  {
    "norwegian": "Jeg liker å bruke CSS Grid for layout.",
    "russian": "Мне нравится использовать CSS Grid для создания макетов.",
    "english": "I enjoy using CSS Grid for layout."
  },
  {
    "norwegian": "Jeg kan lage dynamiske websider med AJAX.",
    "russian": "Я могу создавать динамические веб-страницы с использованием AJAX.",
    "english": "I can create dynamic web pages with AJAX."
  },
  {
    "norwegian": "Jeg bruker ofte JSON for datautveksling.",
    "russian": "Я часто использую JSON для обмена данными.",
    "english": "I often use JSON for data exchange."
  },
  {
    "norwegian": "Jeg kan lage responsivt design med Bootstrap.",
    "russian": "Я могу создавать адаптивный дизайн с использованием Bootstrap.",
    "english": "I can create responsive designs with Bootstrap."
  },
  {
    "norwegian": "Jeg liker å lage nettsider med interaktive elementer.",
    "russian": "Мне нравится создавать веб-сайты с интерактивными элементами.",
    "english": "I enjoy creating websites with interactive elements."
  },
  {
    "norwegian": "Jeg kan bruke verktøy som Webpack for bygging av prosjekter.",
    "russian": "Я могу использовать инструменты, такие как Webpack, для сборки проектов.",
    "english": "I can use tools like Webpack for project building."
  },
  {
    "norwegian": "Jeg liker å jobbe med åpen kildekode-prosjekter.",
    "russian": "Мне нравится работать над проектами с открытым исходным кодом.",
    "english": "I enjoy working on open source projects."
  },
  {
    "norwegian": "Jeg kan bruke ulike databaser som MySQL og MongoDB.",
    "russian": "Я могу работать с различными базами данных, такими как MySQL и MongoDB.",
    "english": "I can use different databases like MySQL and MongoDB."
  },
  {
    "norwegian": "Jeg liker å lære nye programmeringsspråk og rammeverk.",
    "russian": "Мне нравится изучать новые языки программирования и фреймворки.",
    "english": "I enjoy learning new programming languages and frameworks."
  },
  {
    "norwegian": "Jeg kan lage nettsider med HTML, CSS og JavaScript.",
    "russian": "Я могу создавать веб-сайты с использованием HTML, CSS и JavaScript.",
    "english": "I can create websites with HTML, CSS, and JavaScript."
  },
  {
    "norwegian": "Jeg liker å lage brukervennlige grensesnitt.",
    "russian": "Мне нравится создавать удобные пользовательские интерфейсы.",
    "english": "I enjoy creating user-friendly interfaces."
  },
  {
    "norwegian": "Jeg har erfaring med å jobbe i Agile-team.",
    "russian": "У меня есть опыт работы в Agile-командах.",
    "english": "I have experience working in Agile teams."
  },
  {
    "norwegian": "Jeg kan bruke Git til å administrere kodeprosjekter.",
    "russian": "Я могу использовать Git для управления проектами с кодом.",
    "english": "I can use Git to manage code projects."
  },
  {
    "norwegian": "Jeg lærer raskt nye programmeringsspråk.",
    "russian": "Я быстро учусь новым языкам программирования.",
    "english": "I quickly learn new programming languages."
  },
  {
    "norwegian": "Jeg liker å jobbe med både frontend og backend.",
    "russian": "Мне нравится работать как с фронтендом, так и с бэкендом.",
    "english": "I enjoy working with both frontend and backend."
  },
  {
    "norwegian": "Jeg kan lage enkle databaser med SQL.",
    "russian": "Я могу создавать простые базы данных с использованием SQL.",
    "english": "I can create simple databases with SQL."
  },
  {
    "norwegian": "Jeg liker å lage interaktive nettsider.",
    "russian": "Мне нравится создавать интерактивные веб-сайты.",
    "english": "I like creating interactive websites."
  },
  {
    "norwegian": "Jeg kan jobbe med APIer for å hente data.",
    "russian": "Я могу работать с API для получения данных.",
    "english": "I can work with APIs to fetch data."
  },
  {
    "norwegian": "Jeg bruker ofte JavaScript til å lage dynamiske nettsider.",
    "russian": "Я часто использую JavaScript для создания динамических веб-сайтов.",
    "english": "I often use JavaScript to create dynamic websites."
  },
  {
    "norwegian": "Jeg bruker Git til versjonskontroll.",
    "russian": "Я использую Git для контроля версий.",
    "english": "I use Git for version control."
  },
  {
    "norwegian": "Jeg liker å programmere i JavaScript og Python.",
    "russian": "Мне нравится программировать на JavaScript и Python.",
    "english": "I like to program in JavaScript and Python."
  },
  {
    "norwegian": "REST API er enklere å bruke enn GraphQL.",
    "russian": "REST API проще в использовании, чем GraphQL.",
    "english": "REST API is easier to use than GraphQL."
  },
  {
    "norwegian": "Jeg brukte Agile/Scrum i et prosjekt på kurset.",
    "russian": "Я использовал Agile/Scrum в проекте на курсах.",
    "english": "I used Agile/Scrum in a project during the course."
  },
  {
    "norwegian": "Jeg tester koden min med enhetstester før utrulling.",
    "russian": "Я тестирую свой код с помощью модульных тестов перед развертыванием.",
    "english": "I test my code with unit tests before deployment."
  },
  {
    "norwegian": "Programmering motiverer meg fordi jeg liker å løse problemer.",
    "russian": "Программирование мотивирует меня, потому что мне нравится решать проблемы.",
    "english": "Programming motivates me because I like solving problems."
  },
  {
    "norwegian": "Jeg planlegger og prioriterer for å møte tidsfrister.",
    "russian": "Я планирую и расставляю приоритеты, чтобы успевать к срокам.",
    "english": "I plan and prioritize to meet deadlines."
  },
  {
    "norwegian": "Jeg bruker Chrome DevTools for feilsporing.",
    "russian": "Я использую Chrome DevTools для отладки.",
    "english": "I use Chrome DevTools for debugging."
  },
  {
    "norwegian": "Jeg skriver modulær kode for å gjøre den skalerbar.",
    "russian": "Я пишу модульный код, чтобы он был масштабируемым.",
    "english": "I write modular code to make it scalable."
  },
  {
    "norwegian": "Jeg har erfaring med både frontend og backend utvikling.",
    "russian": "У меня есть опыт как фронтенд-, так и бэкенд-разработки.",
    "english": "I have experience with both frontend and backend development."
  },
  {
    "norwegian": "Jeg kan bruke GitHub til å samarbeide på prosjekter.",
    "russian": "Я могу использовать GitHub для совместной работы над проектами.",
    "english": "I can use GitHub to collaborate on projects."
  },
  {
    "norwegian": "Jeg liker å utvikle responsive nettsider.",
    "russian": "Мне нравится разрабатывать адаптивные веб-сайты.",
    "english": "I enjoy developing responsive websites."
  },
  {
    "norwegian": "Jeg foretrekker å skrive ren og forståelig kode.",
    "russian": "Я предпочитаю писать чистый и понятный код.",
    "english": "I prefer to write clean and understandable code."
  },
  {
    "norwegian": "Jeg bruker ofte JavaScript-rammeverk som React.",
    "russian": "Я часто использую JavaScript-фреймворки, такие как React.",
    "english": "I often use JavaScript frameworks like React."
  },
  {
    "norwegian": "Jeg kan lage APIer for å koble sammen forskjellige systemer.",
    "russian": "Я могу создавать API для связи различных систем.",
    "english": "I can create APIs to connect different systems."
  },
  {
    "norwegian": "Jeg har erfaring med å jobbe i team.",
    "russian": "У меня есть опыт работы в команде.",
    "english": "I have experience working in a team."
  },
  {
    "norwegian": "Jeg liker å lære nye teknologier.",
    "russian": "Мне нравится изучать новые технологии.",
    "english": "I enjoy learning new technologies."
  },
  {
    "norwegian": "Jeg bruker ofte Chrome DevTools for å feilsøke koden min.",
    "russian": "Я часто использую Chrome DevTools для отладки своего кода.",
    "english": "I often use Chrome DevTools to debug my code."
  },
  {
    "norwegian": "Jeg skriver enhetstester for å sikre at koden min fungerer riktig.",
    "russian": "Я пишу модульные тесты, чтобы убедиться, что мой код работает правильно.",
    "english": "I write unit tests to ensure my code works correctly."
  },
  {
    "norwegian": "Jeg kan jobbe både med frontend og backend utvikling.",
    "russian": "Я могу работать как с фронтенд, так и с бэкенд разработкой.",
    "english": "I can work with both frontend and backend development."
  },
  {
    "norwegian": "Jeg deltar ofte i koding konkurranser for å forbedre ferdighetene mine.",
    "russian": "Я часто участвую в конкурсах по программированию, чтобы улучшить свои навыки.",
    "english": "I often participate in coding competitions to improve my skills."
  },
  {
    "norwegian": "Jeg liker å jobbe med prosjekter som krever kreativ tenking.",
    "russian": "Мне нравится работать над проектами, которые требуют креативного мышления.",
    "english": "I enjoy working on projects that require creative thinking."
  },
  {
    "norwegian": "Jeg leser regelmessig tekniske artikler for å holde meg oppdatert.",
    "russian": "Я регулярно читаю технические статьи, чтобы быть в курсе.",
    "english": "I regularly read technical articles to stay updated."
  },
  {
    "norwegian": "Jeg kan skrive kode som er lett å forstå og vedlikeholde.",
    "russian": "Я могу писать код, который легко понимать и поддерживать.",
    "english": "I can write code that is easy to understand and maintain."
  },
  {
    "norwegian": "Jeg jobber godt både alene og som en del av et team.",
    "russian": "Я хорошо работаю как самостоятельно, так и в составе команды.",
    "english": "I work well both independently and as part of a team."
  },
  {
    "norwegian": "Jeg liker å løse komplekse problemer og finne effektive løsninger.",
    "russian": "Мне нравится решать сложные задачи и находить эффективные решения.",
    "english": "I like solving complex problems and finding effective solutions."
  },
  {
    "norwegian": "Jeg setter pris på muligheten til å lære fra erfarne kolleger.",
    "russian": "Я ценю возможность учиться у опытных коллег.",
    "english": "I appreciate the opportunity to learn from experienced colleagues."
  },
  {
    "norwegian": "Jeg bruker moderne verktøy for å forbedre produktiviteten min.",
    "russian": "Я использую современные инструменты для улучшения своей продуктивности.",
    "english": "I use modern tools to improve my productivity."
  },
  {
    "norwegian": "Jeg er vant til å jobbe med stramme tidsfrister og høye krav.",
    "russian": "Я привык работать в условиях жестких сроков и высоких требований.",
    "english": "I am used to working with tight deadlines and high demands."
  },
  {
    "norwegian": "Jeg er alltid villig til å lære nye teknologier og metoder.",
    "russian": "Я всегда готов изучать новые технологии и методы.",
    "english": "I am always willing to learn new technologies and methods."
  },
  {
    "norwegian": "Jeg liker å lage nettsider som fungerer godt på mobilenheter.",
    "russian": "Мне нравится создавать веб-сайты, которые хорошо работают на мобильных устройствах.",
    "english": "I like creating websites that work well on mobile devices."
  },
  {
    "norwegian": "Jeg har erfaring med å bruke APIer for datainnhenting.",
    "russian": "У меня есть опыт использования API для получения данных.",
    "english": "I have experience using APIs for data fetching."
  },
  {
    "norwegian": "Jeg skriver ofte kommentarer i koden min for å gjøre den lettere å forstå.",
    "russian": "Я часто пишу комментарии в своем коде, чтобы его было легче понять.",
    "english": "I often write comments in my code to make it easier to understand."
  },
  {
    "norwegian": "Jeg bruker enkle design for å gjøre nettsidene brukervennlige.",
    "russian": "Я использую простые дизайны, чтобы сделать веб-сайты удобными для пользователя.",
    "english": "I use simple designs to make websites user-friendly."
  },
  {
    "norwegian": "Jeg er interessert i å lære mer om skyteknologi.",
    "russian": "Мне интересно узнать больше о облачных технологиях.",
    "english": "I am interested in learning more about cloud technology."
  },
  {
    "norwegian": "Jeg kan jobbe med databaser som MySQL og MongoDB.",
    "russian": "Я могу работать с базами данных, такими как MySQL и MongoDB.",
    "english": "I can work with databases like MySQL and MongoDB."
  },
  {
    "norwegian": "Jeg liker å lage interaktive funksjoner på nettsider.",
    "russian": "Мне нравится создавать интерактивные функции на веб-сайтах.",
    "english": "I enjoy creating interactive features on websites."
  },
  {
    "norwegian": "Jeg bruker ofte nettverktøy for å overvåke ytelsen til nettsidene mine.",
    "russian": "Я часто использую сетевые инструменты для мониторинга производительности своих веб-сайтов.",
    "english": "I often use web tools to monitor the performance of my websites."
  },
  {
    "norwegian": "Jeg har lært mye om CSS for å forbedre utseendet på nettsidene mine.",
    "russian": "Я многому научился о CSS, чтобы улучшить внешний вид своих веб-сайтов.",
    "english": "I have learned a lot about CSS to improve the look of my websites."
  },
  {
    "norwegian": "Jeg liker å samarbeide med andre utviklere på prosjekter.",
    "russian": "Мне нравится сотрудничать с другими разработчиками над проектами.",
    "english": "I enjoy collaborating with other developers on projects."
  },
  {
    "norwegian": "Jeg kan jobbe med ulike rammeverk som Angular og Vue.",
    "russian": "Я могу работать с различными фреймворками, такими как Angular и Vue.",
    "english": "I can work with different frameworks like Angular and Vue."
  },
  {
    "norwegian": "Jeg liker å bruke CSS for å gjøre nettsider vakre.",
    "russian": "Мне нравится использовать CSS, чтобы сделать веб-сайты красивыми.",
    "english": "I like using CSS to make websites beautiful."
  },
  {
    "norwegian": "Jeg har laget enkle apper med React Native.",
    "russian": "Я создавал простые приложения с React Native.",
    "english": "I have created simple apps with React Native."
  },
  {
    "norwegian": "Jeg kan bruke JSON til å utveksle data mellom server og klient.",
    "russian": "Я могу использовать JSON для обмена данными между сервером и клиентом.",
    "english": "I can use JSON to exchange data between server and client."
  },
  {
    "norwegian": "Jeg liker å teste nye biblioteker og verktøy.",
    "russian": "Мне нравится тестировать новые библиотеки и инструменты.",
    "english": "I enjoy testing new libraries and tools."
  },
  {
    "norwegian": "Jeg skriver kode som andre lett kan forstå.",
    "russian": "Я пишу код, который легко понять другим.",
    "english": "I write code that others can easily understand."
  },
  {
    "norwegian": "Jeg kan lage backend-tjenester med Node.js.",
    "russian": "Я могу создавать бэкенд-сервисы с Node.js.",
    "english": "I can create backend services with Node.js."
  },
  {
    "norwegian": "Jeg lærer stadig nye programmeringsspråk.",
    "russian": "Я постоянно изучаю новые языки программирования.",
    "english": "I am constantly learning new programming languages."
  },
  {
    "norwegian": "Jeg kan jobbe med RESTful APIer.",
    "russian": "Я могу работать с RESTful API.",
    "english": "I can work with RESTful APIs."
  },
  {
    "norwegian": "Jeg er god til å finne feil i koden og rette dem.",
    "russian": "Я хорошо нахожу ошибки в коде и исправляю их.",
    "english": "I am good at finding bugs in code and fixing them."
  }

];

const extraWords = ["og", "men", "eller", "fordi", "hvis", "når", "hvorfor", "hvordan", "hva", "hvem", "derfor", "som", "at", "om", "så"];
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
  speak(word); 
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
//   // Преобразуем первую букву в заглавную
//   sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

//   // Добавляем точку в конце предложения, если её нет
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
//   speak(formattedCorrectSentence); // Озвучиваем правильное предложение
// }

// function speak(text) {
//   const utterance = new SpeechSynthesisUtterance(text);
//   utterance.lang = "nb-NO"; // Устанавливаем язык на норвежский букмол
//   window.speechSynthesis.speak(utterance);
// }

// function startVoiceInput() {
//   if (!recognition) {
//     recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognition.lang = "nb-NO"; // Устанавливаем язык на норвежский букмол
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


