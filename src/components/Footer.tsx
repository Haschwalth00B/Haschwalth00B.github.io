import { Github, Linkedin, Mail, Instagram, Film, Heart } from 'lucide-react';
import { siteData } from '../data/siteData';

const iconMap: Record<string, React.ElementType> = { github: Github, linkedin: Linkedin, mail: Mail, instagram: Instagram, film: Film };

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Social icons */}
                    <div className="flex items-center gap-4">
                        {siteData.socials.map(s => {
                            const Icon = iconMap[s.icon] || Mail;
                            return (
                                <a
                                    key={s.name}
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted hover:text-cyan transition-colors"
                                    title={s.name}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </div>

                    {/* Copyright */}
                    <p className="text-muted text-sm flex items-center gap-1.5">
                        © {year} {siteData.fullName}. Built with <Heart className="w-3.5 h-3.5 text-coral" /> using React & Vite
                    </p>
                </div>
            </div>
        </footer>
    );
}
