const sentences = [
 {
      "norwegian": "Jeg må bytte til vinterdekk før snøen kommer.",
      "russian": "Мне нужно заменить летние шины на зимние до того, как выпадет снег.",
      "english": "I need to switch to winter tires before the snow falls."
    },
    {
      "norwegian": "Sommeren er her, og det er på tide å bytte til sommerdekk.",
      "russian": "Лето наступило, и пора переходить на летнюю резину.",
      "english": "Summer is here, and it's time to switch to summer tires."
    },
    {
      "norwegian": "Jeg sjekker alltid lufttrykket før jeg skifter dekk.",
      "russian": "Я всегда проверяю давление в шинах перед их сменой.",
      "english": "I always check the tire pressure before swapping tires."
    },
    {
      "norwegian": "Dekkskifte er viktig for å sikre godt veigrep.",
      "russian": "Замена шин важна для обеспечения хорошего сцепления с дорогой.",
      "english": "Changing tires is important for ensuring good road grip."
    },
    {
      "norwegian": "Jeg liker å bruke piggdekk om vinteren for bedre veigrep.",
      "russian": "Мне нравится использовать шипованную резину зимой для лучшего сцепления.",
      "english": "I love using studded tires in winter for better grip."
    },
    {
      "norwegian": "Om våren bytter jeg til lavprofildekk for forbedret kjøreegenskap.",
      "russian": "Весной я меняю на низкопрофильные шины для улучшенной управляемости.",
      "english": "In spring, I switch to low-profile tires for better handling."
    },
    {
      "norwegian": "Bytte av felger gir bilen et helt nytt utseende.",
      "russian": "Замена дисков придаёт машине совсем новый вид.",
      "english": "Swapping rims gives the car a whole new look."
    },
    {
      "norwegian": "Etter en ulykke må jeg skifte både støtfangeren foran og fenderen.",
      "russian": "После аварии нужно заменить передний бампер и крыло.",
      "english": "After an accident, I need to change both the front bumper and the fender."
    },
    {
      "norwegian": "Panseret ble skadet i kollisjonen, så jeg må få det reparert.",
      "russian": "Капот был поврежден в результате столкновения, нужно его отремонтировать.",
      "english": "The hood got damaged during the collision, so I need to get it fixed."
    },
    {
      "norwegian": "Sikkerhetsbeltet mitt ble ødelagt i sammenstøtet.",
      "russian": "Мой ремень безопасности был поврежден в аварии.",
      "english": "My seatbelt was damaged in the crash."
    },
    {
      "norwegian": "Jeg må bytte ut sidevinduet etter ulykken.",
      "russian": "Мне нужно заменить боковое стекло после аварии.",
      "english": "I need to replace the side window after the accident."
    },
    {
      "norwegian": "Baklyktene ble ødelagt i kollisjonen, så jeg må skifte dem.",
      "russian": "Задние фары были повреждены в столкновении, поэтому их нужно заменить.",
      "english": "The tail lights were damaged in the collision, so I need to replace them."
    },
    {
      "norwegian": "Jeg elsker komforten til de nye setene i bilen min.",
      "russian": "Мне нравится комфорт новых сидений в моей машине.",
      "english": "I love the comfort of the new seats in my car."
    },
    {
      "norwegian": "Jeg vurderer å oppgradere lydanlegget for bedre lydkvalitet.",
      "russian": "Думаю улучшить аудиосистему для лучшего качества звука.",
      "english": "I'm considering upgrading the sound system for better audio quality."
    },
    {
      "norwegian": "Ingeniørpanelet og dashbordet trenger en god rengjøring.",
      "russian": "Панель приборов и центральная консоль нуждаются в хорошей чистке.",
      "english": "The dashboard and central console need a good cleaning."
    },
    {
      "norwegian": "Jeg må bytte gulvmatter for å holde interiøret rent.",
      "russian": "Мне нужно заменить коврики, чтобы салон оставался чистым.",
      "english": "I need to change the floor mats to keep the interior clean."
    },
    {
      "norwegian": "Jeg elsker følelsen av det nye rattet.",
      "russian": "Мне нравится ощущение от нового руля.",
      "english": "I love the feel of the new steering wheel."
    },
    {
      "norwegian": "Jeg vurderer å installere nye felger for bedre utseende.",
      "russian": "Думаю установить новые диски для улучшения внешнего вида.",
      "english": "I'm considering installing new rims for a better appearance."
    },
    {
      "norwegian": "Polering av lakken gir bilen min en fantastisk glans.",
      "russian": "Полировка лака придаёт машине невероятный блеск.",
      "english": "Polishing the paint gives my car an amazing shine."
    },
    {
      "norwegian": "Nye sidespeil gir bilen et moderne utseende.",
      "russian": "Новые боковые зеркала придают машине современный вид.",
      "english": "New side mirrors give the car a modern look."
    },
  {
    "norwegian": "Jeg må skifte frontruten etter en steinsprut.",
    "russian": "Мне нужно заменить лобовое стекло после попадания камня.",
    "english": "I need to replace the windscreen after a stone chip."
  },
  {
    "norwegian": "Jeg elsker følelsen av nye vinterdekk på snødekte veier.",
    "russian": "Мне нравится ощущение новых зимних шин на снежных дорогах.",
    "english": "I love the feel of new winter tires on snowy roads."
  },
  {
    "norwegian": "Jeg vurderer å installere ny eksospotte for bedre lyd.",
    "russian": "Думаю установить новый глушитель для улучшения звука.",
    "english": "I'm considering installing a new muffler for better sound."
  },
  {
    "norwegian": "Setene trenger en god rengjøring etter turen.",
    "russian": "Сиденья нуждаются в хорошей чистке после поездки.",
    "english": "The seats need a good cleaning after the trip."
  },
  {
    "norwegian": "Jeg planlegger å bytte ut de gamle støtdemperne.",
    "russian": "Планирую заменить старые амортизаторы.",
    "english": "I'm planning to replace the old shock absorbers."
  },
  {
    "norwegian": "Jeg vil installere et nytt ratt for bedre grep.",
    "russian": "Хочу установить новый руль для лучшего сцепления.",
    "english": "I want to install a new steering wheel for better grip."
  },
  {
    "norwegian": "Jeg må bytte ut baklysene som ble skadet i kollisjonen.",
    "russian": "Мне нужно заменить задние фонари, поврежденные в аварии.",
    "english": "I need to replace the tail lights that were damaged in the collision."
  },
  {
    "norwegian": "Karosseriet trenger en god polering for å fjerne riper.",
    "russian": "Кузову нужна хорошая полировка, чтобы удалить царапины.",
    "english": "The body needs a good polishing to remove scratches."
  },
  {
    "norwegian": "Jeg vurderer å bytte til sportsseter for bedre komfort.",
    "russian": "Думаю перейти на спортивные сидения для большего комфорта.",
    "english": "I'm considering switching to sports seats for better comfort."
  },
  {
    "norwegian": "Vindusviskerne må byttes før regnsesongen starter.",
    "russian": "Дворники нужно заменить перед началом сезона дождей.",
    "english": "The windshield wipers need to be replaced before the rainy season starts."
  },
  {
    "norwegian": "Jeg planlegger å bytte vinduspakningene for å forhindre lekkasjer.",
    "russian": "Планирую заменить уплотнители окон, чтобы предотвратить протечки.",
    "english": "I'm planning to replace the window seals to prevent leaks."
  },
  {
    "norwegian": "Seteleddet i førersetet må justeres for bedre støtte.",
    "russian": "Регулировочное соединение водительского сиденья нужно настроить для лучшей поддержки.",
    "english": "The seat pivot in the driver's seat needs adjustment for better support."
  },
  {
    "norwegian": "Jeg elsker å justere camber på hjulene for optimal ytelse.",
    "russian": "Мне нравится регулировать угол развала колес для оптимальной производительности.",
    "english": "I love adjusting the camber on the wheels for optimal performance."
  },
  {
    "norwegian": "Jeg må skifte sveivakseltetningen for å hindre oljelekkasje.",
    "russian": "Мне нужно заменить сальник коленчатого вала, чтобы предотвратить утечку масла.",
    "english": "I need to replace the crankshaft seal to prevent oil leakage."
  },
  {
    "norwegian": "Innvendig må jeg skifte tepper for en friskere lukt.",
    "russian": "Внутри автомобиля нужно заменить ковры для свежего запаха.",
    "english": "Inside, I need to replace the carpets for a fresher smell."
  },
  {
    "norwegian": "Jeg vurderer å installere takstativ for ekstra bagasje.",
    "russian": "Думаю установить багажник на крышу для дополнительного багажа.",
    "english": "I'm considering installing a roof rack for extra luggage."
  },
  {
    "norwegian": "Jeg må bytte vindusviskermotoren etter at den sluttet å virke.",
    "russian": "Мне нужно заменить мотор дворников после того, как он перестал работать.",
    "english": "I need to replace the windshield wiper motor after it stopped working."
  },
  {
    "norwegian": "Frontlyktene må justeres for bedre sikt om natten.",
    "russian": "Фары нужно отрегулировать для улучшенной видимости ночью.",
    "english": "The headlights need adjustment for better visibility at night."
  },
  {
    "norwegian": "Jeg elsker å installere racing-dekk for å forbedre håndteringen på banen.",
    "russian": "Мне нравится устанавливать гоночные шины для улучшения управляемости на трассе.",
    "english": "I love installing racing tires to improve handling on the track."
  },
  {
    "norwegian": "Jeg må skifte ut rattet etter skaden i sammenstøtet.",
    "russian": "Мне нужно заменить руль после повреждения в аварии.",
    "english": "I need to replace the steering wheel after the collision damage."
  },
  {
    "norwegian": "Jeg planlegger å bytte tennplugger for bedre motorytelse.",
    "russian": "Планирую заменить свечи зажигания для улучшения работы двигателя.",
    "english": "I'm planning to replace the spark plugs for better engine performance."
  },
  {
    "norwegian": "Jeg vurderer å installere et nytt luftinntak for økt motorkraft.",
    "russian": "Думаю установить новый впускной коллектор для большей мощности двигателя.",
    "english": "I'm considering installing a new air intake for increased engine power."
  },
  {
    "norwegian": "Karosseriet må rustbeskyttes for å forhindre korrosjon.",
    "russian": "Кузов требует антикоррозийной защиты, чтобы предотвратить ржавчину.",
    "english": "The body needs rust protection to prevent corrosion."
  },
  {
    "norwegian": "Jeg må bytte ut bremseslanger for bedre sikkerhet.",
    "russian": "Мне нужно заменить тормозные шланги для повышения безопасности.",
    "english": "I need to replace the brake hoses for better safety."
  },
  {
    "norwegian": "Interiøret trenger en oppgradering med nye setetrekk.",
    "russian": "В салоне требуется обновление с новыми чехлами для сидений.",
    "english": "The interior needs an upgrade with new seat covers."
  },
  {
    "norwegian": "Jeg elsker å installere nye högkvalitets lyspærer.",
    "russian": "Мне нравится устанавливать новые высококачественные лампочки.",
    "english": "I love installing new high-quality bulbs."
  },
  {
    "norwegian": "Jeg vurderer å skifte til karbonfiberpanels for lettere vekt.",
    "russian": "Думаю установить панели из углеродного волокна для снижения веса.",
    "english": "I'm considering switching to carbon fiber panels for lighter weight."
  },
  {
    "norwegian": "Siden vinteren nærmer seg, må jeg skifte ut frostvæsken.",
    "russian": "С наступлением зимы нужно заменить антифриз.",
    "english": "With winter approaching, I need to change the antifreeze."
  },
  {
    "norwegian": "Før fjellturen må jeg bytte ut batteriet til et som kan tåle kulda.",
    "russian": "Перед поездкой в горы нужно поменять аккумулятор на тот, который выдержит холод.",
    "english": "Before heading to the mountains, I need to replace the battery with one that can withstand the cold."
  },
  {
    "norwegian": "Jeg må bytte motorolje før den neste lange reisen.",
    "russian": "Прежде чем отправиться в дальнее путешествие, мне нужно заменить моторное масло.",
    "english": "I need to change the engine oil before the next long trip."
  },
  {
    "norwegian": "Jeg elsker å bytte tennplugger for å forbedre motorytelsen.",
    "russian": "Мне нравится менять свечи зажигания для улучшенной работы двигателя.",
    "english": "I love changing spark plugs to improve engine performance."
  },
  {
    "norwegian": "Vindviskerne må byttes ut før vinteren setter inn.",
    "russian": "Щетки стеклоочистителя нужно заменить перед наступлением зимы.",
    "english": "The windshield wipers need to be replaced before winter sets in."
  },
  {
    "norwegian": "Jeg vurderer å installere en ny eksosmanifold for bedre effekt.",
    "russian": "Думаю установить новый выпускной коллектор для улучшения мощности.",
    "english": "I'm considering installing a new exhaust manifold for better performance."
  },
  {
    "norwegian": "Baklyktene må byttes etter sammenstøtet.",
    "russian": "Задние фары нужно заменить после аварии.",
    "english": "The tail lights need to be replaced after the collision."
  },
  {
    "norwegian": "Interiøret trenger en grundig rengjøring etter sommerferien.",
    "russian": "Салону нужна тщательная чистка после летних каникул.",
    "english": "The interior needs a thorough cleaning after the summer vacation."
  },
  {
    "norwegian": "Jeg må justere camber på hjulene for bedre håndtering.",
    "russian": "Нужно отрегулировать развал колес для улучшения управляемости.",
    "english": "I need to adjust the camber on the wheels for better handling."
  },
  {
    "norwegian": "Vindusviskermotoren må repareres etter at den sluttet å fungere.",
    "russian": "Двигатель стеклоочистителя нужно починить после того, как он перестал работать.",
    "english": "The wiper motor needs to be repaired after it stopped working."
  },
  {
    "norwegian": "Jeg vurderer å installere en ny spoiler for økt aerodynamikk.",
    "russian": "Думаю установить новый спойлер для улучшения аэродинамики.",
    "english": "I'm considering installing a new spoiler for increased aerodynamics."
  },
  {
    "norwegian": "For å forbedre kjøreegenskapene må jeg bytte støtdempere.",
    "russian": "Для улучшения управляемости нужно заменить амортизаторы.",
    "english": "To improve handling, I need to replace the shock absorbers."
  },
  {
    "norwegian": "Jeg må polere felgene for å få dem til å skinne.",
    "russian": "Нужно отполировать диски, чтобы они блестели.",
    "english": "I need to polish the rims to make them shine."
  },
  {
    "norwegian": "Jeg vurderer å bruke premium sommerdekk for ekstra komfort.",
    "russian": "Думаю использовать премиальные летние шины для дополнительного комфорта.",
    "english": "I'm considering using premium summer tires for extra comfort."
  },
  {
    "norwegian": "Jeg elsker følelsen av nye bremseklosser.",
    "russian": "Мне нравится ощущение новых тормозных колодок.",
    "english": "I love the feel of new brake pads."
  },
  {
    "norwegian": "Jeg må bytte ut eksosrøret etter at det ble rustet.",
    "russian": "Мне нужно заменить выхлопную трубу после того, как она заржавела.",
    "english": "I need to replace the exhaust pipe after it rusted."
  },
  {
    "norwegian": "Etter å ha kjørt langt, vil jeg oppdatere suspensjonen.",
    "russian": "После длинных поездок хочется обновить подвеску.",
    "english": "After long drives, I want to update the suspension."
  },
  {
    "norwegian": "Jeg elsker å installere nye karosserideler for et friskere utseende.",
    "russian": "Мне нравится устанавливать новые кузовные детали, чтобы обновить внешний вид.",
    "english": "I love installing new body parts for a fresher look."
  },
  {
    "norwegian": "Seteputene mine trenger en oppgradering for bedre støtte.",
    "russian": "Моим сиденьям нужна обновлённая обивка для лучшей поддержки.",
    "english": "My seat cushions need an upgrade for better support."
  },
  {
    "norwegian": "Jeg vurderer å bytte til LED-baklykter for bedre synlighet.",
    "russian": "Думаю установить светодиодные задние фонари для лучшей видимости.",
    "english": "I'm considering switching to LED tail lights for better visibility."
  },
  {
    "norwegian": "En kollisjon skadet hjulbuen min, så den må repareres.",
    "russian": "После аварии пострадали мои колесные арки, их нужно отремонтировать.",
    "english": "A collision damaged my wheel arch, so it needs to be repaired."
  },
  {
    "norwegian": "Jeg elsker å ta vare på skinninteriøret i bilen min.",
    "russian": "Мне нравится ухаживать за кожаным салоном в моей машине.",
    "english": "I love taking care of the leather interior in my car."
  },
  {
    "norwegian": "Jeg må bytte ut bremseskivene for bedre ytelse.",
    "russian": "Мне нужно заменить тормозные диски для улучшения производительности.",
    "english": "I need to replace the brake discs for better performance."
  },
  {
    "norwegian": "Jeg elsker å installere nye bremseskiver for bedre ytelse.",
    "russian": "Мне нравится устанавливать новые тормозные диски для улучшения производительности.",
    "english": "I love installing new brake discs for better performance."
  },
  {
    "norwegian": "Min hobby er å kalibrere drivstoffinnsprøytningen.",
    "russian": "Моё хобби - калибровка системы впрыска топлива.",
    "english": "My hobby is calibrating the fuel injection system."
  },
  {
    "norwegian": "Jeg må bytte ut speilene for bedre synlighet.",
    "russian": "Мне нужно заменить зеркала для лучшей видимости.",
    "english": "I need to replace the mirrors for better visibility."
  },
  {
    "norwegian": "Jeg planlegger å bytte eksosrør for bedre lyd.",
    "russian": "Планирую заменить выхлопную трубу для улучшения звука.",
    "english": "I'm planning to replace the exhaust pipe for better sound."
  },
  {
    "norwegian": "Jeg vurderer å installere nye seter for bedre støtte.",
    "russian": "Думаю установить новые сиденья для лучшей поддержки.",
    "english": "I'm considering installing new seats for better support."
  },
  {
    "norwegian": "Jeg elsker å justere vinkelen på hjulene mine for optimal ytelse.",
    "russian": "Мне нравится регулировать угол установки колес для оптимальной производительности.",
    "english": "I love adjusting the wheel alignment for optimal performance."
  },
  {
    "norwegian": "Jeg må bytte olje i motoren før vårens lange turer.",
    "russian": "Мне нужно сменить масло в двигателе перед длинными весенними поездками.",
    "english": "I need to change the engine oil before the long spring trips."
  },
  {
    "norwegian": "Jeg vurderer å installere nye LED-frontlykter for bedre belysning.",
    "russian": "Думаю установить новые светодиодные фары для улучшенного освещения.",
    "english": "I'm considering installing new LED headlights for better illumination."
  },
  {
    "norwegian": "Jeg må justere lufttrykket i dekkene for å forbedre kjørekomforten.",
    "russian": "Мне нужно отрегулировать давление в шинах для улучшения комфорта вождения.",
    "english": "I need to adjust the tire pressure to improve ride comfort."
  },
  {
    "norwegian": "Jeg elsker å oppgradere lydsystemet for å få bedre lydkvalitet.",
    "russian": "Мне нравится модернизировать аудиосистему для улучшения качества звука.",
    "english": "I love upgrading the sound system for better audio quality."
  },
  {
    "norwegian": "Jeg vurderer å bytte til keramiske bremseklosser for bedre ytelse.",
    "russian": "Думаю перейти на керамические тормозные колодки для улучшения производительности.",
    "english": "I'm considering switching to ceramic brake pads for better performance."
  },
  {
    "norwegian": "Jeg elsker å justere turtallet for bedre akselerasjon.",
    "russian": "Мне нравится настраивать обороты для лучшего разгона.",
    "english": "I love adjusting the RPM for better acceleration."
  },
  {
    "norwegian": "Jeg må bytte ut drivakselen etter sammenstøtet.",
    "russian": "Мне нужно заменить приводной вал после аварии.",
    "english": "I need to replace the drive shaft after the collision."
  },
  {
    "norwegian": "Jeg planlegger å installere nye høyytelsesdekk for bedre håndtering.",
    "russian": "Планирую установить новые высокопроизводительные шины для лучшего управления.",
    "english": "I'm planning to install new high-performance tires for better handling."
  },
  {
    "norwegian": "Jeg vurderer å oppgradere til sportsfjæringer.",
    "russian": "Думаю перейти на спортивную подвеску.",
    "english": "I'm considering upgrading to sport suspensions."
  },
  {
    "norwegian": "Jeg elsker å vedlikeholde clutchsystemet for optimal ytelse.",
    "russian": "Мне нравится ухаживать за системой сцепления для оптимальной работы.",
    "english": "I love maintaining the clutch system for optimal performance."
  },
  {
    "norwegian": "Jeg må bytte ut katalysatoren etter eksosproblemer.",
    "russian": "Мне нужно заменить катализатор после проблем с выхлопной системой.",
    "english": "I need to replace the catalytic converter after exhaust issues."
  },
  {
    "norwegian": "Jeg vurderer å bytte til carbon-fiber panser for lettere vekt.",
    "russian": "Думаю перейти на капот из углеродного волокна для снижения веса.",
    "english": "I'm considering switching to a carbon fiber hood for reduced weight."
  },
  {
    "norwegian": "Jeg elsker å oppgradere med racing-belte for bedre sikkerhet.",
    "russian": "Мне нравится устанавливать гоночные ремни безопасности для лучшей безопасности.",
    "english": "I love upgrading with racing belts for better safety."
  },
  {
    "norwegian": "Jeg må bytte ut termostaten før vinteren.",
    "russian": "Мне нужно заменить термостат перед зимой.",
    "english": "I need to replace the thermostat before winter."
  },
  {
    "norwegian": "Jeg vurderer å installere nye sportsfjærer for bedre kjøreegenskaper.",
    "russian": "Думаю установить новые спортивные амортизаторы для улучшения управляемости.",
    "english": "I'm considering installing new sports springs for better handling."
  },
  {
    "norwegian": "Jeg elsker å kalibrere bremser for optimal ytelse.",
    "russian": "Мне нравится калибровать тормоза для оптимальной работы.",
    "english": "I love calibrating the brakes for optimal performance."
  },
  {
    "norwegian": "Jeg vurderer å bytte til høyytelses luftfilter for å øke motorkraften.",
    "russian": "Думаю перейти на высокопроизводительный воздушный фильтр для увеличения мощности двигателя.",
    "english": "I'm considering switching to a high-performance air filter to increase engine power."
  },
  {
    "norwegian": "Jeg må skifte ut eksosventilen for å fikse lekkasje.",
    "russian": "Мне нужно заменить выпускной клапан, чтобы устранить утечку.",
    "english": "I need to replace the exhaust valve to fix the leak."
  },
  {
    "norwegian": "Jeg vurderer å installere nye dekkmønstre for bedre grep på veien.",
    "russian": "Думаю установить новые рисунки протектора для улучшенного сцепления с дорогой.",
    "english": "I'm considering installing new tire treads for better road grip."
  },
  {
    "norwegian": "Jeg elsker å justere akselavstanden for å forbedre stabiliteten.",
    "russian": "Мне нравится регулировать колёсную базу для улучшения стабильности.",
    "english": "I love adjusting the wheelbase to improve stability."
  },
  {
    "norwegian": "Jeg må bytte ut drivstoffpumpen for å løse drivstoffproblemer.",
    "russian": "Мне нужно заменить топливный насос, чтобы решить проблемы с подачей топлива.",
    "english": "I need to replace the fuel pump to fix the fuel problems."
  },
  {
    "norwegian": "Jeg vurderer å sette inn nye trimmojetter for å øke ytelsen.",
    "russian": "Думаю установить новые форсунки для улучшения работы двигателя.",
    "english": "I'm considering installing new tuning jets to improve performance."
  },
  {
    "norwegian": "Jeg elsker å bruke spesialverktøy for å justere tenningsinnstillingen.",
    "russian": "Мне нравится использовать специальные инструменты для регулировки зажигания.",
    "english": "I love using special tools to adjust the ignition timing."
  },
  {
    "norwegian": "Jeg må bytte vindusviskere før sesongen med kraftig regn starter.",
    "russian": "Мне нужно сменить дворники перед началом сезона сильных дождей.",
    "english": "I need to change the windshield wipers before the heavy rain season starts."
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