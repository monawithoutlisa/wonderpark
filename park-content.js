(function () {
  'use strict';

  const LANG = localStorage.getItem('wonderpark-language') || 'zh-Hant';
  const ZH = LANG !== 'en';
  const t = (zh, en) => ZH ? zh : en;

  const copy = {
    pageTitle: t('嬌蠻公主的人生遊樂園', "The Princess's Life Wonderpark"),
    parkName: t('嬌蠻公主的人生遊樂園', "The Princess's Life Wonderpark"),
    parkSub: t('痕跡、選擇、失敗與再出發', 'Traces, choices, failures, and second beginnings'),
    ownerName: '驕蠻公主李時珍的純情駙馬',
    ticketTitle: t('嬌蠻公主的人生遊樂園', "The Princess's Life Wonderpark"),
    intro: t(
      'gyh是誰？或許我們只能通過她曾經在這個世界上留下的一點點「痕跡」來認識，in another word，她曾經生產出來的一點點「垃圾」。在 AI 盛行的年代，這個世界有太多的人試圖蒸餾自己，解放雙手與勞動力。去除掉這個獨立於我們之外的 agent，我們還剩下什麼呢？\n\n謹以此篇「數字垃圾」獻給這個人人自危 AI 時代的自己，生命最終是自己的遊樂場，歡迎來參觀我的。',
      'Who is gyh? Perhaps we can only know her through the few “traces” she has left in this world—in another word, the little pieces of “garbage” she has produced. In an age saturated with AI, so many people try to distill themselves and liberate their hands and labor. Once the agent outside us is removed, what remains?\n\nI dedicate this piece of “digital garbage” to myself in this anxious AI age. Life is, in the end, our own amusement park. Welcome to mine.'
    ),
    routes: {
      quick: t('3分鐘速覽', '3-minute tour'),
      full: t('完整旅程', 'Full journey'),
      lab: t('創意實驗室', 'Creative lab')
    },
    routeDescriptions: {
      quick: t('四站看懂我的轉折、代表作與世界座標', 'Four stops: turning points, signature work, and world coordinates'),
      full: t('沿著全部設施慢慢走完一圈', 'Take the unhurried route through every attraction'),
      lab: t('從 AI、技能與未來方向開始', 'Start with AI, skills, and future directions')
    }
  };

  const facilityIntro = {
    gate: t(
      '這張門票不是履歷摘要，而是一份閱讀指南：你會看到我如何從比較文學走向品牌與商業，又如何把 AI 變成創作與思考工具。',
      'This ticket is not a résumé summary but a reading guide: it shows how I moved from comparative literature into brands and business, then turned AI into a tool for making and thinking.'
    ),
    ferris: t(
      '摩天輪把人生拆成六個觀景艙。每一艙回答同一個問題：當時的我看見了什麼、做了什麼選擇，以及那次選擇如何改變下一站。',
      'The wheel divides a life into six cabins. Each asks the same question: what did I notice, what did I choose, and how did that choice reshape the next stop?'
    ),
    coaster: t(
      '過山車展示的不是漂亮結論，而是項目如何經過問題定義、研究、策略選擇、落地限制與復盤。公開版保留方法，不公開敏感數據。',
      'The coaster does not display polished conclusions. It follows each project through framing, research, strategic choice, constraints, and reflection. The public edition preserves method, not confidential metrics.'
    ),
    circus: t(
      '創意實驗室收集沒有先被商業理由馴服的想法：生成式影像、Agent 交互、Command 架構，以及對 AI 時代主體性的試驗。',
      'The Creative Lab keeps ideas before they are domesticated by a business case: generative images, agent interaction, command architecture, and experiments in agency.'
    ),
    garden: t(
      '故事花園把比較文學、Schiaparelli 研究與消費者洞察種在一起。這裡展示的不是知識清單，而是我如何閱讀矛盾、表面、語境與未被說出的需求。',
      'The Story Garden plants comparative literature, Schiaparelli research, and consumer insight together. It shows not a reading list but how I read contradiction, surface, context, and unspoken needs.'
    ),
    globe: t(
      '地球儀不是打卡清單。每個地點包含一條可以走完的現實路線、一個具體場景、一段記憶，以及它如何改變我理解城市與人的方式。',
      'The globe is not a checklist. Every place contains a walkable route, a concrete scene, a memory, and a way that place changed how I understand cities and people.'
    ),
    futureland: t(
      '未來世界仍在施工：OPPO 海外行銷、AI 創作與下一份職業身份不是三條平行線，而是同一個問題——如何讓科技在不同文化裡仍然有溫度。',
      'Futureland is still under construction. OPPO global marketing, AI creation, and future work meet in one question: how can technology retain warmth across cultures?'
    ),
    arcade: t(
      '技能街機廳把能力與證據配對。每一台機器都告诉你：這項能力在哪個項目中被使用、如何被檢驗，以及它能為下一個問題做什麼。',
      'The Skills Arcade pairs capability with evidence. Every cabinet shows where a skill was used, how it was tested, and what it can do for the next problem.'
    ),
    prizes: t(
      '獎品不是獎杯，而是能重複使用的方法：把研究送到決策、把跨文化差異翻譯成策略、把失敗改寫成下一輪規則。',
      'The prizes are not trophies but reusable methods: deliver research to a decision, translate cultural difference into strategy, and rewrite failure as a rule for the next round.'
    ),
    gallery: t(
      '攝影畫廊保留旅行中真正拍下的光、建築、海面與人群。照片不證明我去過多少地方；它們記錄我在什麼時刻停下來看。',
      'The gallery keeps light, architecture, water, and crowds actually photographed on the road. The images do not prove how many places I visited; they record where I stopped to look.'
    ),
    carousel: t(
      '旋轉木馬代表那些不以效率為理由、卻反覆回到我身上的事：書法、文學、攝影、滑雪、旅行、播客與 AI 創作。',
      'The carousel holds what returns without needing an efficiency argument: calligraphy, literature, photography, snowboarding, travel, podcasting, and AI creation.'
    ),
    graveyard: t(
      '這裡已不再是墓園，而是「第二次開花」。每一次失敗都會被拆成觸發條件、錯誤判斷、系統後果與新的行動規則。',
      'This is no longer a graveyard but Second Bloom. Every failure is separated into trigger, mistaken judgment, systemic consequence, and a new operating rule.'
    ),
    dolly: t(
      'Dolly 不替我回答一切。她先辨認訪客是 HR、品牌行銷、AI 產品或朋友，再推薦一條更合適的觀看順序。',
      'Dolly does not answer everything for me. She first identifies whether the visitor is HR, brand marketing, AI product, or a friend, then suggests an appropriate route.'
    )
  };

  const places = [
    {
      id:'shanghai', name:t('上海','Shanghai'), country:t('中國','China'), lat:31.23, lon:121.47,
      period:t('原點與反覆返回','Origin and return'),
      route:[t('上海交通大學','Shanghai Jiao Tong University'),t('武康路與衡復街區','Wukang Road and the Hengfu district'),t('徐匯濱江','West Bund riverside'),t('外灘—浦東天際線','The Bund to the Pudong skyline')],
      scene:t('梧桐樹、校園石牆、黃浦江兩岸的新舊天際線。','Plane trees, campus stonework, and two eras of skyline facing each other across the Huangpu.'),
      memory:t('上海是我學會細讀的地方，也是把文學帶進品牌工作的起點。從校園走到城市商業現場，我開始意識到：語言、空間與消費選擇其實都在塑造人。','Shanghai is where I learned close reading and began bringing literature into brand work. Moving from campus to commercial settings made me notice how language, space, and consumption shape people.'),
      lens:t('原點不等於靜止；每一次返回，都會重新理解自己從哪裡出發。','An origin is not static. Every return changes the meaning of where I began.'),
      heroImage:'https://flashpacker-travelguide.de/wp-content/uploads/2018/11/China-Shanghai-Bund-Pudong-Panorama.jpg',
      credit:'Shanghai Bund and Pudong panorama'
    },
    {
      id:'amsterdam', name:t('阿姆斯特丹','Amsterdam'), country:t('荷蘭','Netherlands'), lat:52.37, lon:4.90,
      period:t('交換與跨文化協作','Exchange and cross-cultural collaboration'),
      route:[t('阿姆斯特丹大學','University of Amsterdam'),t('運河帶','Canal Belt'),t('博物館廣場','Museumplein'),t('De Pijp 街區','De Pijp'),t('IJ 河渡輪與 NDSM','IJ ferry and NDSM')],
      scene:t('自行車、窄屋、運河、低垂冬光，以及渡輪把城市日常切成兩岸。','Bicycles, narrow houses, canals, low winter light, and a ferry dividing everyday life between two shores.'),
      memory:t('交換期間，我與來自不同國家的隊友討論電動車市場進入策略。有人看品類，有人看消費者；有人相信永續敘事，也有人追問電池污染與生命週期。真正的合作不是快速一致，而是讓衝突留下足夠久，直到問題被重新定義。','During exchange, a multicultural team debated an EV go-to-market strategy. Some began with category structure, others with consumers; some trusted the sustainability story, others questioned batteries and life cycles. Collaboration meant keeping disagreement alive until the problem could be reframed.'),
      lens:t('好奇與傾聽不是禮貌，而是一種整合不同證據的工作方法。','Curiosity and listening are not manners; they are methods for integrating conflicting evidence.'),
      heroImage:'https://www.shutterbug.com/images/photo_post/%5Buid%5D/Amsterdam%20Canal%20Side.JPG',
      credit:'Amsterdam canal houses'
    },
    {
      id:'singapore', name:t('新加坡','Singapore'), country:t('新加坡','Singapore'), lat:1.35, lon:103.82,
      period:t('行銷科學與城市實驗','Marketing science and urban experiments'),
      route:[t('南洋理工大學','Nanyang Technological University'),t('校園 Prime 超市','Prime supermarket field site'),t('Kallang／Sports Hub','Kallang / Sports Hub'),t('市中心與濱海灣','Downtown and Marina Bay'),t('East Coast Park','East Coast Park')],
      scene:t('熱帶暴雨後的校園、冷氣很足的零售空間、場館人流與高度編排的城市效率。','A campus after tropical rain, intensely air-conditioned retail, event crowds, and a city engineered around flow.'),
      memory:t('在 NTU，我把人文敏感度與市場研究、商業分析放進同一張工作台。Prime 超市民族誌讓我重新觀看自助結帳、端架停留與學生趕時間的微小動作；Kallang 項目則把一次到訪重新設計成記憶、身份與日常節律。','At NTU, I placed humanistic sensitivity beside market research and business analytics. Prime supermarket ethnography made checkout emotion, end-cap pauses, and student urgency visible; Kallang turned a visit into memory, identity, and routine.'),
      lens:t('真正的消費者洞察，常藏在看起來最普通的動線裡。','Consumer insight often hides in the most ordinary route through a place.'),
      heroImage:'https://tenckhoff.de/sites/default/files/styles/fotoarchiv_tenckhoff_colorbox/public/2025-04/2025-04-09_Singapur-bei-Tag%20%281%20von%2014%29_0.jpg.webp?itok=5wst0pur',
      credit:'Singapore skyline over Marina Bay'
    },
    {
      id:'taiwan', name:t('台灣','Taiwan'), country:t('東亞','East Asia'), lat:23.70, lon:120.96,
      period:t('繁體字、夜市與步行尺度','Traditional characters, night markets, and walkable scale'),
      route:[t('台北車站','Taipei Main Station'),t('大稻埕與迪化街','Dadaocheng and Dihua Street'),t('中山街區','Zhongshan district'),t('饒河夜市','Raohe Night Market'),t('象山看台北夜景','Elephant Mountain night view')],
      scene:t('騎樓、機車流、繁體招牌、便利商店與夜市攤位在同一條街上疊加。','Arcades, scooters, Traditional Chinese signs, convenience stores, and night-market stalls layered on one street.'),
      memory:t('台灣讓我重新感受到語言的熟悉與差異可以同時存在。相同漢字在不同生活制度裡有不同節奏；城市不是靠地標被記住，而是靠走路、吃東西與辨認招牌的速度。','Taiwan reminded me that linguistic familiarity and difference can coexist. Shared characters move at a different rhythm inside another everyday system; a city is remembered through walking, eating, and reading signs as much as through landmarks.'),
      lens:t('在地化不是把文字換一套字體，而是理解生活節奏如何改變意義。','Localization is not swapping a script; it is understanding how everyday rhythm changes meaning.'),
      heroImage:'https://images.thespunkycurl.com/blog/default/content/taipei-54.jpg',
      credit:'Taipei street at night'
    },
    {
      id:'japan', name:t('日本／青森','Japan / Aomori'), country:t('東亞','East Asia'), lat:40.82, lon:140.74,
      period:t('版畫、鐵路與慢觀看','Printmaking, railways, and slow looking'),
      route:[t('青森站','Aomori Station'),t('睡魔之家 WA RASSE','Nebuta Museum WA RASSE'),t('青森縣立美術館','Aomori Museum of Art'),t('三內丸山遺址','Sannai-Maruyama Site'),t('海邊與地方列車','Waterfront and local trains')],
      scene:t('白色美術館、巨大雕塑、不可拍照的版畫展，以及在站台上反覆確認日文站名。','A white museum, monumental sculpture, a no-photography print exhibition, and repeated checks of Japanese station names on the platform.'),
      memory:t('在青森看日本版畫時，我被迫把手機收起來，只能靠觀看與記憶保存作品。這反而提醒我：不是所有痕跡都需要被拍下；有些觀看因為無法複製，才真正留在身體裡。','At a Japanese print exhibition in Aomori, I had to put my phone away and keep the work through attention and memory. It reminded me that not every trace needs a photograph; some looking stays precisely because it cannot be copied.'),
      lens:t('慢觀看不是降低效率，而是讓感受在被命名前先完整發生。','Slow looking is not inefficiency; it lets perception happen before it is named.'),
      heroImage:'https://cdn.tohokuandtokyo.org/front_assets/images_other/spot/big/aflo_MEPA000774.jpg',
      credit:'Aomori Museum of Art'
    },
    {
      id:'australia', name:t('澳洲／雪梨','Australia / Sydney'), country:t('大洋洲','Oceania'), lat:-33.87, lon:151.21,
      period:t('港灣、公共空間與戶外生活','Harbour, public space, and outdoor life'),
      route:[t('Circular Quay','Circular Quay'),t('雪梨歌劇院','Sydney Opera House'),t('皇家植物園','Royal Botanic Garden'),t('The Rocks','The Rocks'),t('渡輪前往 Manly','Ferry to Manly')],
      scene:t('渡輪、歌劇院白色屋頂、海風吹過的步道，以及城市生活直接打開到水面。','Ferries, the white sails of the Opera House, windy promenades, and urban life opening directly onto water.'),
      memory:t('澳洲的記憶更像一個鬆開的節奏：城市並不要求人一直向內擠壓，而是把港灣、草地與步道留在日常中。它讓我重新思考，好的體驗不只是增加功能，也可能是留出空間。','Australia remains as a loosened rhythm: the city does not always compress people inward, but keeps harbour, lawn, and promenade inside everyday life. Good experience may be less about adding functions than leaving room.'),
      lens:t('設計空白與設計功能同樣重要。','Designing space can matter as much as designing function.'),
      heroImage:'https://www.australia.com/content/experience-fragments/listicles/australia/vi_vn/things-to-do/arts-and-culture/australias-historical-and-cultural-experiences/visit-the-icons/master/_jcr_content/root/listiclepagecontaine/par_1/gallerycarouselconta/carouselitems/gallerycarouselitem_250085357/image/galleryCarouselImage.adapt.740.medium.jpg',
      credit:'Sydney Harbour icons'
    },
    {
      id:'bali', name:t('峇里島','Bali'), country:t('印尼','Indonesia'), lat:-8.34, lon:115.09,
      period:t('儀式、稻田與感官恢復','Ritual, rice terraces, and sensory recovery'),
      route:[t('烏布市場','Ubud Market'),t('聖猴森林','Sacred Monkey Forest'),t('Tegalalang 梯田','Tegalalang Rice Terraces'),t('水神廟或村落寺廟','Water temple or village shrine'),t('日落海灘','Sunset beach')],
      scene:t('濕熱空氣、供品花瓣、摩托車、稻田層次，以及日落前突然變慢的時間。','Humid air, flower offerings, scooters, layered rice terraces, and time slowing before sunset.'),
      memory:t('峇里島像一次感官重啟。當注意力從螢幕回到氣味、濕度、腳下路面與儀式細節，我重新理解「恢復」不是停止工作，而是把感受能力找回來。','Bali felt like a sensory reset. Returning attention from screens to smell, humidity, ground, and ritual made recovery feel less like stopping work and more like regaining perception.'),
      lens:t('創造力需要輸入，也需要讓感官重新有反應。','Creativity needs input—and senses responsive enough to receive it.'),
      heroImage:'https://www.shoreexcursions.asia/wp-content/uploads/2018/11/Bali-Nature-Exploring.jpg',
      credit:'Tegalalang rice terraces'
    },
    {
      id:'malaysia', name:t('馬來西亞／吉隆坡','Malaysia / Kuala Lumpur'), country:t('東南亞','Southeast Asia'), lat:3.14, lon:101.69,
      period:t('多語城市與混合日常','A multilingual city and hybrid everyday life'),
      route:[t('茨廠街','Petaling Street'),t('獨立廣場','Merdeka Square'),t('中央市場','Central Market'),t('武吉免登','Bukit Bintang'),t('雙子塔與 KLCC 公園','Petronas Towers and KLCC Park')],
      scene:t('中文、馬來文與英文招牌並列，街市、宗教空間、商場與摩天樓彼此沒有被完全分開。','Chinese, Malay, and English signs coexist while markets, religious spaces, malls, and towers remain visibly entangled.'),
      memory:t('馬來西亞讓「多元文化」從抽象詞變成一種非常具體的日常協商：吃什麼、怎麼稱呼、在哪裡停留、誰能看懂哪一塊招牌。差異不是活動主題，而是城市每天運轉的方法。','Malaysia turned “multiculturalism” from an abstract word into everyday negotiation: what to eat, how to address people, where to pause, and who can read which sign. Difference is not an event theme but a way the city works.'),
      lens:t('跨文化策略要處理同時存在的多套生活邏輯。','Cross-cultural strategy must hold several everyday logics at once.'),
      heroImage:'https://ik.imagekit.io/tvlk/blog/2025/02/menara-kembar-malaysia.webp',
      credit:'Petronas Twin Towers'
    },
    {
      id:'paris', name:t('巴黎','Paris'), country:t('歐洲','Europe'), lat:48.86, lon:2.35,
      period:t('文學、墓園與博物館','Literature, memorials, and museums'),
      route:[t('奧賽博物館','Musée d’Orsay'),t('塞納河左岸','Left Bank'),t('莎士比亞書店周邊','Around Shakespeare and Company'),t('拉雪茲神父公墓','Père Lachaise Cemetery')],
      scene:t('梵谷的夜色、奧斯卡・王爾德墓上的痕跡，以及文學如何被城市保存。','Van Gogh’s night, traces left on Oscar Wilde’s grave, and the ways a city preserves literature.'),
      memory:t('在墓園與博物館之間，我感受到作品離開作者之後仍會被不斷觸摸、觀看與重新解釋。這也成為遊樂園「痕跡」概念的一部分。','Between cemetery and museum, I felt how work continues to be touched, viewed, and reinterpreted after it leaves its maker. That became part of the park’s idea of traces.'),
      lens:t('作品一旦公開，就會進入別人的記憶系統。','Once public, a work enters other people’s memory systems.'),
      heroImage:'assets/travel/photo-03.webp', credit:t('個人旅行攝影：拉雪茲神父公墓','Personal photograph: Père Lachaise Cemetery')
    },
    {
      id:'barcelona', name:t('巴塞隆納','Barcelona'), country:t('歐洲','Europe'), lat:41.39, lon:2.17,
      period:t('建築、色彩與身體感','Architecture, colour, and embodied looking'),
      route:[t('聖家堂','Sagrada Família'),t('格拉西亞大道','Passeig de Gràcia'),t('哥德區','Gothic Quarter'),t('海岸線','Waterfront')],
      scene:t('彩色玻璃把午後光線變成一種可以走進去的材料。','Stained glass turns afternoon light into a material one can walk through.'),
      memory:t('聖家堂讓我理解空間不只被眼睛觀看，也被身體感受：色彩落在皮膚與牆面上，建築成為一種時間性的媒介。','Sagrada Família made architecture feel bodily: colour fell across skin and stone, turning space into a medium of time.'),
      lens:t('視覺體驗最強的時候，往往已經接近觸覺。','At its strongest, visual experience approaches touch.'),
      heroImage:'assets/travel/photo-05.webp', credit:t('個人旅行攝影：彩色玻璃與室內光','Personal photograph: stained glass and interior light')
    },
    {
      id:'vienna', name:t('維也納','Vienna'), country:t('歐洲','Europe'), lat:48.21, lon:16.37,
      period:t('博物館、人群與觀看秩序','Museums, crowds, and the order of looking'),
      route:[t('美景宮','Belvedere'),t('博物館區','MuseumsQuartier'),t('霍夫堡','Hofburg'),t('溫室與冬日街道','Glasshouse and winter streets')],
      scene:t('人群圍在克林姆《吻》前，觀看本身成為另一幅作品。','A crowd gathers around Klimt’s The Kiss until looking itself becomes another artwork.'),
      memory:t('我開始拍的不是名畫本身，而是人們如何站在名畫前。這種視角後來也進入消費者研究：不要只看物件，也看人與物件之間發生了什麼。','I began photographing not only the painting but how people stood before it. That perspective later entered consumer research: look not just at objects, but at what happens between people and objects.'),
      lens:t('行為是意義正在發生的地方。','Behavior is where meaning is happening.'),
      heroImage:'assets/travel/photo-09.webp', credit:t('個人旅行攝影：美景宮《吻》前的人群','Personal photograph: visitors before The Kiss at the Belvedere')
    },
    {
      id:'norway', name:t('挪威峽灣','Norwegian Fjords'), country:t('歐洲','Europe'), lat:61.00, lon:6.50,
      period:t('渡輪、雪線與移動中的安靜','Ferries, snow lines, and quiet in motion'),
      route:[t('峽灣渡輪','Fjord ferry'),t('舷窗觀景','Porthole view'),t('沿岸小鎮','Coastal town'),t('雪山與開放水域','Snow mountains and open water')],
      scene:t('咖啡桌、紅色座椅、舷窗與幾乎不需要解釋的藍。','A coffee table, a red chair, a porthole, and a blue that needs little explanation.'),
      memory:t('渡輪上的移動沒有催促感。風景不是一個抵達點，而是在窗外持續變化；我第一次很清楚地感到，路程本身也可以是完整內容。','Movement on the ferry did not feel urgent. The landscape was not an arrival point but a continuous change outside the window; the journey itself became complete content.'),
      lens:t('不是每段路都需要被壓縮成最短時間。','Not every route should be compressed into the shortest time.'),
      heroImage:'assets/travel/photo-12.webp', credit:t('個人旅行攝影：挪威峽灣','Personal photograph: Norwegian fjord')
    }
  ];

  const travelRoutes = [
    ['shanghai','amsterdam'], ['amsterdam','paris'], ['amsterdam','barcelona'],
    ['amsterdam','vienna'], ['amsterdam','norway'], ['amsterdam','singapore'],
    ['singapore','taiwan'], ['singapore','japan'], ['singapore','australia'],
    ['singapore','bali'], ['singapore','malaysia']
  ];

  const photos = [
    ['01',t('光的隊列','A Procession of Light'),t('歐洲教堂','European church'),null,t('真正留下來的不是儀式名稱，而是燭光把人群短暫連在一起的方式。','What stayed was not the name of the ritual but how candlelight briefly connected a crowd.')],
    ['02',t('夜間噴泉','Fountain After Dark'),t('義大利','Italy'),null,t('夜色把雕塑從城市背景變成舞台主角。','Night turns civic sculpture from background into protagonist.')],
    ['03',t('留下痕跡的人','A Writer and His Traces'),t('巴黎 · 拉雪茲神父公墓','Paris · Père Lachaise'),'paris',t('奧斯卡・王爾德墓上的字、花與吻痕讓紀念成為持續發生的共同寫作。','Words, flowers, and marks on Oscar Wilde’s grave make remembrance an ongoing collective text.')],
    ['04',t('渡輪上的一杯咖啡','Coffee on the Ferry'),t('挪威峽灣','Norwegian fjords'),'norway',t('窗外一直在移動，桌面卻很安靜；路程第一次不再只是等待抵達。','Outside kept moving while the table remained still; the journey stopped being merely a wait for arrival.')],
    ['05',t('彩色玻璃把光變成材料','When Light Becomes Material'),t('巴塞隆納 · 聖家堂','Barcelona · Sagrada Família'),'barcelona',t('色彩落在牆面與皮膚上，觀看開始接近觸覺。','Colour lands on stone and skin until looking approaches touch.')],
    ['06',t('冬夜旋轉木馬','Carousel in Winter'),t('歐洲冬季街市','European winter market'),null,t('成人也需要某些沒有目的地的旋轉。','Adults also need forms of movement with no destination.')],
    ['07',t('舷窗裡的海岸','Coast Through a Porthole'),t('挪威峽灣','Norwegian fjords'),'norway',t('一個小小的框讓遼闊變得可以被注視。','A small frame makes immensity possible to hold in view.')],
    ['08',t('玻璃房外的冬日','Winter Outside the Glasshouse'),t('維也納','Vienna'),'vienna',t('建築表面保存著冷空氣與短暫陽光的觸感。','The building surface holds cold air and a short measure of sun.')],
    ['09',t('人們如何看《吻》','How People Look at The Kiss'),t('維也納 · 美景宮','Vienna · Belvedere'),'vienna',t('我開始注意觀看者的站位、距離與手機；行為本身成為第二幅畫。','I began noticing visitors’ position, distance, and phones; behavior became a second picture.')],
    ['10',t('海岸上午','Morning by the Coast'),t('地中海沿岸','Mediterranean coast'),null,t('躺椅、礫石與海水把一天的速度調慢。','Deck chairs, pebbles, and water slow the day down.')],
    ['11',t('路過的入口','An Entrance Passed in Travel'),t('南歐街角','Southern European street'),null,t('旅行常被一塊手寫牌、一扇門和沒有安排的停留保存。','Travel is often kept by a handwritten sign, a doorway, and an unplanned pause.')],
    ['12',t('開放水域','Open Water'),t('挪威峽灣','Norwegian fjords'),'norway',t('雪線、深色水面與一艘小船，讓尺度突然改變。','Snow line, dark water, and one small boat abruptly change the sense of scale.')],
    ['13',t('吊燈與織物','Chandelier and Textile'),t('歐洲博物館','European museum'),null,t('我對材料的興趣常從裝飾開始，最後走向表面如何保存歷史。','My interest in material often begins with ornament and ends with how surfaces keep history.')],
    ['14',t('梵谷的夜色','Van Gogh’s Night'),t('巴黎 · 奧賽博物館','Paris · Musée d’Orsay'),'paris',t('畫中的水面把夜空拆成一段段反光；原作的尺度與顏料無法被螢幕代替。','Reflections break the night into strokes; the scale and paint of the original resist the screen.')]
  ].map(([number,title,location,cityId,caption]) => ({
    id:`photo-${number}`, title, src:`assets/travel/photo-${number}.webp`,
    thumb:`assets/travel/photo-${number}-thumb.webp`, alt:`${title}, travel photograph`,
    caption, location, cityId:cityId || undefined
  }));

  const projects = [
    {
      slug:'fenty-beauty', title:'Fenty Beauty',
      role:t('電商市場 · 數據洞察與直播體驗','E-commerce marketing · data insight and livestream experience'),
      time:t('LVMH P&C · 上海','LVMH P&C · Shanghai'),
      oneLiner:t('把站外熱點、站內搜尋、商品與直播間行為連成一條可被決策的消費者路徑。','Connected off-platform moments, on-site search, product behavior, and livestream interaction into one decision-ready consumer journey.'),
      challenge:t('大促期間訊號很多，但流量上升不等於消費者真正理解產品。需要辨認哪些站外節點帶來有效搜尋、哪些直播內容能把興趣推進到選擇。','Campaign periods generate abundant signals, but traffic does not equal product understanding. The task was to identify which external moments produced useful search and which livestream choices moved interest toward selection.'),
      actions:[
        t('以搜索進店與站內熱搜詞追蹤主推底妝、唇妝產品的需求語言。','Tracked search-to-store behavior and on-site search language around hero complexion and lip products.'),
        t('把大盤、店鋪、貨品與直播間資料整合成可連續閱讀的日報／週報。','Synthesized market, store, product, and livestream signals into decision-ready daily and weekly views.'),
        t('根據競品與即時回饋調整直播視覺、主播話術與互動節奏。','Adjusted livestream visuals, host scripts, and interaction rhythm using competitor evidence and live feedback.')
      ],
      decision:t('不只追求更大流量，而是優先提高消費者從「看見」到「理解色號與產品價值」的資訊效率。','Prioritized the information efficiency between seeing a product and understanding shade and value, rather than maximizing traffic alone.'),
      learning:t('品牌感與數據不是對立面：數據告訴我摩擦發生在哪裡，品牌判斷決定應該用什麼方式修正。','Brand sensibility and data are not opposites: data locates friction, while brand judgment decides how to resolve it.'),
      outcome:t('公開版不展示銷售、轉化或投放數據；保留的是從訊號到決策的分析方法。','Commercial, conversion, and media figures remain private; the public record preserves the method from signal to decision.'),
      coverImage:'assets/projects/anonymous-project-cover.png', tags:['Brand','E-commerce','Consumer Journey','Analytics'], links:{}
    },
    {
      slug:'pizza-hut', title:'Pizza Hut',
      role:t('品類行銷 · 新品上市與消費者研究','Category marketing · launch and consumer research'),
      time:t('百勝中國 · 上海','Yum China · Shanghai'),
      oneLiner:t('從「比薩堡」新品類到季節性口味與社媒傳播，把研究變成門店、價格、物料和內容的共同語言。','Turned research into a shared language across store execution, pricing, materials, and social content—from a new Pizza Dough Burger category to seasonal flavors.'),
      challenge:t('新品類既要讓人一眼理解，又不能被看成普通漢堡；不同口味、套餐與社媒訊息也需要在有限窗口內做出選擇。','The new category had to be immediately understandable without collapsing into “just another burger,” while flavors, bundles, and social messages competed for a limited launch window.'),
      actions:[
        t('用案頭研究、競品銷售分析與焦點小組辨認「非預製比薩餅皮」「質價比」等可被消費者理解的賣點。','Combined desk research, competitor performance, and focus groups to identify understandable differentiators such as freshly prepared pizza dough and value.'),
        t('以門店訪談、社媒聆聽、MaxDiff 與評論情感分析比較口味需求。','Used store interviews, social listening, MaxDiff, and review sentiment to compare flavor preferences.'),
        t('把研究結論落到單品／套餐定價、線上線下物料與達人 Brief。','Translated findings into item and bundle pricing, online/offline materials, and creator briefs.')
      ],
      decision:t('先建立新品類的認知錨點，再增加創意；先讓人知道它是什麼、為什麼值得，再談更多傳播花樣。','Built a category anchor before adding creative variation: first make the product legible and worthwhile, then diversify communication.'),
      learning:t('行銷策略只有穿過門店、供應、價格與內容限制後，才算真正成立。','Marketing strategy becomes real only after it survives store, supply, price, and content constraints.'),
      outcome:t('公開版不披露門店數、銷量、投放回報或平台表現。','Store counts, unit sales, media returns, and platform results remain private.'),
      coverImage:'assets/projects/anonymous-project-cover.png', tags:['Retail','Activation','Insight','GTM'], links:{}
    },
    {
      slug:'breitling', title:'Breitling',
      role:t('女性消費者策略 · 品牌定位','Women consumer strategy · brand positioning'),
      time:t('NTU 策略行銷客戶項目','NTU Strategic Marketing client project'),
      oneLiner:t('把「飛行員精神」從男性冒險神話重新翻譯為女性對人生方向的自我掌控。','Reframed the pilot spirit from a masculine adventure myth into women’s self-command over the direction of their lives.'),
      challenge:t('奢侈腕錶的女性溝通容易落入柔美、珠寶化或「取悅目光」的刻板框架，同時又不能失去品牌的工具錶可信度。','Women’s luxury-watch communication can default to prettiness, jewelry, or pleasing the gaze—without preserving the credibility of a performance watch.'),
      actions:[
        t('建立 feminine–masculine × elegant–flashy 的競爭定位圖，辨認被忽略的「非取悅型優雅」。','Mapped competitors across feminine–masculine and elegant–flashy axes to identify an underclaimed territory: elegance without pleasing.'),
        t('將女性受眾分為都市獨立者與追求小眾者，從生活語境而非人口標籤理解需要。','Developed urban-independent and niche-seeking segments from life context rather than demographic stereotypes.'),
        t('以精準認證、防水能力與飛行傳統作為「可靠陪伴」的理由支撐。','Used precision certification, water resistance, and aviation heritage as reasons to believe in reliable companionship.')
      ],
      decision:t('不把品牌變得更“女性化”，而是擴大「誰有資格代表飛行員精神」的答案。','Did not make the brand more “feminine”; expanded who is allowed to embody the pilot spirit.'),
      learning:t('最有力量的定位往往不是添加新的形容詞，而是重寫一個舊符號的擁有者。','The strongest positioning often does not add an adjective; it rewrites who owns an existing symbol.'),
      outcome:t('客戶資料、細分規模與項目評分不在公開版呈現。','Client data, segment sizing, and project evaluation remain private.'),
      coverImage:'assets/projects/anonymous-project-cover.png', tags:['Brand Strategy','Consumer Research','Luxury','Positioning'], links:{}
    },
    {
      slug:'kallang', title:'Kallang',
      role:t('互動產品概念 · 消費者旅程與留存','Interactive product concept · journey and retention'),
      time:t('NTU 行業項目','NTU industry project'),
      oneLiner:t('用互動地圖、NFC 任務與 AI 記憶路線，把一次場館到訪變成可延續的身份與習慣。','Used an interactive map, NFC quests, and AI memory routes to turn a venue visit into identity and habit.'),
      challenge:t('場館流量高度事件化：人為演唱會或運動到訪，活動結束後關係也迅速結束。真正的問題不是下載，而是如何讓下一次到訪有理由發生。','Venue traffic is event-led: people arrive for concerts or sport, then the relationship ends. The real challenge was not download, but creating a reason for another visit.'),
      actions:[
        t('Acquisition：票後落地頁、場內 QR/NFC 與社交分享，把下載放在自然動線中。','Acquisition: post-ticket landing pages, in-venue QR/NFC, and social sharing placed download inside the natural journey.'),
        t('Activation：入口、餐飲、粉絲區、周邊的任務與即時回饋，讓第一次使用有清晰進展。','Activation: entry, F&B, fan-zone, and merchandise quests gave the first visit visible progress.'),
        t('Retention：AI 依興趣與到訪意圖生成路線，沉澱記憶卡、徽章與里程碑，再推薦下一次活動。','Retention: AI generated routes from interests and intent, stored memory cards, badges, and milestones, then recommended a next visit.')
      ],
      decision:t('降低純折扣依賴，把獎勵從一次性 voucher 改為記憶、身份與連續到訪的可見累積。','Reduced reliance on one-off vouchers and made memory, identity, and repeat visits visibly cumulative.'),
      learning:t('AI 個人化只有接入真實場景、行為與時間節律，才不會停留在聊天框裡。','AI personalization becomes meaningful only when connected to place, behavior, and time—not confined to a chat box.'),
      outcome:t('公開版不呈現合作方資料、預算、KPI 或內部反饋原文。','Partner data, budget, KPI, and internal feedback remain private.'),
      coverImage:'assets/projects/anonymous-project-cover.png', tags:['Product','Interaction','NFC','AI','Retention'], links:{}
    },
    {
      slug:'sleepezy', title:'Sleepezy',
      role:t('健康品牌重塑 · 定位與長期路線圖','Wellness rebrand · positioning and long-term roadmap'),
      time:t('NTU 行業項目','NTU industry project'),
      oneLiner:t('把磁療枕從難以理解的睡眠科技，重新定位為「睡醒後更好的自己」的日常健康體驗。','Repositioned a magnetic pillow from hard-to-explain sleep technology toward the everyday promise of a better self after rest.'),
      challenge:t('品類定義模糊、磁療主張存在信任門檻，功能語言也很難建立情緒連結。','The category was unclear, magnetic claims faced a trust barrier, and functional language struggled to create emotional connection.'),
      actions:[
        t('以「Rest Easy, Live Easy」把溝通焦點從睡眠過程移到第二天的狀態。','Used “Rest Easy, Live Easy” to move communication from the act of sleeping to the quality of the next day.'),
        t('建立深藍、鼠尾草綠與暖米色的感官系統，以雲枕與呼吸波紋降低醫療感。','Built a deep-blue, sage, and warm-cream sensory system, using cloud-pillow and breathing-wave symbols to reduce clinical distance.'),
        t('用試用、KOC、評價與短時睡前儀式逐步建立信任，而不是一次性解釋全部科技。','Built trust progressively through trial, KOC evidence, reviews, and a short bedtime ritual rather than overexplaining technology at once.')
      ],
      decision:t('避免承諾無法在公開傳播中充分驗證的醫療效果，優先溝通非藥物、舒適與日常恢復。','Avoided overpromising medical effects that could not be sufficiently evidenced in public communication; prioritized non-drug comfort and everyday recovery.'),
      learning:t('信任不是一句 RTB，而是消費者可以逐步接近、試用、驗證與退出的體驗結構。','Trust is not one reason-to-believe; it is a structure consumers can approach, try, verify, and leave.'),
      outcome:t('配方、合作方、預算與商業預測不在公開版展示。','Formulation, partner, budget, and commercial projections remain private.'),
      coverImage:'assets/projects/anonymous-project-cover.png', tags:['Rebrand','Wellness','Positioning','Trust'], links:{}
    },
    {
      slug:'100plus', title:'100PLUS',
      role:t('功能飲料消費者研究 · 場景與細分','Functional beverage research · occasions and segmentation'),
      time:t('NTU 消費者研究項目','NTU consumer research project'),
      oneLiner:t('從運動後、上課、通勤等補水時刻，理解口味、低糖、電解質與營養標示如何共同影響選擇。','Examined how taste, low sugar, electrolytes, and nutrition labels shape choice across post-exercise, class, and commute occasions.'),
      challenge:t('功能飲料既是解渴產品，也是運動、健康與日常節奏的符號；單問偏好很容易忽略情境差異與學生樣本偏差。','A functional drink is both refreshment and a signal of sport, health, and routine. Preference alone can hide occasion differences and student-sample bias.'),
      actions:[
        t('以補水、口味、低糖、電解質與 Nutri-Grade 建立可比較的選擇因素。','Structured comparable choice factors around hydration, taste, low sugar, electrolytes, and Nutri-Grade.'),
        t('區分運動後、課堂、通勤與社交等使用時刻，而不是只按人口屬性分群。','Separated post-exercise, class, commute, and social occasions instead of segmenting only by demographics.'),
        t('預先辨認校園樣本與渠道差異，將偏差寫進研究解讀。','Made campus-sample and channel bias explicit in interpretation.')
      ],
      decision:t('把「誰喜歡」改寫為「在什麼時刻、為了什麼任務而選擇」。','Reframed “who likes it” as “in what moment, and for what job, is it chosen?”'),
      learning:t('好的研究不假裝樣本完美；它告訴決策者證據能支持到哪裡、不能支持什麼。','Good research does not pretend the sample is perfect; it marks what the evidence can and cannot support.'),
      outcome:t('樣本規模、品牌內部假設與量化結果不在公開版展示。','Sample size, internal hypotheses, and quantitative results remain private.'),
      coverImage:'assets/projects/anonymous-project-cover.png', tags:['Research','Segmentation','Occasion','Strategy'], links:{}
    }
  ];

  const learning = {
    prompts:[
      {title:t('比較文學式追問','Comparative-literature questioning'),useCase:t('在單一答案之外尋找語境、權力與矛盾。','Find context, power, and contradiction beyond a single answer.'),fullContent:t('先問一段敘事如何成立，再問它排除了誰、依賴哪些感官與價值假設。這種提問從文學研究延伸到品牌定位與 AI 產品：任何看似自然的答案，背後都有被隱藏的選擇。','Ask how a narrative is constructed, whom it excludes, and which sensory and value assumptions it depends on. The method extends from literary study to brand and AI product work: every seemingly natural answer conceals choices.')},
      {title:t('消費者研究三角驗證','Consumer research triangulation'),useCase:t('避免把一句順耳的洞察誤當成真相。','Avoid mistaking a persuasive sentence for truth.'),fullContent:t('並置訪談中的自我敘述、實際行為與商業資料。當三種證據不一致時，不急著平均，而是把矛盾當成新的研究問題。','Place self-reported interview narratives beside observed behavior and commercial data. When they disagree, do not average them away; treat the contradiction as a new research question.')},
      {title:t('AI 反方審稿','AI as an Adversarial Reviewer'),useCase:t('在執行前暴露假設與二階後果。','Expose assumptions and second-order effects before execution.'),fullContent:t('要求 AI 分別扮演消費者、財務、營運與反對者，指出不可逆決策、證據缺口與停止條件；最後由人決定哪些反對值得採納。','Ask AI to act as consumer, finance, operations, and dissenter; identify irreversible decisions, evidence gaps, and stop conditions; let a human decide which objections matter.')}
    ],
    methods:[
      {title:t('細讀與轉譯','Close Reading & Translation'),appliesTo:t('比較文學、品牌語言、使用者需求','Comparative literature, brand language, and user needs'),summary:t('逐字閱讀不是為了慢，而是辨認詞語如何分配可見性、角色與價值。轉譯時不追求表面對應，而是保留語境中的張力。','Close reading is not slowness for its own sake; it reveals how words distribute visibility, roles, and value. Translation preserves tension rather than superficial equivalence.')},
      {title:t('做中學','Learning by Doing'),appliesTo:t('陌生工具、模糊問題、產品直覺','New tools, ambiguous problems, and product intuition'),summary:t('用最小作品驗證最大的未知：先做一個可以被使用、反駁或放棄的版本，再讓真實互動修正想法。','Build the smallest artifact that tests the biggest unknown—something usable, falsifiable, or discardable—then let interaction correct the idea.')},
      {title:t('從研究到決策','Research to Decision'),appliesTo:t('Fenty、Pizza Hut、Breitling、100PLUS','Fenty, Pizza Hut, Breitling, and 100PLUS'),summary:t('研究輸出必須指向選擇：優先級、定位、訊息、路徑或下一個實驗；如果沒有決策目的地，洞察只是一段漂亮敘事。','Research must arrive at a choice—priority, positioning, message, journey, or next experiment. Without a decision destination, insight is only elegant prose.')}
    ],
    notes:[
      {title:t('Schiaparelli：觸覺現代主義','Schiaparelli: Tactile Modernism'),source:t('論文研究','Research paper'),summary:t('《“Sumptuous materials”: Elsa Schiaparelli’s Wearable Artforms and Tactile Modernism》把服裝視為可穿戴的知識形式：縫線、表面、材質錯置與身體接觸共同重組女性主體。Desk Suit、Lobster Dress、Tear Dress 不是裝飾奇觀，而是讓觀看接近觸摸、讓身份保持不穩定的跨媒介實驗。','“Sumptuous materials”: Elsa Schiaparelli’s Wearable Artforms and Tactile Modernism treats clothing as wearable knowledge. Seam, surface, material estrangement, and bodily contact recompose feminine subjectivity. Desk Suit, Lobster Dress, and Tear Dress make looking approach touch and keep identity unstable across media.')},
      {title:t('Trim & Seam：剪裁也是思考方法','Trim & Seam as a Method of Thought'),source:t('論文核心命題','Core thesis'),summary:t('剪裁打斷完整性的幻想，縫合把記憶、敘事與材質重新連接。這也成為我的工作隱喻：拆開被自然化的問題，再用證據與語境縫出新的方向。','Cutting interrupts the fantasy of wholeness; seaming reconnects memory, narrative, and material. It became a working metaphor: separate what has been naturalized, then stitch a direction from evidence and context.')},
      {title:t('消費者研究不是找一句洞察','Research Is Not One Perfect Insight'),source:t('思考筆記','Working note'),summary:t('真正有用的研究保留矛盾，明確偏差，並把證據送到可以被執行與驗證的決策。','Useful research preserves contradiction, states bias, and delivers evidence to a decision that can be acted on and tested.')}
    ],
    readings:[
      {title:t('女性主體、表面與魅惑','Feminine Subjectivity, Surface, and Glamour'),author:t('Schiaparelli 研究線索','Schiaparelli research thread'),summary:t('魅惑不是被觀看，而是控制觀看的距離、時間與可解讀程度；可見並不等於可被完全理解。','Glamour is not merely being seen; it controls distance, time, and legibility. Visibility does not require complete readability.')},
      {title:t('AI 與共同演化','AI & Co-evolution'),author:t('閱讀線索','Reading thread'),summary:t('工具不只替人工作，也反過來塑造人如何注意、判斷與創作。因此 Command Development 同時是在設計人的責任邊界。','Tools do not only work for people; they reshape attention, judgment, and creation. Command Development therefore designs boundaries of human responsibility.')}
    ], tools:[]
  };

  const aiLab = {
    gallery:[
      ['Asteroid Civilization','assets/ai-lab/asteroid-civilization.webp',t('在宇宙尺度裡保留溫柔。','Tenderness at cosmic scale.')],
      ['Coffee Shop in a Stone','assets/ai-lab/stone-cafe.webp',t('讓溫暖藏在日常物質裡。','Warmth hidden inside the ordinary.')],
      ['Whale-rib Library','assets/ai-lab/whale-library.webp',t('由記憶搭建的閱讀空間。','A reading space built from memory.')],
      ['Floating Cloud House','assets/ai-lab/cloud-house.webp',t('在沉重世界上方的一座輕盈住所。','A light home above a heavy world.')]
    ].map(([title,image,goal])=>({
      title,image,thumbnail:image,goal,
      model:t('生成式視覺實驗','Generative visual study'),
      prompt:t('先定義情緒、空間邏輯、材質與觀看距離，再讓生成模型提供多個可比較版本；選擇不是以「像不像」為唯一標準，而是看畫面是否保留了原始概念的張力。','Define emotion, spatial logic, material, and viewing distance before generation; compare variants not only for realism but for whether the original conceptual tension survives.')
    })),
    ideas:[
      {title:'AI Command Development',content:t('把模糊意圖拆成角色、背景、限制、輸出契約、檢查點與撤回條件，形成可審查、可迭代、可交接的工作流。','Decompose ambiguous intent into role, context, constraints, output contract, checkpoints, and undo conditions—an inspectable, iterable, transferable workflow.'),tags:['AI','Command','Workflow']},
      {title:t('把對話當作線框圖','Conversation as Wireframe'),content:t('在投入完整介面之前，用對話測試資訊順序、選擇分支、理解成本與失敗恢復。','Before building a full interface, use dialogue to test information order, choice branches, comprehension cost, and recovery from failure.'),tags:['Prototype','Interaction']},
      {title:t('Agent 的撤回與邊界','Undo and Boundaries for Agents'),content:t('將外部寫入、發布、付款與刪除視為不同風險層級；不可逆操作前先預覽，讓人保留最終決定權。','Treat external writing, publishing, payment, and deletion as distinct risk levels; preview irreversible actions and preserve human final authority.'),tags:['Agents','Safety']},
      {title:t('人生遊樂園','Life Wonderpark'),content:t('用 3D 場景把履歷、研究、失敗與旅行從線性文件改造成可選擇的空間敘事。','Turn résumé, research, failure, and travel from a linear document into a navigable spatial narrative.'),tags:['Three.js','Narrative','Portfolio']}
    ]
  };

  const timeline = [
    {
      year:'SJTU', title:t('比較文學的入口','An Entrance Through Comparative Literature'), kind:t('學習','Education'),
      role:t('英語、比較文學與跨文化研究','English, comparative literature, and intercultural studies'),
      text:t('在上海交通大學，我接受的核心訓練不是背誦作品，而是細讀：辨認一段文字如何構造視角、排除誰、把什麼變得自然。Schiaparelli 研究把這種方法推到服裝、觸覺與女性主體性，讓我看到媒介之間可以互相翻譯。','At SJTU, the core training was close reading: how a text constructs perspective, excludes subjects, and naturalizes assumptions. Schiaparelli research extended that method into fashion, touch, and feminine subjectivity, revealing how media translate one another.'),
      choice:t('沒有把人文視為需要離開的過去，而是把它保留成理解品牌與人的底層方法。','Kept the humanities as a foundational method for understanding brands and people rather than treating them as a past to escape.'),
      evidence:t('Schiaparelli 觸覺現代主義研究、比較文學與跨文化訓練、互動英文播客實踐。','Schiaparelli tactile-modernism research, comparative and intercultural study, and an interactive English podcast.'),
      note:t('先理解敘事如何成立，再決定要不要相信它。','Understand how a narrative works before deciding whether to believe it.')
    },
    {
      year:'UvA', title:t('阿姆斯特丹交換','Amsterdam Exchange'), kind:t('世界','World'),
      role:t('市場行銷、數位創新與多文化協作','Marketing, digital innovation, and multicultural teamwork'),
      text:t('在阿姆斯特丹大學交換時，我第一次長時間把自己放進陌生城市與多文化團隊。EV 市場進入項目中，品類資料、消費者洞察、永續敘事與電池生命週期彼此衝突；我學會用任務拆解與傾聽，讓差異變成更完整的問題。','At UvA, I placed myself inside an unfamiliar city and multicultural team. In an EV go-to-market project, category data, consumer insight, sustainability narratives, and battery life-cycle concerns conflicted; task decomposition and listening turned difference into a fuller problem.'),
      choice:t('不追求最快共識，而是先保留分歧，再找能同時解釋多方證據的框架。','Chose not to optimize for fast consensus; preserved disagreement until a framework could hold multiple forms of evidence.'),
      evidence:t('多國團隊協作、Mercedes-Benz EV 市場進入策略、跨歐洲旅行與城市觀察。','Multinational teamwork, a Mercedes-Benz EV go-to-market strategy, and travel-based observation across Europe.'),
      note:t('跨文化不是翻譯答案，而是重新定義問題。','Cross-cultural work does not translate an answer; it redefines the problem.')
    },
    {
      year:'Yum', title:'Pizza Hut', kind:t('品牌實踐','Brand Practice'),
      role:t('品類行銷、新品上市與社媒傳播','Category marketing, launches, and social communication'),
      text:t('在 Pizza Hut，我把研究帶到門店與真實消費時刻：新品類如何被一眼理解、口味如何選擇、價格與套餐如何共存、達人內容如何不偏離核心賣點。','At Pizza Hut, research entered stores and real consumption moments: how a new category becomes legible, flavors are chosen, pricing and bundles coexist, and creator content stays anchored to the proposition.'),
      choice:t('從「做一個有趣新品」轉向「建立消費者能理解的品類錨點」。','Shifted from “make an interesting product” toward building a category anchor consumers could understand.'),
      evidence:t('焦點小組、門店訪談、MaxDiff、社媒聆聽、新品上市與跨渠道物料。','Focus groups, store interviews, MaxDiff, social listening, launches, and cross-channel materials.'),
      note:t('策略只有穿過營運限制，才算落地。','Strategy becomes real only after it survives operational constraints.')
    },
    {
      year:'LVMH', title:'Fenty Beauty', kind:t('品牌實踐','Brand Practice'),
      role:t('電商洞察、直播運營與大促決策','E-commerce insight, livestream operations, and campaign decisions'),
      text:t('Fenty Beauty 讓我在高速度環境中同時觀看品牌與數據：站外熱點如何改變站內搜尋、商品需求如何出現在熱詞裡、直播視覺與話術如何影響消費者理解產品。','Fenty Beauty taught me to watch brand and data at speed: how off-platform moments change on-site search, how demand appears in search language, and how livestream visuals and scripts affect product understanding.'),
      choice:t('把報表從結果記錄改成決策介面：每個指標都要對應一個可能的行動。','Turned reporting from a record of results into a decision interface where each signal maps to a possible action.'),
      evidence:t('搜索進店分析、站內熱詞、貨品與直播資料、競品調研、日報與週報。','Search-to-store analysis, on-site search terms, product and livestream data, competitor research, and reporting.'),
      note:t('數據定位摩擦，品牌判斷決定修復方式。','Data locates friction; brand judgment chooses the repair.')
    },
    {
      year:'NTU', title:t('行銷科學','Marketing Science'), kind:t('研究生學習','Graduate Study'),
      role:t('消費者研究、商業分析與策略模擬','Consumer research, business analytics, and strategy simulation'),
      text:t('在 NTU，我把人文的敏感度與更結構化的研究放在一起：民族誌看微小行為，量化研究比較因素，Markstrat 模擬系統後果，客戶項目要求策略能被講清楚也能被執行。','At NTU, humanistic sensitivity met structured inquiry: ethnography observed micro-behavior, quantitative research compared factors, Markstrat simulated systemic consequence, and client projects demanded strategies that could be explained and executed.'),
      choice:t('不再把「洞察」當終點，而是要求它抵達定位、優先級、產品路徑或下一個實驗。','Stopped treating insight as an endpoint; required it to arrive at positioning, priority, product journey, or a next experiment.'),
      evidence:t('Breitling、Kallang、Sleepezy、100PLUS、Prime 超市民族誌、Markstrat。','Breitling, Kallang, Sleepezy, 100PLUS, Prime supermarket ethnography, and Markstrat.'),
      note:t('證據的目的，是抵達更好的決策。','Evidence should arrive at a better decision.')
    },
    {
      year:t('現在','Now'), title:t('職業發展','Career in Motion'), kind:t('未來','Future'),
      role:t('OPPO 海外行銷、AI Command Development 與創作','OPPO global marketing, AI Command Development, and creation'),
      text:t('現在，我關心的是科技品牌如何在不同市場保留一致的價值，又不把在地文化壓平成一句全球口號；同時，我也在把 Command Development 變成可重複的創作與工作方法。','Now I ask how a technology brand can preserve coherent values across markets without flattening local culture into a global slogan, while turning Command Development into a repeatable method for work and creation.'),
      choice:t('不把自己蒸餾成單一職能，而是經營品牌策略、消費者洞察、商業分析與 AI 之間的交叉地帶。','Chose not to distill myself into one function, but to work at the intersection of brand strategy, consumer insight, business analytics, and AI.'),
      evidence:t('海外行銷工作、人生遊樂園、生成式視覺實驗與 Agent 工作流設計。','Global marketing work, Life Wonderpark, generative visual experiments, and agent workflow design.'),
      note:t('未完成不是缺陷，是下一個入口。','Unfinished is not a flaw; it is the next entrance.')
    }
  ];

  const skills = [
    {
      name:t('品牌策略','Brand Strategy'),
      intro:t('從品牌資產、競爭語境與消費者生活中找到一個可持續、可被相信的位置。','Find a sustainable, credible position across brand assets, competition, and consumer life.'),
      items:[t('定位與敘事','Positioning and narrative'),t('整合行銷思考','Integrated marketing thinking'),t('在地化','Localization'),t('品牌體驗','Brand experience')],
      evidence:[t('Breitling：重寫女性與飛行員精神的關係','Breitling: rewrote women’s relationship with the pilot spirit'),t('Sleepezy：從睡眠科技轉向日常 wellness','Sleepezy: moved from sleep tech toward everyday wellness'),t('Pizza Hut：建立新品類的認知錨點','Pizza Hut: built a legible new-category anchor')]
    },
    {
      name:t('消費者洞察','Consumer Insight'),
      intro:t('把人說的、實際做的與商業訊號放在一起，保留不一致，而不是急著濃縮成一句話。','Place what people say, do, and signal commercially side by side; preserve inconsistency instead of rushing toward one sentence.'),
      items:[t('訪談與焦點小組','Interviews and focus groups'),t('民族誌與行為觀察','Ethnography and behavior observation'),t('問卷與 MaxDiff','Survey and MaxDiff'),t('社媒聆聽','Social listening')],
      evidence:[t('100PLUS：以使用時刻而非人口標籤理解選擇','100PLUS: understood choice through occasions, not only demographics'),t('Prime 超市：從自助結帳與端架停留讀取情緒','Prime supermarket: read emotion through checkout and end-cap behavior'),t('Fenty：把搜尋語言連回產品理解','Fenty: connected search language to product understanding')]
    },
    {
      name:t('商業分析','Business Analytics'),
      intro:t('分析不是把數字做得更多，而是辨認哪些變數會改變決策、哪些結果需要進一步驗證。','Analysis is not more numbers; it identifies which variables alter a decision and which results require validation.'),
      items:[t('問題框架','Problem framing'),t('資料整合','Data synthesis'),t('模型與情境比較','Model and scenario comparison'),t('復盤與二階影響','Retrospective and second-order effects')],
      evidence:[t('Fenty：大盤—店鋪—貨品—直播的全鏈路觀看','Fenty: connected market, store, product, and livestream views'),t('Markstrat：品牌組合、供應與現金的系統推演','Markstrat: simulated portfolio, supply, and cash interactions'),t('美妝退貨分析：在干預前辨認風險與偏差','Beauty return analysis: identified risk and bias before intervention')]
    },
    {
      name:'AI Command Development',
      intro:t('把「幫我做」改寫成有角色、限制、輸出契約、檢查點、風險層級與撤回條件的可執行系統。','Rewrite “help me do this” into an executable system with role, constraints, output contract, checkpoints, risk levels, and undo conditions.'),
      items:[t('指令架構','Command architecture'),t('Agent 工作流','Agent workflows'),t('人機責任邊界','Human-AI responsibility boundaries'),t('快速原型與評估','Rapid prototyping and evaluation')],
      evidence:[t('Kallang：AI 路線與記憶留存','Kallang: AI routes and memory retention'),t('人生遊樂園：從內容結構到可導航體驗','Life Wonderpark: from content structure to navigable experience'),t('創意實驗室：生成式視覺與對話原型','Creative Lab: generative visuals and conversational prototypes')]
    }
  ];

  const failures = [
    {
      title:t('Markstrat：PEANUT 的錯誤屬性與撤回','Markstrat: PEANUT’s Wrong Attributes and Withdrawal'),
      meta:t('錯失窗口後的系統重建','Rebuilding after a missed window'),
      trigger:t('想快速進入新市場，在產品屬性與目標人群仍未充分對齊時推進開發。','A desire to enter a new market quickly before product attributes and target needs were sufficiently aligned.'),
      mistake:t('物理屬性設定錯誤，產品在推出前被撤回；團隊同時低估了撤回對現金、R&D 時間與先發窗口的連鎖影響。','Physical attributes were mis-specified and the product was withdrawn before launch; the team underestimated the chain effect on cash, R&D time, and first-entry opportunity.'),
      impact:t('不只是一個產品失敗，而是下一期資源被壓縮、進場延後、競爭節奏被改寫。','It was not one failed product: next-period resources tightened, entry was delayed, and the competitive clock changed.'),
      regrowth:t('之後以 LEWIS 精準對齊 Adopters，LELE 對齊 Followers；保留成熟品牌作為現金來源，再把資源移向 Vodites。','The comeback aligned LEWIS with Adopters and LELE with Followers, while mature brands funded the shift toward Vodites.'),
      rule:t('重大產品決策前同時檢查：目標人群理想值、屬性差距、現金後果、可逆性與錯失窗口成本。','Before a major product decision, check segment ideal values, attribute gaps, cash consequences, reversibility, and the cost of missing the window.'),
      detail:t('失敗不是「判斷不準」四個字，而是一條可以被重新畫出的因果鏈。','Failure is not merely “poor judgment” but a causal chain that can be redrawn.')
    },
    {
      title:t('壓力調節：用意志力硬推','Stress Regulation: Forcing Progress with Willpower'),
      meta:t('調節先於輸出','Regulation before output'),
      trigger:t('進入新工作或高不確定任務時，責任感迅速轉化為高警覺；沒有外部壓力時，又容易失去啟動訊號。','Entering a new job or uncertain task turns responsibility into high alert; without external pressure, activation can disappear.'),
      mistake:t('把焦慮理解成「需要更努力」，試圖一次完成所有問題，讓工作記憶被威脅監測佔用。','Interpreted anxiety as a need to work harder and solve everything at once, allowing threat monitoring to consume working memory.'),
      impact:t('越想系統化，思考越窄；越想證明可以承受，身體越難恢復。','The harder I tried to think systematically, the narrower thinking became; the more I tried to prove endurance, the harder recovery became.'),
      regrowth:t('先把狀態與任務分開：降低噪音、命名壓力、縮小時間窗口、只定義下一個可見動作，再恢復完整分析。','Separated state from task: reduce noise, name the pressure, shrink the time window, define one visible next action, then return to full analysis.'),
      rule:t('高壓時先做調節清單，不做重大不可逆決策；低壓時用外部節律與最小啟動動作代替等待動力。','Under high pressure, regulate before irreversible decisions; under low pressure, use external rhythm and a minimum start action instead of waiting for motivation.'),
      detail:t('這朵花代表：穩定不是變慢，而是讓判斷重新有寬度。','This bloom means stability is not slowness; it restores width to judgment.')
    },
    {
      title:t('過早執行：速度先於對齊','Premature Execution: Speed Before Alignment'),
      meta:t('把「做得快」改成「學得快」','Replace fast building with fast learning'),
      trigger:t('面對模糊需求時，製作本身比對齊更有成就感，容易直接進入頁面、模型或素材。','When requirements are ambiguous, making feels more rewarding than alignment, so it is easy to jump into pages, models, or assets.'),
      mistake:t('未先確認成功標準、核心受眾、最大未知與停止條件，導致早期產出看似完整，卻沒有回答真正問題。','Success criteria, core audience, biggest unknown, and stop conditions were not aligned, so early output looked complete without answering the real question.'),
      impact:t('返工增加，討論被具體方案綁架，團隊更難承認最初方向可能錯誤。','Rework increased, discussion became anchored to a concrete solution, and the team found it harder to admit the initial direction might be wrong.'),
      regrowth:t('先用一句話定義決策，再做能驗證最大未知的最小版本；把可撤回與檢查點寫進 Command。','Define the decision in one sentence, then build the smallest version that tests the biggest unknown; encode reversibility and checkpoints into the command.'),
      rule:t('執行前必答五問：為誰、改變什麼行為、憑什麼相信、最早如何證偽、何時停止。','Before execution answer five questions: for whom, what behavior changes, why believe it, how to falsify early, and when to stop.'),
      detail:t('速度的品質，不看完成了多少，而看多快排除了錯誤方向。','The quality of speed is not how much is completed, but how quickly a wrong direction is eliminated.')
    }
  ];

  const PARK_CONTENT = {
    language:LANG, copy, facilityIntro,
    profile:{
      name:copy.ownerName,
      role:t('品牌策略 · 消費者洞察 · 商業分析 · AI Command Development','Brand Strategy · Consumer Insight · Business Analytics · AI Command Development'),
      intro:t('在文學、品牌、商業與 AI 之間，把模糊問題翻譯成可以思考、測試與感受的體驗。','Across literature, brands, business, and AI, I translate ambiguity into experiences that can be thought through, tested, and felt.'),
      story:t('我不是一份被蒸餾乾淨的履歷。這座遊樂園保留我做過的選擇、看過的世界、尚未完成的實驗，以及失敗之後長出的新方法。','I am not a résumé distilled until spotless. This park keeps my choices, the worlds I have seen, unfinished experiments, and the methods that grew after failure.'),
      locations:[t('上海','Shanghai'),t('阿姆斯特丹','Amsterdam'),t('新加坡','Singapore')],
      orientation:t('人文敏感度 × 商業判斷 × 技術實作','Humanistic sensitivity × commercial judgment × technical making')
    },
    timeline,
    projects:{featuredIds:['fenty-beauty','breitling'],items:projects},
    learning, aiLab,
    travel:{countries:[t('亞洲','Asia'),t('歐洲','Europe'),t('大洋洲','Oceania')],cities:places,routes:travelRoutes,summary:t('從人生座標進入城市：走一條現實路線，看一個場景，讀一段記憶。','Enter each city through a real route, a concrete scene, and a memory.')},
    photos, skills,
    awards:[
      {title:t('從研究到決策','Research to Decision'),meta:t('證據要有目的地','Evidence with a destination'),detail:t('把訪談、行為、搜尋與商業線索轉成優先級、定位、產品路徑或下一個實驗。','Turn interviews, behavior, search, and business signals into priorities, positioning, product journeys, or a next experiment.')},
      {title:t('跨文化轉譯','Cross-cultural Translation'),meta:t('語境會改變問題','Context changes the question'),detail:t('從阿姆斯特丹團隊協作到亞洲市場觀察，讓差異真正進入問題定義，而不是停在語言替換。','From Amsterdam teamwork to Asian market observation, bring difference into problem definition rather than stop at language substitution.')},
      {title:t('做出可以被使用的想法','Ideas People Can Use'),meta:t('以互動驗證','Evidence through interaction'),detail:t('用 Kallang 路線、AI 對話、NFC 任務與 3D 遊樂園，讓抽象策略接受真實使用的修正。','Use Kallang routes, AI dialogue, NFC quests, and a 3D park so real use can correct abstract strategy.')},
      {title:t('失敗後的新方法','Methods After Failure'),meta:t('把失誤變成下一輪規則','Turn mistakes into next-round rules'),detail:t('將 Markstrat、壓力調節與過早執行拆成因果鏈，並轉寫為可執行檢查點。','Turn Markstrat, stress regulation, and premature execution into causal chains and actionable checkpoints.')}
    ],
    interests:[
      [t('比較文學','Comparative literature'),t('閱讀語言、表面與主體如何互相塑造。','Reading how language, surface, and subject shape one another.')],
      [t('書法','Calligraphy'),t('用手、速度與留白理解線條的重量。','Learning the weight of line through hand, speed, and empty space.')],
      [t('攝影','Photography'),t('記錄人如何進入空間，又如何在光裡留下位置。','Recording how people enter space and leave a position in light.')],
      [t('滑雪與戶外','Snowboarding and outdoors'),t('在身體先於語言反應的時刻重新校準注意力。','Recalibrating attention when the body responds before language.')],
      [t('旅行觀察','Travel observation'),t('比較不同城市如何安排移動、消費、公共空間與時間。','Comparing how cities arrange movement, consumption, public space, and time.')],
      [t('播客與敘事','Podcasting and narrative'),t('把跨文化話題變成可以被聽懂、回應與延伸的對話。','Turning cross-cultural topics into conversations that can be understood and continued.')],
      [t('AI 創作','AI creation'),t('讓工具擴張想像，但不替代選擇與責任。','Letting tools expand imagination without replacing choice or responsibility.')]
    ],
    failures,
    now:{
      title:t('未來世界','Futureland'),
      intro:facilityIntro.futureland,
      items:[
        {title:t('OPPO 海外行銷','OPPO Global Marketing'),text:t('研究不同市場的生活語境、品牌認知與媒介行為，思考「本分」「科技創造美好生活」如何不靠直譯而被當地消費者感受到。','Study market context, brand perception, and media behavior so values such as integrity and technology for a better life can be felt rather than literally translated.'),next:t('建立市場文化訊號庫，將觀察連到訊息、場景與創意判斷。','Build a market-culture signal library connecting observation to messaging, occasion, and creative judgment.')},
        {title:t('AI 創作','AI Creation'),text:t('把 Command、影像、敘事與互動組合成可進入的作品；人生遊樂園本身就是一次「數字垃圾」如何變成空間敘事的實驗。','Combine commands, images, narrative, and interaction into experiences one can enter; Wonderpark itself tests how “digital garbage” becomes spatial storytelling.'),next:t('讓創作流程保留版本、判斷理由與可撤回節點，而不是只保存最終成品。','Preserve versions, reasons, and undo points—not only final outputs.')},
        {title:t('未來職業方向','Future Career Direction'),text:t('尋找品牌策略、消費者洞察、商業分析與 AI 產品之間最有生命力的交叉點：既能理解文化，也能把想法做成系統。','Find the liveliest intersection of brand strategy, consumer insight, business analytics, and AI products—understanding culture while building systems.'),next:t('以作品與項目證明交叉能力，不把自己蒸餾成單一職能標籤。','Prove interdisciplinary capability through work rather than distilling identity into one function label.')}
      ]
    },
    contact:{}, sourceState:'personal-public-detailed'
  };

  PARK_CONTENT.ready = Promise.resolve(PARK_CONTENT);
  window.PARK_LANG = LANG;
  window.PARK_COPY = copy;
  window.PARK_CONTENT = PARK_CONTENT;
})();
