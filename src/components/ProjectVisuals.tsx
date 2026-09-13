// ============================================
// Project Visuals — SVG technical diagrams
// for featured project case-study blocks.
// Each visual represents the project's domain.
// ============================================

interface VisualProps {
    index: number;
}

// NixOS Declarative Server — modular block diagram
function NixOSVisual() {
    return (
        <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
            {/* Grid background */}
            <defs>
                <pattern id="grid-nix" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--color-border)" strokeWidth="0.5" />
                </pattern>
            </defs>
            <rect width="320" height="180" fill="url(#grid-nix)" opacity="0.4" />

            {/* Central system block */}
            <rect x="110" y="60" width="100" height="60" stroke="var(--color-structural)" strokeWidth="1.5" fill="none" rx="1" />
            <text x="160" y="85" textAnchor="middle" fill="var(--color-structural)" fontSize="8" fontFamily="var(--font-mono)" letterSpacing="0.1em">NIXOS</text>
            <text x="160" y="100" textAnchor="middle" fill="var(--color-muted)" fontSize="7" fontFamily="var(--font-mono)">FLAKES</text>

            {/* Module blocks around the center */}
            {[
                { x: 20, y: 15, label: 'BOOT' },
                { x: 90, y: 15, label: 'NET' },
                { x: 160, y: 15, label: 'SEC' },
                { x: 230, y: 15, label: 'PWR' },
                { x: 20, y: 140, label: 'MON' },
                { x: 90, y: 140, label: 'DOCKER' },
                { x: 160, y: 140, label: 'HOME' },
                { x: 230, y: 140, label: 'USERS' },
            ].map((m, i) => (
                <g key={i}>
                    <rect x={m.x} y={m.y} width="60" height="25" stroke="var(--color-border-hover)" strokeWidth="1" fill="var(--color-surface)" rx="1" />
                    <text x={m.x + 30} y={m.y + 15} textAnchor="middle" fill="var(--color-muted)" fontSize="6.5" fontFamily="var(--font-mono)" letterSpacing="0.08em">{m.label}</text>
                    {/* Connection lines */}
                    <line
                        x1={m.x + 30}
                        y1={m.y < 60 ? m.y + 25 : m.y}
                        x2={160}
                        y2={m.y < 60 ? 60 : 120}
                        stroke="var(--color-border-hover)"
                        strokeWidth="0.5"
                        strokeDasharray="3 3"
                    />
                </g>
            ))}

            {/* Version control indicator */}
            <text x="300" y="170" textAnchor="end" fill="var(--color-border-hover)" fontSize="6" fontFamily="var(--font-mono)">14 MODULES</text>
        </svg>
    );
}

// Self-Hosted Stack — container architecture
function ServiceStackVisual() {
    return (
        <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
            <defs>
                <pattern id="dots-stack" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.5" fill="var(--color-border)" />
                </pattern>
            </defs>
            <rect width="320" height="180" fill="url(#dots-stack)" opacity="0.5" />

            {/* Reverse proxy layer */}
            <rect x="10" y="10" width="300" height="25" stroke="var(--color-structural)" strokeWidth="1" fill="none" rx="1" />
            <text x="160" y="26" textAnchor="middle" fill="var(--color-structural)" fontSize="7" fontFamily="var(--font-mono)" letterSpacing="0.1em">NGINX REVERSE PROXY · TLS</text>

            {/* Service containers */}
            {[
                { x: 10, y: 50, w: 95, label: 'IMMICH', sub: 'ML INFERENCE' },
                { x: 113, y: 50, w: 95, label: 'HOME ASST', sub: 'AUTOMATION' },
                { x: 215, y: 50, w: 95, label: 'PI-HOLE', sub: 'DNS FILTER' },
                { x: 10, y: 95, w: 95, label: 'N8N', sub: 'WORKFLOWS' },
                { x: 113, y: 95, w: 95, label: 'HOMEPAGE', sub: 'DASHBOARD' },
                { x: 215, y: 95, w: 95, label: 'NETDATA', sub: 'MONITORING' },
            ].map((s, i) => (
                <g key={i}>
                    <rect x={s.x} y={s.y} width={s.w} height="35" stroke="var(--color-border-hover)" strokeWidth="1" fill="var(--color-surface)" rx="1" />
                    <text x={s.x + s.w / 2} y={s.y + 15} textAnchor="middle" fill="var(--color-muted)" fontSize="6.5" fontFamily="var(--font-mono)" letterSpacing="0.06em">{s.label}</text>
                    <text x={s.x + s.w / 2} y={s.y + 26} textAnchor="middle" fill="var(--color-border-hover)" fontSize="5.5" fontFamily="var(--font-mono)">{s.sub}</text>
                </g>
            ))}

            {/* Bottom layer */}
            <rect x="10" y="145" width="145" height="25" stroke="var(--color-border-hover)" strokeWidth="1" fill="none" rx="1" />
            <text x="82" y="161" textAnchor="middle" fill="var(--color-muted)" fontSize="6.5" fontFamily="var(--font-mono)" letterSpacing="0.06em">TAILSCALE VPN</text>

            <rect x="165" y="145" width="145" height="25" stroke="var(--color-border-hover)" strokeWidth="1" fill="none" rx="1" />
            <text x="237" y="161" textAnchor="middle" fill="var(--color-muted)" fontSize="6.5" fontFamily="var(--font-mono)" letterSpacing="0.06em">SAMBA · mDNS</text>

            <text x="300" y="10" textAnchor="end" fill="var(--color-border-hover)" fontSize="6" fontFamily="var(--font-mono)">8+ SERVICES</text>
        </svg>
    );
}

// Proxmox Cluster — node topology
function ClusterVisual() {
    return (
        <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
            <defs>
                <pattern id="grid-cluster" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--color-border)" strokeWidth="0.3" />
                </pattern>
            </defs>
            <rect width="320" height="180" fill="url(#grid-cluster)" opacity="0.3" />

            {/* Nodes */}
            {[
                { x: 40, y: 40, label: 'NODE 01', active: true },
                { x: 200, y: 40, label: 'NODE 02', active: true },
                { x: 40, y: 110, label: 'NODE 03', active: true },
                { x: 200, y: 110, label: 'NODE 04', active: false },
            ].map((n, i) => (
                <g key={i}>
                    <rect x={n.x} y={n.y} width="80" height="40" stroke={n.active ? 'var(--color-structural)' : 'var(--color-border-hover)'} strokeWidth={n.active ? '1.5' : '1'} fill="var(--color-surface)" rx="1" />
                    <text x={n.x + 40} y={n.y + 18} textAnchor="middle" fill={n.active ? 'var(--color-structural)' : 'var(--color-muted)'} fontSize="7" fontFamily="var(--font-mono)" letterSpacing="0.08em">{n.label}</text>
                    {/* Status dot */}
                    <circle cx={n.x + 40} cy={n.y + 30} r="2.5" fill={n.active ? 'var(--color-structural)' : 'var(--color-accent)'} />
                    <text x={n.x + 48} y={n.y + 33} fill="var(--color-muted)" fontSize="5" fontFamily="var(--font-mono)">{n.active ? 'ONLINE' : 'FAILOVER'}</text>
                </g>
            ))}

            {/* Connection lines between nodes */}
            <line x1="120" y1="60" x2="200" y2="60" stroke="var(--color-border-hover)" strokeWidth="0.8" />
            <line x1="120" y1="130" x2="200" y2="130" stroke="var(--color-border-hover)" strokeWidth="0.8" />
            <line x1="80" y1="80" x2="80" y2="110" stroke="var(--color-border-hover)" strokeWidth="0.8" />
            <line x1="240" y1="80" x2="240" y2="110" stroke="var(--color-border-hover)" strokeWidth="0.8" />
            {/* Diagonal */}
            <line x1="120" y1="60" x2="200" y2="130" stroke="var(--color-border)" strokeWidth="0.4" strokeDasharray="4 4" />
            <line x1="200" y1="60" x2="120" y2="130" stroke="var(--color-border)" strokeWidth="0.4" strokeDasharray="4 4" />

            {/* Chrony sync indicator */}
            <text x="160" y="98" textAnchor="middle" fill="var(--color-border-hover)" fontSize="5.5" fontFamily="var(--font-mono)">CHRONY NTP SYNC</text>

            {/* Label */}
            <text x="300" y="170" textAnchor="end" fill="var(--color-border-hover)" fontSize="6" fontFamily="var(--font-mono)">HA CLUSTER</text>
        </svg>
    );
}

// Network Security — segmentation diagram
function NetworkVisual() {
    return (
        <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
            <defs>
                <pattern id="dots-net" width="12" height="12" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.4" fill="var(--color-border)" />
                </pattern>
            </defs>
            <rect width="320" height="180" fill="url(#dots-net)" opacity="0.4" />

            {/* Firewall */}
            <rect x="120" y="10" width="80" height="30" stroke="var(--color-accent)" strokeWidth="1.5" fill="var(--color-surface)" rx="1" />
            <text x="160" y="29" textAnchor="middle" fill="var(--color-accent)" fontSize="7" fontFamily="var(--font-mono)" letterSpacing="0.08em">PFSENSE</text>

            {/* Zones */}
            {[
                { x: 10, y: 70, w: 90, h: 95, label: 'LAN', color: 'var(--color-structural)' },
                { x: 115, y: 70, w: 90, h: 95, label: 'IoT VLAN', color: 'var(--color-potting-soil)' },
                { x: 220, y: 70, w: 90, h: 95, label: 'DMZ', color: 'var(--color-muted)' },
            ].map((z, i) => (
                <g key={i}>
                    <rect x={z.x} y={z.y} width={z.w} height={z.h} stroke={z.color} strokeWidth="1" fill="none" rx="1" strokeDasharray={i === 2 ? '4 2' : 'none'} />
                    <text x={z.x + 8} y={z.y + 14} fill={z.color} fontSize="6" fontFamily="var(--font-mono)" letterSpacing="0.1em">{z.label}</text>

                    {/* Connection to firewall */}
                    <line x1={z.x + z.w / 2} y1={z.y} x2="160" y2="40" stroke="var(--color-border-hover)" strokeWidth="0.6" />
                </g>
            ))}

            {/* Pi-hole in LAN zone */}
            <rect x="20" y="92" width="70" height="22" stroke="var(--color-border-hover)" strokeWidth="0.8" fill="var(--color-surface)" rx="1" />
            <text x="55" y="106" textAnchor="middle" fill="var(--color-muted)" fontSize="6" fontFamily="var(--font-mono)">PI-HOLE DNS</text>

            {/* Devices in LAN */}
            <rect x="20" y="122" width="70" height="18" stroke="var(--color-border)" strokeWidth="0.5" fill="none" rx="1" />
            <text x="55" y="134" textAnchor="middle" fill="var(--color-border-hover)" fontSize="5.5" fontFamily="var(--font-mono)">CLIENTS</text>

            {/* IoT devices */}
            <rect x="125" y="92" width="70" height="22" stroke="var(--color-border-hover)" strokeWidth="0.8" fill="var(--color-surface)" rx="1" />
            <text x="160" y="106" textAnchor="middle" fill="var(--color-muted)" fontSize="6" fontFamily="var(--font-mono)">HOME ASST</text>

            {/* Stats */}
            <text x="160" y="150" textAnchor="middle" fill="var(--color-border-hover)" fontSize="5.5" fontFamily="var(--font-mono)">~40% QUERY REDUCTION</text>

            <text x="300" y="170" textAnchor="end" fill="var(--color-border-hover)" fontSize="6" fontFamily="var(--font-mono)">SEGMENTATION</text>
        </svg>
    );
}

const visuals = [NixOSVisual, ServiceStackVisual, ClusterVisual, NetworkVisual];

export default function ProjectVisual({ index }: VisualProps) {
    const Visual = visuals[index];
    if (!Visual) return null;
    return (
        <div style={{
            border: 'var(--border-width) solid var(--color-border)',
            background: 'var(--color-surface)',
            padding: 'var(--space-md)',
            marginTop: 'var(--space-lg)',
            overflow: 'hidden',
        }}>
            <Visual />
        </div>
    );
}
