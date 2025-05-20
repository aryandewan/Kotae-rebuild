import { FaEye,FaLink,FaRobot } from "react-icons/fa";
type Question = {
    type: string;
    customClass: string;
    sub: {
        question: string;
        answer: string;
    }[];
};

type ChatPair = {
    question: string;
    answer: string;
};

type Keywords = {
    keyword: string;
    ctr: number;
    description: string;
}

interface Plan {
    name: string;
    amount: string;
    points: string[];
    newamount?: string;
    billed?: string;
}

type KotaePlanFeature = {
    feature: string;
    starter: string | boolean | string[];
    pro: string | boolean | string[];
    proVoice: string | boolean | string[];
};

type IntData = {
    int?: string;
    ins?: string,
    name?: string
    starters: boolean
    pro: boolean;
    proVoice: boolean;
}

export const features =[
    {
        title: "Kotae on Messenger",
        description: "Let Kotae handle your customers directly on Facebook Messenger.",
        image: "/images/msg.png",
        className: "bg-[#111111] lg:row-span-2 flex flex-col rounded-2xl p-4 gap-3"
    },
    {
        title: "View Escalations, Generate Leads",
        description: "Give your visitors the opportunity to connect with you directly.",
        image: "/images/esc.png",
        className: "bg-[#111111] flex flex-col rounded-2xl p-4 gap-3"
    },
    {
        title: "Refine Kotae’s responses",
        description: "Take control of how Kotae interacts with your visitors.",
        image: "/images/res.png",
        className: "bg-[#111111] flex flex-col rounded-2xl p-4 gap-3"
    },
    {
        title: "Enhanced analytics",
        description: "Get to know how your customers are interacting with Kotae on your website.",
        image: "/images/dash.png",
        className: "bg-[#111111] lg:col-span-2 flex flex-col rounded-2xl p-4 gap-3"
    },
]

export const usecases = [
    {
        title: "SMEs with too many inquiries to deal with",
        description: "Kotae automates incoming customer inquiries on your website so you can spend more time growing your business.",
        points: ["Auto-Responding", "Workflow Offloading", "Time Saving"],
        image: `/images/charts/chart-1.png`,
        customClass: `w-full flex max-lg:flex-col items-center justify-center gap-10 uses-grid-item`,
        icon: FaRobot,
    },
    {
        title: "Companies looking for deeper insights",
        description: "Understanding where your traffic comes from is half the battle. Kotae goes further, showing you what visitors look for and if they’re getting the right info.",
        points: ["Intent Tracking", "Search Analytics", "Content Match Scoring"],
        image: `/images/charts/chart-2.png`,
        customClass: `w-full flex max-lg:flex-col flex-row-reverse items-center justify-center gap-10 uses-grid-item`,
        icon: FaEye,
    },
    {
        title: "Businesses who want to drive traffic to specific pages",
        description: "Link common keywords that your visitors use so that Kotae immediately gives them the right page to go to.",
        points: ["Keyword Linking", "Smart Redirects", "CTR Boosting"],
        image: `/images/charts/chart-3.png`,
        customClass: `w-full flex max-lg:flex-col items-center justify-center gap-10 uses-grid-item`,
        icon: FaLink,
    },
]

export const working = [
    {
        id: "1",
        title: "Connect Your Data to Kotae AI",
        tag: "Upload your website content, documents, and FAQs to create a rich knowledge base. Kotae ingests this data to understand your business inside out.",
        image: "/images/work/1.png"
    },
    {
        id: "2",
        title: "Train Kotae to Reflect Your Voice",
        tag: "Add Custom Responses and define Keywords to guide how Kotae answers questions. Fine-tune tone, depth, and accuracy to match your brand.",
        image: "/images/work/2.jpeg"
    },
    {
        id: "3",
        title: "Deploy Kotae Anywhere You Need It",
        tag: "Easily embed Kotae on your website or integrate with tools like Slack or Microsoft Teams. Offer instant support wherever your users are.",
        image: "/images/work/3.jpeg"
    },
]

export const reviews = [
    {
        id: "1",
        review: "We wanted a quick solution without developing it in-house and tried different products. I saw your product on Product Hunt and decided to give it a try.",
        author: "-G.W."
    },
    {
        id: "2",
        review: "No code setup is amazing!",
        author: "-N.M."
    },
    {
        id: "3",
        review: "Love when makers think on small businesses because most of them are gonna be big then. And being able to support customers is a real game-changer for them.",
        author: "-G.M."
    },
    {
        id: "4",
        review: "Wow, it's smarter than I expected!",
        author: "-V.M."
    },
    {
        id: "5",
        review: "Really amazing. Hopefully it will grow and be successful in the future 👍👏🤗",
        author: "-M.A."
    },
    {
        id: "6",
        review: "This is seriously helpful for small businesses! Automating customer inquiries with an AI that uses your own data? That's just brilliant.",
        author: "-G.K."
    }
]

export const questions: Question[] = [
  {
    type: "General",
    customClass: "border-2 border-[#653EFE] text-[#653EFE]",
    sub: [
      {
        question: "What is Kotae?",
        answer:
          "Kotae is a customizable AI chatbot builder that lets you generate an interactive chatbot for your site in minutes.",
      },
      {
        question: "Does Kotae support multiple languages?",
        answer:
          "Yes, Kotae answers customer queries in the language they are asked, so you don’t need to worry about multilingual support.",
      },
      {
        question: "What file format does Kotae read?",
        answer:
          "You can upload various file formats such as, .txt, .csv, .doc, .pdf, or .json text files to help your Kotae learn more about your brand!",
      },
      {
        question: "Can I add Kotae to any website?",
        answer:
          "Yes, Kotae is compatible with any website that allows the addition of custom scripts or code. This includes, but is not limited to, websites built on platforms like WordPress, Webflow, or Wix.",
      },
    ],
  },
  {
    type: "Customization",
    customClass: "border-2 border-[#FE783E] text-[#FE783E]",
    sub: [
      {
        question: "Can I customize the appearence and color of Kotae?",
        answer:
          "Of course! Kotae has a number of editable fields including: logo, color, name, and greeting, among others.",
      },
      {
        question: "What can I do if Kotae gives a wrong answer?",
        answer:
          "If Kotae gives a wrong answer to a specific question, you can navigate to the Custom Responses screen in the Training section of your dashboard to tell Kotae how to answer a specific question. This way, any time a user asks the question, Kotae will use the provided answer. Please note that Custom Responses will always take precedence over anything that Kotae learned from other training sources, such as your website or uploaded files.",
      },
      {
        question:
          "Can I further customize my Kotae to suit my enterprise needs?",
        answer:
          "Definitely! For further assistance and inquiries, please contact our support team via the Contact Form.",
      },
    ],
  },
];

export const blog = [
  {
    title: "Simplify Haircuts with Your AI Assistant",
    description:
      "Revolutionize your salon. Discover how AI chatbots like Kotae streamline bookings & improve service",
    image: "/images/blog/salon.jpeg",
  },
  {
    title: "Kotae’s Rise: Q&A with Tokyo Techies’ COO",
    description:
      "Kotae's Journey: From Internal Tool to AI Chatbot Solution for Small Businesses (Q&A with Tokyo Techies’ COO)",
    image: "/images/blog/kotae.jpeg",
  },
  {
    title: "Kotae: Built for Effortless UX",
    description:
      "The AI-focused Chatbot, Enhanced by Data-driven FAQs Integration and AI Responses. A Seamless, Ready-to-Use Solution for Businesses",
    image: "/images/blog/UX.jpeg",
  },
];

export const foots = [
    {
        title: "Kotae",
        sub: ["Pricing", "FAQ", "Blog", "Release Notes"]
    },
    {
        title: "Company",
        sub: ["About Us"]
    },
    {
        title: "Legal",
        sub: ["Privacy Policy", "Terms of Service", "Refund Policy"]
    },
]

export const chatData: ChatPair[] = [
    {
        question: "What does Kotae do?",
        answer:
            "Kotae is an AI chatbot platform that automates customer inquiries, provides smart search, and boosts website engagement.",
    },
    {
        question: "How do I train Kotae?",
        answer:
            "You can upload documents, connect your website, and set up custom responses or keywords to train Kotae in minutes.",
    },
    {
        question: "Can I embed Kotae on my website?",
        answer:
            "Yes! You can easily embed Kotae as a widget or integrate it with Slack, Microsoft Teams, or other platforms.",
    },
    {
        question: "Will Kotae reduce support tickets?",
        answer:
            "Definitely. Many businesses see a 30–50% drop in basic support queries after deploying Kotae on their site.",
    },
    {
        question: "Does Kotae understand user intent?",
        answer:
            "Yes, Kotae uses intent recognition to match user queries with the most relevant content or response.",
    },
    {
        question: "Can I customize Kotae's responses?",
        answer:
            "Absolutely. You can add personalized responses, tweak tone of voice, and set custom keyword triggers.",
    },
    {
        question: "Is Kotae suitable for small businesses?",
        answer:
            "Kotae is built for speed and simplicity—perfect for small teams who need smart automation without technical overhead.",
    },
    {
        question: "How is Kotae different from a FAQ?",
        answer:
            "Unlike static FAQs, Kotae understands what users are asking and provides tailored answers in real time.",
    },
];

export const topKeywordsData: Keywords[] = [
    {
        keyword: "Book Appointment",
        ctr: 42.7,
        description: "Most popular action, especially when shown after intro message.",
    },
    {
        keyword: "Haircut",
        ctr: 36.2,
        description: "Often clicked/tapped when users want service-specific info.",
    },
    {
        keyword: "Hair Coloring",
        ctr: 21.5,
        description: "Mid-range CTR; valuable for upselling.",
    },
    {
        keyword: "Price List",
        ctr: 28.4,
        description: "Price transparency increases trust, strong CTR.",
    },
    {
        keyword: "Opening Hours",
        ctr: 18.9,
        description: "Common FAQ, especially evenings/weekends.",
    },
    {
        keyword: "Cancel Appointment",
        ctr: 12.3,
        description: "Lower CTR but important to monitor for churn analysis.",
    },
    {
        keyword: "Nail Services",
        ctr: 16.8,
        description: "Niche interest but high intent when clicked.",
    },
    {
        keyword: "Location / Directions",
        ctr: 26.1,
        description: "High CTR for new visitors or those in a hurry.",
    },
    {
        keyword: "Contact a Stylist",
        ctr: 14.4,
        description: "Typically triggers escalation to human agent.",
    },
    {
        keyword: "Special Offers",
        ctr: 31.6,
        description: "Promo-driven clicks — useful for tracking marketing ROI.",
    },
    {
        keyword: "Bridal Services",
        ctr: 9.7,
        description: "Niche, but extremely high-value if converted.",
    },
    {
        keyword: "Reviews",
        ctr: 13.9,
        description: "Some users seek social proof before booking.",
    },
    {
        keyword: "Hair Treatment",
        ctr: 11.5,
        description: "Mid-low CTR but useful for service education.",
    },
    {
        keyword: "Facial / Skincare",
        ctr: 19.2,
        description: "Gender-balanced CTR; spikes in weekends.",
    },
    {
        keyword: "Gift Cards",
        ctr: 17.0,
        description: "Seasonal peak CTR during holidays.",
    },
];

export const dashboardData = {
    "7d": [
        { name: "Mon", users: 120, queries: 340 },
        { name: "Tue", users: 130, queries: 400 },
        { name: "Wed", users: 115, queries: 380 },
        { name: "Thu", users: 140, queries: 420 },
        { name: "Fri", users: 160, queries: 460 },
        { name: "Sat", users: 200, queries: 500 },
        { name: "Sun", users: 170, queries: 450 },
    ],
    "1m": [
        { name: "Week 1", users: 540, queries: 1500 },
        { name: "Week 2", users: 600, queries: 1650 },
        { name: "Week 3", users: 580, queries: 1600 },
        { name: "Week 4", users: 620, queries: 1700 },
    ],
    "6m": [
        { name: "Jan", users: 2543, queries: 7200 },
        { name: "Feb", users: 2097, queries: 7500 },
        { name: "Mar", users: 2123, queries: 7400 },
        { name: "Apr", users: 2984, queries: 7650 },
        { name: "May", users: 2234, queries: 7900 },
        { name: "Jun", users: 2900, queries: 8100 },
    ],
    "1y": [
        { name: "Jul '24", users: 2000, queries: 6400 },
        { name: "Aug '24", users: 2100, queries: 6600 },
        { name: "Sep '24", users: 2200, queries: 6800 },
        { name: "Oct '24", users: 2300, queries: 6900 },
        { name: "Nov '24", users: 2250, queries: 6700 },
        { name: "Dec '24", users: 2400, queries: 7100 },
        { name: "Jan '25", users: 2600, queries: 7500 },
        { name: "Feb '25", users: 2500, queries: 7300 },
        { name: "Mar '25", users: 2650, queries: 7600 },
        { name: "Apr '25", users: 2700, queries: 7800 },
        { name: "May '25", users: 2750, queries: 7900 },
    ]
};

export const countryData = {
    "7d": [
        { country: "US", users: 186 },
        { country: "Australia", users: 305 },
        { country: "Korea", users: 237 },
        { country: "Japan", users: 73 },
        { country: "Vietnam", users: 209 },
    ],
    "1m": [
        { country: "US", users: 345 },
        { country: "Australia", users: 567 },
        { country: "Korea", users: 456 },
        { country: "Japan", users: 1023 },
        { country: "Vietnam", users: 598 },
    ],
    "6m": [
        { country: "US", users: 1783 },
        { country: "Australia", users: 1567 },
        { country: "Korea", users: 2054 },
        { country: "Japan", users: 1197 },
        { country: "Vietnam", users: 2534 },
    ],
    "1y": [
        { country: "US", users: 10983 },
        { country: "Australia", users: 13872 },
        { country: "Korea", users: 9956 },
        { country: "Japan", users: 16983 },
        { country: "Vietnam", users: 12098 },
    ]
}

export const escalationChartData = {
    "7d": [
        { name: "Day 1", escalations: 2, totalChats: 20 },
        { name: "Day 2", escalations: 1, totalChats: 18 },
        { name: "Day 3", escalations: 0, totalChats: 15 },
        { name: "Day 4", escalations: 3, totalChats: 25 },
        { name: "Day 5", escalations: 1, totalChats: 22 },
        { name: "Day 6", escalations: 2, totalChats: 19 },
        { name: "Day 7", escalations: 0, totalChats: 21 },
    ],
    "1m": [
        { name: "Week 1", escalations: 3, totalChats: 30 },
        { name: "Week 2", escalations: 4, totalChats: 40 },
        { name: "Week 3", escalations: 2, totalChats: 35 },
        { name: "Week 4", escalations: 5, totalChats: 38 },
    ],
    "6m": [
        { name: "January", escalations: 14, totalChats: 100 },
        { name: "February", escalations: 9, totalChats: 95 },
        { name: "March", escalations: 11, totalChats: 110 },
        { name: "April", escalations: 7, totalChats: 90 },
        { name: "May", escalations: 18, totalChats: 120 },
        { name: "June", escalations: 4, totalChats: 60 },
    ],
    "1y": [
        { name: "July", escalations: 6, totalChats: 80 },
        { name: "August", escalations: 13, totalChats: 100 },
        { name: "September", escalations: 9, totalChats: 95 },
        { name: "October", escalations: 15, totalChats: 130 },
        { name: "November", escalations: 10, totalChats: 105 },
        { name: "December", escalations: 12, totalChats: 110 },
        { name: "January", escalations: 14, totalChats: 100 },
        { name: "February", escalations: 9, totalChats: 95 },
        { name: "March", escalations: 11, totalChats: 110 },
        { name: "April", escalations: 7, totalChats: 90 },
        { name: "May", escalations: 18, totalChats: 120 },
        { name: "June", escalations: 4, totalChats: 60 },
    ]
};

export const Price: { Monthly: Plan[]; Anually: Plan[]} = {
    Monthly: [
        {
            name: "Starter",
            amount: "$9",
            points: [
                "1000 questions",
                "10 training files",
                "1000 training URLs",
                "1000 custom answers",
                "All Chatbot History"
            ]
        },
        {
            name: "Pro",
            amount: "$19",
            points: [
                "4000 questions/month",
                "30 training files",
                "3000 training URLs",
                "3000 custom answers",
                "Full bot customization",
                "Facebook Messenger Integration",
                "Keyword autolinking",
                "Automatic retraining",
                "Escalate to human agent"
            ]
        },
        {
            name: "Pro + Voice",
            amount: "$79",
            points: ["Everything in Pro", "Real-time voice chat", "Voice response"]
        },
        {
            name: "Enterprise",
            amount: "Custom Price",
            points: [
                "Tailored customization and integration",
                "Customization real-time voice",
                "Dedicated cloud deployment",
                "Flexible volume discounts",
                "Shared Slack channel for instant support",
                "Multiple administrators, website domains and more",
                "Comprehensive onboarding"
            ]
        }
    ],
    Anually: [
        {
            name: "Starter",
            amount: "$9",
            newamount: "$6.58",
            billed: "$79 billed anually",
            points: [
                "1000 questions",
                "10 training files",
                "1000 training URLs",
                "1000 custom answers",
                "All Chatbot History"
            ]
        },
        {
            name: "Pro",
            amount: "$19",
            newamount: "$14.08",
            billed: "$169 billed anually",
            points: [
                "4000 questions/month",
                "30 training files",
                "3000 training URLs",
                "3000 custom answers",
                "Full bot customization",
                "Facebook Messenger Integration",
                "Keyword autolinking",
                "Automatic retraining",
                "Escalate to human agent"
            ]
        },
        {
            name: "Pro + Voice",
            amount: "$79",
            newamount: "$58.25",
            billed: "$699 billed anually",
            points: ["Everything in Pro", "Real-time voice chat", "Voice response"]
        },
        {
            name: "Enterprise",
            amount: "Custom Price",
            points: [
                "Tailored customization and integration",
                "Customization real-time voice",
                "Dedicated cloud deployment",
                "Flexible volume discounts",
                "Shared Slack channel for instant support",
                "Multiple administrators, website domains and more",
                "Comprehensive onboarding"
            ]
        }
    ]
};

export const kotaePlans: KotaePlanFeature[] = [
    {
        feature: "Number of questions",
        starter: "1,000/mo",
        pro: "4,000/mo",
        proVoice: "8,000/mo",
    },
    {
        feature: "Training URLs",
        starter: "1,000",
        pro: "3,000",
        proVoice: "3,000",
    },
    {
        feature: "Training files",
        starter: "10",
        pro: "30",
        proVoice: "30",
    },
    {
        feature: "Custom responses",
        starter: "1,000",
        pro: "3,000",
        proVoice: "3,000",
    },
    {
        feature: "Keyword autolinking",
        starter: false,
        pro: true,
        proVoice: true,
    },
    {
        feature: "Custom tags",
        starter: true,
        pro: true,
        proVoice: true,
    },
    {
        feature: "Voice-to-text",
        starter: false,
        pro: true,
        proVoice: true,
    },
    {
        feature: "Escalate to human agent",
        starter: false,
        pro: true,
        proVoice: true,
    },
    {
        feature: "Escalation attachments",
        starter: false,
        pro: true,
        proVoice: true,
    },
    {
        feature: "Real-time voice chat",
        starter: false,
        pro: false,
        proVoice: true,
    },
];

export const IntData: IntData[] = [
    {
        int: "Code-embed",
        starters: true,
        pro: true,
        proVoice: true,
    },
    {
        int: "WordPress",
        starters: true,
        pro: true,
        proVoice: true,
    },
    {
        int: "Messenger",
        starters: false,
        pro: true,
        proVoice: true,
    }
]

export const InsData: IntData[] =  [
    {
        ins: "Top Keywords",
        starters: false,
        pro: true,
        proVoice: true,
    },
    {
        ins: "Keyword CTR",
        starters: false,
        pro: true,
        proVoice: true,
    },
    {
        ins: "Total Exchanges",
        starters: true,
        pro: true,
        proVoice: true,
    },
    {
        ins: "Total users by origin",
        starters: true,
        pro: true,
        proVoice: true,
    }
]

export const CustomizationData: IntData[] = [
    {
        name: "Welcome message",
        starters: true,
        pro: true,
        proVoice: true,
    },
    {
        name: "Brand Color",
        starters: true,
        pro: true,
        proVoice: true,
    },
    {
        name: "Custom header % Propmts",
        starters: true,
        pro: true,
        proVoice: true,
    },
    {
        name: "Preset questions",
        starters: false,
        pro: true,
        proVoice: true,
    }
]


