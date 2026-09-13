import { useState } from 'react';
import { motion } from 'framer-motion';

interface TopologyNode {
    id: string;
    name: string;
    category: string;
    port: string;
    status: string;
    desc: string;
    connections: string[];
}

const nodes: TopologyNode[] = [
    {
        id: 'nixos',
        name: 'NixOS Flakes Core',
        category: 'Declarative Engine',
        port: 'SYSTEMD',
        status: 'IMMUTABLE',
        desc: 'Single source of truth. 14 Nix modules generating exact system state at build time.',
        connections: ['nginx', 'tailscale', 'proxmox'],
    },
    {
        id: 'nginx',
        name: 'Nginx Reverse Proxy',
        category: 'Gateway',
        port: 'HTTPS :443',
        status: 'ACTIVE TLS 1.3',
        desc: 'Automated Let\'s Encrypt certificates proxying incoming traffic to local Docker containers.',
        connections: ['nixos', 'pfsense'],
    },
    {
        id: 'tailscale',
        name: 'Tailscale Mesh VPN',
        category: 'Overlay Network',
        port: 'UDP :51820',
        status: 'ENCRYPTED',
        desc: 'WireGuard-based mesh VPN providing zero-trust remote access without public open ports.',
        connections: ['nixos', 'proxmox'],
    },
    {
        id: 'proxmox',
        name: 'Proxmox HA Cluster',
        category: 'Virtualisation',
        port: 'QEMU / KVM',
        status: 'QUORUM 4/4',
        desc: 'Multi-node high-availability virtualisation cluster with Chrony NTP time synchronization.',
        connections: ['nixos', 'tailscale'],
    },
    {
        id: 'pfsense',
        name: 'pfSense & Pi-Hole',
        category: 'DNS & Security',
        port: 'DNS :53',
        status: 'RECURSIVE',
        desc: 'Recursive DNS filtering reducing LAN unwanted queries by ~40% with VLAN isolation.',
        connections: ['nginx'],
    },
];

export default function SystemMatrix() {
    const [selectedId, setSelectedId] = useState<string>('nixos');

    const activeNode = nodes.find(n => n.id === selectedId) || nodes[0];

    return (
        <div className="topology-inspector">
            <div className="topology-inspector__header">
                <span className="meta" style={{ color: 'var(--color-structural)' }}>INTERACTIVE INFRASTRUCTURE TOPOLOGY</span>
                <span className="meta">TAP NODE TO INSPECT</span>
            </div>

            <div className="topology-inspector__grid">
                {/* Node Buttons */}
                <div className="topology-nodes">
                    {nodes.map(node => {
                        const isSelected = node.id === selectedId;
                        const isConnected = activeNode.connections.includes(node.id);

                        return (
                            <button
                                key={node.id}
                                onClick={() => setSelectedId(node.id)}
                                onMouseEnter={() => setSelectedId(node.id)}
                                className={`topology-node-btn ${isSelected ? 'topology-node-btn--active' : isConnected ? 'topology-node-btn--connected' : ''}`}
                            >
                                <span className="topology-node-btn__dot" />
                                <span className="topology-node-btn__name">{node.name}</span>
                                <span className="topology-node-btn__port">{node.port}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Live Inspector Panel */}
                <motion.div
                    key={activeNode.id}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="topology-detail"
                >
                    <div className="topology-detail__top">
                        <span className="topology-detail__cat">{activeNode.category}</span>
                        <span className="topology-detail__status">{activeNode.status}</span>
                    </div>

                    <h4 className="topology-detail__title">{activeNode.name}</h4>
                    <p className="topology-detail__desc">{activeNode.desc}</p>

                    <div className="topology-detail__footer">
                        <span className="meta">LINKED TO:</span>
                        <span className="topology-detail__links">
                            {activeNode.connections.map(c => nodes.find(n => n.id === c)?.name).join(' · ')}
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
