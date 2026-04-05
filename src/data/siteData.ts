// ============================================
// SITE DATA — Single Source of Truth
// ============================================
// Edit this file to update all personal data across the site.

export const siteData = {
    // --- Personal ---
    name: 'Srivatsa',
    fullName: 'Srivatsa S Poojari',
    title: 'Srivatsa S Poojari | Portfolio',
    description: 'BCA student building and operating real Linux infrastructure — NixOS home server, self-hosted services, and network engineering.',
    url: 'https://haschwalth00b.github.io',
    location: 'Udupi, Karnataka',
    timezone: 'IST (UTC+5:30)',

    // --- Hero ---
    hero: {
        greeting: "Hi, I'm",
        displayName: 'Srivatsa',
        subtitle: 'BCA Student · Systems & Infrastructure',
        bio: "Building and operating real Linux infrastructure — from NixOS servers to HA clusters. Contributor to nixpkgs.",
        hasResume: true,
        resumeUrl: '/resume/Srivatsa_S_Poojari_Resume.pdf',
    },

    // --- About ---
    about: {
        bio: "I'm Srivatsa, a second-year BCA student with a deep interest in Linux systems, self-hosting, and infrastructure engineering. I learn by building real systems — my home server runs NixOS with a fully declarative Flakes config, and I run a Proxmox HA cluster for learning virtualisation.",
        currently: [
            { label: '📖 Learning', value: 'LTE/5G protocol stack + Python' },
            { label: '🔧 Operating', value: 'NixOS home server (8+ services)' },
            { label: '🌱 Contributing', value: 'nixpkgs open-source' },
        ],
    },

    // --- Social Links ---
    socials: [
        { name: 'GitHub', url: 'https://github.com/Haschwalth00B', icon: 'github' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/srivatsa-s-poojari-ba8a45319/', icon: 'linkedin' },
        { name: 'Email', url: 'mailto:srivatsapoojary@gmail.com', icon: 'mail' },
        { name: 'Instagram', url: 'https://www.instagram.com/srivatsa_._/', icon: 'instagram' },
        { name: 'Letterboxd', url: 'https://letterboxd.com/Srivatsa2580/', icon: 'film' },
    ],

    // --- Education ---
    education: [

        {
            institution: 'Dr. NSAM First Grade College, Nitte',
            degree: 'Bachelor of Computer Applications (BCA)',
            period: '2023 – 2027',
            gpa: '7.9 / 10.0',
            description: 'C/C++, Data Structures, Computer Networks (LTE/5G fundamentals), Operating Systems, Python.',
            url: 'https://nitte.edu.in/nsamfgcn/index.php',

        },
        {
            institution: 'Viveka Pre University College, Kota',
            degree: 'Pre University (Commerce — CEBA)',

            period: '2022 – 2024',
            gpa: '9.0 / 10.0',
            description: 'Computer Science, Economics, Business Studies, Accountancy.',
            url: 'https://kotaviveka.com/',
        },

        {
            institution: 'SMS English Medium School, Brahmavar',
            degree: 'High School',
            period: '',
            gpa: '7.5 / 10.0',
            description: '',
            url: 'https://smscbse.org/',
        },

    ],

    // --- Engineering (formerly Experience) ---
    experience: [
        {
            title: 'NixOS Home Server',
            company: 'Infrastructure Project',
            period: '2024 – Present',
            description: 'Learned how declarative configuration eliminates drift — breaking changes surface at build time, not in production. Debugging Nix evaluation errors built an intuition for functional composition and lazy evaluation.',
            responsibilities: [
                '14 purpose-built NixOS modules managing boot, networking, security, power, monitoring, and Docker',
                'Home Manager integration declaring the full user environment (shell, editor, tools) alongside system config',
                'Automated weekly garbage collection, system upgrades, and Docker pruning via NixOS options',
            ],
        },
        {
            title: 'Self-Hosted Service Stack',
            company: 'Homelab Project',
            period: '2023 – Present',
            description: 'Running services for daily use taught the gap between deploying software and operating it — handling silent certificate renewal failures, DNS breakage after power cuts, and the discipline of actually verifying backups.',
            responsibilities: [
                'Nginx reverse proxy with automated Let\'s Encrypt TLS — HTTPS for all internal services',
                'Tailscale overlay VPN for secure remote access with zero open ports on the public internet',
                'Samba + Avahi mDNS for local file sharing and hostname discovery (nix-server.local)',
                'Custom Bash monitoring scripts and systemd timers; Netdata real-time metrics dashboard',
            ],
        },
        {
            title: 'Proxmox HA Virtualisation Cluster',
            company: 'Lab Project',
            period: '2023 – Present',
            description: 'Deliberately breaking nodes revealed what \'high availability\' actually costs — failover without shared storage means restarts not migrations, and clock drift between nodes triggers split-brain faster than expected.',
            responsibilities: [
                'Induced node failures and validated automatic failover behaviour under simulated outages',
                'Evaluated Ceph vs NFS backends for clustered VM disk I/O; documented latency tradeoffs',
                'Chrony NTP synchronisation across nodes — critical for preventing split-brain scenarios',
            ],
        },
    ],

    // --- Projects ---
    projects: [
        {
            title: 'NixOS Declarative Home Server',
            description: 'Fully declarative NixOS server configuration using Nix Flakes and Home Manager. Every package, service, user setting, and system option is version-controlled — 14 purpose-built modules covering boot, networking, security, power management, monitoring, and Docker. Rebuilding from scratch produces an identical system every time.',
            tags: ['NixOS', 'Nix Flakes', 'Home Manager', 'Linux', 'IaC'],
            category: 'Infrastructure',
            status: 'Active',
            featured: true,

            github: 'https://github.com/Haschwalth00B/nixos-configuration-files',
        },
        {
            title: 'Self-Hosted Service Infrastructure',
            description: 'Operating 8+ containerised services in production via Docker Compose on NixOS: Immich (AI photo management with ML inference), Home Assistant, n8n workflow automation, Pi-hole DNS filtering, Homepage dashboard, and more. Nginx reverse proxy with automated TLS, Tailscale VPN, and Samba for local file sharing.',
            tags: ['Docker', 'Nginx', 'Tailscale', 'Bash', 'Linux'],
            category: 'Infrastructure',

            status: 'Active',
            featured: true,
        },
        {
            title: 'Proxmox HA Virtualisation Cluster',
            description: 'Multi-node Proxmox VE cluster with live VM migration, automatic failover under induced hardware failures, and shared storage evaluation (Ceph vs NFS). Chrony NTP sync across nodes to prevent split-brain scenarios.',
            tags: ['Proxmox', 'QEMU/KVM', 'Clustering', 'Chrony'],
            category: 'Infrastructure',
            status: 'Active',
            featured: true,
        },
        {
            title: 'Network Security & DNS Filtering',
            description: 'Pi-hole recursive DNS resolver reducing unwanted queries by ~40% across all LAN clients. pfSense firewall with least-privilege segmentation between LAN, IoT VLAN, and DMZ zones. Python log analysis for anomalous DNS traffic detection.',
            tags: ['pfSense', 'Pi-hole', 'Python', 'Networking'],
            category: 'Networking',
            status: 'Active',
            featured: true,
        },
        {
            title: 'Neovim Configuration',
            description: 'Personal Neovim setup managed with lazy.nvim — LSP via Mason, Telescope fuzzy finder, Harpoon file navigation, Treesitter syntax highlighting across 20+ languages. Symlinked into the NixOS system via Home Manager.',
            tags: ['Neovim', 'Lua', 'LSP', 'NixOS'],
            category: 'Tooling',
            status: 'Active',
            featured: false,
            github: 'https://github.com/Haschwalth00B/my-dot-files',
        },
        {
            title: 'Tor Hidden Service',
            description: 'Personal site accessible via the Tor network — hands-on study of onion routing, anonymisation layers, and Nginx configuration for anonymous hosting.',
            tags: ['Tor', 'Nginx', 'Security', 'Linux'],
            category: 'Security',
            status: 'Completed',
            featured: false,

        },
        {
            title: 'Infrastructure Automation Scripts',
            description: 'Library of Bash utilities covering service health checks, disk usage alerting, automated backups, log rotation, and systemd service recovery. Scheduled via cron and systemd timers.',
            tags: ['Bash', 'Linux', 'Automation', 'systemd'],
            category: 'Automation',
            status: 'Active',
            featured: false,
        },
        {
            title: 'Portfolio Website',
            description: 'This site — React 19, TypeScript, Tailwind CSS v4, Vite, Framer Motion. Command palette (Ctrl+K), Markdown blog with frontmatter parsing, scroll progress, mobile-responsive.',
            tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
            category: 'Web',
            status: 'Active',
            featured: false,
            github: 'https://github.com/Haschwalth00B/Haschwalth00B.github.io',
        },
    ],

    // --- Skills ---
    skills: [
        {
            group: 'Infrastructure & IaC',
            items: ['NixOS', 'Nix Flakes', 'Home Manager', 'Proxmox', 'Docker', 'Nginx', 'Portainer'],
        },
        {
            group: 'Networking & Security',
            items: ['pfSense', 'Pi-hole', 'Tailscale', 'WireGuard', 'VLANs', 'DNS', 'Tor'],
        },
        {
            group: 'Operating Systems',
            items: ['NixOS', 'Arch Linux', 'Debian', 'Ubuntu', 'OpenBSD'],
        },
        {
            group: 'Languages & Scripting',
            items: ['C', 'C++', 'Python', 'Bash', 'Nix', 'Lua'],
        },
        {
            group: 'Monitoring & Automation',
            items: ['Netdata', 'systemd', 'btop', 'smartmontools', 'cron'],
        },
        {
            group: 'Tools & Platforms',
            items: ['Git', 'Neovim', 'tmux', 'n8n', 'Home Assistant', 'MySQL'],
        },
    ],


    // --- Contact ---
    contact: {
        email: 'srivatsapoojary@gmail.com',
        heading: 'Get in Touch',
        description: 'Feel free to reach out for collaborations, questions, or just to talk about infrastructure.',
        responseTime: 'Usually responds within 24–48 hours',
    },

    // --- Navigation ---
    nav: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Engineering', href: '#engineering' },
        { label: 'Education', href: '#education' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Blog', href: '#blog' },
        { label: 'Contact', href: '#contact' },
    ],
};
