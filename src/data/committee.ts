export type CommitteeMember = {
  name: string;
  nickname: string;
  course: string;
  strengths: string[];
  weaknesses: string[];
  poster: string; // /committee/filename
};

export type CommitteeRole = {
  id: string;
  title: string;
  shortTitle: string;
  emoji: string;
  category: string;
  description: string;
  extendedDescription: string;
  color: string;
  members: CommitteeMember[];
};

export const COMMITTEE_ROLES: CommitteeRole[] = [
  {
    id: "hall-chair",
    title: "Hall Chair",
    shortTitle: "Chair",
    emoji: "👑",
    category: "Leadership",
    description: "Lead the committee & work with the Warden & wider university, ensuring the hall runs smoothly.",
    extendedDescription:
      "The Hall Chair is the elected head of the student committee. They chair all committee meetings, liaise with Loughborough University's residential services, and are ultimately responsible for overseeing every hall event and initiative throughout the academic year. The Chair is the public face of Towers Hall.",
    color: "from-yellow-400/20 to-amber-500/10",
    members: [
      {
        name: "Ciaran Nishimura-Harrison",
        nickname: "the",
        course: "Design",
        strengths: ["Towers Veteran :D"],
        weaknesses: ["Too many clothes :,("],
        poster: "/committee/WhatsApp Image 2026-03-12 at 16.08.44 (4).jpeg",
      },
    ],
  },
  {
    id: "vice-chair",
    title: "Vice Chair & Treasurer",
    shortTitle: "Vice Chair",
    emoji: "🏛️",
    category: "Leadership",
    description: "Deputise for Hall Chair, develop & deliver hall community spirit + budget & oversee hall financial process.",
    extendedDescription:
      "The Vice Chair steps in whenever the Hall Chair is unavailable and helps drive the hall's community spirit initiatives. As Treasurer, they manage the hall's annual budget, track expenses, approve event spending, and ensure the committee operates within financial guidelines set by the LSU.",
    color: "from-blue-400/20 to-indigo-500/10",
    members: [
      {
        name: "Carlo Ravano",
        nickname: "6ft",
        course: "Electrical & Electronic Engineering",
        strengths: ["Spending way too much time on things other than my course!"],
        weaknesses: ["Waking up 2 mins before breakfast shuts!"],
        poster: "/committee/WhatsApp Image 2026-03-12 at 16.08.44 (5).jpeg",
      },
    ],
  },
  {
    id: "hall-warden",
    title: "Hall Warden",
    shortTitle: "Warden",
    emoji: "🛡️",
    category: "Pastoral",
    description: "Providing any pastoral or welfare support, being responsible for discipline in halls.",
    extendedDescription:
      "The Hall Warden is a University-appointed staff member who lives in the hall. They are the first point of contact for any welfare, pastoral, or disciplinary issues. The Warden ensures that residents feel safe, supported, and heard throughout their time at Towers.",
    color: "from-green-400/20 to-emerald-500/10",
    members: [
      {
        name: "Daisy Tipping",
        nickname: "wonderful",
        course: "SSEHS (Staff)",
        strengths: ["Kind", "Caring"],
        weaknesses: ["I cannot say no to my three year old 😅"],
        poster: "/committee/WhatsApp Image 2026-03-12 at 16.08.46 (1).jpeg",
      },
    ],
  },
  {
    id: "sub-warden",
    title: "Sub-Warden",
    shortTitle: "Sub-Warden",
    emoji: "🔑",
    category: "Pastoral",
    description: "Supports the Warden in their duties whilst living in halls.",
    extendedDescription:
      "Sub-Wardens live in the hall and provide day-to-day support alongside the Hall Warden. They are approachable, trained first aiders, and act as a friendly face for residents who need guidance, a listening ear, or help navigating university resources.",
    color: "from-teal-400/20 to-cyan-500/10",
    members: [
      {
        name: "Saim Rehan",
        nickname: "super",
        course: "PHE: Electronics and Communication Engineering",
        strengths: ["Always happy to help — my door is always open!!"],
        weaknesses: ["Can't resist chai and biscuits in the MCR, if I hear the kettle boiling!"],
        poster: "/committee/WhatsApp Image 2026-03-12 at 16.08.44.jpeg",
      },
      {
        name: "Congcong Qi",
        nickname: "super",
        course: "SSEHS",
        strengths: ["Organised and approachable — always happy to support residents in the hall"],
        weaknesses: ["Can be a bit of a perfectionist sometimes"],
        poster: "/committee/WhatsApp Image 2026-03-12 at 16.08.46 (2).jpeg",
      },
    ],
  },
  {
    id: "media-rep",
    title: "Media Rep",
    shortTitle: "Media",
    emoji: "📸",
    category: "Media",
    description: "Creates content and graphics for Towers' social media & photographs hall events.",
    extendedDescription:
      "The Media Reps are the creative team behind Towers Hall's digital identity. They photograph events, design promotional graphics, manage the Instagram and social channels, and ensure every Towers moment is captured and shared with the community.",
    color: "from-purple-400/20 to-pink-500/10",
    members: [
      {
        name: "Henry Manning",
        nickname: "chalant",
        course: "Computer Science",
        strengths: ["Aura", "Rizz", "Camera jokes", "Music taste"],
        weaknesses: ["N/A", "Coming up with strengths & weaknesses"],
        poster: "/committee/WhatsApp Image 2026-03-12 at 16.08.44 (1).jpeg",
      },
      {
        name: "Jess McDonald",
        nickname: "calling...",
        course: "Fine Art",
        strengths: ["Music taste", "Insane numbers of baby Guinness"],
        weaknesses: ["N/A"],
        poster: "/committee/WhatsApp Image 2026-03-12 at 16.08.44 (2).jpeg",
      },
      {
        name: "Suze Everett",
        nickname: "marvellous",
        course: "Design",
        strengths: ["Can pour insane numbers of baby Guinness"],
        weaknesses: ["Getting papped in the club"],
        poster: "/committee/WhatsApp Image 2026-03-12 at 16.08.44 (3).jpeg",
      },
    ],
  },
  {
    id: "social-sec",
    title: "Social Secretary",
    shortTitle: "Social Sec",
    emoji: "🎉",
    category: "Social",
    description: "Organise and run a wide variety of social events within the hall + filling out risk assessments for events.",
    extendedDescription:
      "Social Secs are the engine of Towers Hall's social life. From themed nights and movie evenings to meals out and hall crawls, they plan and execute a packed calendar of events that bring residents together and make Towers a community — not just a building.",
    color: "from-orange-400/20 to-red-500/10",
    members: [
      {
        name: "Estelle Wong",
        nickname: "glass half full",
        course: "Marketing",
        strengths: ["Never chundered on a night out"],
        weaknesses: ["Coordination may decline after drink #2"],
        poster: "/committee/WhatsApp Image 2026-03-12 at 16.08.44 (6).jpeg",
      },
      {
        name: "Stanley Doyle",
        nickname: "fun",
        course: "Economics",
        strengths: ["VR Cricket"],
        weaknesses: ["Real Cricket"],
        poster: "/committee/WhatsApp Image 2026-03-12 at 16.08.45.jpeg",
      },
    ],
  },
  {
    id: "sports-sec",
    title: "Sports Secretary",
    shortTitle: "Sports Sec",
    emoji: "⚽",
    category: "Sports",
    description: "Field and attend IMS teams for league fixtures and ODEs, help and support booking pitches of Towers sports teams.",
    extendedDescription:
      "Sports Secs coordinate Towers' participation in Loughborough's Intra-Mural Sport (IMS) leagues. They organise team sheets, book pitches, attend fixtures, and ensure as many residents as possible can enjoy competitive and recreational sport under the Towers banner.",
    color: "from-sky-400/20 to-blue-500/10",
    members: [
      {
        name: "Petra Oshiga",
        nickname: "game-ready",
        course: "International Business",
        strengths: ["Unrealistic optimism"],
        weaknesses: ["Going to Hey Ewe way more than I should"],
        poster: "/committee/WhatsApp Image 2026-03-12 at 16.08.45 (1).jpeg",
      },
      {
        name: "Georgia Archer",
        nickname: "sporty",
        course: "Sport Management",
        strengths: ["Competitive netballer", "Always up for a pub trip"],
        weaknesses: ["Hey Ewe attendance", "Rosé wine"],
        poster: "/committee/WhatsApp Image 2026-03-12 at 16.08.45 (2).jpeg",
      },
      {
        name: "Tom Russell",
        nickname: "The Gaffer",
        course: "Finance",
        strengths: ["Netty Monday attendance"],
        weaknesses: ["3 for £10 VKs", "Papa Si's van after Hey Ewe"],
        poster: "/committee/WhatsApp Image 2026-03-12 at 16.08.45 (3).jpeg",
      },
      {
        name: "Henry Young",
        nickname: "you know what to do",
        course: "Economics and Finance",
        strengths: ["Bench press", "People skills"],
        weaknesses: ["I have the memory of a dead goldfish"],
        poster: "/committee/WhatsApp Image 2026-03-12 at 16.08.45 (4).jpeg",
      },
    ],
  },
  {
    id: "welfare-rep",
    title: "Welfare & Diversity Rep",
    shortTitle: "Welfare",
    emoji: "💛",
    category: "Welfare",
    description: "Organise and run fun events centred around welfare & diversity + giving general support to hall members.",
    extendedDescription:
      "Welfare & Diversity Reps ensure Towers is an inclusive, supportive space for every resident. They run welfare check-ins, mental health awareness events, cultural celebrations, and provide a confidential, friendly point of contact for anyone who needs support.",
    color: "from-yellow-300/20 to-lime-400/10",
    members: [
      {
        name: "Michelle Yip",
        nickname: "compassionate",
        course: "Fine Art",
        strengths: ["Sleeping", "Avid tea drinker"],
        weaknesses: ["Drinking", "Snoopy", "Cute animals"],
        poster: "/committee/WhatsApp Image 2026-03-12 at 16.08.45 (5).jpeg",
      },
      {
        name: "Alex Ellison",
        nickname: "very serious",
        course: "Aeronautical Engineering",
        strengths: ["Making 9AMs"],
        weaknesses: ["Papa Simon's"],
        poster: "/committee/WhatsApp Image 2026-03-12 at 16.08.45 (6).jpeg",
      },
    ],
  },
  {
    id: "rag-rep",
    title: "RAG Rep",
    shortTitle: "RAG",
    emoji: "🎗️",
    category: "Fundraising",
    description: "Organise, promote and run fundraising events to hall members, contributing to the hall fundraising total.",
    extendedDescription:
      "RAG (Raising and Giving) Reps lead Towers Hall's charitable fundraising efforts. They coordinate sponsored events, bake sales, quiz nights, and any other creative initiative that helps raise money for the hall's chosen charities and the wider LSU RAG campaign.",
    color: "from-red-400/20 to-rose-500/10",
    members: [
      {
        name: "Thomase Morris",
        nickname: "islander",
        course: "Civil Engineering",
        strengths: ["Concrete"],
        weaknesses: ["Full second portions"],
        poster: "/committee/WhatsApp Image 2026-03-12 at 16.08.45 (7).jpeg",
      },
      {
        name: "Freddie Webber",
        nickname: "oblivious",
        course: "Civil Engineering",
        strengths: ["Hey Ewe attendance", "Alcohol"],
        weaknesses: ["9am lectures", "Alcohol"],
        poster: "/committee/WhatsApp Image 2026-03-12 at 16.08.45 (8).jpeg",
      },
    ],
  },
  {
    id: "action-rep",
    title: "Action Rep",
    shortTitle: "Action",
    emoji: "🤝",
    category: "Community",
    description: "Promote and signpost hall members to Action (volunteering) projects which are hosted weekly.",
    extendedDescription:
      "Action Reps champion volunteering within Towers Hall. They connect residents with LSU Action's weekly volunteering opportunities — from local school support to conservation projects — and make it easy for Towers residents to give back to the community.",
    color: "from-violet-400/20 to-indigo-500/10",
    members: [
      {
        name: "Sea Ocak",
        nickname: "#1 Towers Glazer",
        course: "Physics with Systems Engineering",
        strengths: ["Very enthusiastic"],
        weaknesses: ["Change interests every 2 weeks and lose motivation to uphold long projects"],
        poster: "/committee/WhatsApp Image 2026-03-12 at 16.08.45 (9).jpeg",
      },
      {
        name: "Rohan O'Hanlon",
        nickname: "procrastinating",
        course: "Geography",
        strengths: ["Splitting the G"],
        weaknesses: ["Waking up on time for lectures"],
        poster: "/committee/WhatsApp Image 2026-03-12 at 16.08.45 (10).jpeg",
      },
    ],
  },
  {
    id: "cas-rep",
    title: "CAS Rep",
    shortTitle: "CAS",
    emoji: "🌱",
    category: "Community",
    description: "Run and promote events to hall members surrounding sustainability and campus improvements.",
    extendedDescription:
      "The CAS (Campus & Sustainability) Rep leads Towers Hall's green initiatives. They run events focused on environmental awareness, sustainable living in halls, and liaise with the university on campus improvement schemes — making sure Towers plays its part in Loughborough's sustainability goals.",
    color: "from-green-400/20 to-lime-500/10",
    members: [
      {
        name: "Will Elliott",
        nickname: "lorax",
        course: "Civil Engineering",
        strengths: ["Still haven't killed my cactus"],
        weaknesses: ["Can never find my keys", "Never here"],
        poster: "/committee/WhatsApp Image 2026-03-12 at 16.08.45 (11).jpeg",
      },
    ],
  },
  {
    id: "aair-rep",
    title: "AAIR / Societies Rep",
    shortTitle: "AAIR",
    emoji: "🌍",
    category: "Community",
    description: "Run events and signpost for internationals, returners and alumni + engage and collaborate with LSU societies.",
    extendedDescription:
      "The AAIR Rep (Alumni, Alumni International & Returners) ensures that international students, returning students, and alumni feel connected to Towers Hall. They also build bridges with LSU societies, creating collaborative events that enrich the hall's social calendar.",
    color: "from-cyan-400/20 to-sky-500/10",
    members: [
      {
        name: "Freya Mahavidya",
        nickname: "PARTY4U",
        course: "Industrial Design",
        strengths: ['"I have a BF" warrior', "Pink Pipeline Punch Monster Chugger", "One day or day one mindset"],
        weaknesses: ['"Trust me bro, an all nighter is all I need"', "Still says \"6-7\""],
        poster: "/committee/WhatsApp Image 2026-03-12 at 16.08.45 (12).jpeg",
      },
    ],
  },
  {
    id: "enterprise-rep",
    title: "Enterprise Rep",
    shortTitle: "Enterprise",
    emoji: "💼",
    category: "Community",
    description: "Organise events within the hall that promotes entrepreneurial and intrapreneurial skills.",
    extendedDescription:
      "The Enterprise Rep brings a business and innovation angle to Towers Hall life. They organise workshops, networking events, and speaker sessions that help residents develop entrepreneurial thinking, connect with industry, and build skills beyond the lecture theatre.",
    color: "from-amber-400/20 to-orange-500/10",
    members: [
      {
        name: "Szabi David",
        nickname: "brainrotted",
        course: "International Business",
        strengths: ["Incredibly modest", "Good looking"],
        weaknesses: ["Vegetables", "Too good looking"],
        poster: "/committee/WhatsApp Image 2026-03-12 at 16.08.46.jpeg",
      },
    ],
  },
];

export const CATEGORIES = ["All", "Leadership", "Pastoral", "Media", "Social", "Sports", "Welfare", "Fundraising", "Community"];
