const sentences = [
 {
    "norwegian": "Jeg lærer norsk fordi jeg ønsker å bo og jobbe i Norge.",
    "russian": "Я учу норвежский, потому что хочу жить и работать в Норвегии.",
    "english": "I am learning Norwegian because I want to live and work in Norway."
  },
  {
    "norwegian": "Jeg har gjort leksene mine, derfor kan jeg nå se på TV.",
    "russian": "Я сделал свои домашние задания, поэтому теперь могу смотреть телевизор.",
    "english": "I have done my homework, therefore I can now watch TV."
  },
  {
    "norwegian": "Det regner, så jeg tar med meg en paraply.",
    "russian": "Идет дождь, поэтому я возьму с собой зонтик.",
    "english": "It's raining, so I will bring an umbrella."
  },
  {
    "norwegian": "Han var syk, derfor kom han ikke på jobb.",
    "russian": "Он был болен, поэтому не пришел на работу.",
    "english": "He was sick, therefore he didn't come to work."
  },
  {
    "norwegian": "Jeg skal trene i kveld fordi jeg vil holde meg i form.",
    "russian": "Я буду тренироваться вечером, потому что хочу быть в форме.",
    "english": "I will exercise tonight because I want to stay in shape."
  },
  {
    "norwegian": "Jeg liker å lese bøker, så jeg går ofte på biblioteket.",
    "russian": "Мне нравится читать книги, поэтому я часто хожу в библиотеку.",
    "english": "I like to read books, so I often go to the library."
  },
  {
    "norwegian": "Vi måtte vente lenge, fordi bussen var forsinket.",
    "russian": "Нам пришлось долго ждать, потому что автобус опоздал.",
    "english": "We had to wait a long time because the bus was delayed."
  },
  {
    "norwegian": "Hun har jobbet hardt, derfor fortjener hun en pause.",
    "russian": "Она много работала, поэтому заслуживает перерыв.",
    "english": "She has worked hard, therefore she deserves a break."
  },
  {
    "norwegian": "Jeg er sliten, så jeg går til sengs tidlig i kveld.",
    "russian": "Я устал, поэтому ложусь спать рано вечером.",
    "english": "I am tired, so I am going to bed early tonight."
  },
  {
    "norwegian": "Vi gleder oss til ferien fordi vi skal til Spania.",
    "russian": "Мы с нетерпением ждем отпуска, потому что едем в Испанию.",
    "english": "We are looking forward to the vacation because we are going to Spain."
  },
  {
    "norwegian": "Jeg bestilte en pizza fordi jeg ikke hadde tid til å lage mat.",
    "russian": "Я заказал пиццу, потому что у меня не было времени готовить.",
    "english": "I ordered a pizza because I didn't have time to cook."
  },
  {
    "norwegian": "Han lærte å kjøre bil, derfor kan han nå reise hvor som helst.",
    "russian": "Он научился водить машину, поэтому теперь может ехать куда угодно.",
    "english": "He learned to drive, therefore he can now travel anywhere."
  },
  {
    "norwegian": "Vi skal på ferie til Italia, så vi må planlegge reisen nøye.",
    "russian": "Мы собираемся в отпуск в Италию, поэтому нам нужно тщательно планировать поездку.",
    "english": "We are going on vacation to Italy, so we need to plan the trip carefully."
  },
  {
    "norwegian": "De flyttet til en større by fordi de ønsket flere muligheter.",
    "russian": "Они переехали в больший город, потому что хотели больше возможностей.",
    "english": "They moved to a bigger city because they wanted more opportunities."
  },
  {
    "norwegian": "Hun jobber hardt, derfor får hun alltid gode resultater.",
    "russian": "Она усердно работает, поэтому всегда получает хорошие результаты.",
    "english": "She works hard, therefore she always gets good results."
  },
  {
    "norwegian": "Det var kaldt ute, så vi bestemte oss for å bli hjemme.",
    "russian": "На улице было холодно, поэтому мы решили остаться дома.",
    "english": "It was cold outside, so we decided to stay home."
  },
  {
    "norwegian": "Jeg leste en interessant bok, fordi jeg elsker å lære nye ting.",
    "russian": "Я прочитал интересную книгу, потому что люблю узнавать новое.",
    "english": "I read an interesting book because I love to learn new things."
  },
  {
    "norwegian": "Han trener hver dag, derfor er han i god form.",
    "russian": "Он тренируется каждый день, поэтому находится в хорошей форме.",
    "english": "He exercises every day, therefore he is in good shape."
  },
  {
    "norwegian": "Vi så en spennende film, så vi diskuterte den lenge etterpå.",
    "russian": "Мы посмотрели захватывающий фильм, поэтому долго обсуждали его потом.",
    "english": "We watched an exciting movie, so we discussed it for a long time afterwards."
  },
  {
    "norwegian": "Jeg besøkte min bestemor fordi hun ikke følte seg bra.",
    "russian": "Я навестил бабушку, потому что она плохо себя чувствовала.",
    "english": "I visited my grandmother because she wasn't feeling well."
  },
  {
    "norwegian": "Jeg laget middag fordi familien min kom på besøk.",
    "russian": "Я приготовил ужин, потому что моя семья пришла в гости.",
    "english": "I made dinner because my family came to visit."
  },
  {
    "norwegian": "Hun besøkte Oslo, derfor lærte hun mye om norsk kultur.",
    "russian": "Она посетила Осло, поэтому узнала много о норвежской культуре.",
    "english": "She visited Oslo, therefore she learned a lot about Norwegian culture."
  },
  {
    "norwegian": "Det snødde mye i går, så vi måtte bruke snøskuffe.",
    "russian": "Вчера выпало много снега, поэтому нам пришлось использовать лопату для снега.",
    "english": "It snowed a lot yesterday, so we had to use a snow shovel."
  },
  {
    "norwegian": "Han studerte hardt fordi han ville bestå eksamen.",
    "russian": "Он усердно учился, потому что хотел сдать экзамен.",
    "english": "He studied hard because he wanted to pass the exam."
  },
  {
    "norwegian": "Jeg kjøpte en ny sykkel, derfor kan jeg sykle til jobben nå.",
    "russian": "Я купил новый велосипед, поэтому теперь могу ездить на работу на велосипеде.",
    "english": "I bought a new bike, therefore I can cycle to work now."
  },
  {
    "norwegian": "Vi gikk til butikken fordi vi trengte matvarer.",
    "russian": "Мы пошли в магазин, потому что нам нужны были продукты.",
    "english": "We went to the store because we needed groceries."
  },
  {
    "norwegian": "Hun deltok i kurset, så hun lærte mye nytt.",
    "russian": "Она участвовала в курсе, поэтому узнала много нового.",
    "english": "She attended the course, so she learned a lot of new things."
  },
  {
    "norwegian": "Jeg fikk en jobbtilbud fordi jeg har relevant erfaring.",
    "russian": "Я получил предложение о работе, потому что у меня есть соответствующий опыт.",
    "english": "I received a job offer because I have relevant experience."
  },
  {
    "norwegian": "De flyttet til landet, derfor har de nå en stor hage.",
    "russian": "Они переехали за город, поэтому теперь у них большой сад.",
    "english": "They moved to the countryside, therefore they now have a large garden."
  },
  {
    "norwegian": "Vi reiste til fjellene fordi vi elsker å gå på tur.",
    "russian": "Мы поехали в горы, потому что любим ходить в походы.",
    "english": "We traveled to the mountains because we love hiking."
  },
  {
    "norwegian": "Jeg dro til legen fordi jeg følte meg dårlig.",
    "russian": "Я пошел к врачу, потому что плохо себя чувствовал.",
    "english": "I went to the doctor because I felt sick."
  },
  {
    "norwegian": "Hun solgte huset sitt, derfor bor hun nå i en leilighet.",
    "russian": "Она продала свой дом, поэтому теперь живет в квартире.",
    "english": "She sold her house, therefore she now lives in an apartment."
  },
  {
    "norwegian": "Det var mye trafikk, så vi kom sent til møtet.",
    "russian": "На дорогах было много движения, поэтому мы опоздали на встречу.",
    "english": "There was a lot of traffic, so we arrived late to the meeting."
  },
  {
    "norwegian": "Han kjøpte nye klær fordi han trengte dem for jobben.",
    "russian": "Он купил новую одежду, потому что она была нужна для работы.",
    "english": "He bought new clothes because he needed them for work."
  },
  {
    "norwegian": "Jeg har spart penger, derfor kan jeg reise til utlandet i sommer.",
    "russian": "Я накопил деньги, поэтому этим летом могу поехать за границу.",
    "english": "I have saved money, therefore I can travel abroad this summer."
  },
  {
    "norwegian": "Vi spilte fotball fordi det var fint vær.",
    "russian": "Мы играли в футбол, потому что была хорошая погода.",
    "english": "We played football because the weather was nice."
  },
  {
    "norwegian": "De dro på ferie, så huset deres var tomt i to uker.",
    "russian": "Они уехали в отпуск, поэтому их дом был пуст две недели.",
    "english": "They went on vacation, so their house was empty for two weeks."
  },
  {
    "norwegian": "Hun begynte på en ny skole fordi hun flyttet til en annen by.",
    "russian": "Она начала учиться в новой школе, потому что переехала в другой город.",
    "english": "She started at a new school because she moved to another city."
  },
  {
    "norwegian": "Jeg jobber overtid, derfor kan jeg tjene ekstra penger.",
    "russian": "Я работаю сверхурочно, поэтому могу заработать дополнительные деньги.",
    "english": "I work overtime, therefore I can earn extra money."
  },
  {
    "norwegian": "Vi arrangerte en fest fordi det var bursdagen hans.",
    "russian": "Мы устроили вечеринку, потому что у него был день рождения.",
    "english": "We threw a party because it was his birthday."
  },
  {
    "norwegian": "Jeg fikk en pris fordi jeg gjorde en god jobb.",
    "russian": "Я получил награду, потому что хорошо справился с работой.",
    "english": "I received an award because I did a good job."
  },
  {
    "norwegian": "Hun skrev en bok, derfor er hun nå en kjent forfatter.",
    "russian": "Она написала книгу, поэтому теперь она известная писательница.",
    "english": "She wrote a book, therefore she is now a famous author."
  },
  {
    "norwegian": "Det var en ulykke, så vi måtte ta en omvei.",
    "russian": "Произошел несчастный случай, поэтому нам пришлось сделать объезд.",
    "english": "There was an accident, so we had to take a detour."
  },
  {
    "norwegian": "Han deltar på mange møter fordi han er leder for prosjektet.",
    "russian": "Он участвует во многих встречах, потому что он руководитель проекта.",
    "english": "He attends many meetings because he is the project leader."
  },
  {
    "norwegian": "Jeg har spart penger, derfor kan jeg kjøpe en ny bil.",
    "russian": "Я накопил деньги, поэтому могу купить новую машину.",
    "english": "I have saved money, therefore I can buy a new car."
  },
  {
    "norwegian": "Vi gikk på kino fordi vi ønsket å se den nye filmen.",
    "russian": "Мы пошли в кино, потому что хотели посмотреть новый фильм.",
    "english": "We went to the cinema because we wanted to see the new movie."
  },
  {
    "norwegian": "Hun fikk en forfremmelse, så hun er nå sjef for avdelingen.",
    "russian": "Она получила повышение, поэтому теперь она начальник отдела.",
    "english": "She got a promotion, so she is now the head of the department."
  },
  {
    "norwegian": "Jeg tar norskkurs fordi jeg vil forbedre språkkunnskapene mine.",
    "russian": "Я посещаю курсы норвежского, потому что хочу улучшить свои языковые навыки.",
    "english": "I am taking a Norwegian course because I want to improve my language skills."
  },
  {
    "norwegian": "De kjøpte en hytte, derfor tilbringer de nå helgene på landet.",
    "russian": "Они купили коттедж, поэтому теперь проводят выходные за городом.",
    "english": "They bought a cabin, therefore they now spend weekends in the countryside."
  },
  {
    "norwegian": "Vi organiserte et seminar fordi vi ønsket å dele kunnskap.",
    "russian": "Мы организовали семинар, потому что хотели поделиться знаниями.",
    "english": "We organized a seminar because we wanted to share knowledge."
  },
  {
    "norwegian": "Jeg startet min egen bedrift fordi jeg ønsket å være min egen sjef.",
    "russian": "Я начал свой бизнес, потому что хотел быть своим собственным боссом.",
    "english": "I started my own business because I wanted to be my own boss."
  },
  {
    "norwegian": "Hun besøkte legen, derfor følte hun seg mye bedre.",
    "russian": "Она сходила к врачу, поэтому чувствует себя намного лучше.",
    "english": "She visited the doctor, therefore she feels much better."
  },
  {
    "norwegian": "Det var en lang dag, så jeg bestemte meg for å legge meg tidlig.",
    "russian": "Это был долгий день, поэтому я решил лечь пораньше.",
    "english": "It was a long day, so I decided to go to bed early."
  },
  {
    "norwegian": "Han lærte å spille gitar fordi han elsker musikk.",
    "russian": "Он научился играть на гитаре, потому что любит музыку.",
    "english": "He learned to play the guitar because he loves music."
  },
  {
    "norwegian": "Jeg har jobbet hardt, derfor kan jeg nå ta en ferie.",
    "russian": "Я много работал, поэтому теперь могу взять отпуск.",
    "english": "I have worked hard, therefore I can now take a vacation."
  },
  {
    "norwegian": "Vi gikk på stranden fordi været var så fint.",
    "russian": "Мы пошли на пляж, потому что погода была такая хорошая.",
    "english": "We went to the beach because the weather was so nice."
  },
  {
    "norwegian": "Hun kjøpte en ny bil, så hun kunne kjøre til jobben.",
    "russian": "Она купила новую машину, поэтому могла ездить на работу.",
    "english": "She bought a new car, so she could drive to work."
  },
  {
    "norwegian": "Jeg tok et kurs i matlaging fordi jeg elsker å lage mat.",
    "russian": "Я прошел курс кулинарии, потому что люблю готовить.",
    "english": "I took a cooking class because I love to cook."
  },
  {
    "norwegian": "De flyttet til et nytt hus, derfor måtte de pakke alle tingene sine.",
    "russian": "Они переехали в новый дом, поэтому им пришлось упаковывать все свои вещи.",
    "english": "They moved to a new house, therefore they had to pack all their things."
  },
  {
    "norwegian": "Vi hadde en fin kveld fordi vi gikk på restaurant.",
    "russian": "Мы провели хороший вечер, потому что пошли в ресторан.",
    "english": "We had a nice evening because we went to a restaurant."
  },
  {
    "norwegian": "Jeg fant en ny hobby fordi jeg ønsket å prøve noe nytt.",
    "russian": "Я нашел новое хобби, потому что хотел попробовать что-то новое.",
    "english": "I found a new hobby because I wanted to try something new."
  },
  {
    "norwegian": "Hun deltok i en konferanse, derfor har hun mange nye kontakter.",
    "russian": "Она участвовала в конференции, поэтому у нее много новых контактов.",
    "english": "She attended a conference, therefore she has many new contacts."
  },
  {
    "norwegian": "Det var kaldt ute, så vi bestemte oss for å drikke varm sjokolade.",
    "russian": "На улице было холодно, поэтому мы решили выпить горячего шоколада.",
    "english": "It was cold outside, so we decided to drink hot chocolate."
  },
  {
    "norwegian": "Han begynte å trene på treningssenteret fordi han ønsket å forbedre sin helse.",
    "russian": "Он начал тренироваться в спортзале, потому что хотел улучшить свое здоровье.",
    "english": "He started training at the gym because he wanted to improve his health."
  },
  {
    "norwegian": "Jeg har reist mye, derfor har jeg sett mange ulike kulturer.",
    "russian": "Я много путешествовал, поэтому видел много разных культур.",
    "english": "I have traveled a lot, therefore I have seen many different cultures."
  },
  {
    "norwegian": "Vi feiret jul fordi det er en viktig tradisjon for familien vår.",
    "russian": "Мы праздновали Рождество, потому что это важная традиция для нашей семьи.",
    "english": "We celebrated Christmas because it is an important tradition for our family."
  },
  {
    "norwegian": "Hun kjøpte en ny datamaskin, så hun kunne jobbe mer effektivt.",
    "russian": "Она купила новый компьютер, поэтому могла работать более эффективно.",
    "english": "She bought a new computer, so she could work more efficiently."
  },
  {
    "norwegian": "Jeg tok en pause fordi jeg var veldig sliten.",
    "russian": "Я сделал перерыв, потому что был очень уставшим.",
    "english": "I took a break because I was very tired."
  },
  {
    "norwegian": "De deltok på språkkurset, derfor kunne de snakke bedre norsk.",
    "russian": "Они посещали языковые курсы, поэтому могли лучше говорить по-норвежски.",
    "english": "They attended the language course, therefore they could speak better Norwegian."
  },
  {
    "norwegian": "Vi tok toget fordi det var raskere enn å kjøre bil.",
    "russian": "Мы поехали на поезде, потому что это было быстрее, чем ехать на машине.",
    "english": "We took the train because it was faster than driving."
  },
  {
    "norwegian": "Jeg fikk nye venner fordi jeg ble med i en klubb.",
    "russian": "Я завел новых друзей, потому что вступил в клуб.",
    "english": "I made new friends because I joined a club."
  },
  {
    "norwegian": "Hun kjøpte et kamera, derfor kan hun ta bilder av naturen.",
    "russian": "Она купила камеру, поэтому теперь может фотографировать природу.",
    "english": "She bought a camera, therefore she can take pictures of nature."
  },
  {
    "norwegian": "Det regnet mye, så vi bestemte oss for å bli inne.",
    "russian": "Шел сильный дождь, поэтому мы решили остаться внутри.",
    "english": "It rained a lot, so we decided to stay inside."
  },
  {
    "norwegian": "Han flyttet til en ny by fordi han fikk en ny jobb.",
    "russian": "Он переехал в новый город, потому что получил новую работу.",
    "english": "He moved to a new city because he got a new job."
  },
  {
    "norwegian": "Jeg har lest mange bøker, derfor vet jeg mye om historie.",
    "russian": "Я прочитал много книг, поэтому много знаю о истории.",
    "english": "I have read many books, therefore I know a lot about history."
  },
  {
    "norwegian": "Vi gikk en tur i parken fordi vi ønsket frisk luft.",
    "russian": "Мы прогулялись в парке, потому что хотели свежего воздуха.",
    "english": "We took a walk in the park because we wanted fresh air."
  },
  {
    "norwegian": "Hun studerer medisin, så hun kan bli lege.",
    "russian": "Она изучает медицину, поэтому может стать врачом.",
    "english": "She is studying medicine, so she can become a doctor."
  },
  {
    "norwegian": "Jeg tok et kurs i data fordi jeg ville forbedre mine ferdigheter.",
    "russian": "Я прошел курсы по информатике, потому что хотел улучшить свои навыки.",
    "english": "I took a computer course because I wanted to improve my skills."
  },
  {
    "norwegian": "De kjøpte en hund, derfor går de på tur hver dag.",
    "russian": "Они купили собаку, поэтому теперь гуляют каждый день.",
    "english": "They bought a dog, therefore they walk every day."
  },
  {
    "norwegian": "Vi besøkte en kunstutstilling fordi vi elsker kunst.",
    "russian": "Мы посетили художественную выставку, потому что любим искусство.",
    "english": "We visited an art exhibition because we love art."
  },
  {
    "norwegian": "Jeg begynte å lære norsk fordi jeg ønsket å forstå kulturen bedre.",
    "russian": "Я начал изучать норвежский, потому что хотел лучше понять культуру.",
    "english": "I started learning Norwegian because I wanted to understand the culture better."
  },
  {
    "norwegian": "Hun besøkte sin venn, derfor gikk hun tidlig fra jobben.",
    "russian": "Она навестила свою подругу, поэтому ушла с работы пораньше.",
    "english": "She visited her friend, therefore she left work early."
  },
  {
    "norwegian": "Det var en fest i helgen, så vi danset hele natten.",
    "russian": "На выходных была вечеринка, поэтому мы танцевали всю ночь.",
    "english": "There was a party this weekend, so we danced all night."
  },
  {
    "norwegian": "Han kjøpte en ny sykkel fordi den gamle var ødelagt.",
    "russian": "Он купил новый велосипед, потому что старый был сломан.",
    "english": "He bought a new bike because the old one was broken."
  },
  {
    "norwegian": "Jeg har tatt mange bilder, derfor har jeg en stor samling.",
    "russian": "Я сделал много фотографий, поэтому у меня большая коллекция.",
    "english": "I have taken many photos, therefore I have a large collection."
  },
  {
    "norwegian": "Vi så en teaterforestilling fordi vi elsker scenekunst.",
    "russian": "Мы посмотрели театральное представление, потому что любим сценическое искусство.",
    "english": "We watched a theater performance because we love performing arts."
  },
  {
    "norwegian": "Hun maler hver dag, så hun har forbedret sine ferdigheter.",
    "russian": "Она рисует каждый день, поэтому улучшила свои навыки.",
    "english": "She paints every day, so she has improved her skills."
  },
  {
    "norwegian": "Jeg tar vare på miljøet fordi det er viktig for fremtiden.",
    "russian": "Я забочусь об окружающей среде, потому что это важно для будущего.",
    "english": "I take care of the environment because it is important for the future."
  },
  {
    "norwegian": "De arrangerte en veldedighetskonsert, derfor samlet de inn mye penger.",
    "russian": "Они организовали благотворительный концерт, поэтому собрали много денег.",
    "english": "They organized a charity concert, therefore they raised a lot of money."
  },
  {
    "norwegian": "Vi reiste til en ny by fordi vi ønsket å oppdage nye steder.",
    "russian": "Мы поехали в новый город, потому что хотели открыть для себя новые места.",
    "english": "We traveled to a new city because we wanted to discover new places."
  },
  {
    "norwegian": "Jeg ble med i en idrettsklubb fordi jeg ønsket å holde meg aktiv.",
    "russian": "Я вступил в спортивный клуб, потому что хотел быть активным.",
    "english": "I joined a sports club because I wanted to stay active."
  },
  {
    "norwegian": "Hun kjøpte en ny mobiltelefon, derfor kan hun ta bedre bilder.",
    "russian": "Она купила новый мобильный телефон, поэтому теперь может делать лучшие фотографии.",
    "english": "She bought a new mobile phone, therefore she can take better photos."
  },
  {
    "norwegian": "Det var en ulykke på motorveien, så trafikken var veldig treg.",
    "russian": "На шоссе произошла авария, поэтому движение было очень медленным.",
    "english": "There was an accident on the highway, so the traffic was very slow."
  },
  {
    "norwegian": "Han lærte å lage mat fordi han ønsket å imponere venner.",
    "russian": "Он научился готовить, потому что хотел произвести впечатление на друзей.",
    "english": "He learned to cook because he wanted to impress his friends."
  },
  {
    "norwegian": "Jeg har trent regelmessig, derfor er jeg i bedre form nå.",
    "russian": "Я регулярно тренировался, поэтому теперь я в лучшей форме.",
    "english": "I have been exercising regularly, therefore I am in better shape now."
  },
  {
    "norwegian": "Vi besøkte museet fordi vi er interessert i kunsthistorie.",
    "russian": "Мы посетили музей, потому что интересуемся историей искусства.",
    "english": "We visited the museum because we are interested in art history."
  },
  {
    "norwegian": "Hun tar ekstra timer i matematikk, så hun kan forbedre karakterene sine.",
    "russian": "Она берет дополнительные уроки по математике, поэтому может улучшить свои оценки.",
    "english": "She is taking extra math classes, so she can improve her grades."
  },
  {
    "norwegian": "Jeg dro på ferie til Spania fordi jeg elsker solen og stranden.",
    "russian": "Я поехал в отпуск в Испанию, потому что люблю солнце и пляж.",
    "english": "I went on vacation to Spain because I love the sun and the beach."
  },
  {
    "norwegian": "De flyttet til Norge, derfor lærer de nå norsk.",
    "russian": "Они переехали в Норвегию, поэтому теперь учат норвежский.",
    "english": "They moved to Norway, therefore they are now learning Norwegian."
  },
  {
    "norwegian": "Vi planlegger å bygge et hus fordi vi ønsker å bo på landet.",
    "russian": "Мы планируем построить дом, потому что хотим жить за городом.",
    "english": "We are planning to build a house because we want to live in the countryside."
  },
  {
    "norwegian": "Jeg begynte å trene yoga fordi jeg ønsket å redusere stress.",
    "russian": "Я начал заниматься йогой, потому что хотел уменьшить стресс.",
    "english": "I started doing yoga because I wanted to reduce stress."
  },
  {
    "norwegian": "Hun kjøpte en ny bok, derfor har hun mye å lese nå.",
    "russian": "Она купила новую книгу, поэтому теперь у нее много чего читать.",
    "english": "She bought a new book, therefore she has a lot to read now."
  },
  {
    "norwegian": "Det var mye regn, så vi bestemte oss for å bli hjemme.",
    "russian": "Шел сильный дождь, поэтому мы решили остаться дома.",
    "english": "There was a lot of rain, so we decided to stay home."
  },
  {
    "norwegian": "Han tok et kurs i programmering fordi han ville skifte karriere.",
    "russian": "Он прошел курсы программирования, потому что хотел сменить карьеру.",
    "english": "He took a programming course because he wanted to change his career."
  },
  {
    "norwegian": "Jeg har spart penger, derfor kan jeg nå kjøpe en ny datamaskin.",
    "russian": "Я накопил деньги, поэтому теперь могу купить новый компьютер.",
    "english": "I have saved money, therefore I can now buy a new computer."
  },
  {
    "norwegian": "Vi besøkte en historisk by fordi vi er interesserte i historie.",
    "russian": "Мы посетили исторический город, потому что интересуемся историей.",
    "english": "We visited a historic city because we are interested in history."
  },
  {
    "norwegian": "Hun tar bilder hver dag, så hun har mange flotte bilder.",
    "russian": "Она делает фотографии каждый день, поэтому у нее много отличных снимков.",
    "english": "She takes pictures every day, so she has many great photos."
  },
  {
    "norwegian": "Jeg tok en sykkeltur fordi jeg ønsket å holde meg i form.",
    "russian": "Я поехал на велопрогулку, потому что хотел держать себя в форме.",
    "english": "I went on a bike ride because I wanted to stay in shape."
  },
  {
    "norwegian": "De kjøpte en stor seng, derfor kan de sove mer komfortabelt.",
    "russian": "Они купили большую кровать, поэтому могут спать более комфортно.",
    "english": "They bought a big bed, therefore they can sleep more comfortably."
  },
  {
    "norwegian": "Vi arrangerte en piknik fordi været var så fint.",
    "russian": "Мы устроили пикник, потому что погода была такой хорошей.",
    "english": "We arranged a picnic because the weather was so nice."
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