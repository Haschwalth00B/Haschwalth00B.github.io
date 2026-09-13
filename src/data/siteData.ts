// ============================================
// SITE DATA — Authoritative Single Source of Truth
// Direct alignment with Srivatsa S Poojari's Resume & Repository
// ============================================

export const siteData = {
    // --- Personal ---
    name: 'Srivatsa',
    fullName: 'Srivatsa S Poojari',
    title: 'Srivatsa S Poojari — Linux Systems, Infrastructure & Networking',
    description: 'BCA student graduating in 2027 with hands-on experience building Linux infrastructure, declarative NixOS systems, containerized services, and networking projects.',
    url: 'https://haschwalth00b.github.io',
    location: 'Udupi, Karnataka, India',
    timezone: 'IST (UTC+5:30)',
    email: 'srivatsapoojary@gmail.com',
    github: 'https://github.com/Haschwalth00B',
    linkedin: 'https://www.linkedin.com/in/srivatsa-s-poojari-ba8a45319/',
    letterboxd: 'https://letterboxd.com/Srivatsa2580/',

    contact: {
        email: 'srivatsapoojary@gmail.com',
        responseTime: 'Usually responds within 24–48 hours',
    },

    // --- Hero ---
    hero: {
        statement: 'I work with Linux, networks, and infrastructure, and I like figuring out how things work underneath.',
        descriptor: 'LINUX · NETWORKS · CONTAINERS · DECLARATIVE INFRASTRUCTURE',
        bio: 'BCA student at Nitte University (graduating 2027), currently building a multi-region network fabric with Containerlab and FRRouting.',
        hasResume: true,
        resumeUrl: '/resume/Srivatsa_S_Poojari_Resume.pdf',
    },

    // --- About ---
    about: {
        summary: 'BCA student graduating in 2027 at Dr. NSAM First Grade College, Nitte University. Infrastructure engineer by curiosity — building real Linux infrastructure, declarative NixOS configurations, and networking labs.',
        fragments: [
            { label: 'STATUS', value: 'BCA Student graduating in 2027 (GPA 7.9/10.0).' },
            { label: 'CURRENTLY', value: 'Developing a multi-region network fabric with Containerlab and FRRouting (BGP, OSPF, MPLS, IPsec).' },
            { label: 'LEARNING', value: 'Preparing for AWS Certified CloudOps Engineer – Associate.' },
            { label: 'OPERATING', value: 'Headless NixOS Home Server with 14 purpose-built modules and 8+ containerized services.' },
        ],
    },

    // --- Social Links ---
    socials: [
        { name: 'GitHub', url: 'https://github.com/Haschwalth00B', icon: 'github' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/srivatsa-s-poojari-ba8a45319/', icon: 'linkedin' },
        { name: 'Email', url: 'mailto:srivatsapoojary@gmail.com', icon: 'mail' },
        { name: 'Letterboxd', url: 'https://letterboxd.com/Srivatsa2580/', icon: 'film' },
        { name: 'Instagram', url: 'https://www.instagram.com/srivatsa_._/', icon: 'instagram' },
    ],

    // --- Education (Strictly from Resume) ---
    education: [
        {
            institution: 'NSAM First Grade College, Nitte University',
            location: 'Udupi, Karnataka',
            degree: 'Bachelor of Computer Applications (BCA)',
            period: '2024 – 2027',
            status: 'Expected 2027',
            gpa: '7.9 / 10.0',
            coursework: 'Computer Networks, Operating Systems, Data Structures, DBMS, C, C++, Python',
            url: 'https://nitte.edu.in/nsamfgcn/index.php',
        },
        {
            institution: 'Viveka Pre University College',
            location: 'Kota, Karnataka',
            degree: 'Pre-University (Commerce — CEBA)',
            period: '2024',
            status: 'Completed 2024',
            gpa: '9.0 / 10.0',
            coursework: 'Computer Science, Economics, Business Studies, Accountancy',
            url: 'https://kotaviveka.com/',
        },
        {
            institution: 'SMS English Medium School',
            location: 'Brahmavar, Karnataka',
            degree: 'High School',
            period: '2022',
            status: 'Graduated 2022',
            gpa: '7.5 / 10.0',
            coursework: '',
            url: 'https://smscbse.org/',
        },
    ],

    // --- Featured Projects (Audited directly from Resume & Repo) ---
    projects: [
        {
            id: 'sparebox',
            title: 'Spare Box — Network Fabric & Infrastructure Lab',
            period: '2026 – Present',
            status: 'Active Development',
            category: 'Networking & Infrastructure',
            featured: true,
            description: 'Multi-region simulated network fabric on bare-metal NixOS using Containerlab and FRRouting, with BGP and OSPF routing configured across three regions. Configured strongSwan/IPsec transit tunnels between regions and worked with MP-BGP VPNv4 and route segmentation as part of the project.',
            implementationDetails: [
                'Multi-region network fabric on bare-metal NixOS using Containerlab + FRRouting',
                'BGP and OSPF routing configured across three simulated regions',
                'strongSwan/IPsec transit tunnels with MP-BGP VPNv4 route segmentation',
                'Troubleshot route-target import/export, VRF configuration, and MPLS forwarding in containerized nodes',
                'Planned extension: k3s platform layer with GitOps, observability, and chaos testing',
            ],
            tags: ['Containerlab', 'FRRouting', 'BGP', 'OSPF', 'MPLS', 'VRF', 'IPsec', 'NixOS'],
            github: 'https://github.com/Haschwalth00B',
        },
        {
            id: 'nixos-server',
            title: 'NixOS Declarative Home Server',
            period: '2024 – Present',
            status: 'Production',
            category: 'Declarative Infrastructure',
            featured: true,
            description: 'Fully declarative NixOS server built using Nix Flakes, version-controlling packages, services, and system configuration across 14 purpose-built modules covering boot, networking, security, power management, and virtualization.',
            implementationDetails: [
                '14 purpose-built Nix modules: boot, networking, security, power, monitoring, Docker',
                'Home Manager integration for declarative user environment and fail2ban SSH hardening',
                'ASPM power management tuning for 24/7 headless operation',
                'Automated weekly system upgrades and garbage collection through Nix Flakes options',
            ],
            tags: ['NixOS', 'Nix Flakes', 'Home Manager', 'Linux', 'IaC', 'fail2ban'],
            github: 'https://github.com/Haschwalth00B/nixos-configuration-files',
        },
        {
            id: 'self-hosted',
            title: 'Self-Hosted Infrastructure Stack',
            period: '2023 – Present',
            status: 'Active',
            category: 'Containerized Services',
            featured: true,
            description: 'Deploy and maintain 8+ containerized services via Docker Compose — including Immich (AI photo management), Home Assistant, n8n workflow automation, and Pi-hole DNS filtering — managed through Portainer.',
            implementationDetails: [
                '8+ production services managed via Docker Compose and Portainer',
                'Tailscale mesh VPN for secure remote access with zero open public ports',
                'Samba and Avahi (mDNS) for local network file sharing and service discovery',
                'Nginx reverse proxy with automated TLS certificate management',
            ],
            tags: ['Docker Compose', 'Portainer', 'Tailscale', 'Pi-hole', 'Nginx', 'Samba'],
        },
        {
            id: 'proxmox-cluster',
            title: 'Proxmox VE High-Availability Cluster',
            period: 'Personal Lab Project',
            status: 'Lab Environment',
            category: 'Virtualization & HA',
            featured: true,
            image: '/images/cluster.png',
            description: 'Multi-node Proxmox VE cluster configured to experiment with VM live migration and HA/failover behavior across physical hardware nodes. Set up Chrony/NTP synchronization across cluster nodes to prevent split-brain scenarios under induced failures.',
            implementationDetails: [
                'Multi-node Proxmox VE virtualization cluster on physical hardware',
                'Tested VM live migration and automatic failover under simulated node outages',
                'Chrony NTP synchronization across nodes to prevent cluster split-brain scenarios',
            ],
            tags: ['Proxmox VE', 'QEMU/KVM', 'HA Clustering', 'Chrony NTP', 'Linux'],
        },
    ],

    // --- Lab Observations ---
    experience: [
        {
            title: 'Multi-Region Network Fabric (Containerlab + FRRouting)',
            company: 'Networking Project',
            period: '2026 – Present',
            description: 'Simulating complex BGP, OSPF, and MPLS forwarding behaviors across containerized nodes revealed how VRF route targets and IPsec transit tunnels behave under synthetic load.',
            responsibilities: [
                'Configured BGP and OSPF routing instances across 3 simulated regions',
                'Validated MP-BGP VPNv4 route target import/export policies',
                'Troubleshot VRF isolation and MPLS label forwarding behavior under Containerlab',
            ],
        },
        {
            title: 'NixOS Declarative Home Server',
            company: 'Infrastructure Project',
            period: '2024 – Present',
            description: 'Learned how declarative configuration eliminates drift — breaking changes surface at build time, not in production. Debugging Nix evaluation errors built an intuition for functional composition and lazy evaluation.',
            responsibilities: [
                '14 purpose-built NixOS modules managing boot, networking, security, power, monitoring, and Docker',
                'Home Manager integration declaring the full user environment alongside system config',
                'Automated weekly garbage collection, system upgrades, and Docker pruning via Nix Flakes options',
            ],
        },
    ],

    // --- Secondary Repositories & Dotfiles ---
    otherProjects: [
        {
            title: 'Neovim Environment (Dotfiles)',
            category: 'Tooling',
            tags: ['Lua', 'Neovim', 'LSP', 'NixOS'],
            github: 'https://github.com/Haschwalth00B/my-dot-files',
            desc: 'Modular Lua Neovim config with lazy.nvim, Mason LSP, Telescope, and Treesitter, declared via Home Manager.',
        },
        {
            title: 'Infrastructure Automation Utilities',
            category: 'Automation',
            tags: ['Bash', 'systemd', 'Linux'],
            desc: 'Systemd timers and Bash scripts for automated system backups, disk alerting, and service health recovery.',
        },
    ],

    // --- Technical Skills (Directly from Resume) ---
    skillGroups: [
        {
            category: 'Languages',
            items: ['C', 'C++', 'Python', 'Bash'],
        },
        {
            category: 'Operating Systems',
            items: ['NixOS', 'Arch Linux', 'Debian', 'Ubuntu', 'OpenBSD'],
        },
        {
            category: 'Networking',
            items: ['TCP/IP', 'DNS', 'DHCP', 'VLANs', 'FRRouting', 'BGP', 'OSPF', 'MPLS', 'VRFs', 'strongSwan/IPsec'],
        },
        {
            category: 'Virtualization & Containers',
            items: ['Proxmox VE', 'QEMU/KVM', 'Docker', 'Docker Compose', 'Portainer'],
        },
        {
            category: 'Infrastructure & Tooling',
            items: ['Nix Flakes', 'Git', 'GitHub', 'Nginx', 'systemd', 'Pi-hole', 'Tailscale', 'Samba'],
        },
        {
            category: 'Monitoring',
            items: ['btop', 'smartmontools', 'systemd journal'],
        },
    ],

    // --- Navigation ---
    nav: [
        { label: 'Work', href: '#work' },
        { label: 'Lab', href: '#lab' },
        { label: 'About', href: '#about' },
        { label: 'Notes', href: '#notes' },
    ],

    // --- Sections ---
    sections: {
        work: { number: '01', title: 'Selected Work' },
        lab: { number: '02', title: 'Lab' },
        systems: { number: '03', title: 'Systems & Skills' },
        about: { number: '04', title: 'About & Education' },
        notes: { number: '05', title: 'Notes' },
        contact: { number: '06', title: 'Contact' },
    },
};
