// ============================================
// SITE DATA — Single Source of Truth
// ============================================
// Edit this file to update all personal data across the site.

export const siteData = {
    // --- Personal ---
    name: 'Srivatsa',
    fullName: 'Srivatsa S Poojari',
    title: 'Srivatsa S Poojari | Portfolio',
    description: 'BCA student passionate about homelabbing, self-hosting, and open source. I learn by building things.',
    url: 'https://haschwalth00b.github.io',
    location: 'Udupi, Karnataka',

    timezone: 'IST (UTC+5:30)',

    // --- Hero ---
    hero: {
        greeting: 'Hello, myself',
        displayName: 'Srivatsa.',
        subtitle: '2nd Year BCA Student | Homelab Enthusiast | System Tinkerer',
        typingPhrases: [
            'I build infrastructure',
            'I configure networks',
            'I optimize systems',
            'I self-host everything',
        ],
        bio: 'BCA student passionate about homelabs, networking, and infrastructure. I learn by building things from the ground up and solving real-world problems.',
        // Set to true and place your PDF at public/resume/Srivatsa_S_Poojari_Resume.pdf
        hasResume: true,
        resumeUrl: '/resume/Srivatsa_S_Poojari_Resume.pdf',
    },

    // --- About ---
    about: {
        bio: "I'm Srivatsa, a second-year BCA student with a growing passion for technology, home lab projects, cybersecurity, and cloud computing. My curiosity has led me to experiment with a variety of operating systems, dive into self-hosting, and automate tasks around my home server. I have hands-on experience with Linux systems (Arch, Debian, NixOS, Tails, Proxmox), Docker, and network configuration.",
        philosophy: 'understand the system deeply, identify the root cause, then engineer a better solution',
        originStory: "Curiosity about how things work under the hood led me into the world of homelabs, networking, and self-hosted infrastructure. I now run my own homelab, host services independently, and enjoy working through infrastructure challenges that push me to learn something new.",
        currently: [
            { label: '📖 Reading', value: 'System Design Fundamentals' },
            { label: '🔧 Building', value: 'High-availability homelab cluster' },
            { label: '🌱 Learning', value: 'NixOS & Infrastructure as Code' },
        ],
        techObsessions: ['Proxmox', 'Docker', 'Linux Administration', 'Networking', 'Self-Hosting'],
        stats: [
            { label: 'Years Tinkering', value: '3+' },
            { label: 'Services Self-Hosted', value: '10+' },
            { label: 'Linux Distros Tried', value: '8+' },
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
            description: 'Focusing on computer applications, systems programming, and infrastructure.',
            url: 'https://nitte.edu.in/nsamfgcn/index.php',
        },
        {
            institution: 'Viveka Pre University College, Kota',
            degree: 'Pre University (Science)',
            period: '2022 – 2024',
            gpa: '9.0 / 10.0',
            description: 'Higher secondary education with science stream.',

            url: 'https://kotaviveka.com/',
        },
        {
            institution: 'SMS English Medium School, Brahmavar',
            degree: 'High School',
            period: '',
            gpa: '7.5 / 10.0',
            description: 'Foundation education.',
            url: 'https://smscbse.org/',
        },
    ],

    // --- Experience ---
    experience: [
        {
            title: 'Self-Directed Projects & Research',
            company: 'Independent',
            period: 'Ongoing',
            description: 'Building and managing a personal homelab, exploring open source projects, and working with enterprise-grade infrastructure and automation on self-owned hardware.',
            responsibilities: [
                'Running multiple Docker containers to self-host services',
                'Configuring network infrastructure with pfSense and managed switches',
                'Setting up and managing Proxmox virtualization environment',
                'Writing Bash scripts for automation, health checks, and backups',
                'Exploring cybersecurity through Tor hidden service hosting and network hardening',
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

            title: 'High-Availability Proxmox Cluster',
            description: 'Designed a virtualized HA environment simulating enterprise-grade infrastructure with live VM migration, failover testing, and tuned resource allocation across 4 physical nodes.',
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
            description: 'This very website! Built with React, TypeScript, Tailwind CSS, and Framer Motion. Features dark glassmorphism design and markdown blog system.',
            tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
            category: 'Web',
            status: 'Active',
            featured: false,
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
        heading: "Let's Connect",
        description: "Have a project idea, want to collaborate, or just chat about homelabs? I'm always excited to connect with fellow tech enthusiasts.",
        responseTime: 'I typically respond within 24-48 hours',
    },


    // --- Navigation ---
    nav: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Education', href: '#education' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
        { label: 'Blog', href: '#blog' },
        { label: 'Contact', href: '#contact' },
    ],
};
