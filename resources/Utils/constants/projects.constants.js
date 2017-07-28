export const PERSONAL_PROJECTS = [
  {
    key: "1",
    name: "foodle",
    label: "foodle-it",
    slug: 'foodle',
    site: "/project-details/personal/foodle",
    desc: "Eating Healthy isn't Rocket Science.",
    path: "/public/images/foodleno.png",
    logo: "/public/images/foodlelogo.png",
    details: {
      website: 'http://www.foodle-it.com',
      overview: "A simple, yes or no response to the question. Is this 'insert food' good for me?",
      position: 'Creator',
      img: '/public/images/foodlescreenshot.png',
      contributions: [
        {
          key: 0,
          name: "Foodle",
          work: "The CommonSenseDiet website is the simplest way to know if a certain food or dish is healthy for you (or not healthy for you) with a simple yes or no answer...thats it. Nothing more. Simply look up your foods/meals and get a YES or NO response.",
          tools: ['Angular', 'Gulp', 'NDB API', 'Express', 'Node']
        },
      ]
    }
  },
  {
    key: "2",
    name: "dollarcoin",
    label: "under construction",
    slug: 'dollarcoin',
    site: "/project-details/personal/dollarcoin",
    desc: "1:1 Dollar Crypto-Currency",
    path: "/public/images/divide_bg.jpg",
    details: {
      website: '',
      overview: "Initial theoretical & practical understanding of blockchain technology, Ethereum’s core development tools, Solidity, Web3, Truffle, Ethereum Studio & Smart Contracts",
      position: 'Creator',
      contributions: [
        {
          key: 0,
          name: "dollarcoin",
          work: "Currently a work in progress",
          tools: ['Solidity', 'Mist', 'Truffle', 'Web3', 'Ethereum Studio']
        },
      ]
    }
  },
  {
    key: "3",
    name: "Hugonaut",
    label: "Hugonaut Framework",
    slug: 'hugonaut',
    site: "/project-details/personal/hugonaut",
    desc: "A Simple, Hugo Based, Static Website Engine Framework",
    path: "/public/images/hugo.png",
    details: {
      website: 'https://github.com/MarcZenn/Hugonaut',
      overview: "A Simple, Hugo Based, Static Website Engine Framework",
      position: 'Creator',
      contributions: [
        {
          key: 0,
          name: "Hugo Based Framework",
          work: "This framework was the result of a failed contract development project for Weave IQ. They requested a static site that could be deployed anywhere, run anywhere, was fast and open sourced. Although the project never completely finished, I was able to take my work in a productive direction.",
          tools: ['Hugo', 'JS', 'Sass']
        },
      ]
    }
  },
]


export const PROFESSIONAL_PROJECTS = [
  {
    key: "1",
    name: "Baker Technologies",
    label: "baker",
    slug: 'baker',
    site: "/project-details/professional/baker",
    desc: "The Perfect Recipe for a Successful Dispensary",
    path: "/public/images/bakercheckin.jpg",
    logo: "/public/images/bakerlogo.jpg",
    details: {
      website: 'http://app.trybaker.com',
      overview: "Baker is the platform North America’s top dispensaries use to drive sales, innovation & growth.",
      position: 'Front End Developer',
      img: '/public/images/trybkr.png',
      contributions: [
        {
          key: 0,
          name: 'Cell-Collect',
          work: "My first task at Baker was to create an embeddable widget application that dispensaries and cannabis producers could place on their existing websites. Once embedded, clients could leverage the widget's form to collect the emails, phone numbers, location, and interests of site visitors.",
          tools: ['React', 'Redux', 'Redux-Saga', 'Lerna', 'JS']
        },
        {
          key: 1,
          name: 'Patient-Intake',
          work: "My work on patient intake consisted of creating a handful of re-usable form and UI components for use within the main application and potentially other, completely separate, applications via Lerna's monorepo structure.",
          tools: ['React', 'Redux', 'Redux-Saga', 'Lerna', 'JS']
        }
      ]
    }
  },
  {
    key: "2",
    name: "Kickfurther",
    label: "kickfurther",
    slug: 'kickfurther',
    site: "/project-details/professional/kickfurther",
    desc: "Revolutionary Inventory Crowfunding",
    path: "/public/images/earlykf.png",
    logo: "/public/images/kflogo.png",
    details: {
      website: 'http://kickfurther.com',
      overview: 'A unique way for retail companies to access the funds they need to manufacture their goods, build their customer base and grow.',
      img: '/public/images/kfscreenshot.png',
      position: 'Web Developer',
      contributions: [
        {
          key: 0,
          name: 'Dashboard Separation',
          work: "Kickfurther is a essentially a lot like Kickstarter and like Kickstarer, you could sign up as an 'investor' or as a company. Each user type had their own dashboard. The problem, when it came to best-practices, was that the dashboard code for each user type was merged into one giant file and used for both experiences. My job was to address this and completely separate them.",
          tools: ['Laravel','PHP', 'Blade', 'jQuery']
        },
        {
          key: 1,
          name: 'User Stores',
          work: "As an 'investor', or backer, on Kickfurther, you had access to a simple e-commerce page that allowed you to market and sell the products you previously funded on the platform. I was tasked with updating the front end interface for these store pages and improving the shopping experience. This also included several new shopping features that weren't previously offered such as custom descriptions per product, custom tags, custom images and shopify redirects.",
          tools: ['Laravel', 'PHP', 'Blade', 'Vue', 'Sass', 'Shopify']
        },
        {
          key: 2,
          name: 'Improved Global Search',
          work: "Our global search feature was lacking in functionality and as Kickfurther grew, became less and less useful. As a personal side project, I decided to bring our global search feature up to date allowing for increased specificity and breadth of search results. It was a fun little task.",
          tools: ['Laravel', 'Eloquent ORM', 'PHP', 'Vue', 'SQL']
        },
        {
          key: 3,
          name: 'Asset Maintenance',
          work: "This simply consisted of keeping our web assets up to date, functional and branded",
          tools: ['Shopify', 'Hubspot', 'WordPress']
        }
      ]
    }
  },
  {
    key: "3",
    name: "Crispin Porter + Bogusky",
    label: "cpb",
    slug: 'cpb',
    site: "/project-details/professional/cpb",
    desc: "Good Enough Sucks",
    path: "/public/images/cpbboulder.jpg",
    logo: "/public/images/cpblogo.png",
    details: {
      website: 'http://www.cpbgroup.com/',
      overview: "One of the world's most inspiring, hard-working and uniquely creative advertising agencies.",
      position: 'Interactive Developer Intern',
      img: '/public/images/iphone6plus.png',
      contributions: [
        {
          key: 0,
          name: "Kraft Mac n' Cheese Halloween Microsite",
          work: "A simple microsite and perfect beginner project for an intern. The site was a single page and went over two costume ideas for Halloween trick-or-treaters.",
          tools: ['HTML', 'Sass', 'jQuery']
        },
        {
          key: 1,
          name: "Infiniti Cars HK Accelerator Updates",
          work: "Infiniti hosts a tech accelerator in Hong Kong and needed updates for its accompanying website. I was asked to help update several of the websites static assets along with its video/image content. Also contributed several UI updates and worked with CSS animations for the first time.",
          tools: ['HTML', 'Sass', 'jQuery', 'Backbone', 'JSON']
        }
      ]
    }
  },
  {
    key: "4",
    name: "Lolitas Market & Deli",
    label: "lolitas",
    slug: 'lolitas',
    site: "/project-details/professional/lolitas",
    desc: "Downtown Boulder's Only Full Service Market",
    path: "/public/images/lolitasfront.png",
    logo: "/public/images/lolitaslogo.png",
    details: {
      website: 'http://agile-mountain-12616.herokuapp.com/',
      overview: "Downtown Boulder's Only Full Service Market & Deli. Open 24 hours a day, 7 days a week.",
      position: 'Contract Developer',
      img: '/public/images/lolitasscreenshot.png',
      contributions: [
        {
          key: 0,
          name: "Static Website Build",
          work: "Lolitas wanted a simple static website customers could visit for information regarding their hours, contact details, product offerings and a page to showcase their deli menu.",
          tools: ['Hugo', 'Markdown', 'JSON', 'JS']
        },
      ]
    }
  },
]
