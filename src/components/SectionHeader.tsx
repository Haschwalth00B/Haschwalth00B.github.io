import { Rise } from './motion';

interface Props {
    title: string;
    children?: React.ReactNode;
}

/** A section's own heading, with an optional sentence beside it. */
export default function SectionHeader({ title, children }: Props) {
    return (
        <header className="section-head">
            <Rise>
                <h2 className="head">{title}</h2>
            </Rise>
            {children && (
                <Rise delay={0.08} className="section-head__text">
                    {children}
                </Rise>
            )}
        </header>
    );
}
