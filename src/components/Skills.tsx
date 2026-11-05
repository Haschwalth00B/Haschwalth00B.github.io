import { siteData } from '../data/siteData';
import SectionHeader from './SectionHeader';
import { Rise, Surface } from './motion';

export default function Skills() {
    return (
        <section id="skills" className="section skills">
            <SectionHeader title="Skills" />
            <Surface className="surface surface--well skills__well">
                <dl className="skills__table">
                    {siteData.skillGroups.map((group, i) => (
                        <Rise key={group.category} className="skills__row" y={16} delay={i * 0.05}>
                            <dt>{group.category}</dt>
                            <dd>{group.items.join(', ')}</dd>
                        </Rise>
                    ))}
                </dl>
            </Surface>
        </section>
    );
}
