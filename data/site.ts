/**
 * Single source of truth for every piece of copy on the site.
 * Section content is carried over verbatim from the previous static build.
 */

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Prefixes a path in /public with the GitHub Pages basePath. */
export const asset = (path: string) => `${BASE_PATH}${path}`;

export const site = {
  name: 'Nissy Niveditha Vanguri',
  shortName: 'Nissy Niveditha',
  initials: 'NN',
  role: 'Software Engineer & AI Developer',
  email: 'v.nissyniveditha37@gmail.com',
  github: 'https://github.com/Nissy-niveditha21',
  githubHandle: 'Nissy-niveditha21',
  linkedin: 'https://www.linkedin.com/in/nissy-niveditha-vanguri-a63700344',
  college: 'Malla Reddy Engineering College for Women',
  cgpa: '8.8',
  title: 'Nissy Niveditha — Software Engineer & AI Developer',
  description:
    'Final-year Computer Science student and software engineer building production web apps and AI systems with Python, TypeScript, React and machine learning.',
  url: 'https://nissy-niveditha21.github.io/Portfolio/',
};

export type NavLink = { id: string; label: string };

export const navLinks: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Stack' },
  { id: 'coding', label: 'Coding' },
  { id: 'projects', label: 'Projects' },
  { id: 'open-source', label: 'Open Source' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const typingRoles = [
  'Software Engineer & AI Developer',
  'Full-Stack Developer',
  'Machine Learning Enthusiast',
  'Open Source Contributor',
  'Problem Solver & Builder',
];

export const heroStats = [
  { value: '6', label: 'Projects built' },
  { value: '4', label: 'Live deployments' },
  { value: site.cgpa, label: 'CGPA' },
  { value: '152', label: 'LeetCode solved' },
];

/* -------------------------------------------------------------------------- */
/* About + terminal                                                           */
/* -------------------------------------------------------------------------- */

export const aboutText = [
  'I\u2019m a final-year Computer Science student at Malla Reddy Engineering College for Women with a CGPA of 8.7.',
  'I love turning complex problems into simple, beautiful and intuitive code. Whether it\u2019s building responsive web apps, training ML models or automating workflows, I\u2019m always up for a challenge! 🚀',
];

export type TokenKind = 'kw' | 'cls' | 'fn' | 'str' | 'prm' | 'p';
export type CodeToken = { k: TokenKind; v: string };

/** `about.py` — tokenised so the highlighter and the copy button share one source. */
export const aboutCode: CodeToken[][] = [
  [{ k: 'kw', v: 'class' }, { k: 'p', v: ' ' }, { k: 'cls', v: 'SoftwareEngineer' }, { k: 'p', v: ':' }],
  [
    { k: 'p', v: '    ' },
    { k: 'kw', v: 'def' },
    { k: 'p', v: ' ' },
    { k: 'fn', v: '__init__' },
    { k: 'p', v: '(' },
    { k: 'prm', v: 'self' },
    { k: 'p', v: '):' },
  ],
  [
    { k: 'p', v: '        ' },
    { k: 'prm', v: 'self' },
    { k: 'p', v: '.name = ' },
    { k: 'str', v: '"Nissy Niveditha"' },
  ],
  [
    { k: 'p', v: '        ' },
    { k: 'prm', v: 'self' },
    { k: 'p', v: '.role = ' },
    { k: 'str', v: '"AI & Full-Stack Dev"' },
  ],
  [{ k: 'p', v: '' }],
  [
    { k: 'p', v: '    ' },
    { k: 'kw', v: 'def' },
    { k: 'p', v: ' ' },
    { k: 'fn', v: 'get_skills' },
    { k: 'p', v: '(' },
    { k: 'prm', v: 'self' },
    { k: 'p', v: '):' },
  ],
  [
    { k: 'p', v: '        ' },
    { k: 'kw', v: 'return' },
    { k: 'p', v: ' {' },
  ],
  [
    { k: 'p', v: '            ' },
    { k: 'str', v: '"languages"' },
    { k: 'p', v: ': [' },
    { k: 'str', v: '"Python"' },
    { k: 'p', v: ', ' },
    { k: 'str', v: '"Java"' },
    { k: 'p', v: ', ' },
    { k: 'str', v: '"C"' },
    { k: 'p', v: '],' },
  ],
  [
    { k: 'p', v: '            ' },
    { k: 'str', v: '"web"' },
    { k: 'p', v: ': [' },
    { k: 'str', v: '"React"' },
    { k: 'p', v: ', ' },
    { k: 'str', v: '"Node.js"' },
    { k: 'p', v: ', ' },
    { k: 'str', v: '"Flask"' },
    { k: 'p', v: '],' },
  ],
  [
    { k: 'p', v: '            ' },
    { k: 'str', v: '"ai"' },
    { k: 'p', v: ': [' },
    { k: 'str', v: '"ML"' },
    { k: 'p', v: ', ' },
    { k: 'str', v: '"DL"' },
    { k: 'p', v: ', ' },
    { k: 'str', v: '"NLP"' },
    { k: 'p', v: ']' },
  ],
  [{ k: 'p', v: '        }' }],
  [{ k: 'p', v: '' }],
  [
    { k: 'p', v: '    ' },
    { k: 'kw', v: 'def' },
    { k: 'p', v: ' ' },
    { k: 'fn', v: 'passion' },
    { k: 'p', v: '(' },
    { k: 'prm', v: 'self' },
    { k: 'p', v: '):' },
  ],
  [
    { k: 'p', v: '        ' },
    { k: 'kw', v: 'return' },
    { k: 'p', v: ' ' },
    { k: 'str', v: '"Building stuff that matters! 💪"' },
  ],
];

export const aboutCodeText = aboutCode.map((line) => line.map((t) => t.v).join('')).join('\n');

/* -------------------------------------------------------------------------- */
/* Coding profiles — every number below was read off the live profile pages.   */
/* -------------------------------------------------------------------------- */

export type CodingProfile = {
  name: string;
  handle: string;
  url: string;
  logo: string;
  /** Basename of the screenshot in /public/previews (e.g. "leetcode" -> leetcode.jpg). */
  slug: string;
  /** Small label above the headline metric. */
  tag: string;
  /** The flash-card headline number. */
  metric: string;
  /** What that number measures. */
  metricLabel: string;
  stats: { value: string; label: string }[];
};

export const codingProfiles: CodingProfile[] = [
  {
    name: 'LeetCode',
    handle: '@Nissy_Niveditha',
    url: 'https://leetcode.com/u/Nissy_Niveditha/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
    slug: 'leetcode',
    tag: '🔥 Current streak',
    metric: '30',
    metricLabel: 'day streak',
    stats: [
      { value: '152', label: 'Problems solved' },
      { value: '68 / 72 / 12', label: 'Easy / Medium / Hard' },
      { value: '#1,167,557', label: 'Global rank' },
    ],
  },
  {
    name: 'CodeChef',
    handle: '@mrew23rh1a05rg',
    url: 'https://www.codechef.com/users/mrew23rh1a05rg',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codechef/codechef-original.svg',
    slug: 'codechef',
    tag: '🏅 Gold streak badge',
    metric: '50',
    metricLabel: 'day streak',

    stats: [
      { value: '401', label: 'Problems solved, Problem Solver - Silver Badge 🥈' },
      { value: '1173', label: 'Rating (1★)' },
      { value: '18', label: 'Rated contests' },
    ],
  },
  {
    name: 'HackerRank',
    handle: '@v_nissynivedith1',
    url: 'https://www.hackerrank.com/profile/v_nissynivedith1',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png',
    slug: 'hackerrank',
    tag: '🎖️ Badge collection',
    metric: '5',
    metricLabel: 'badges earned',
    stats: [
      { value: '4', label: 'Verified certificates' },
      { value: 'Python · Java', label: 'Core badges' },
      { value: 'SQL (Advanced)', label: 'Top certificate' },
    ],
  },
];

/** The GSSoC contributor profile, rendered with the same chrome as a project card. */
export const gssocProfile = {
  program: 'GirlScript Summer of Code',
  name: 'GSSoC 2026 Contributor Profile',
  role: 'Open Source Contributor · GSSoC 2026',
  domain: 'gssoc.girlscript.org/profile/19927e4f…',
  url: 'https://gssoc.girlscript.org/profile/19927e4f-5a5c-40d8-bbc8-0007ab6ff0e2',
  image: asset('/previews/gssoc.jpg'),
  statusLabel: '1,739 points',
  meta: ['Verified contributor', '1,739 contribution points', 'GSSoC 2026'],
  description:
    `The live leaderboard profile behind my open source work — 1,739 contribution points as a GSSoC 2026 contributor from ${site.college}.`,
  highlights: [
    '1,739 contribution points in GSSoC 2026',
    'Bug fixes, feature enhancements and plugin development',
    'Verifiable on the official GirlScript leaderboard',
  ],
  tags: ['Open Source', 'Bug Fixes', 'Feature Enhancements', 'Plugin Development'],
};

/* -------------------------------------------------------------------------- */
/* Tech stack                                                                 */
/* -------------------------------------------------------------------------- */

export type Skill = { name: string; logo?: string };
export type SkillCategory = { id: string; title: string; skills: Skill[] };

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: '💻 Languages',
    skills: [
      { name: 'Python', logo: `${DEVICON}/python/python-original.svg` },
      { name: 'Java', logo: `${DEVICON}/java/java-original.svg` },
      { name: 'C', logo: `${DEVICON}/c/c-original.svg` },
      { name: 'JavaScript', logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: 'SQL', logo: `${DEVICON}/mysql/mysql-original.svg` },
    ],
  },
  {
    id: 'web',
    title: '🌐 Web Dev',
    skills: [
      { name: 'React.js', logo: `${DEVICON}/react/react-original.svg` },
      { name: 'Next.js', logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: 'Node.js', logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: 'Express.js', logo: `${DEVICON}/express/express-original.svg` },
      { name: 'Flask', logo: `${DEVICON}/flask/flask-original.svg` },
      { name: 'HTML5', logo: `${DEVICON}/html5/html5-original.svg` },
      { name: 'CSS3', logo: `${DEVICON}/css3/css3-original.svg` },
    ],
  },
  {
    id: 'ai',
    title: '🤖 AI/ML',
    skills: [
      { name: 'TensorFlow', logo: `${DEVICON}/tensorflow/tensorflow-original.svg` },
      { name: 'PyTorch', logo: `${DEVICON}/pytorch/pytorch-original.svg` },
      { name: 'NumPy', logo: `${DEVICON}/numpy/numpy-original.svg` },
      { name: 'Pandas', logo: `${DEVICON}/pandas/pandas-original.svg` },
      { name: 'NLP' },
    ],
  },
  {
    id: 'tools',
    title: '🛠️ Tools',
    skills: [
      { name: 'Git', logo: `${DEVICON}/git/git-original.svg` },
      { name: 'GitHub', logo: `${DEVICON}/github/github-original.svg` },
      { name: 'VS Code', logo: `${DEVICON}/vscode/vscode-original.svg` },
      { name: 'Postman' },
      {
        name: 'ServiceNow',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/ServiceNow_Logo.png',
      },
    ],
  },
];

/** Logo set for the hero marquee — derived from the stack above so it never drifts. */
export const logoWall: Skill[] = skillCategories
  .flatMap((category) => category.skills)
  .filter((skill): skill is Skill & { logo: string } => Boolean(skill.logo));

/* -------------------------------------------------------------------------- */
/* Experience, certifications, leadership, contact                            */
/* -------------------------------------------------------------------------- */

export const experience = {
  role: 'Intern',
  company: 'ServiceNow',
  period: 'May – Aug 2025',
  points: [
    'Built ITSM workflow automation',
    'Worked on Agentic AI concepts',
    'Validated workflows with ATF',
  ],
  tags: ['Flow Designer', 'AI', 'Automation'],
};

export type Certification = { name: string; detail: string; logo: string };

export const certifications: Certification[] = [
  {
    name: 'HackerRank',
    detail: 'Python, Java, SQL (Gold Badges)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png',
  },
  {
    name: 'Cisco',
    detail: 'Advanced C, Cybersecurity Essentials, Network Technician Path',
    logo: 'https://www.logo.wine/a/logo/Cisco_Systems/Cisco_Systems-Icon-Logo.wine.svg',
  },
  {
    name: 'IBM',
    detail: 'Python for Data Science (NumPy, Pandas)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  },
];

export const leadership = [
  {
    title: 'Hack2Skills Ambassador',
    detail: '',
    logo: 'https://hack2skill.com/static/media/logo2.d717100f.png',
    emoji: '',
  },
  {
    title: 'Open Source Contributor (GSSoC \u201926)',
    detail: 'Bug fixes, feature enhancements, plugin development',
    logo: '',
    emoji: '🏆',
  },
];

export const contacts = [
  { kind: 'email' as const, label: 'Email', value: site.email, href: `mailto:${site.email}`, emoji: '📧' },
  {
    kind: 'github' as const,
    label: 'GitHub',
    value: 'github.com/Nissy-niveditha21',
    href: site.github,
    icon: `${DEVICON}/github/github-original.svg`,
  },
  {
    kind: 'linkedin' as const,
    label: 'LinkedIn',
    value: 'linkedin.com/in/nissy-niveditha-vanguri-a63700344',
    href: site.linkedin,
    icon: `${DEVICON}/linkedin/linkedin-original.svg`,
  },
];
