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

  const places = [
    ['shanghai', t('上海', 'Shanghai'), t('中國', 'China'), 31.23, 121.47],
    ['amsterdam', t('阿姆斯特丹', 'Amsterdam'), t('荷蘭', 'Netherlands'), 52.37, 4.90],
    ['singapore', t('新加坡', 'Singapore'), t('新加坡', 'Singapore'), 1.35, 103.82],
    ['taiwan', t('台灣', 'Taiwan'), t('東亞', 'East Asia'), 23.70, 120.96],
    ['japan', t('日本', 'Japan'), t('東亞', 'East Asia'), 36.20, 138.25],
    ['australia', t('澳洲', 'Australia'), t('大洋洲', 'Oceania'), -25.27, 133.78],
    ['bali', t('峇里島', 'Bali'), t('印尼', 'Indonesia'), -8.34, 115.09],
    ['malaysia', t('馬來西亞', 'Malaysia'), t('東南亞', 'Southeast Asia'), 4.21, 101.98]
  ].map(([id,name,country,lat,lon]) => ({id,name,country,lat,lon}));

  const routes = [
    ['shanghai','amsterdam'], ['amsterdam','singapore'], ['singapore','taiwan'],
    ['singapore','japan'], ['singapore','australia'], ['singapore','bali'], ['singapore','malaysia']
  ];

  const photos = [
    ['01',t('南歐室內光', 'Interior Light'),t('南歐', 'Southern Europe'),null,t('光穿過擁擠的室內，留下短暫而柔軟的秩序。','Late light passes through a crowded interior.')],
    ['02',t('夜間紀念碑', 'Night Monument'),t('歐洲', 'Europe'),null,t('城市在夜色裡把歷史點亮。','A civic monument illuminated after dark.')],
    ['03',t('作家紀念地', "Writers' Memorial"),t('歐洲', 'Europe'),null,t('兩段生命被安靜地記在同一處。','Two lives remembered together.')],
    ['04',t('藍色航線', 'Blue Crossing'),t('北歐', 'Northern Europe'),null,t('桌面、舷窗與一條藍色地平線。','A table, a window, and a blue horizon.')],
    ['05',t('彩色光影', 'Colored Light'),t('南歐', 'Southern Europe'),null,t('午後的顏色緩慢移過牆面。','Afternoon color moving across an interior.')],
    ['06',t('冬日旋轉木馬', 'Winter Carousel'),t('歐洲', 'Europe'),null,t('冬夜燈光下，旋轉仍是一種歡迎。','A carousel turning under winter lights.')],
    ['07',t('舷窗習作', 'Porthole Study'),t('北歐', 'Northern Europe'),null,t('寒冷海岸被框成一張小小的畫。','A cold coastline framed by a ship window.')],
    ['08',t('冬日陽光', 'Winter Sun'),t('歐洲', 'Europe'),null,t('玻璃房外短暫停留的冬光。','A pause in winter light outside a glasshouse.')],
    ['09',t('博物館人群', 'Museum Crowd'),t('歐洲', 'Europe'),null,t('人們聚集在熟悉的作品前，形成新的觀看。','Visitors gathering around a familiar work.')],
    ['10',t('海岸清晨', 'Coastal Morning'),t('峇里島', 'Bali'),'bali',t('水邊的早晨，世界還沒有完全醒來。','A quiet morning beside the water.')],
    ['11',t('街角標記', 'Street Sign'),t('馬來西亞', 'Malaysia'),'malaysia',t('旅行由不被計畫的小場景構成。','A small street scene discovered in passing.')],
    ['12',t('開放水域', 'Open Water'),t('澳洲', 'Australia'),'australia',t('深色水面與天空之間的一次呼吸。','A breath between dark water and sky.')],
    ['13',t('吊燈習作', 'Chandelier Study'),t('歐洲', 'Europe'),null,t('在博物館裡練習慢慢觀看。','Practising slow looking in a museum interior.')],
    ['14',t('夜色風景', 'Night Landscape'),t('日本', 'Japan'),'japan',t('被收藏的一小塊夜色。','A small night landscape held in memory.')]
  ].map(([number,title,location,cityId,caption]) => ({
    id:`photo-${number}`, title, src:`assets/travel/photo-${number}.webp`,
    thumb:`assets/travel/photo-${number}-thumb.webp`, alt:`${title}, travel photograph`,
    caption, location, cityId:cityId || undefined
  }));

  const projects = [
    ['fenty-beauty','Fenty Beauty',t('電商與品牌體驗','E-commerce and brand experience'),t('在品牌語言、消費者路徑與商業目標之間尋找一致的數位體驗。','Aligning brand language, consumer journeys, and commercial goals in a coherent digital experience.'),['Brand','E-commerce','Consumer Journey']],
    ['pizza-hut','Pizza Hut',t('零售啟動與在地洞察','Retail activation and local insight'),t('把門店情境與消費者行為翻譯成可以落地的啟動構想。','Translating store context and consumer behavior into practical activation ideas.'),['Retail','Activation','Insight']],
    ['breitling','Breitling',t('女性消費者策略','Women consumer strategy'),t('重新理解女性與腕錶的關係，讓策略從生活語境而不是刻板標籤出發。','Reframing women’s relationship with watches through lived context rather than stereotypes.'),['Brand Strategy','Consumer Research','Luxury']],
    ['kallang','Kallang',t('互動路線概念','Interactive route concept'),t('以 NFC、AI 與記憶路線，探索場域如何成為可參與的故事。','Using NFC, AI, and memory routes to turn a place into a participatory story.'),['Interaction','NFC','AI']],
    ['sleepezy','Sleepezy',t('健康品牌重塑','Wellness rebrand'),t('把睡眠產品從功能敘事轉向更完整的日常健康體驗。','Moving a sleep product from functional messaging toward an everyday wellness experience.'),['Rebrand','Wellness','Positioning']],
    ['100plus','100PLUS',t('消費者研究','Consumer research'),t('從行為、場景與動機中辨認品牌可以真正回應的機會。','Finding brand opportunities grounded in behaviors, occasions, and motivations.'),['Research','Segmentation','Strategy']]
  ].map(([slug,title,role,oneLiner,tags]) => ({
    slug,title,role,oneLiner,time:t('代表項目','Selected project'),outcome:t('公開版只呈現思考路徑與方法，不公開項目數據。','This public edition shows the thinking and method, never confidential project metrics.'),
    coverImage:'assets/projects/anonymous-project-cover.png',tags,links:{}
  }));

  const learning = {
    prompts:[
      {title:t('比較文學式追問','Comparative-literature questioning'),useCase:t('在單一答案之外尋找語境與矛盾。','Find context and contradiction beyond a single answer.'),fullContent:t('先問文本如何成立，再問誰被忽略、哪些假設被自然化。','Ask how a text works, who is omitted, and which assumptions have been naturalized.')},
      {title:t('消費者研究三角驗證','Consumer research triangulation'),useCase:t('避免把流暢敘事誤當作洞察。','Avoid mistaking a fluent story for insight.'),fullContent:t('並置訪談、行為與商業證據，保留彼此不一致的地方。','Place interviews, behavior, and business evidence side by side—and preserve disagreement.')}
    ],
    methods:[
      {title:t('細讀與轉譯','Close Reading & Translation'),appliesTo:t('比較文學、品牌語言、使用者需求','Comparative literature, brand language, user needs'),summary:t('慢慢看清語言背後的價值、張力與沒有被說出的需要。','Read for values, tensions, and needs that have not yet been spoken.')},
      {title:t('做中學','Learning by Doing'),appliesTo:t('陌生工具、模糊問題、產品直覺','New tools, ambiguous problems, product intuition'),summary:t('用最小作品驗證最大的未知，再讓使用修正想法。','Build the smallest learning vehicle for the biggest unknown, then let use correct the idea.')}
    ],
    notes:[
      {title:t('Schiaparelli：服裝也是詩','Schiaparelli: Clothing as Poetry'),source:t('論文研究','Thesis research'),summary:t('《Trim and Seam: Remediating Elsa Schiaparelli’s Wearable Poetics》探索服裝如何重新媒介化詩意、身體與觀看。','“Trim and Seam: Remediating Elsa Schiaparelli’s Wearable Poetics” explores how dress remediates poetry, body, and looking.')},
      {title:t('消費者研究不是找一句洞察','Research Is Not One Perfect Insight'),source:t('思考筆記','Working note'),summary:t('真正有用的研究保留矛盾，並把證據送到一個可以做出的決策。','Useful research preserves contradiction and delivers evidence to a decision.')}
    ],
    readings:[
      {title:t('比較文學與跨文化觀看','Comparative Literature & Cross-cultural Looking'),author:t('閱讀線索','Reading thread'),summary:t('不同語境不是背景，而是會改變問題本身。','Context does not merely surround a question; it changes the question.')},
      {title:t('AI 與共同演化','AI & Co-evolution'),author:t('閱讀線索','Reading thread'),summary:t('工具不只替人工作，也反過來重塑人的判斷與注意力。','Tools do not only work for us; they reshape judgment and attention.')}
    ], tools:[]
  };

  const aiLab = {
    gallery:[
      ['Asteroid Civilization','assets/ai-lab/asteroid-civilization.webp',t('在宇宙尺度裡保留溫柔。','Tenderness at cosmic scale.')],
      ['Coffee Shop in a Stone','assets/ai-lab/stone-cafe.webp',t('讓溫暖藏在日常物質裡。','Warmth hidden inside the ordinary.')],
      ['Whale-rib Library','assets/ai-lab/whale-library.webp',t('由記憶搭建的閱讀空間。','A reading space built from memory.')],
      ['Floating Cloud House','assets/ai-lab/cloud-house.webp',t('在沉重世界上方的一座輕盈住所。','A light home above a heavy world.')]
    ].map(([title,image,goal])=>({title,model:t('生成式視覺實驗','Generative visual study'),goal,prompt:t('以空間、材質與情緒測試一個不必先有商業理由的想法。','Testing an idea through space, material, and feeling before it needs a business case.'),image,thumbnail:image})),
    ideas:[
      {title:'AI Command Development',content:t('把模糊意圖拆成可檢查、可迭代、可撤回的指令與工作流。','Turn ambiguous intent into inspectable, iterable, and reversible commands and workflows.'),tags:['AI','Command','Workflow']},
      {title:t('把對話當作線框圖','Conversation as Wireframe'),content:t('在投入完整介面之前，先用對話測試結構、路徑與理解成本。','Test structure, paths, and comprehension through dialogue before building a full interface.'),tags:['Prototype','Interaction']},
      {title:t('Agent 的撤回與邊界','Undo and Boundaries for Agents'),content:t('不可逆操作之前先預覽，並讓人保留最終決定權。','Preview irreversible actions and preserve human final authority.'),tags:['Agents','Safety']}
    ]
  };

  const PARK_CONTENT = {
    language:LANG, copy,
    profile:{
      name:copy.ownerName,
      role:t('品牌策略 · 消費者洞察 · 商業分析 · AI Command Development','Brand Strategy · Consumer Insight · Business Analytics · AI Command Development'),
      intro:t('在文學、品牌、商業與 AI 之間，把模糊問題翻譯成可以思考、測試與感受的體驗。','Across literature, brands, business, and AI, I translate ambiguity into experiences that can be thought through, tested, and felt.'),
      story:t('我不是一份被蒸餾乾淨的履歷。這座遊樂園保留我做過的選擇、看過的世界、尚未完成的實驗，以及失敗之後長出的新方法。','I am not a résumé distilled until spotless. This park keeps my choices, the worlds I have seen, unfinished experiments, and the methods that grew after failure.'),
      locations:[t('上海','Shanghai'),t('阿姆斯特丹','Amsterdam'),t('新加坡','Singapore')]
    },
    timeline:[
      {year:'SJTU',title:t('比較文學的入口','An Entrance Through Comparative Literature'),kind:t('學習','Education'),role:t('英文、比較文學與跨文化研究','English, comparative literature, and intercultural studies'),text:t('在文本、文化與語言之間訓練細讀，也開始理解沒有任何問題脫離語境。','Close reading across text, culture, and language taught me that no question exists outside context.'),note:t('先理解人，再優化系統。','Understand people before optimizing systems.')},
      {year:'UvA',title:t('阿姆斯特丹交換','Amsterdam Exchange'),kind:t('世界','World'),role:t('移動、觀看與重新定位','Movement, observation, and repositioning'),text:t('離開熟悉環境後，日常制度、城市與文化差異變成可被觀察的產品語言。','Away from the familiar, cities, systems, and cultural differences became a product language I could observe.'),note:t('跨文化不是翻譯，而是重新定義問題。','Cross-cultural work redefines the problem; it is not only translation.')},
      {year:'Yum',title:'Pizza Hut',kind:t('品牌實踐','Brand Practice'),role:t('零售啟動與消費者情境','Retail activation and consumer context'),text:t('把研究帶到門店與真實消費時刻，學習策略如何穿過限制落地。','I brought research into stores and real consumption occasions, learning how strategy survives constraints.'),note:t('落地也是策略的一部分。','Execution is part of strategy.')},
      {year:'LVMH',title:'Fenty Beauty',kind:t('品牌實踐','Brand Practice'),role:t('電商與品牌體驗','E-commerce and brand experience'),text:t('在速度、品牌一致性與消費者旅程之間工作，理解細節如何累積成信任。','I worked across speed, brand consistency, and consumer journey—and learned how details accumulate into trust.'),note:t('品牌承諾要在每一次點擊裡成立。','A brand promise must survive every click.')},
      {year:'NTU',title:t('行銷科學','Marketing Science'),kind:t('研究生學習','Graduate Study'),role:t('消費者研究與商業分析','Consumer research and business analytics'),text:t('把人文的敏感度與更結構化的研究、模型和商業決策放在一起。','I combined humanistic sensitivity with structured research, models, and commercial decisions.'),note:t('證據的目的，是抵達更好的決策。','Evidence should arrive at a better decision.')},
      {year:t('現在','Now'),title:t('職業發展','Career in Motion'),kind:t('未來','Future'),role:t('海外行銷、AI 創作與未來職業','Global marketing, AI creation, and future work'),text:t('在 OPPO 海外行銷與 AI 創作之間探索下一個交叉點：人如何在代理盛行的時代保留判斷、趣味與主體性。','Across OPPO global marketing and AI creation, I am exploring how people keep judgment, play, and agency in an agentic age.'),note:t('未完成不是缺陷，是下一個入口。','Unfinished is not a flaw; it is the next entrance.')}
    ],
    projects:{featuredIds:['fenty-beauty','breitling'],items:projects},
    learning, aiLab,
    travel:{countries:[t('亞洲','Asia'),t('歐洲','Europe'),t('大洋洲','Oceania')],cities:places,routes,summary:t('上海、阿姆斯特丹、新加坡與更多生命座標','Shanghai, Amsterdam, Singapore, and more coordinates of a life')},
    photos,
    skills:[
      {name:t('品牌策略','Brand Strategy'),items:[t('定位與敘事','Positioning & narrative'),t('整合行銷思考','Integrated marketing thinking'),t('在地化','Localization'),t('品牌體驗','Brand experience')]},
      {name:t('消費者洞察','Consumer Insight'),items:[t('訪談與問卷','Interviews & surveys'),t('行為與情境','Behavior & occasions'),t('研究整合','Research synthesis'),t('跨文化洞察','Cross-cultural insight')]},
      {name:t('商業分析','Business Analytics'),items:[t('問題框架','Problem framing'),t('證據三角驗證','Evidence triangulation'),t('策略選擇','Strategic choices'),t('復盤','Retrospectives')]},
      {name:'AI Command Development',items:[t('指令架構','Command architecture'),t('Agent 工作流','Agent workflows'),t('人機邊界','Human-AI boundaries'),t('快速原型','Rapid prototyping')]}
    ],
    awards:[
      {title:t('從研究到決策','Research to Decision'),meta:t('證據要有目的地','Evidence with a destination'),detail:t('把訪談、行為與商業線索轉成優先級和策略選擇。','Turn interviews, behavior, and business signals into priorities and strategy.')},
      {title:t('跨文化轉譯','Cross-cultural Translation'),meta:t('語境會改變問題','Context changes the question'),detail:t('讓品牌與產品在不同市場保留核心，同時真正理解當地生活。','Help brands preserve their core while genuinely understanding local life.')},
      {title:t('做出可以被使用的想法','Ideas People Can Use'),meta:t('以互動驗證','Evidence through interaction'),detail:t('用原型、路徑與工作流，讓抽象概念接受真實使用的修正。','Use prototypes, journeys, and workflows so real use can correct an abstract idea.')},
      {title:t('失敗後的新方法','Methods After Failure'),meta:t('把失誤變成下一輪規則','Turn mistakes into next-round rules'),detail:t('不隱藏失敗，而是把它寫成可以執行的決策檢查點。','Do not hide failure; rewrite it as an actionable decision checkpoint.')}
    ],
    interests:[
      [t('比較文學','Comparative literature'),t('語言如何改變我們看見的世界。','How language changes the world we notice.')],
      [t('攝影','Photography'),t('人如何居住在空間裡，又如何記住光。','How people inhabit space and remember light.')],
      [t('旅行觀察','Travel observation'),t('不同地方的日常制度如何塑造選擇。','How everyday systems shape choice across places.')],
      [t('AI 創作','AI creation'),t('讓工具擴張想像，而不是替代主體性。','Let tools expand imagination without replacing agency.')]
    ],
    failures:[
      {title:t('Markstrat：錯誤下架','Markstrat: The Wrong Delisting'),meta:t('系統性後果','Systemic consequences'),detail:t('一次過早的產品下架牽動供應、現金與後續選擇。現在我會在執行前畫出二階影響，並保留可逆路徑。','A premature delisting affected supply, cash, and later choices. I now map second-order effects and preserve a reversible path before acting.')},
      {title:t('壓力不是加速器','Stress Is Not an Accelerator'),meta:t('調節先於輸出','Regulation before output'),detail:t('高壓時用更多意志力只會縮窄判斷。現在我先降低噪音、拆小問題，再決定什麼值得快。','More willpower under pressure only narrows judgment. I now reduce noise, shrink the problem, and decide what truly deserves speed.')},
      {title:t('過早執行','Execution Before Alignment'),meta:t('速度沒有共同方向','Speed without shared direction'),detail:t('做得快不等於走得對。現在我先確認成功標準、關鍵假設與停止條件，再進入製作。','Fast is not the same as right. I now align success criteria, key assumptions, and stop conditions before building.')}
    ],
    now:{
      title:t('未來世界','Futureland'),
      intro:t('我正在把海外行銷、AI 創作與未來職業方向放進同一個實驗場。','I am placing global marketing, AI creation, and future career directions in one experimental field.'),
      items:[
        {title:t('OPPO 海外行銷','OPPO Global Marketing'),text:t('從市場語境、品牌表達與消費者路徑理解全球化如何真正發生。','Explore how globalization happens through market context, brand expression, and consumer journeys.')},
        {title:t('AI 創作','AI Creation'),text:t('把 command、影像、敘事與互動做成可以被體驗的作品。','Turn commands, images, narratives, and interaction into experiences people can enter.')},
        {title:t('未來職業方向','Future Career Directions'),text:t('尋找品牌策略、消費者洞察與 AI 產品之間最有生命力的交叉點。','Find the liveliest intersection of brand strategy, consumer insight, and AI products.')}
      ]
    },
    contact:{}, sourceState:'personal-public'
  };

  PARK_CONTENT.ready = Promise.resolve(PARK_CONTENT);
  window.PARK_LANG = LANG;
  window.PARK_COPY = copy;
  window.PARK_CONTENT = PARK_CONTENT;
})();
