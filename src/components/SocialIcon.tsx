import { Github, Linkedin, Mail, Film, Instagram } from 'lucide-react';

const icons: Record<string, React.ElementType> = {
    github: Github,
    linkedin: Linkedin,
    mail: Mail,
    film: Film,
    instagram: Instagram,
};

export default function SocialIcon({ icon, size = 20 }: { icon: string; size?: number }) {
    const Icon = icons[icon] ?? Mail;
    return <Icon size={size} aria-hidden="true" />;
}
