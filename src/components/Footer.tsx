import { Github, Linkedin, Mail, Instagram, Film } from 'lucide-react';
import { siteData } from '../data/siteData';

const iconMap: Record<string, React.ElementType> = { github: Github, linkedin: Linkedin, mail: Mail, instagram: Instagram, film: Film };

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border py-8">
            <div className="max-w-2xl mx-auto px-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-muted text-sm">
                        © {year} {siteData.fullName}
                    </p>
                    <div className="flex items-center gap-4">
                        {siteData.socials.map(s => {
                            const Icon = iconMap[s.icon] || Mail;
                            return (
                                <a
                                    key={s.name}
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted hover:text-foreground transition-colors"
                                    title={s.name}
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
