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
    timezone: 'IST, UTC+5:30',
    email: 'srivatsapoojary@gmail.com',
    github: 'https://github.com/Haschwalth00B',
    linkedin: 'https://www.linkedin.com/in/srivatsa-s-poojari-ba8a45319/',
    letterboxd: 'https://letterboxd.com/Srivatsa2580/',

    contact: {
        email: 'srivatsapoojary@gmail.com',
        responseTime: 'I usually reply within 24 to 48 hours',
    },

    // --- Hero ---
    hero: {
        statement: 'I work with Linux, networks and infrastructure, and I like figuring out how things work underneath.',
        now: 'BCA student at Nitte University, graduating 2027. Now building a three-region network fabric with Containerlab and FRRouting.',
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
            title: 'Spare Box',
            kind: 'Network fabric and infrastructure lab',
            period: '2026 to present',
            status: 'Active development',
            figure: { value: '3', label: 'simulated regions, routed with BGP and OSPF' },
            description: 'A multi-region network fabric on bare-metal NixOS, built with Containerlab and FRRouting. strongSwan/IPsec transit tunnels join the regions, with MP-BGP VPNv4 for route segmentation.',
            lesson: 'Simulating BGP, OSPF and MPLS forwarding across containerized nodes showed me how VRF route targets and IPsec transit tunnels behave under synthetic load.',
            implementationDetails: [
                'Validated MP-BGP VPNv4 route-target import and export policies',
                'Troubleshot VRF isolation and MPLS label forwarding in containerized nodes',
                'Planned extension: a k3s platform layer with GitOps, observability and chaos testing',
            ],
            tags: ['Containerlab', 'FRRouting', 'BGP', 'OSPF', 'MPLS', 'VRF', 'IPsec', 'NixOS'],
            github: 'https://github.com/Haschwalth00B',
            visual: {
                src: '/images/plates/cable-map.jpg',
                alt: 'A 1901 world map of the Eastern Telegraph Company, with submarine cable routes drawn between the continents.',
                caption: 'The Eastern Telegraph system in 1901: a multi-region fabric, long before BGP.',
            },
        },
        {
            id: 'nixos-server',
            title: 'NixOS home server',
            kind: 'Declarative infrastructure',
            period: '2024 to present',
            status: 'Production',
            figure: { value: '14', label: 'purpose-built modules, from boot to Docker' },
            description: 'A fully declarative server built with Nix Flakes, version-controlling packages, services and system configuration, and tuned for 24/7 headless operation.',
            lesson: 'Declarative configuration eliminates drift: breaking changes surface at build time, not in production. Debugging Nix evaluation errors built my intuition for functional composition and lazy evaluation.',
            implementationDetails: [
                'Home Manager declares the full user environment alongside the system config',
                'fail2ban SSH hardening',
                'ASPM power management tuning',
                'Weekly upgrades, garbage collection and Docker pruning through Nix Flakes options',
            ],
            tags: ['NixOS', 'Nix Flakes', 'Home Manager', 'Linux', 'IaC', 'fail2ban'],
            github: 'https://github.com/Haschwalth00B/nixos-configuration-files',
            visual: {
                src: '/images/plates/jacquard.jpg',
                alt: 'A cast-iron Jacquard card cutter, with its rows of punches and a chain of punched cards.',
                caption: 'A Jacquard card cutter at Masson Mills. The pattern is declared on cards and the loom builds it. My modules/maintenance.nix does the same for a server.',
            },
            code: `gc = {
  automatic = true;
  # less aggressive, daily was overkill
  dates = "weekly";
  # keep 2 weeks of generations
  options = "--delete-older-than 14d";
};

system.autoUpgrade = {
  enable = true;
  # weekly on Monday at 3am
  dates = "Mon 03:00";
  allowReboot = false;
};`,
        },
        {
            id: 'self-hosted',
            title: 'Self-hosted stack',
            kind: 'Containerized services',
            period: '2023 to present',
            status: 'Active',
            figure: { value: '8+', label: 'services running on Docker Compose' },
            description: 'Immich for photos, Home Assistant, n8n workflow automation and Pi-hole DNS filtering, among others, all managed through Portainer.',
            lesson: 'Nothing here has a public port. Everything is reached over Tailscale, or found on the LAN through Avahi.',
            implementationDetails: [
                'Tailscale mesh VPN for secure remote access with zero open public ports',
                'Samba and Avahi (mDNS) for local file sharing and service discovery',
                'Nginx reverse proxy with automated TLS certificate management',
            ],
            tags: ['Docker Compose', 'Portainer', 'Tailscale', 'Pi-hole', 'Nginx', 'Samba'],
            visual: {
                src: '/images/plates/exchange.jpg',
                alt: 'A small 1940s telephone exchange in a red wooden cabinet, with rows of black switch keys on its front.',
                caption: 'A 1940s N935 telephone exchange. Calls come in and get switched to the right extension, the job Nginx does here.',
            },
        },
        {
            id: 'proxmox-cluster',
            title: 'Proxmox HA cluster',
            kind: 'Virtualization and high availability',
            period: 'College lab project, 2025',
            status: 'Built with Sahith, Srushtik, Sunith and Shamanth',
            figure: { value: '4', label: 'physical nodes on a 1 Gbps LAN' },
            description: 'A multi-node Proxmox VE cluster on physical hardware, built to test VM live migration and HA failover under induced failures. One node ran Chrony as the NTP server, to keep the others in step and prevent split-brain.',
            lesson: 'We skipped Ceph, so a failed node\'s VMs restart on a healthy one in seconds instead of moving live. Networking turned out to matter as much as the clustering itself.',
            implementationDetails: [
                'Live migration tested with zero progress lost, for planned maintenance',
                'Automatic failover tested under simulated node outages',
                'Ceph and VLAN segmentation are the next step: no spare SSDs this time',
            ],
            tags: ['Proxmox VE', 'QEMU/KVM', 'HA Clustering', 'Chrony NTP', 'Linux'],
            note: true,
            visual: {
                src: '/images/plates/cluster-rig.jpg',
                alt: 'The back of two tower servers on a classroom desk, with network cables running into a small managed switch.',
                caption: 'The towers and the managed switch, on a classroom desk.',
            },
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
        { label: 'Skills', href: '#skills' },
        { label: 'About', href: '#about' },
        { label: 'Notes', href: '#notes' },
    ],

    // --- Footer sign-off ---
    designedBy: 'Nishanth Dsouza',
    designedByUrl: 'https://nishds-06.github.io/',

    // --- Found pictures and footage: credited in the footer ---
    credits: [
        { title: '1901 Eastern Telegraph cables', by: '', licence: 'public domain', licenceUrl: 'https://creativecommons.org/publicdomain/mark/1.0/', url: 'https://commons.wikimedia.org/wiki/File:1901_Eastern_Telegraph_cables.png' },
        { title: '1940s N935 telephone exchange', by: 'Rodhullandemu', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', url: 'https://commons.wikimedia.org/w/index.php?curid=66686359' },
        { title: 'Masson Mills WTM 10 Jacquard Card Cutter 5890', by: 'Clem Rutter', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/', url: 'https://commons.wikimedia.org/w/index.php?curid=14911220' },
        { title: 'Malpe Beach, Udupi 01', by: 'Raghavan2010', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', url: 'https://commons.wikimedia.org/w/index.php?curid=136221784' },
        { title: 'Hard Disk Actuator', by: 'Fletcher6', licence: 'CC BY 4.0', licenceUrl: 'https://creativecommons.org/licenses/by/4.0', url: 'https://commons.wikimedia.org/wiki/File:Hard_Disk_Actuator.ogv' },
    ],
};
