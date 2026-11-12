// Astrological Dataset & Knowledge Base

export const ELEMENTS = {
  Fire: {
    name: 'Fire',
    signs: ['Aries', 'Leo', 'Sagittarius'],
    nature: 'Yang / Active',
    essence: 'Vital energy, courage, inspiration, and direct action.',
    psychology: 'Driven by intuition and spontaneous creative impulses.',
    excess: 'Impatience, restlessness, and burnout.',
    deficit: 'Difficulty initiating action, low energy, and hesitation.',
    compatibilityRule: 'Harmonizes with Air; creates intense dynamics with Water and Earth.',
    color: '#FF3B30',
    code: 'FIRE'
  },
  Earth: {
    name: 'Earth',
    signs: ['Taurus', 'Virgo', 'Capricorn'],
    nature: 'Yin / Receptive',
    essence: 'Physical reality, endurance, practical mastery, and stability.',
    psychology: 'Anchored in sensory perception, measurable outcomes, and consistency.',
    excess: 'Rigidity, resistance to change, and over-caution.',
    deficit: 'Difficulty grounding ideas into concrete form.',
    compatibilityRule: 'Harmonizes with Water; grounds Fire, and organizes Air.',
    color: '#10B981',
    code: 'EARTH'
  },
  Air: {
    name: 'Air',
    signs: ['Gemini', 'Libra', 'Aquarius'],
    nature: 'Yang / Active',
    essence: 'Intellect, conceptual synthesis, communication, and social dynamics.',
    psychology: 'Driven by curiosity, logic, objectivity, and perspective.',
    excess: 'Overthinking, intellectual detachment, and anxiety.',
    deficit: 'Struggle to see patterns objectively or articulate thoughts clearly.',
    compatibilityRule: 'Harmonizes with Fire; pairs with Earth and Water through translation.',
    color: '#38BDF8',
    code: 'AIR'
  },
  Water: {
    name: 'Water',
    signs: ['Cancer', 'Scorpio', 'Pisces'],
    nature: 'Yin / Receptive',
    essence: 'Subconscious depth, empathy, emotional awareness, and intuition.',
    psychology: 'Navigates through emotional resonance and subtle interpersonal currents.',
    excess: 'Emotional overwhelm, mood swings, and lack of boundaries.',
    deficit: 'Difficulty accessing empathy or emotional vulnerability.',
    compatibilityRule: 'Harmonizes with Earth; interacts dynamically with Fire and Air.',
    color: '#818CF8',
    code: 'WATER'
  }
};

export const MODALITIES = {
  Cardinal: {
    name: 'Cardinal',
    signs: ['Aries', 'Cancer', 'Libra', 'Capricorn'],
    season: 'Season Starts',
    role: 'The Initiators',
    description: 'Start new cycles, take action, set direction, and break inertia.'
  },
  Fixed: {
    name: 'Fixed',
    signs: ['Taurus', 'Leo', 'Scorpio', 'Aquarius'],
    season: 'Season Peaks',
    role: 'The Builders',
    description: 'Sustain momentum, build structures, and provide stability.'
  },
  Mutable: {
    name: 'Mutable',
    signs: ['Gemini', 'Virgo', 'Sagittarius', 'Pisces'],
    season: 'Season Transitions',
    role: 'The Adaptors',
    description: 'Synthesize changes, adapt effortlessly, and prepare for transitions.'
  }
};

export const ZODIAC_SIGNS = [
  {
    id: 'aries',
    name: 'Aries',
    latinName: 'Aries',
    symbol: 'ARI',
    dates: 'Mar 21 – Apr 19',
    element: 'Fire',
    modality: 'Cardinal',
    polarity: 'Yang / Active',
    rulingPlanet: 'Mars',
    secondaryPlanet: 'Pluto',
    rulingHouse: '1st House (Self & Vitality)',
    tarotCard: 'IV The Emperor',
    tarotArchetype: 'Willpower, sovereignty, and leadership.',
    bodyPart: 'Head and Brain',
    birthstones: ['Bloodstone', 'Diamond'],
    metal: 'Iron',
    herbsAndFlowers: 'Rosemary, Thistle',
    colorAccent: '#FF3B30',
    motto: 'I Am',
    summary: 'The initiator of the zodiac, driven by direct instinct and courage.',
    superpowers: [
      'Courage in high-stakes situations',
      'Instantaneous instincts and initiative',
      'Pioneering mindset that breaks stagnation',
      'Clear, focused vitality'
    ],
    shadowSide: [
      'Impatience and quick temper',
      'Difficulty finishing what was started',
      'Tunnel vision when under stress',
      'Resistance to showing vulnerability'
    ],
    psychologicalProfile: 'Aries acts on pure momentum. They move without waiting for external permission, motivated by self-actualization and tangible challenges.',
    loveAndIntimacy: 'Direct, honest, and passionate. They value autonomy and respect partners who speak openly without games.',
    careerAndWealth: 'Pioneering roles, entrepreneurship, independent leadership, and fast-paced environments.',
    ascendantTraits: 'Direct eye contact, energetic carriage, and an immediate, forward-leaning presence.',
    decans: [
      { span: '0° - 9°', ruler: 'Mars', archetype: 'The Initiator: Rapid response, will, speed.' },
      { span: '10° - 19°', ruler: 'Sun', archetype: 'The Sovereign: Warmth, executive presence.' },
      { span: '20° - 29°', ruler: 'Jupiter', archetype: 'The Explorer: Vision, optimism, curiosity.' }
    ]
  },
  {
    id: 'taurus',
    name: 'Taurus',
    latinName: 'Taurus',
    symbol: 'TAU',
    dates: 'Apr 20 – May 20',
    element: 'Earth',
    modality: 'Fixed',
    polarity: 'Yin / Receptive',
    rulingPlanet: 'Venus',
    secondaryPlanet: 'Earth',
    rulingHouse: '2nd House (Values & Security)',
    tarotCard: 'V The Hierophant',
    tarotArchetype: 'Patience, structure, and endurance.',
    bodyPart: 'Neck and Throat',
    birthstones: ['Emerald', 'Sapphire'],
    metal: 'Copper',
    herbsAndFlowers: 'Rose, Thyme',
    colorAccent: '#10B981',
    motto: 'I Have',
    summary: 'The stabilizer of material form, building sustainable permanence and comfort.',
    superpowers: [
      'Stamina and reliability',
      'Refined sense of quality and proportion',
      'Grounded presence that settles tension',
      'Prudent resource management'
    ],
    shadowSide: [
      'Reluctance to alter routines',
      'Possessiveness',
      'Inertia during necessary change',
      'Over-attachment to comfort'
    ],
    psychologicalProfile: 'Taurus processes reality through physical senses and practical results. They prioritize long-term durability over short-term trends.',
    loveAndIntimacy: 'Consistent, devoted, and tactile. They seek dependable loyalty and peaceful, shared routines.',
    careerAndWealth: 'Asset management, architecture, culinary arts, design, and operations.',
    ascendantTraits: 'Calm posture, steady voice, and a serene, grounded demeanor.',
    decans: [
      { span: '0° - 9°', ruler: 'Venus', archetype: 'The Sensualist: Balance, calm, aesthetics.' },
      { span: '10° - 19°', ruler: 'Mercury', archetype: 'The Craftsperson: Analytical precision, craft.' },
      { span: '20° - 29°', ruler: 'Saturn', archetype: 'The Builder: Discipline, stamina, legacy.' }
    ]
  },
  {
    id: 'gemini',
    name: 'Gemini',
    latinName: 'Gemini',
    symbol: 'GEM',
    dates: 'May 21 – Jun 20',
    element: 'Air',
    modality: 'Mutable',
    polarity: 'Yang / Active',
    rulingPlanet: 'Mercury',
    secondaryPlanet: 'Chiron',
    rulingHouse: '3rd House (Mind & Exchange)',
    tarotCard: 'VI The Lovers',
    tarotArchetype: 'Dual perspective, choice, and mental synthesis.',
    bodyPart: 'Arms, Hands, and Lungs',
    birthstones: ['Agate', 'Citrine'],
    metal: 'Mercury',
    herbsAndFlowers: 'Lavender, Mint',
    colorAccent: '#F59E0B',
    motto: 'I Think',
    summary: 'The communicator and networker, translating ideas across different domains.',
    superpowers: [
      'Mental flexibility and quick learning',
      'Ability to connect unrelated concepts',
      'Adaptability across social environments',
      'Clarity in articulation and writing'
    ],
    shadowSide: [
      'Scattered attention and restlessness',
      'Occasional detachment from feelings',
      'Information overload',
      'Difficulty staying focused on one project'
    ],
    psychologicalProfile: 'Gemini examines reality through dialogue, data, and mental models. Curiosity drives every action.',
    loveAndIntimacy: 'Needs intellectual rapport, frequent conversation, and shared curiosity.',
    careerAndWealth: 'Media, software development, research, writing, consulting, and negotiation.',
    ascendantTraits: 'Nimble movement, quick gestures, and engaged, expressive eyes.',
    decans: [
      { span: '0° - 9°', ruler: 'Mercury', archetype: 'The Analyst: Speed, curiosity, wit.' },
      { span: '10° - 19°', ruler: 'Venus', archetype: 'The Diplomat: Grace, charm, balance.' },
      { span: '20° - 29°', ruler: 'Uranus', archetype: 'The Innovator: Original perspective, breakthroughs.' }
    ]
  },
  {
    id: 'cancer',
    name: 'Cancer',
    latinName: 'Cancer',
    symbol: 'CAN',
    dates: 'Jun 21 – Jul 22',
    element: 'Water',
    modality: 'Cardinal',
    polarity: 'Yin / Receptive',
    rulingPlanet: 'The Moon',
    secondaryPlanet: 'Neptune',
    rulingHouse: '4th House (Home & Roots)',
    tarotCard: 'VII The Chariot',
    tarotArchetype: 'Emotional strength, protection, and resolve.',
    bodyPart: 'Chest and Stomach',
    birthstones: ['Moonstone', 'Pearl'],
    metal: 'Silver',
    herbsAndFlowers: 'Chamomile, Jasmine',
    colorAccent: '#93C5FD',
    motto: 'I Feel',
    summary: 'The protective anchor of emotional continuity and empathetic care.',
    superpowers: [
      'Intuitive awareness of others’ needs',
      'Devotion and protective loyalty',
      'Empathy and supportive leadership',
      'Strong memory and cultural awareness'
    ],
    shadowSide: [
      'Defensive withdrawal when stressed',
      'Holding onto past slights',
      'Mood fluctuations',
      'Over-protectiveness'
    ],
    psychologicalProfile: 'Cancer navigates the world through emotional safety and trust. Once safe, their capacity to nurture is steadfast.',
    loveAndIntimacy: 'Values privacy, emotional transparency, and long-term security.',
    careerAndWealth: 'Psychology, real estate, hospitality, writing, healthcare, and education.',
    ascendantTraits: 'Gentle presence, receptive expression, and open body language.',
    decans: [
      { span: '0° - 9°', ruler: 'Moon', archetype: 'The Nurturer: Intuition, support.' },
      { span: '10° - 19°', ruler: 'Pluto', archetype: 'The Transformer: Depth, persistence.' },
      { span: '20° - 29°', ruler: 'Neptune', archetype: 'The Dreamer: Compassion, imagination.' }
    ]
  },
  {
    id: 'leo',
    name: 'Leo',
    latinName: 'Leo',
    symbol: 'LEO',
    dates: 'Jul 23 – Aug 22',
    element: 'Fire',
    modality: 'Fixed',
    polarity: 'Yang / Active',
    rulingPlanet: 'The Sun',
    secondaryPlanet: 'Jupiter',
    rulingHouse: '5th House (Creativity & Expression)',
    tarotCard: 'VIII Strength',
    tarotArchetype: 'Inner confidence, warmth, and resilience.',
    bodyPart: 'Heart and Spine',
    birthstones: ['Sunstone', 'Peridot'],
    metal: 'Gold',
    herbsAndFlowers: 'Sunflower, Saffron',
    colorAccent: '#FBBF24',
    motto: 'I Will',
    summary: 'The creative center of self-expression, confidence, and generous leadership.',
    superpowers: [
      'Natural encouragement of others',
      'Steady confidence under pressure',
      'Creative vision and stage presence',
      'Generosity and loyalty'
    ],
    shadowSide: [
      'Vulnerability to bruised ego',
      'Impatience when unrecognized',
      'Resistance to delegating spotlight',
      'Over-dramatizing difficulties'
    ],
    psychologicalProfile: 'Leo is fueled by authentic self-expression. Their confidence thrives when inspiring others to recognize their own gifts.',
    loveAndIntimacy: 'Open-hearted, affectionate, and protective. They celebrate their partners proudly.',
    careerAndWealth: 'Creative direction, management, arts, brand leadership, and entrepreneurship.',
    ascendantTraits: 'Upright posture, warm greeting, and an engaging, radiant presence.',
    decans: [
      { span: '0° - 9°', ruler: 'Sun', archetype: 'The Leader: Confidence, presence.' },
      { span: '10° - 19°', ruler: 'Jupiter', archetype: 'The Visionary: Generosity, breadth.' },
      { span: '20° - 29°', ruler: 'Mars', archetype: 'The Competitor: Drive, focus.' }
    ]
  },
  {
    id: 'virgo',
    name: 'Virgo',
    latinName: 'Virgo',
    symbol: 'VIR',
    dates: 'Aug 23 – Sep 22',
    element: 'Earth',
    modality: 'Mutable',
    polarity: 'Yin / Receptive',
    rulingPlanet: 'Mercury',
    secondaryPlanet: 'Ceres',
    rulingHouse: '6th House (Service & Optimization)',
    tarotCard: 'IX The Hermit',
    tarotArchetype: 'Discernment, craftsmanship, and quiet wisdom.',
    bodyPart: 'Digestive System',
    birthstones: ['Sapphire', 'Amazonite'],
    metal: 'Platinum',
    herbsAndFlowers: 'Fennel, Valerian',
    colorAccent: '#A855F7',
    motto: 'I Analyze',
    summary: 'The precision analyst, optimizing systems, crafts, and practical routines.',
    superpowers: [
      'Systematic problem solving',
      'Attention to detail without losing structure',
      'Reliable, practical assistance',
      'Commitment to continuous improvement'
    ],
    shadowSide: [
      'Excessive self-criticism',
      'Micromanaging minor flaws',
      'Anxiety over disorder',
      'Hesitation before launching imperfect work'
    ],
    psychologicalProfile: 'Virgo seeks functional clarity. They find fulfillment by refining messy processes into dependable systems.',
    loveAndIntimacy: 'Shows care through thoughtful deeds, support in daily life, and attentive listening.',
    careerAndWealth: 'Data science, editing, healthcare, technical architecture, and operations.',
    ascendantTraits: 'Composed manner, observant gaze, and understated, neat styling.',
    decans: [
      { span: '0° - 9°', ruler: 'Mercury', archetype: 'The Analyst: Precision, research.' },
      { span: '10° - 19°', ruler: 'Saturn', archetype: 'The Strategist: Structure, discipline.' },
      { span: '20° - 29°', ruler: 'Venus', archetype: 'The Artisan: Aesthetic craft, patience.' }
    ]
  },
  {
    id: 'libra',
    name: 'Libra',
    latinName: 'Libra',
    symbol: 'LIB',
    dates: 'Sep 23 – Oct 22',
    element: 'Air',
    modality: 'Cardinal',
    polarity: 'Yang / Active',
    rulingPlanet: 'Venus',
    secondaryPlanet: 'Uranus',
    rulingHouse: '7th House (Partnerships & Balance)',
    tarotCard: 'XI Justice',
    tarotArchetype: 'Equilibrium, objective fairness, and alignment.',
    bodyPart: 'Kidneys and Lower Back',
    birthstones: ['Opal', 'Tourmaline'],
    metal: 'Copper',
    herbsAndFlowers: 'Rose, Violet',
    colorAccent: '#F43F5E',
    motto: 'I Balance',
    summary: 'The harmonizer of relationships, seeking symmetry, fairness, and mutual understanding.',
    superpowers: [
      'Objective mediation in conflict',
      'Relational diplomacy',
      'Refined design judgment',
      'Consideration for multiple viewpoints'
    ],
    shadowSide: [
      'Hesitation during decisions',
      'Avoiding necessary conflict',
      'Self-compromise to maintain peace',
      'Passive-aggressive delay'
    ],
    psychologicalProfile: 'Libra perceives life through reciprocity. They work best in collaborative partnerships where respect is shared equally.',
    loveAndIntimacy: 'Egalitarian, considerate, and attentive. Prefers thoughtful communication and joint decisions.',
    careerAndWealth: 'Law, mediation, design, diplomacy, partnerships, and publishing.',
    ascendantTraits: 'Symmetrical features, graceful posture, and a pleasant, welcoming tone.',
    decans: [
      { span: '0° - 9°', ruler: 'Venus', archetype: 'The Harmonizer: Charm, design.' },
      { span: '10° - 19°', ruler: 'Uranus', archetype: 'The Reformer: Fairness, community.' },
      { span: '20° - 29°', ruler: 'Mercury', archetype: 'The Negotiator: Rhetoric, agreements.' }
    ]
  },
  {
    id: 'scorpio',
    name: 'Scorpio',
    latinName: 'Scorpio',
    symbol: 'SCO',
    dates: 'Oct 23 – Nov 21',
    element: 'Water',
    modality: 'Fixed',
    polarity: 'Yin / Receptive',
    rulingPlanet: 'Pluto & Mars',
    secondaryPlanet: 'Mars',
    rulingHouse: '8th House (Transformation & Depth)',
    tarotCard: 'XIII Death',
    tarotArchetype: 'Renewal, transition, and cutting through illusions.',
    bodyPart: 'Reproductive System',
    birthstones: ['Obsidian', 'Garnet'],
    metal: 'Iron',
    herbsAndFlowers: 'Basil, Gentian',
    colorAccent: '#E11D48',
    motto: 'I Transform',
    summary: 'The investigator of underlying motives, mastering resilience, focus, and renewal.',
    superpowers: [
      'Sharp psychological perception',
      'Emotional resilience during setbacks',
      'Complete loyalty to trusted allies',
      'Uncompromising honesty'
    ],
    shadowSide: [
      'Difficulty letting go of grievances',
      'Guarded suspicion of motives',
      'Controlling behaviors when vulnerable',
      'Emotional withdrawal'
    ],
    psychologicalProfile: 'Scorpio bypasses superficialities to understand root causes. They value depth, self-control, and integrity above casual pleasantry.',
    loveAndIntimacy: 'Committed, loyal, and candid. Requires mutual trust and emotional honesty.',
    careerAndWealth: 'Investigation, psychology, crisis management, research, and capital allocation.',
    ascendantTraits: 'Penetrating gaze, focused posture, and an intense, measured presence.',
    decans: [
      { span: '0° - 9°', ruler: 'Pluto', archetype: 'The Investigator: Focus, depth.' },
      { span: '10° - 19°', ruler: 'Neptune', archetype: 'The Intuitive: Insight, empathy.' },
      { span: '20° - 29°', ruler: 'Moon', archetype: 'The Protector: Tenacity, loyalty.' }
    ]
  },
  {
    id: 'sagittarius',
    name: 'Sagittarius',
    latinName: 'Sagittarius',
    symbol: 'SAG',
    dates: 'Nov 22 – Dec 21',
    element: 'Fire',
    modality: 'Mutable',
    polarity: 'Yang / Active',
    rulingPlanet: 'Jupiter',
    secondaryPlanet: 'Earth',
    rulingHouse: '9th House (Philosophy & Expansion)',
    tarotCard: 'XIV Temperance',
    tarotArchetype: 'Integration of opposites, optimism, and learning.',
    bodyPart: 'Hips and Thighs',
    birthstones: ['Turquoise', 'Tanzanite'],
    metal: 'Tin',
    herbsAndFlowers: 'Sage, Borage',
    colorAccent: '#06B6D4',
    motto: 'I Seek',
    summary: 'The explorer of perspectives, seeking broad horizons, knowledge, and freedom.',
    superpowers: [
      'Infectious optimism and resilience',
      'Broad strategic vision',
      'Direct, unfiltered clarity',
      'Curiosity for diverse cultures and disciplines'
    ],
    shadowSide: [
      'Restlessness with routine tasks',
      'Bluntness that may overlook feelings',
      'Over-committing and under-delivering',
      'Impatience with slow processes'
    ],
    psychologicalProfile: 'Sagittarius needs intellectual and physical room to grow. Confinement or dogma triggers an immediate search for fresh air.',
    loveAndIntimacy: 'Values friendship first, mutual freedom, and shared adventures.',
    careerAndWealth: 'Education, publishing, international business, law, and strategy.',
    ascendantTraits: 'Expansive stride, clear laughter, and an approachable, open manner.',
    decans: [
      { span: '0° - 9°', ruler: 'Jupiter', archetype: 'The Explorer: Travel, curiosity.' },
      { span: '10° - 19°', ruler: 'Mars', archetype: 'The Advocate: Directness, courage.' },
      { span: '20° - 29°', ruler: 'Sun', archetype: 'The Educator: Inspiration, teaching.' }
    ]
  },
  {
    id: 'capricorn',
    name: 'Capricorn',
    latinName: 'Capricorn',
    symbol: 'CAP',
    dates: 'Dec 22 – Jan 19',
    element: 'Earth',
    modality: 'Cardinal',
    polarity: 'Yin / Receptive',
    rulingPlanet: 'Saturn',
    secondaryPlanet: 'Venus',
    rulingHouse: '10th House (Career & Legacy)',
    tarotCard: 'XV The Devil',
    tarotArchetype: 'Mastery of material constraints, duty, and responsibility.',
    bodyPart: 'Bones and Joints',
    birthstones: ['Garnet', 'Onyx'],
    metal: 'Lead',
    herbsAndFlowers: 'Thyme, Cypress',
    colorAccent: '#94A3B8',
    motto: 'I Master',
    summary: 'The disciplined builder, achieving long-term accomplishments through consistency.',
    superpowers: [
      'Patience over long-term timelines',
      'Structural and organizational competence',
      'Quiet integrity and reliability',
      'Pragmatic realism in uncertainty'
    ],
    shadowSide: [
      'Tendency toward emotional containment',
      'Evaluating self solely by output',
      'Pessimistic caution',
      'Hesitation to ask for help'
    ],
    psychologicalProfile: 'Capricorn views time as an ally. They compound skills methodically, focusing on tangible responsibility.',
    loveAndIntimacy: 'Reliable, steady, and protective. Devotion is demonstrated through consistency and long-term commitment.',
    careerAndWealth: 'Executive leadership, engineering, governance, financial stewardship, and operations.',
    ascendantTraits: 'Composed demeanor, measured cadence, and structured presence.',
    decans: [
      { span: '0° - 9°', ruler: 'Saturn', archetype: 'The Planner: Integrity, endurance.' },
      { span: '10° - 19°', ruler: 'Venus', archetype: 'The Manager: Reliability, patience.' },
      { span: '20° - 29°', ruler: 'Mercury', archetype: 'The Operator: Methodical efficiency.' }
    ]
  },
  {
    id: 'aquarius',
    name: 'Aquarius',
    latinName: 'Aquarius',
    symbol: 'AQU',
    dates: 'Jan 20 – Feb 18',
    element: 'Air',
    modality: 'Fixed',
    polarity: 'Yang / Active',
    rulingPlanet: 'Uranus & Saturn',
    secondaryPlanet: 'Saturn',
    rulingHouse: '11th House (Networks & Innovation)',
    tarotCard: 'XVII The Star',
    tarotArchetype: 'Progressive vision, community, and clarity.',
    bodyPart: 'Ankles and Circulation',
    birthstones: ['Amethyst', 'Aquamarine'],
    metal: 'Aluminum',
    herbsAndFlowers: 'Chamomile, Orchid',
    colorAccent: '#38BDF8',
    motto: 'I Know',
    summary: 'The independent thinker, developing new paradigms for community and systems.',
    superpowers: [
      'Objective systemic perspective',
      'Original, independent ideas',
      'Commitment to egalitarian principles',
      'Comfort with non-traditional paths'
    ],
    shadowSide: [
      'Emotional detachment in close conflict',
      'Contrarian stance for its own sake',
      'Stubbornness in intellectual debates',
      'Difficulty with one-on-one vulnerability'
    ],
    psychologicalProfile: 'Aquarius questions defaults to find more equitable frameworks. Freedom to question is non-negotiable.',
    loveAndIntimacy: 'Values friendship, intellectual equality, and mutual independence.',
    careerAndWealth: 'Technology, social policy, scientific research, design, and non-profits.',
    ascendantTraits: 'Unconventional style, alert eyes, and an attentive yet detached posture.',
    decans: [
      { span: '0° - 9°', ruler: 'Uranus', archetype: 'The Innovator: Originality, concepts.' },
      { span: '10° - 19°', ruler: 'Mercury', archetype: 'The Networker: Synthesis, communication.' },
      { span: '20° - 29°', ruler: 'Venus', archetype: 'The Equalizer: Community, collaboration.' }
    ]
  },
  {
    id: 'pisces',
    name: 'Pisces',
    latinName: 'Pisces',
    symbol: 'PIS',
    dates: 'Feb 19 – Mar 20',
    element: 'Water',
    modality: 'Mutable',
    polarity: 'Yin / Receptive',
    rulingPlanet: 'Neptune & Jupiter',
    secondaryPlanet: 'Jupiter',
    rulingHouse: '12th House (Unconscious & Integration)',
    tarotCard: 'XVIII The Moon',
    tarotArchetype: 'Intuition, subconscious depth, and reflection.',
    bodyPart: 'Feet and Lymphatic System',
    birthstones: ['Aquamarine', 'Fluorite'],
    metal: 'Platinum',
    herbsAndFlowers: 'Lotus, Willow',
    colorAccent: '#818CF8',
    motto: 'I Believe',
    summary: 'The intuitive observer, connecting with empathy, imagination, and holistic awareness.',
    superpowers: [
      'Compassionate empathy for diverse people',
      'Creative imagination and artistic sensitivity',
      'Adaptability across varying atmospheres',
      'Capacity to forgive and see nuance'
    ],
    shadowSide: [
      'Avoidance of confrontation',
      'Difficulty holding firm boundaries',
      'Absorbing other people’s stress',
      'Hesitation with logistical demands'
    ],
    psychologicalProfile: 'Pisces perceives through holistic resonance. Boundaries are fluid, enabling creative empathy.',
    loveAndIntimacy: 'Gentle, romantic, and supportive. Seeks partners who provide calm, dependable grounding.',
    careerAndWealth: 'Creative arts, counseling, writing, healthcare, psychology, and music.',
    ascendantTraits: 'Fluid movement, gentle eye contact, and an unassuming, calm presence.',
    decans: [
      { span: '0° - 9°', ruler: 'Neptune', archetype: 'The Dreamer: Intuition, empathy.' },
      { span: '10° - 19°', ruler: 'Moon', archetype: 'The Healer: Compassion, safety.' },
      { span: '20° - 29°', ruler: 'Pluto', archetype: 'The Magus: Depth, transformation.' }
    ]
  }
];

export const ASCENDANT_PROFILES = {
  aries: {
    risingName: 'Aries Rising',
    chartRuler: 'Mars',
    mask: 'The Trailblazer',
    firstImpression: 'Direct, vigorous, and alert.',
    physicalTraits: 'Direct eye contact, rapid stride, and focused posture.',
    lifeTheme: 'Learning self-reliance without alienating partners. Sets House 1 in Aries and House 10 in Capricorn.'
  },
  taurus: {
    risingName: 'Taurus Rising',
    chartRuler: 'Venus',
    mask: 'The Anchor',
    firstImpression: 'Tranquil, dependable, and composed.',
    physicalTraits: 'Steady presence, resonant voice, and graceful carriage.',
    lifeTheme: 'Cultivating sustainable self-worth and consistency.'
  },
  gemini: {
    risingName: 'Gemini Rising',
    chartRuler: 'Mercury',
    mask: 'The Messenger',
    firstImpression: 'Quick, witty, and observant.',
    physicalTraits: 'Inquisitive eyes, animated expressions, and nimble movements.',
    lifeTheme: 'Communicating diverse perspectives clearly.'
  },
  cancer: {
    risingName: 'Cancer Rising',
    chartRuler: 'The Moon',
    mask: 'The Guardian',
    firstImpression: 'Warm, intuitive, and protective.',
    physicalTraits: 'Receptive expression, welcoming demeanor.',
    lifeTheme: 'Mastering emotional navigation and building dependable foundations.'
  },
  leo: {
    risingName: 'Leo Rising',
    chartRuler: 'The Sun',
    mask: 'The Luminary',
    firstImpression: 'Confident, engaging, and warm.',
    physicalTraits: 'Upright posture and warm, open presentation.',
    lifeTheme: 'Expressing authentic leadership while supporting others.'
  },
  virgo: {
    risingName: 'Virgo Rising',
    chartRuler: 'Mercury',
    mask: 'The Analyst',
    firstImpression: 'Poised, observant, and quiet.',
    physicalTraits: 'Neat carriage, attentive gaze, and measured movement.',
    lifeTheme: 'Developing mastery through reliable craft and service.'
  },
  libra: {
    risingName: 'Libra Rising',
    chartRuler: 'Venus',
    mask: 'The Peacemaker',
    firstImpression: 'Balanced, pleasant, and considerate.',
    physicalTraits: 'Symmetrical carriage and relaxed, polite manner.',
    lifeTheme: 'Creating balanced partnerships while maintaining independent identity.'
  },
  scorpio: {
    risingName: 'Scorpio Rising',
    chartRuler: 'Pluto & Mars',
    mask: 'The Investigator',
    firstImpression: 'Focused, observant, and guarded.',
    physicalTraits: 'Penetrating gaze, still posture, and calm demeanor.',
    lifeTheme: 'Navigating transformation and rebuilding strength after setbacks.'
  },
  sagittarius: {
    risingName: 'Sagittarius Rising',
    chartRuler: 'Jupiter',
    mask: 'The Explorer',
    firstImpression: 'Approachable, cheerful, and candid.',
    physicalTraits: 'Open posture and energetic gait.',
    lifeTheme: 'Pursuing learning, travel, and honest philosophy.'
  },
  capricorn: {
    risingName: 'Capricorn Rising',
    chartRuler: 'Saturn',
    mask: 'The Architect',
    firstImpression: 'Dignified, serious, and competent.',
    physicalTraits: 'Composed manner, measured speech, and deliberate posture.',
    lifeTheme: 'Building accomplishments of lasting endurance and integrity.'
  },
  aquarius: {
    risingName: 'Aquarius Rising',
    chartRuler: 'Uranus & Saturn',
    mask: 'The Visionary',
    firstImpression: 'Original, cool, and thoughtful.',
    physicalTraits: 'Alert gaze and independent styling.',
    lifeTheme: 'Bringing progressive ideas into practical reality.'
  },
  pisces: {
    risingName: 'Pisces Rising',
    chartRuler: 'Neptune & Jupiter',
    mask: 'The Observer',
    firstImpression: 'Gentle, attentive, and quiet.',
    physicalTraits: 'Soft movements and calm presence.',
    lifeTheme: 'Expressing empathy while establishing healthy personal boundaries.'
  }
};

export function getCompatibility(signAId, signBId) {
  const signA = ZODIAC_SIGNS.find(s => s.id === signAId) || ZODIAC_SIGNS[0];
  const signB = ZODIAC_SIGNS.find(s => s.id === signBId) || ZODIAC_SIGNS[1];

  const indexA = ZODIAC_SIGNS.findIndex(s => s.id === signA.id);
  const indexB = ZODIAC_SIGNS.findIndex(s => s.id === signB.id);

  const diff = Math.min(Math.abs(indexA - indexB), 12 - Math.abs(indexA - indexB));

  let overall = 80;
  let romance = 80;
  let intellect = 80;
  let stability = 80;
  let aspectName = 'Conjunction (0°)';
  let dynamicTitle = 'Shared Perspective';
  let dynamicText = `${signA.name} and ${signB.name} share common instincts. Strengths and blindspots are mirrored, creating immediate mutual understanding.`;

  if (diff === 4) {
    overall = 96; romance = 94; intellect = 92; stability = 95;
    aspectName = 'Trine (120°)';
    dynamicTitle = 'Natural Elemental Harmony';
    dynamicText = `Sharing the ${signA.element} element, this pairing flows with natural ease and shared priorities.`;
  } else if (diff === 2) {
    overall = 91; romance = 88; intellect = 95; stability = 89;
    aspectName = 'Sextile (60°)';
    dynamicTitle = 'Supportive Dialogue';
    dynamicText = `${signA.element} and ${signB.element} complement each other effectively, balancing ideas and follow-through.`;
  } else if (diff === 6) {
    overall = 85; romance = 95; intellect = 86; stability = 78;
    aspectName = 'Opposition (180°)';
    dynamicTitle = 'Complementary Polarities';
    dynamicText = `Positioned opposite on the zodiac wheel, each possesses qualities the other lacks, creating strong attraction.`;
  } else if (diff === 3) {
    overall = 74; romance = 84; intellect = 72; stability = 68;
    aspectName = 'Square (90°)';
    dynamicTitle = 'Active Friction';
    dynamicText = `A dynamic pairing that encourages mutual growth through active problem solving and compromise.`;
  } else if (diff === 1) {
    overall = 76; romance = 75; intellect = 78; stability = 80;
    aspectName = 'Semi-Sextile (30°)';
    dynamicTitle = 'Adjacent Learning';
    dynamicText = `${signB.name} builds on lessons from ${signA.name}, offering steady, gradual discovery.`;
  } else if (diff === 5) {
    overall = 70; romance = 72; intellect = 70; stability = 70;
    aspectName = 'Quincunx (150°)';
    dynamicTitle = 'Perspective Shift';
    dynamicText = `Sharing neither element nor modality, this pairing thrives on curiosity and deliberate communication.`;
  }

  return {
    signA,
    signB,
    overall,
    romance,
    intellect,
    stability,
    aspectName,
    dynamicTitle,
    dynamicText,
    elementalDynamic: `${signA.element} + ${signB.element}`
  };
}

export function evaluateGroupChemistry(members) {
  if (!members || members.length < 2) return null;

  const countByElement = { Fire: 0, Earth: 0, Air: 0, Water: 0 };
  const countByModality = { Cardinal: 0, Fixed: 0, Mutable: 0 };

  members.forEach(m => {
    const s = ZODIAC_SIGNS.find(sign => sign.id === m.signId) || ZODIAC_SIGNS[0];
    countByElement[s.element] = (countByElement[s.element] || 0) + 1;
    countByModality[s.modality] = (countByModality[s.modality] || 0) + 1;
  });

  const total = members.length;
  const elementPercentages = {
    Fire: Math.round((countByElement.Fire / total) * 100),
    Earth: Math.round((countByElement.Earth / total) * 100),
    Air: Math.round((countByElement.Air / total) * 100),
    Water: Math.round((countByElement.Water / total) * 100),
  };

  const sortedElements = Object.entries(elementPercentages).sort((a,b) => b[1] - a[1]);
  const dominantElement = sortedElements[0][0];

  let archetypeTitle = 'Balanced Collective';
  let archetypeVibe = 'A group that balances action, ideas, emotion, and practical planning.';

  if (elementPercentages.Fire >= 40) {
    archetypeTitle = 'Action & Spontaneity';
    archetypeVibe = 'High energy, initiative, and focus on moving forward quickly.';
  } else if (elementPercentages.Air >= 40) {
    archetypeTitle = 'Ideas & Communication';
    archetypeVibe = 'Curious, conversational, and focused on exchanging ideas.';
  } else if (elementPercentages.Water >= 40) {
    archetypeTitle = 'Empathy & Depth';
    archetypeVibe = 'Close-knit emotional safety and attentive personal loyalty.';
  } else if (elementPercentages.Earth >= 40) {
    archetypeTitle = 'Structure & Reliability';
    archetypeVibe = 'Organized, dependable, and focused on consistent follow-through.';
  }

  const pairSynergies = [];
  for (let i = 0; i < members.length; i++) {
    for (let j = i + 1; j < members.length; j++) {
      const syn = getCompatibility(members[i].signId, members[j].signId);
      pairSynergies.push({
        personA: members[i].name,
        personB: members[j].name,
        score: syn.overall,
        aspect: syn.aspectName,
        summary: syn.dynamicTitle
      });
    }
  }

  const averageSynergy = Math.round(pairSynergies.reduce((acc, p) => acc + p.score, 0) / (pairSynergies.length || 1));

  return {
    archetypeTitle,
    archetypeVibe,
    dominantElement,
    elementPercentages,
    countByModality,
    averageSynergy,
    pairSynergies
  };
}

export const COSMIC_TRANSITS = {
  currentPhase: 'Waxing Moon in Taurus',
  season: 'Scorpio Season',
  planetaryTransits: [
    { planet: 'Pluto in Aquarius', effect: 'Decentralized systems and technological restructuring.' },
    { planet: 'Saturn in Pisces', effect: 'Practical grounding for creative and intuitive projects.' },
    { planet: 'Jupiter in Gemini', effect: 'Curiosity, multiple interests, and active dialogue.' },
    { planet: 'Mars in Leo', effect: 'Direct creative focus and clear personal initiative.' },
  ]
};
