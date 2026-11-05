import { ArrowDown, Github, ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import SectionHeader from './SectionHeader';
import { Rise, WellImage } from './motion';

const trackSource = (project: string) => {
    if (typeof gtag === 'function') {
        gtag('event', 'github_link_click', { event_category: 'engagement', project_name: project });
    }
};

export default function Projects() {
    return (
        <section id="work" className="section work">
            <SectionHeader title="Selected work">
                <p className="lead">Four systems I built, and what each one taught me.</p>
            </SectionHeader>

            <div className="work__blocks">
                {siteData.projects.map((project, i) => (
                    <article key={project.id} className={`block block--${i % 2 === 0 ? 'left' : 'right'} block--${project.id}`}>
                        <figure className="block__visual">
                            <div className="block__stage">
                                <WellImage
                                    src={project.visual.src}
                                    alt={project.visual.alt}
                                    width={1600}
                                    height={1200}
                                    className="block__picture"
                                />
                                {project.code && (
                                    <div className="well block__code" data-ui>
                                        <p className="block__filename">modules/maintenance.nix</p>
                                        <pre><code>{project.code}</code></pre>
                                    </div>
                                )}
                            </div>
                            <figcaption className="caption">{project.visual.caption}</figcaption>
                        </figure>

                        <div className="block__text">
                            <Rise>
                                <h3 className="head">{project.title}</h3>
                                <p className="small-line">{project.kind}. {project.period}. {project.status}.</p>
                            </Rise>
                            <Rise delay={0.08} className="figure">
                                <span className="figure__value">{project.figure.value}</span>
                                <span className="figure__label">{project.figure.label}</span>
                            </Rise>
                            <Rise delay={0.14}>
                                <p>{project.description}</p>
                                <p className="block__lesson">{project.lesson}</p>
                            </Rise>
                            <Rise delay={0.2}>
                                <ul className="points">
                                    {project.implementationDetails.map(item => <li key={item}>{item}</li>)}
                                </ul>
                            </Rise>
                            <Rise delay={0.26} className="block__foot">
                                <ul className="tags">
                                    {project.tags.map(tag => <li key={tag}>{tag}</li>)}
                                </ul>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="key key--small"
                                        onClick={() => trackSource(project.title)}
                                    >
                                        <Github size={16} aria-hidden="true" />
                                        Source
                                        <ArrowUpRight size={14} aria-hidden="true" />
                                    </a>
                                )}
                                {project.note && (
                                    <a href="#notes" className="key key--small">
                                        <ArrowDown size={16} aria-hidden="true" />
                                        Read the build note
                                    </a>
                                )}
                            </Rise>
                        </div>
                    </article>
                ))}
            </div>

            <div className="smaller">
                <figure className="smaller__clip">
                    <div className="well well--picture">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            poster="/images/plates/disk-poster.jpg"
                            width={854}
                            height={480}
                            aria-hidden="true"
                        >
                            <source src="/video/disk.webm" type="video/webm" />
                            <source src="/video/disk.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <figcaption className="caption">A hard disk&rsquo;s actuator at work. The backup and disk-alert scripts are for the day it stops.</figcaption>
                </figure>

                <div className="smaller__list">
                    <Rise><h3 className="lead-head">Smaller repositories and dotfiles</h3></Rise>
                    {siteData.otherProjects.map((item, i) => (
                        <Rise key={item.title} delay={0.08 * (i + 1)} className="smaller__row">
                            <div>
                                <h4 className="smaller__title">{item.title}</h4>
                                <p>{item.desc}</p>
                                <ul className="tags">
                                    {item.tags.map(tag => <li key={tag}>{tag}</li>)}
                                </ul>
                            </div>
                            {item.github && (
                                <a
                                    href={item.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="key key--round"
                                    aria-label={`Source for ${item.title}`}
                                    onClick={() => trackSource(item.title)}
                                >
                                    <Github size={18} aria-hidden="true" />
                                </a>
                            )}
                        </Rise>
                    ))}
                </div>
            </div>
        </section>
    );
}
