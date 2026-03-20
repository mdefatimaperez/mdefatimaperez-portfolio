const en = {
  lang: 'en',

  navbar: {
    downloadCV: 'CV',
    switchTo: 'ES',
    contact: 'Contact',
  },

  cvModal: {
    title: 'Download CV',
    subtitle: 'Choose your preferred language',
    spanish: 'Español',
    english: 'English',
  },

  hero: {
    subtitle: 'Junior Developer & Cybersecurity Learner',
    tagline: '"Passionate about security. Committed to earning my place in it."',
    cta: 'View my profile',
  },

  profileToggle: {
    eyebrow: 'Choose a profile',
    heading: 'Which role do you want to explore?',
    fullstackSub: 'JavaScript · .NET · Node.js · Docker',
    cyberSub: 'Pentesting · SIEM · OSINT · OWASP',
    placeholder: 'Select a profile to see the details ↑',
    titles: {
      fullstack: 'Maria de Fatima Perez — Full Stack Developer',
      cyber: 'Maria de Fatima Perez — Cybersecurity Specialist',
    },
  },

  fullstack: {
    stackTitle:      'Tech Stack',
    projectsTitle:   'Projects',
    certsTitle:      'Certifications',
    viewMore:        'View more on LinkedIn →',

    projects: [
      {
        name: 'E-Commerce REST API',
        desc: 'RESTful API with JWT authentication, product management, cart and payments. Dockerized and production-ready.',
        tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Docker'],
        icon: '🛒',
        gradient: 'linear-gradient(135deg, #1a0a2e 0%, #3b1a6b 100%)',
        orb: '#7B4FD4',
        orb2: '#a855f7',
        link: '#',
      },
      {
        name: 'Task Manager App',
        desc: 'Task management app with authentication, roles and Kanban board. .NET Core backend and React frontend.',
        tags: ['React', '.NET Core', 'SQL Server', 'Entity Framework', 'Tailwind'],
        icon: '📋',
        gradient: 'linear-gradient(135deg, #0a1628 0%, #0f3460 100%)',
        orb: '#3b82f6',
        orb2: '#6366f1',
        link: '#',
      },
      {
        name: 'Personal Portfolio',
        desc: 'This very site. SPA with animations, dual profile, bilingual support and responsive design.',
        tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
        icon: '🌐',
        gradient: 'linear-gradient(135deg, #0d0d14 0%, #2d1b4e 100%)',
        orb: '#8b5cf6',
        orb2: '#c084fc',
        link: '#',
      },
    ],

    badges: [
      'JavaScript (ES6+)', 'C#/.NET', 'Python',
      'Node.js', 'Express.js', '.NET Core', 'ASP.NET MVC', 'Blazor',
      'HTML5', 'CSS3', 'Tailwind CSS', 'jQuery',
      'REST APIs', 'Docker', 'Git', 'GitHub', 'JIRA', 'Postman', 'Scrum',
    ],

    certs: [
      { name: 'Python Essentials 1',            org: 'Cisco',         year: 'Jan. 2025',            platform: 'cisco' },
      { name: 'Full Stack Web Development',     org: 'Plataforma 5',  year: 'Oct 2024 — Dec 2024', platform: 'plataforma5' },
      { name: 'Foundational C# with Microsoft', org: 'freeCodeCamp',  year: 'Sept. 2023',           platform: 'freecodecamp' },
      { name: 'Programación Web NET Core',      org: 'EducacionIT',   year: 'Jun. 2023',            platform: 'educacionit' },
    ],
  },

  cyber: {
    specTitle:     'Specialization',
    projectsTitle: 'Projects',
    certsTitle:    'Education & Certifications',
    viewMore:      'View more on LinkedIn →',

    projects: [
      {
        name: 'CTF Writeups',
        desc: 'Documentation of machine walkthroughs on TryHackMe and Hack The Box. Recon, exploitation and post-exploitation.',
        tags: ['Kali Linux', 'Metasploit', 'Burp Suite', 'OSINT', 'Nmap'],
        icon: '🏴',
        gradient: 'linear-gradient(135deg, #0d1117 0%, #1a2a1a 100%)',
        orb: '#22c55e',
        orb2: '#16a34a',
        link: '#',
      },
      {
        name: 'Network Scanner',
        desc: 'Python tool for network scanning, port and service detection with automatic reporting.',
        tags: ['Python', 'Nmap', 'Scapy', 'Bash', 'Wireshark'],
        icon: '🔍',
        gradient: 'linear-gradient(135deg, #0f0c1a 0%, #1e1040 100%)',
        orb: '#7B4FD4',
        orb2: '#a855f7',
        link: '#',
      },
      {
        name: 'Vulnerability Report',
        desc: 'Vulnerability analysis report on a lab environment. OWASP Top 10 methodology and CVSS scoring.',
        tags: ['OWASP', 'CVSS', 'SIEM', 'ISO 27001', 'Nessus'],
        icon: '📄',
        gradient: 'linear-gradient(135deg, #1a0a0a 0%, #3b0f0f 100%)',
        orb: '#ef4444',
        orb2: '#f97316',
        link: '#',
      },
    ],

    badges: [
      'VirusTotal', 'Censys', 'Shodan', 'Nmap', 'Wireshark',
      'Metasploit', 'Hydra', 'Burp Suite', 'tcpdump',
      'SIEM (OSSIM)', 'OWASP Top 10', 'ISO 27001',
      'Kali Linux', 'Parrot OS', 'OSINT',
      'Active Directory', 'Vulnerability Management', 'Traffic Analysis',
    ],

    certs: [
      { name: 'TryHackMe — Active Learning',    org: 'TryHackMe',    year: 'Ongoing',      icon: '🎯' },
      { name: 'Hack The Box — Active Learning', org: 'Hack The Box', year: 'Ongoing',      icon: '⚔️' },
      { name: 'Cybersecurity Bootcamp',         org: 'IT College',   year: 'Feb–Dec 2024', icon: '🛡️' },
    ],
  },

  contact: {
    heading:       "Let's talk?",
    body:          "I'm available for freelance projects, full-time positions, or simply to chat about tech and security. I reply within 24 hours.",
    downloadCV:    'Download CV',
    linkedinLabel: 'LinkedIn',
    footer:        'Built with React · Tailwind CSS · Framer Motion',
  },
}

export default en
