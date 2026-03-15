// ============================================
// SITE DATA — Single Source of Truth
// ============================================
// Edit this file to update all personal data across the site.

export const siteData = {
    // --- Personal ---
    name: 'Srivatsa',
    fullName: 'Srivatsa S Poojari',
    title: 'Srivatsa S Poojari | Portfolio',
    description: 'BCA student interested in homelabs, self-hosting, and open source.',
    url: 'https://haschwalth00b.github.io',
    location: 'Udupi, Karnataka',

    timezone: 'IST (UTC+5:30)',

    // --- Hero ---
    hero: {
        greeting: "Hi, I'm",
        displayName: 'Srivatsa',
        subtitle: 'BCA Student · Homelab & Infrastructure',
        bio: 'BCA student interested in homelabs, networking, and infrastructure.',
        // Set to true and place your PDF at public/resume/Srivatsa_S_Poojari_Resume.pdf
        hasResume: true,
        resumeUrl: '/resume/Srivatsa_S_Poojari_Resume.pdf',
    },

    // --- About ---
    about: {
        bio: "I'm Srivatsa, a second-year BCA student with an interest in homelabs, self-hosting, and Linux systems. I work with Docker, Proxmox, and network configuration in my personal projects.",
        currently: [
            { label: '📖 Reading', value: 'System Design Fundamentals' },
            { label: '🔧 Building', value: 'Homelab cluster' },
            { label: '🌱 Learning', value: 'NixOS & Infrastructure as Code' },
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
            period: '2024 – 2027',
            gpa: '7.9 / 10.0',
            description: 'Computer applications, systems programming, and infrastructure.',
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

    // --- Experience ---
    experience: [
        {
            title: 'Self-Directed Projects',
            company: 'Independent',
            period: 'Ongoing',
            description: 'Managing a personal homelab and working with server infrastructure and automation.',
            responsibilities: [
                'Running Docker containers to self-host services',
                'Configuring network infrastructure with pfSense',
                'Setting up and managing Proxmox virtualization',
                'Writing Bash scripts for automation and backups',
            ],
        },
    ],

    // --- Projects ---
    projects: [
        {
            title: 'Homelab & Self-Hosted Infrastructure',
            description: 'Deployed and managed containerized services on self-owned hardware with Nginx Proxy Manager, Let\'s Encrypt SSL, reverse proxy routing, and automated monitoring via shell scripts.',
            tags: ['Docker', 'Nginx', 'Linux', 'Bash'],
            category: 'Infrastructure',
            status: 'Active',
            featured: true,
        },
        {

            title: 'Proxmox Cluster',
            description: 'Multi-node virtualization setup with live VM migration, failover testing, and resource allocation across physical nodes.',
            tags: ['Proxmox', 'Virtualization', 'Clustering', 'Chrony'],
            category: 'Infrastructure',
            status: 'Completed',
            featured: true,
        },
        {
            title: 'Network Security & DNS Filtering',
            description: 'Deployed Pi-hole for network-wide DNS filtering, configured pfSense firewall rules and VPN tunnels, and hardened remote access with certificate-based authentication.',
            tags: ['pfSense', 'Pi-hole', 'Networking', 'Security'],
            category: 'Networking',
            status: 'Active',
            featured: true,
        },
        {
            title: 'Tor Hidden Service',
            description: 'Set up a personal website accessible via the Tor network using Nginx and Tor, exploring onion routing and anonymous hosting.',
            tags: ['Tor', 'Nginx', 'Security', 'Linux'],
            category: 'Security',
            status: 'Completed',
            featured: false,

        },
        {
            title: 'Automation & Scripting',
            description: 'Wrote Bash scripts automating health checks, log rotation, and backup routines; scheduled periodic reporting with cron and systemd timers.',
            tags: ['Bash', 'Linux', 'Automation', 'Cron'],
            category: 'Automation',
            status: 'Active',
            featured: false,
        },
        {
            title: 'Portfolio Website',
            description: 'This website — built with React, TypeScript, and Tailwind CSS. Minimal dark theme with command palette, markdown blog, and clean editorial layout.',
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
            group: 'Infrastructure',
            items: ['Proxmox', 'Docker', 'Nginx', 'Portainer'],
        },
        {
            group: 'Networking & Security',
            items: ['pfSense', 'Pi-hole', 'Tor', 'WireGuard', 'VLANs'],
        },
        {

            group: 'Operating Systems',
            items: ['Arch Linux', 'Debian', 'NixOS', 'Tails', 'Proxmox VE'],
        },
        {
            group: 'Languages & Scripting',
            items: ['Python', 'Bash/Shell', 'C++', 'Java'],
        },
        {
            group: 'Tools & Platforms',
            items: ['Git', 'MySQL', 'n8n', 'Home Assistant'],
        },
    ],

    // --- Contact ---
    contact: {
        email: 'srivatsapoojary@gmail.com',
        heading: "Get in Touch",
        description: "Feel free to reach out for collaborations or questions.",
        responseTime: 'Usually responds within 24–48 hours',
    },


    // --- Navigation ---
    nav: [
        { label: 'Home', href: '#home' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Experience', href: '#experience' },
        { label: 'Education', href: '#education' },
        { label: 'Blog', href: '#blog' },
        { label: 'Contact', href: '#contact' },
    ],
};
