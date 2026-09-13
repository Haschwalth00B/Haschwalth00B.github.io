import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, Terminal, Sparkles, ArrowRight, Film } from 'lucide-react';

interface AfterHoursProps {
    isOpen: boolean;
    onClose: () => void;
}

// Synchronized system log lyrics with timing
const systemLyrics = [
    { time: 0, text: '[00:00] Initializing nix-daemon v2.18...' },
    { time: 3, text: '[00:03] Loading Flakes configuration from /etc/nixos...' },
    { time: 7, text: '[00:07] Evaluating 14 modules... boot, net, sec, mon, docker.' },
    { time: 11, text: '[00:11] Mounting ZFS encrypted pool at /storage...' },
    { time: 15, text: '[00:15] Starting Nginx reverse proxy on 0.0.0.0:443 [TLS 1.3]' },
    { time: 19, text: '[00:19] Tailscale mesh connected: 100.64.0.1 (nix-server)' },
    { time: 23, text: '[00:23] Proxmox HA quorum established across 4 nodes.' },
    { time: 27, text: '[00:27] Chrony NTP clock sync verified (offset < 0.012ms).' },
    { time: 31, text: '[00:31] Pi-Hole DNS blocking 42.8% LAN query noise.' },
    { time: 35, text: '[00:35] System state clean. Zero declarative configuration drift.' },
];

export default function AfterHours({ isOpen, onClose }: AfterHoursProps) {
    // Audio Player State (Web Audio API Synthesizer)
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration] = useState(40); // 40 seconds loop
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(0.5);

    // Terminal State
    const [cmdInput, setCmdInput] = useState('');
    const [cmdLogs, setCmdLogs] = useState<string[]>([
        'Srivatsa OS v2.4 (x86_64-linux)',
        'Type "help" for available commands or "movies" for film picks.',
    ]);

    // Web Audio Refs
    const audioCtxRef = useRef<AudioContext | null>(null);
    const gainNodeRef = useRef<GainNode | null>(null);
    const osc1Ref = useRef<OscillatorNode | null>(null);
    const osc2Ref = useRef<OscillatorNode | null>(null);
    const timerRef = useRef<number | null>(null);

    // Initialize Web Audio Synth
    const startAudio = useCallback(() => {
        try {
            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
            const ctx = new AudioContextClass();
            audioCtxRef.current = ctx;

            const gain = ctx.createGain();
            gain.gain.value = isMuted ? 0 : volume * 0.15; // Soft ambient volume
            gain.connect(ctx.destination);
            gainNodeRef.current = gain;

            // Warm dual-oscillator ambient chord (A minor 432Hz ambient drone)
            const osc1 = ctx.createOscillator();
            const osc2 = ctx.createOscillator();
            osc1.type = 'sine';
            osc2.type = 'triangle';
            osc1.frequency.setValueAtTime(216, ctx.currentTime); // A3
            osc2.frequency.setValueAtTime(324, ctx.currentTime); // E4

            osc1.connect(gain);
            osc2.connect(gain);
            osc1.start();
            osc2.start();

            osc1Ref.current = osc1;
            osc2Ref.current = osc2;
        } catch (e) {
            console.error('Web Audio API not supported', e);
        }
    }, [isMuted, volume]);

    const stopAudio = useCallback(() => {
        if (osc1Ref.current) {
            osc1Ref.current.stop();
            osc1Ref.current.disconnect();
            osc1Ref.current = null;
        }
        if (osc2Ref.current) {
            osc2Ref.current.stop();
            osc2Ref.current.disconnect();
            osc2Ref.current = null;
        }
        if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
            audioCtxRef.current.close();
            audioCtxRef.current = null;
        }
    }, []);

    // Toggle Play/Pause
    const togglePlay = () => {
        if (isPlaying) {
            stopAudio();
            setIsPlaying(false);
            if (timerRef.current) clearInterval(timerRef.current);
        } else {
            startAudio();
            setIsPlaying(true);
        }
    };

    // Timer playback ticker
    useEffect(() => {
        if (isPlaying) {
            timerRef.current = window.setInterval(() => {
                setCurrentTime(prev => (prev >= duration ? 0 : prev + 1));
            }, 1000);
        } else {
            if (timerRef.current) clearInterval(timerRef.current);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isPlaying, duration]);

    // Handle Volume change
    useEffect(() => {
        if (gainNodeRef.current && audioCtxRef.current) {
            gainNodeRef.current.gain.setValueAtTime(
                isMuted ? 0 : volume * 0.15,
                audioCtxRef.current.currentTime
            );
        }
    }, [volume, isMuted]);

    // Cleanup on unmount or modal close
    useEffect(() => {
        if (!isOpen) {
            stopAudio();
            setIsPlaying(false);
            setCurrentTime(0);
        }
    }, [isOpen, stopAudio]);

    // Handle terminal input
    const handleCommandSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = cmdInput.trim().toLowerCase();
        setCmdInput('');
        if (!cmd) return;

        let output = '';
        if (cmd === 'help') {
            output = 'Available commands: help, nix, status, movies, quote, uptime, clear';
        } else if (cmd === 'nix') {
            output = 'nix-shell -p neovim git tailscale htop --run "echo system intact"';
        } else if (cmd === 'status') {
            output = 'NixOS 24.05 · 14 Modules · 8 Docker Containers · Chrony NTP Synced';
        } else if (cmd === 'movies') {
            output = 'Cinema Picks: Blade Runner 2049, Drive, Stalker, Nighthawks-era noir';
        } else if (cmd === 'quote') {
            output = '"Declarative configuration eliminates drift — breaking changes surface at build time, not in production."';
        } else if (cmd === 'uptime') {
            output = 'Host: nix-server.local | Uptime: 42 days, 18 hours | Memory: 4.2GB / 16GB';
        } else if (cmd === 'clear') {
            setCmdLogs([]);
            return;
        } else {
            output = `zsh: command not found: ${cmd}. Type "help" for options.`;
        }

        setCmdLogs(prev => [...prev, `$ ${cmd}`, output]);
    };

    // Find active lyric index based on audio time
    const activeLyricIdx = systemLyrics.reduce((acc, curr, idx) => {
        return currentTime >= curr.time ? idx : acc;
    }, 0);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="afterhours-overlay"
            >
                <div className="layout-main afterhours-container">
                    {/* Top Mode Selector Bar */}
                    <div className="afterhours-header">
                        <div className="afterhours-mode-toggle">
                            <button
                                onClick={onClose}
                                className="afterhours-mode-btn"
                            >
                                [ WORK / SYSTEMS ]
                            </button>
                            <button
                                className="afterhours-mode-btn afterhours-mode-btn--active"
                            >
                                [ AFTER HOURS ✦ ]
                            </button>
                        </div>

                        <button onClick={onClose} className="afterhours-close-btn" title="Exit After Hours">
                            <X size={18} />
                        </button>
                    </div>

                    <div className="afterhours-grid">
                        {/* Left Column: Ambient System Soundscape & Synchronized Lyrics */}
                        <div className="afterhours-col">
                            <div className="afterhours-card">
                                <div className="afterhours-card__header">
                                    <Sparkles size={14} className="afterhours-icon" />
                                    <span>SYSTEM AMBIENT SYNTHESIZER</span>
                                </div>
                                <p className="small-text" style={{ marginBottom: 'var(--space-md)' }}>
                                    Web Audio API generative 432Hz ambient chord synth simulating homelab rack hum.
                                </p>

                                {/* Audio Controls */}
                                <div className="audio-player">
                                    <button onClick={togglePlay} className="audio-player__play-btn">
                                        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                                    </button>

                                    <div className="audio-player__track">
                                        <div className="audio-player__meta">
                                            <span className="meta">NixOS Homelab Drone</span>
                                            <span className="meta">00:{String(currentTime).padStart(2, '0')} / 00:{duration}</span>
                                        </div>
                                        <div className="audio-player__bar">
                                            <div
                                                className="audio-player__progress"
                                                style={{ width: `${(currentTime / duration) * 100}%` }}
                                            />
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setIsMuted(!isMuted)}
                                        className="audio-player__mute-btn"
                                        title={isMuted ? 'Unmute' : 'Mute'}
                                    >
                                        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                                    </button>

                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.05"
                                        value={volume}
                                        onChange={e => setVolume(parseFloat(e.target.value))}
                                        style={{ width: '60px', accentColor: 'var(--color-accent)' }}
                                        title="Volume"
                                    />
                                </div>

                                {/* Synchronized Log Lyrics */}
                                <div className="lyrics-box">
                                    <span className="meta" style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-structural)' }}>
                                        SYNCHRONIZED SYSTEM LOGS
                                    </span>
                                    <div className="lyrics-list">
                                        {systemLyrics.map((item, idx) => {
                                            const isActive = idx === activeLyricIdx;
                                            const isPast = idx < activeLyricIdx;
                                            return (
                                                <p
                                                    key={item.time}
                                                    className={`lyric-line ${isActive ? 'lyric-line--active' : isPast ? 'lyric-line--past' : ''}`}
                                                >
                                                    {item.text}
                                                </p>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Interactive Terminal Prompt */}
                        <div className="afterhours-col">
                            <div className="afterhours-card">
                                <div className="afterhours-card__header">
                                    <Terminal size={14} className="afterhours-icon" />
                                    <span>INTERACTIVE NIX TERMINAL</span>
                                </div>

                                <div className="terminal-box">
                                    <div className="terminal-output">
                                        {cmdLogs.map((log, i) => (
                                            <div key={i} className="terminal-line">
                                                {log}
                                            </div>
                                        ))}
                                    </div>

                                    <form onSubmit={handleCommandSubmit} className="terminal-form">
                                        <span className="terminal-prompt">srivatsa@nixos:~$</span>
                                        <input
                                            type="text"
                                            value={cmdInput}
                                            onChange={e => setCmdInput(e.target.value)}
                                            placeholder="type help..."
                                            className="terminal-input"
                                        />
                                    </form>
                                </div>

                                {/* Quick Links to Personal Profiles */}
                                <div style={{ marginTop: 'var(--space-md)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border)' }}>
                                    <span className="meta" style={{ display: 'block', marginBottom: 'var(--space-xs)' }}>PERSONAL ARCHIVES</span>
                                    <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                                        <a
                                            href="https://letterboxd.com/Srivatsa2580/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="case-study__link"
                                        >
                                            <Film size={12} />
                                            Letterboxd Cinema
                                            <ArrowRight size={10} />
                                        </a>
                                        <a
                                            href="https://github.com/Haschwalth00B/nixos-configuration-files"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="case-study__link"
                                        >
                                            Dotfiles
                                            <ArrowRight size={10} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
