// gitprofile.config.js

const config = {
  github: {
    username: 'hasanshahriar32', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'hasanshahriar32',
    twitter: '',
    mastodon: '',
    facebook: 'H4549',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'hasanshahriar32',
    dev: 'hasanshahriar32',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://shahriarhasan.vercel.app',
    phone: '',
    email: 'hasanshahriar32@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/u/0/uc?id=1VSePszTL6TGlv42imknUZoSeYnKnOayw&export=download', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MongoDB',
    'PostgreSQL',
    'Git',
    'Docker',
    'JavaScript',
    'CSS',
    'TypeScript',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'SJ Innovation',
      position: 'Front End Developer',
      from: 'May 2023',
      to: 'Present',
      companyLink: 'https://www.sjinnovation.com',
    },
    {
      company: '3W Business Private LTD',
      position: 'Front End Developer',
      from: 'February 2023',
      to: 'February 2023',
      companyLink: 'https://in.linkedin.com/company/triplewsols',
    },
  ],
  certifications: [
    {
      name: 'Full Stack Development',
      body: 'MERN Stack development with TypeScript, Next JS, Docker, AWS.',
      year: 'March 2022',
      link: 'https://i.ibb.co/QPPmbLt/9639fae0-0770-474d-b083-bd872a33e65c.jpg?auto=compress&cs=tinysrgb&w=1200'
    },
  ], 
  education: [
    {
      institution: 'Hajee Mohammad Danesh Science and Technology University. Dinajpur, Bangladesh.',
      degree: 'B.Sc Engg. in ECE',
      from: '2020',
      to: 'Present',
    },
    {
      institution: 'Saidpur Govt. Technical College.',
      degree: 'HSC & SSC',
      from: '2012',
      to: '2019',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'devHive',
      description:
        'Local freelancing marketplace. Easy sharing and getting services. Local payment method with sslCommerz. Realtime chatting feature with socket.io.',
      imageUrl: 'https://shahriarhasan.vercel.app/screenshot%20(5).png',
      link: 'https://devhiveclient.vercel.app/',
    },
    {
      title: 'Paradox Pet Shop',
      description:
        'If you own a pet, you’re probably a regular at your local pet shop. Whether you need more food, treats, or supplies for your furry friend. However, when you’re quickly running in and out of your neare...',
      imageUrl: 'https://shahriarhasan.vercel.app/screenshot%20(6).png',
      link: 'https://paradox-services.web.app/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'hasanshahriar32', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'cupcake',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://hasanshahriar32.github.io"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
