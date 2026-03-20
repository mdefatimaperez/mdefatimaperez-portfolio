const es = {
  lang: 'es',

  navbar: {
    downloadCV: 'CV',
    switchTo: 'EN',
    contact: 'Contacto',
  },

  cvModal: {
    title: 'Descargar CV',
    subtitle: 'Elegí el idioma de tu preferencia',
    spanish: 'Español',
    english: 'English',
  },

  hero: {
    subtitle: 'Junior Developer & Cybersecurity Learner',
    tagline: '"Con pasión por la seguridad y determinación para abrirme camino."',
    cta: 'Ver mi perfil',
  },

  profileToggle: {
    eyebrow: 'Elegí un perfil',
    heading: '¿Qué rol querés explorar?',
    fullstackSub: 'JavaScript · .NET · Node.js · Docker',
    cyberSub: 'Pentesting · SIEM · OSINT · OWASP',
    placeholder: 'Seleccioná un perfil para ver el detalle ↑',
    titles: {
      fullstack: 'Maria de Fatima Perez — Full Stack Developer',
      cyber: 'Maria de Fatima Perez — Cybersecurity Specialist',
    },
  },

  fullstack: {
    stackTitle:      'Stack Tecnológico',
    projectsTitle:   'Proyectos',
    certsTitle:      'Certificaciones',
    viewMore:        'Ver más en LinkedIn →',

    projects: [
      {
        name: 'REST API E-Commerce',
        desc: 'API RESTful con autenticación JWT, gestión de productos, carrito y pagos. Dockerizada y lista para producción.',
        tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Docker'],
        icon: '🛒',
        gradient: 'linear-gradient(135deg, #1a0a2e 0%, #3b1a6b 100%)',
        orb: '#7B4FD4',
        orb2: '#a855f7',
        link: '#',
      },
      {
        name: 'Task Manager App',
        desc: 'Aplicación de gestión de tareas con autenticación, roles y tablero Kanban. Backend en .NET Core y frontend en React.',
        tags: ['React', '.NET Core', 'SQL Server', 'Entity Framework', 'Tailwind'],
        icon: '📋',
        gradient: 'linear-gradient(135deg, #0a1628 0%, #0f3460 100%)',
        orb: '#3b82f6',
        orb2: '#6366f1',
        link: '#',
      },
      {
        name: 'Portfolio Personal',
        desc: 'Este mismo sitio. SPA con animaciones, perfil dual, soporte bilingüe y diseño responsive.',
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
      { name: 'Python Essentials 1',            org: 'Cisco',         year: 'ene. 2025',            platform: 'cisco' },
      { name: 'Desarrollo Web Full Stack',      org: 'Plataforma 5',  year: 'Oct 2024 — Dic 2024', platform: 'plataforma5' },
      { name: 'Foundational C# with Microsoft', org: 'freeCodeCamp',  year: 'sept. 2023',           platform: 'freecodecamp' },
      { name: 'Programación Web NET Core',      org: 'EducacionIT',   year: 'jun. 2023',            platform: 'educacionit' },
    ],
  },

  cyber: {
    specTitle:     'Especialización',
    projectsTitle: 'Proyectos',
    certsTitle:    'Educación & Certificaciones',
    viewMore:      'Ver más en LinkedIn →',

    projects: [
      {
        name: 'CTF Writeups',
        desc: 'Documentación de resolución de máquinas en TryHackMe y Hack The Box. Reconocimiento, explotación y post-explotación.',
        tags: ['Kali Linux', 'Metasploit', 'Burp Suite', 'OSINT', 'Nmap'],
        icon: '🏴',
        gradient: 'linear-gradient(135deg, #0d1117 0%, #1a2a1a 100%)',
        orb: '#22c55e',
        orb2: '#16a34a',
        link: '#',
      },
      {
        name: 'Network Scanner',
        desc: 'Herramienta en Python para escaneo de red, detección de puertos y servicios con reporte automático.',
        tags: ['Python', 'Nmap', 'Scapy', 'Bash', 'Wireshark'],
        icon: '🔍',
        gradient: 'linear-gradient(135deg, #0f0c1a 0%, #1e1040 100%)',
        orb: '#7B4FD4',
        orb2: '#a855f7',
        link: '#',
      },
      {
        name: 'Vulnerability Report',
        desc: 'Informe de análisis de vulnerabilidades sobre entorno de laboratorio. Metodología OWASP Top 10 y CVSS scoring.',
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
      'Active Directory', 'Gestión de Vulnerabilidades', 'Análisis de Tráfico',
    ],

    certs: [
      { name: 'TryHackMe — Aprendizaje Activo',    org: 'TryHackMe',    year: 'En curso',     icon: '🎯' },
      { name: 'Hack The Box — Aprendizaje Activo', org: 'Hack The Box', year: 'En curso',     icon: '⚔️' },
      { name: 'Bootcamp de Ciberseguridad',        org: 'IT College',   year: 'Feb–Dic 2024', icon: '🛡️' },
    ],
  },

  contact: {
    heading:       '¿Hablamos?',
    body:          'Estoy disponible para proyectos freelance, posiciones full-time o simplemente para charlar sobre tecnología y seguridad. Respondo en menos de 24 horas.',
    downloadCV:    'Descargar CV',
    linkedinLabel: 'LinkedIn',
    footer:        'Hecho con amor, café y una pizca de IA ☕',
  },
}

export default es
