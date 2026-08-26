(function () {
  'use strict';

  // Public-demo content only. This file intentionally contains no personal
  // name, employer, school, contact detail, precise date, metric, or route.

  const places = [
    { id: 'east-asia', name: 'East Asia', country: 'Asia', lat: 34.5, lon: 121.0 },
    { id: 'west-europe', name: 'Western Europe', country: 'Europe', lat: 48.0, lon: 2.0 },
    { id: 'north-europe', name: 'Northern Europe', country: 'Europe', lat: 62.0, lon: 15.0 },
    { id: 'central-europe', name: 'Central Europe', country: 'Europe', lat: 49.0, lon: 14.0 },
    { id: 'south-europe', name: 'Southern Europe', country: 'Europe', lat: 42.0, lon: 12.0 },
    { id: 'mediterranean', name: 'Mediterranean', country: 'Europe', lat: 38.0, lon: 22.0 },
    { id: 'alpine-region', name: 'Alpine Region', country: 'Europe', lat: 46.5, lon: 8.0 },
    { id: 'atlantic-coast', name: 'Atlantic Coast', country: 'Europe', lat: 39.0, lon: -9.0 }
  ];

  const routes = [
    ['east-asia', 'west-europe'],
    ['west-europe', 'north-europe'],
    ['west-europe', 'central-europe'],
    ['west-europe', 'south-europe'],
    ['west-europe', 'atlantic-coast'],
    ['central-europe', 'alpine-region'],
    ['south-europe', 'mediterranean']
  ];

  const photos = [
    ['01', 'Interior Light', 'Southern Europe', 'south-europe', 'Late light moving through a crowded interior.'],
    ['02', 'Night Monument', 'Central Europe', 'central-europe', 'A civic monument illuminated after dark.'],
    ['03', 'Writers’ Memorial', 'Western Europe', 'west-europe', 'A quiet record of two lives remembered together.'],
    ['04', 'Blue Crossing', 'Northern Europe', 'north-europe', 'A table, a window, and a blue horizon at sea.'],
    ['05', 'Colored Light', 'Southern Europe', 'south-europe', 'Afternoon color moving across an interior.'],
    ['06', 'Winter Carousel', 'Central Europe', 'central-europe', 'A carousel turning under winter lights.'],
    ['07', 'Porthole Study', 'Northern Europe', 'north-europe', 'A cold coastline framed by a ship window.'],
    ['08', 'Winter Sun', 'Central Europe', 'central-europe', 'A pause in winter light outside a glasshouse.'],
    ['09', 'Museum Crowd', 'Central Europe', 'central-europe', 'Visitors gathering around a familiar work.'],
    ['10', 'Coastal Morning', 'Mediterranean', 'mediterranean', 'A quiet morning beside the water.'],
    ['11', 'Street Sign', 'Mediterranean', 'mediterranean', 'A small street scene on the coast.'],
    ['12', 'Open Water', 'Northern Europe', 'north-europe', 'A brief surface between dark water and snow.'],
    ['13', 'Chandelier Study', 'Europe', null, 'A chandelier and tapestry observed in a museum interior.'],
    ['14', 'Night Landscape', 'Europe', null, 'A close view of a night landscape kept in a collection.']
  ].map(([number, title, location, cityId, caption]) => ({
    id: `photo-${number}`,
    title,
    src: `assets/travel/photo-${number}.webp`,
    thumb: `assets/travel/photo-${number}-thumb.webp`,
    alt: `${title}, anonymous travel photograph`,
    caption,
    location,
    cityId: cityId || undefined
  }));

  const projects = [
    {
      slug: 'study-01',
      title: 'Study 01 · Decision Support',
      oneLiner: 'A generalized exploration of how an interface can help people organize options before choosing a direction.',
      role: 'Concept framing and prototyping',
      time: 'Anonymous study',
      outcome: 'Compares broad interaction patterns for showing alternatives, uncertainty, and possible next steps.',
      coverImage: 'assets/projects/anonymous-project-cover.png',
      tags: ['Decision Support', 'Interaction', 'Prototype'],
      links: {}
    },
    {
      slug: 'study-02',
      title: 'Study 02 · Structured Workflow',
      oneLiner: 'A generalized exploration of turning an ambiguous request into a clearer sequence of questions and checks.',
      role: 'Workflow and systems thinking',
      time: 'Anonymous study',
      outcome: 'Examines how guided prompts, review points, and reusable structure can make early ideas easier to test.',
      coverImage: 'assets/projects/anonymous-project-cover.png',
      tags: ['Workflow', 'Systems Thinking', 'Iteration'],
      links: {}
    },
    {
      slug: 'study-03',
      title: 'Study 03 · Research Synthesis',
      oneLiner: 'A generalized example of combining different kinds of evidence into an understandable product direction.',
      role: 'Research framing and synthesis',
      time: 'Anonymous study',
      outcome: 'Shows how observations can be grouped into themes, tensions, and practical questions for a later prototype.',
      coverImage: 'assets/projects/anonymous-project-cover.png',
      tags: ['Research', 'Synthesis', 'Product Direction'],
      links: {}
    },
    {
      slug: 'study-04',
      title: 'Study 04 · Interactive System',
      oneLiner: 'A generalized browser experiment about choices, feedback, and rules that respond over time.',
      role: 'Interaction design and build',
      time: 'Anonymous study',
      outcome: 'Uses small simulations and repeated testing to examine how several paths can remain understandable and balanced.',
      coverImage: 'assets/projects/anonymous-project-cover.png',
      tags: ['Interaction', 'Systems Design', 'Prototype'],
      links: {}
    },
    {
      slug: 'study-05',
      title: 'Study 05 · Shared Interaction',
      oneLiner: 'A generalized concept for several people coordinating preferences and routines through one system.',
      role: 'Interface and concept design',
      time: 'Anonymous study',
      outcome: 'Explores shared control, visible responsibility, and ways to prevent one person’s preferences from silently overriding another’s.',
      coverImage: 'assets/projects/anonymous-project-cover.png',
      tags: ['Multi-user', 'Interaction', 'Concept'],
      links: {}
    }
  ];

  const learning = {
    prompts: [
      {
        title: 'First-principles Product Critique',
        useCase: 'Stress-test a product idea before building it.',
        fullContent: 'Ask what behavior the idea replaces, where it breaks, and what early evidence would prove the idea wrong.'
      },
      {
        title: 'Post-build Reflection',
        useCase: 'Extract transferable lessons after a prototype.',
        fullContent: 'Separate what was built, which assumptions failed, what surprised the team, and what should change next time.'
      }
    ],
    methods: [
      {
        title: 'Learning by Doing',
        appliesTo: 'New tools, unfamiliar domains, and product intuition',
        summary: 'Choose a real problem, ship the smallest learning vehicle, observe what breaks, and transfer the lesson.'
      },
      {
        title: 'AI-augmented Thinking',
        appliesTo: 'Research synthesis and uncertain decisions',
        summary: 'Use AI to challenge a position, surface counterexamples, and compare perspectives—not merely to polish an answer.'
      }
    ],
    notes: [
      {
        title: 'The Self-validation Trap',
        source: 'Working note',
        summary: 'A clearer restatement can feel like a new insight. Structured disagreement helps distinguish fluency from progress.'
      },
      {
        title: 'The Taste Bottleneck',
        source: 'Working note',
        summary: 'When execution becomes cheaper, judgment about what deserves to exist becomes more valuable.'
      }
    ],
    readings: [
      {
        title: 'Experience and Learning',
        author: 'Reading note',
        summary: 'Complex skills develop through action, reflection, and another round of action.'
      },
      {
        title: 'Technology and Co-evolution',
        author: 'Reading note',
        summary: 'Tools do not merely serve people; repeated use reshapes how people notice, decide, and create.'
      }
    ],
    tools: []
  };

  const aiLab = {
    gallery: [
      {
        title: 'Asteroid Civilization',
        model: 'Generative visual study',
        goal: 'Tenderness at cosmic scale.',
        prompt: 'A tiny inhabited world suspended in a wide field of quiet space.',
        image: 'assets/ai-lab/asteroid-civilization.webp',
        thumbnail: 'assets/ai-lab/asteroid-civilization.webp'
      },
      {
        title: 'Coffee Shop in a Stone',
        model: 'Generative visual study',
        goal: 'Warmth hidden inside the ordinary.',
        prompt: 'A small café carved into a monumental stone, warm light against a muted landscape.',
        image: 'assets/ai-lab/stone-cafe.webp',
        thumbnail: 'assets/ai-lab/stone-cafe.webp'
      },
      {
        title: 'Whale-rib Library',
        model: 'Generative visual study',
        goal: 'A reading space built from memory.',
        prompt: 'A quiet library sheltered by an enormous organic structure, soft light and visible paper textures.',
        image: 'assets/ai-lab/whale-library.webp',
        thumbnail: 'assets/ai-lab/whale-library.webp'
      },
      {
        title: 'Floating Cloud House',
        model: 'Generative visual study',
        goal: 'A light home above a heavy world.',
        prompt: 'A small house resting on a cloud, restrained color, generous negative space, and a hand-made feeling.',
        image: 'assets/ai-lab/cloud-house.webp',
        thumbnail: 'assets/ai-lab/cloud-house.webp'
      }
    ],
    ideas: [
      {
        title: 'Progressive Disclosure for AI',
        content: 'Reveal a few core actions first, then introduce advanced capability as users gain confidence.',
        tags: ['AI', 'Interaction']
      },
      {
        title: 'Undo for Agent Actions',
        content: 'Preview reversible steps and require confirmation before an agent performs an irreversible action.',
        tags: ['Agents', 'Safety']
      },
      {
        title: 'Confidence as Interface Material',
        content: 'Let certainty change the interface: direct answer, alternatives, or an explicit statement of uncertainty.',
        tags: ['Trust', 'UX']
      },
      {
        title: 'Conversation as a Wireframe',
        content: 'Test structure and interaction through dialogue before investing in a detailed visual interface.',
        tags: ['Prototype', 'Workflow']
      }
    ]
  };

  const PARK_CONTENT = {
    profile: {
      name: 'An Anonymous Product Builder',
      role: 'Product · Research · Build',
      intro: 'Turning ambiguous technology questions into testable products and understandable systems.',
      story: 'This public edition focuses on the work itself: how problems are framed, how evidence becomes a decision, and how ideas become prototypes. Personal history and identifying details are intentionally omitted.',
      locations: ['Products', 'Research', 'Making']
    },
    timeline: [
      { year: 'Foundation', title: 'Humanities Perspective', kind: 'Education', role: 'Language, interpretation, and communication', text: 'Training in close reading and communication developed sensitivity to language, context, and unstated needs.', note: 'Understanding people before optimizing systems.' },
      { year: 'Research', title: 'User Research Practice', kind: 'Methods', role: 'Surveys, interviews, and field observation', text: 'Mixed-method research was used to turn fragmented behavior into user segments and product direction.', note: 'Evidence first; recommendations second.' },
      { year: 'Technology', title: 'Language and AI Systems', kind: 'Methods', role: 'Analysis, evaluation, and prototyping', text: 'Language analysis and AI experimentation became a bridge between human nuance and technical systems.', note: 'Translate complexity into something testable.' },
      { year: 'Context', title: 'Cross-cultural Observation', kind: 'Perspective', role: 'Localization and everyday product behavior', text: 'Different regions reveal how privacy, payment, public space, and social norms shape product expectations.', note: 'Localization is behavior design, not only translation.' },
      { year: 'Delivery', title: 'Enterprise AI Products', kind: 'Experience', role: 'Requirements, evaluation, data, and workflow design', text: 'Product work connected ambiguous needs to requirements, prototypes, evaluation frameworks, and repeatable delivery systems.', note: 'A product must survive real constraints.' },
      { year: 'Community', title: 'Developer Ecosystems', kind: 'Experience', role: 'Contribution paths, technical storytelling, and feedback loops', text: 'Community work explored how technical ideas become understandable and how first-time participants become meaningful contributors.', note: 'Participation is also a product experience.' }
    ],
    projects: {
      featuredIds: projects.map(project => project.slug),
      items: projects
    },
    learning,
    aiLab,
    travel: {
      countries: ['Asia', 'Europe'],
      cities: places,
      routes,
      summary: 'An illustrative geography of regions and perspectives, not a personal travel record'
    },
    photos,
    skills: [
      { name: 'AI Systems', items: ['Prompt architecture', 'Retrieval workflows', 'Agent interaction', 'Quality evaluation', 'Uncertainty design'] },
      { name: 'Product', items: ['Problem framing', 'Requirements', 'User research', 'Interaction design', 'Acceptance criteria'] },
      { name: 'Build', items: ['Working prototypes', 'Frontend systems', 'Python workflows', 'Automation', 'Data pipelines'] },
      { name: 'Synthesis', items: ['Survey design', 'Interview synthesis', 'Comparative analysis', 'Product storytelling', 'Cross-disciplinary translation'] }
    ],
    awards: [
      { title: 'Working Prototypes', meta: 'Evidence through interaction', detail: 'Ideas are tested in something people can use, not only described in slides.' },
      { title: 'Research to Decision', meta: 'Evidence with a destination', detail: 'Research outputs are translated into segments, priorities, and product choices.' },
      { title: 'Reusable Systems', meta: 'Methods that can repeat', detail: 'One-off work is turned into workflows, checklists, and evaluation structures.' },
      { title: 'Documented Failure', meta: 'Learning without polish', detail: 'Broken assumptions and abandoned directions remain part of the portfolio evidence.' }
    ],
    interests: [
      ['Literature and close reading', 'How language changes what people notice.'],
      ['Photography', 'How people inhabit spaces and remember light.'],
      ['Drawing', 'Looking slowly before deciding what to make.'],
      ['Travel observation', 'How everyday systems change across regions.'],
      ['Building with AI', 'Turning questions into prototypes and letting use correct the idea.']
    ],
    failures: [
      { title: 'Built Before Validation', meta: 'The system worked; the behavior did not', detail: 'A reminder to test the user need before completing the machinery.' },
      { title: 'Over-specific First Version', meta: 'Precision too early', detail: 'A reminder to keep the first public explanation broad enough to invite understanding.' },
      { title: 'Fluency Mistaken for Insight', meta: 'The self-validation trap', detail: 'A reminder to request disagreement and external evidence.' }
    ],
    contact: {},
    sourceState: 'public-demo'
  };

  PARK_CONTENT.ready = Promise.resolve(PARK_CONTENT);
  window.PARK_CONTENT = PARK_CONTENT;
})();
