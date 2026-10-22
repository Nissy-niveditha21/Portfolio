/**
 * Every URL, status and metric below was verified against the live deployment
 * or the GitHub API. Nothing here is invented.
 *
 * Two groups are kept deliberately separate:
 *   builtProjects     — original repositories owned and deployed by Nissy
 *   openSourceProjects — upstream projects she mirrors/contributes to, credited
 */

import { asset } from './site';

const icon = (slug: string) => `https://cdn.simpleicons.org/${slug}/0f172a`;

export type TechTag = { name: string; slug?: string };

export type Upstream = { name: string; url: string };

export type Project = {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  /** Live deployment URL. */
  url: string;
  repo: string;
  /** Host shown in the simulated browser address bar. */
  domain: string;
  ctaLabel: string;
  statusLabel: string;
  statusKind: 'live' | 'package';
  meta: string[];
  stack: TechTag[];
  /** Real screenshot of the live deployment, captured into /public/previews. */
  image: string;
  upstream?: Upstream;
};

export const builtProjects: Project[] = [
  {
    name: 'ShipmentPro',
    tagline: 'ShipTrack Pro — full-stack shipment management',
    description:
      'A React front end paired with a Spring Boot + PostgreSQL backend. Ships JWT authentication, role-based access control enforced with @PreAuthorize on every shipment operation, and the complete shipment lifecycle API — create, list, fetch, update, transition status, cancel and history.',
    highlights: [
      'JWT auth with role-aware ownership checks',
      'Spring Security + @PreAuthorize on shipment ops',
      'PostgreSQL schema modelled as JPA entities',
      'Milestone-1 delivery: 4 tasks, end to end',
    ],
    url: 'https://shipment-pro.vercel.app',
    repo: 'https://github.com/Nissy-niveditha21/ShipmentPro',
    domain: 'shipment-pro.vercel.app',
    ctaLabel: 'Live Demo',
    statusLabel: 'Production Ready',
    statusKind: 'live',
    meta: ['JWT + RBAC', 'Build passing'],
    stack: [
      { name: 'React', slug: 'react' },
      { name: 'Spring Boot', slug: 'springboot' },
      { name: 'PostgreSQL', slug: 'postgresql' },
      { name: 'Docker', slug: 'docker' },
      { name: 'JavaScript', slug: 'javascript' },
    ],
    image: asset('/previews/shipmentpro.jpg'),
  },
  {
    name: 'Finger Slingshot',
    tagline: 'A physics puzzle you play with your bare hand',
    description:
      'Hold your hand up to the webcam, pinch to grab the slingshot, pull back and open your fingers to launch. Hand tracking runs entirely in the browser with MediaPipe Hands — the video never leaves the device — with a mouse and touch fallback plus Matter.js physics for stacked towers, trajectory preview and scoring.',
    highlights: [
      'MediaPipe Hands, 100% client-side inference',
      'Matter.js physics with trajectory preview',
      'Node API serving a global leaderboard',
      'UTC-seeded daily challenge + remote config',
    ],
    url: 'https://slinggame-web.vercel.app',
    repo: 'https://github.com/Nissy-niveditha21/sling_game',
    domain: 'slinggame-web.vercel.app',
    ctaLabel: 'Play Now',
    statusLabel: 'Production Ready',
    statusKind: 'live',
    meta: ['On-device ML', 'Build passing'],
    stack: [
      { name: 'JavaScript', slug: 'javascript' },
      { name: 'MediaPipe', slug: 'mediapipe' },
      { name: 'Node.js', slug: 'nodedotjs' },
      { name: 'Vercel', slug: 'vercel' },
    ],
    image: asset('/previews/slingshot.jpg'),
  },
];

export const openSourceProjects: Project[] = [
  {
    name: 'SecuScan',
    tagline: 'Local-first security scanning workspace',
    description:
      'A local-first security scanning workspace built on FastAPI orchestration with a React/TypeScript UI. Adds execution controls, normalised findings across every scanner, and a catalogue of 60 integrations. Running on a custom domain.',
    highlights: [
      'FastAPI orchestration + execution controls',
      'Normalised findings across 60 integrations',
      'React / TypeScript workspace UI',
      'Deployed on a custom domain',
    ],
    url: 'https://secuscan.in',
    repo: 'https://github.com/Nissy-niveditha21/SecuScan',
    domain: 'secuscan.in',
    ctaLabel: 'Live Site',
    statusLabel: 'Production Ready',
    statusKind: 'live',
    meta: ['60 integrations', 'Build passing'],
    stack: [
      { name: 'Python', slug: 'python' },
      { name: 'FastAPI', slug: 'fastapi' },
      { name: 'React', slug: 'react' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'Docker', slug: 'docker' },
    ],
    image: asset('/previews/secuscan.jpg'),
    upstream: { name: 'utksh1/SecuScan', url: 'https://github.com/utksh1/SecuScan' },
  },
  {
    name: 'GitVerse',
    tagline: 'Open any repo, instantly see its architecture',
    description:
      'Turns any GitHub repository into an interactive map of its architecture, modules and risks. GitVerse is built for the moment you open a new codebase and ask: "Where do I start?" — a Next.js + TypeScript app with a Docker-based build.',
    highlights: [
      'Interactive module and dependency graph',
      'Risk surfacing on individual nodes',
      'Next.js App Router + TypeScript',
    ],
    url: 'https://gitverse-tan.vercel.app/',
    repo: 'https://github.com/Nissy-niveditha21/gitverse-nextjs',
    domain: 'gitverse-tan.vercel.app',
    ctaLabel: 'Live Site',
    statusLabel: 'Production Ready',
    statusKind: 'live',
    meta: ['Next.js', 'Build passing'],
    stack: [
      { name: 'Next.js', slug: 'nextdotjs' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'React', slug: 'react' },
      { name: 'Docker', slug: 'docker' },
    ],
    image: asset('/previews/gitverse.jpg'),
    upstream: {
      name: 'nisshchayarathi/gitverse-nextjs',
      url: 'https://github.com/nisshchayarathi/gitverse-nextjs',
    },
  },
  {
    name: 'SilentLink',
    tagline: 'Accessibility-first sign language translation',
    description:
      'An AI-powered sign language translation and touch-free gesture control system for people with hearing and speech impairments. FastAPI, OpenCV, MediaPipe and WebSockets deliver low-latency inference to a standalone web dashboard, with gesture-driven mouse control and multilingual output.',
    highlights: [
      'Real-time hand gesture recognition',
      'WebSocket streaming for low latency',
      'Gesture-based desktop mouse control',
      'Multilingual translation output',
    ],
    url: 'https://silentlink-gamma.vercel.app',
    repo: 'https://github.com/Nissy-niveditha21/SilentLink_crt',
    domain: 'silentlink-gamma.vercel.app',
    ctaLabel: 'Live Site',
    statusLabel: 'Production Ready',
    statusKind: 'live',
    meta: ['Real-time', 'Build passing'],
    stack: [
      { name: 'Python', slug: 'python' },
      { name: 'FastAPI', slug: 'fastapi' },
      { name: 'OpenCV', slug: 'opencv' },
      { name: 'MediaPipe', slug: 'mediapipe' },
      { name: 'WebSockets', slug: 'socketdotio' },
    ],
    image: asset('/previews/silentlink.jpg'),
    upstream: { name: 'Nageswari2005/SilentLink', url: 'https://github.com/Nageswari2005/SilentLink' },
  },
  {
    name: 'EnvForge',
    tagline: 'Deterministic ML environment provisioning',
    description:
      'A production-grade provisioning platform that detects your hardware and generates intelligent, safe and deterministic ML/AI setup scripts for Windows, WSL, Linux and CUDA systems — ending CUDA version mismatches and Python dependency hell.',
    highlights: [
      'Hardware + CUDA detection',
      'Generates scripts for Windows, WSL and Linux',
      'Deterministic, reproducible environments',
    ],
    url: 'https://env-forage.vercel.app',
    repo: 'https://github.com/Nissy-niveditha21/EnvForage',
    domain: 'env-forage.vercel.app',
    ctaLabel: 'Live Site',
    statusLabel: 'Production Ready',
    statusKind: 'live',
    meta: ['CUDA aware', 'Build passing'],
    stack: [
      { name: 'Python', slug: 'python' },
      { name: 'NVIDIA', slug: 'nvidia' },
      { name: 'Linux', slug: 'linux' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'Docker', slug: 'docker' },
    ],
    image: asset('/previews/envforge.jpg'),
    upstream: {
      name: 'rishabh0510rishabh/EnvForage',
      url: 'https://github.com/rishabh0510rishabh/EnvForage',
    },
  },
  {
    name: 'Waggle MCP',
    tagline: 'An external memory layer for AI agents',
    description:
      'An MCP server that hands AI agents a persistent external memory layer. Packaged and published to PyPI, so any agent runtime can pull it in with a single install command.',
    highlights: [
      'Model Context Protocol server',
      'Published and installable from PyPI',
      'Python + Docker toolchain',
    ],
    url: 'https://pypi.org/project/waggle-mcp/',
    repo: 'https://github.com/Nissy-niveditha21/Waggle-mcp',
    domain: 'pypi.org/project/waggle-mcp',
    ctaLabel: 'View Package',
    statusLabel: 'Published',
    statusKind: 'package',
    meta: ['PyPI', 'Package live'],
    stack: [
      { name: 'Python', slug: 'python' },
      { name: 'PyPI', slug: 'pypi' },
      { name: 'Docker', slug: 'docker' },
      { name: 'TypeScript', slug: 'typescript' },
    ],
    image: asset('/previews/waggle.jpg'),
    upstream: { name: 'Abhigyan-Shekhar/Waggle-mcp', url: 'https://github.com/Abhigyan-Shekhar/Waggle-mcp' },
  },
];

export type MiniProject = { name: string; detail: string; language?: string; repo: string };

export const moreProjects: MiniProject[] = [
  {
    name: 'VyapaarAI',
    detail: 'Voice-first business intelligence for Indian retailers — speak a sale, get a ledger entry.',
    language: 'TypeScript',
    repo: 'https://github.com/Nissy-niveditha21/VyapaarAI',
  },
  {
    name: 'Adaptive AI Learning Agent',
    detail: 'RAG tutoring with checkpoints, retries and Feynman-style explanations.',
    language: 'Python',
    repo: 'https://github.com/Nissy-niveditha21/adaptive_learning_agent_with_RAG',
  },
  {
    name: 'SilentLink',
    detail: 'Real-time gesture recognition system — the origin of the SilentLink work.',
    language: 'Python',
    repo: 'https://github.com/Nissy-niveditha21/SilentLink',
  },
  {
    name: 'Listra',
    detail: 'Cloud-free satellite imagery generation preserving radiometric and structural fidelity.',
    repo: 'https://github.com/Nissy-niveditha21/Listra',
  },
  {
    name: 'Stocks vs Sunspots',
    detail: 'Stock market trends explored alongside sunspot cycles, with interactive visualisations.',
    language: 'Python',
    repo: 'https://github.com/Nissy-niveditha21/stocks-vs-sunspots-analysis',
  },
  {
    name: 'LeetCode DSA Practice',
    detail: 'Consistent practice log — discipline and growth documentation.',
    repo: 'https://github.com/Nissy-niveditha21/leetcode-dsa-practice',
  },
];

export { icon as techIcon };
