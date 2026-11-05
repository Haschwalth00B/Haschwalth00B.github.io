import { ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import SectionHeader from './SectionHeader';
import { Rise, Surface, WellImage } from './motion';

export default function About() {
    return (
        <section id="about" className="section about">
            <SectionHeader title="About" />

            <Rise className="about__story">
                <p>
                    I&rsquo;m Srivatsa, a BCA student at <mark>Dr. NSAM First Grade College</mark>, Nitte University,
                    graduating in <mark>2027</mark> with a 7.9 GPA. I live in <mark>Udupi</mark>, on the Karnataka coast.
                    I came to infrastructure by curiosity: I like figuring out how things work underneath, so I build
                    the real thing and then break it. At home, a headless <mark>NixOS server</mark> runs 14 purpose-built
                    modules and more than eight containerized services. On the bench, Containerlab and FRRouting
                    carry <mark>BGP, OSPF, MPLS and IPsec</mark> across a simulated three-region fabric. I&rsquo;m preparing
                    for the <mark>AWS Certified CloudOps Engineer – Associate</mark> exam, and I log the films I watch
                    on <a href={siteData.letterboxd} target="_blank" rel="noopener noreferrer">Letterboxd</a>.{' '}
                    <a href="#contact" className="about__close">If you have a system worth looking under, write to me.</a>
                </p>
            </Rise>

            <div className="about__lower">
                <Surface className="surface about__frame">
                    <figure className="about__figure">
                        <WellImage
                            src="/images/plates/malpe.jpg"
                            alt="Malpe Beach near Udupi: wet sand, low surf and a bank of cloud over the Arabian Sea."
                            width={1600}
                            height={1200}
                        />
                        <figcaption className="caption">Malpe Beach, Udupi.</figcaption>
                    </figure>
                </Surface>

                <div className="about__education">
                    <Rise><h3 className="lead-head">Education</h3></Rise>
                    <ol className="education" reversed>
                        {siteData.education.map((edu, i) => (
                            <li key={edu.institution}>
                                <Rise delay={i * 0.07} className="education__row">
                                    <span className="education__period">{edu.period}</span>
                                    <div>
                                        <h4 className="education__degree">{edu.degree}</h4>
                                        <p>
                                            <a href={edu.url} target="_blank" rel="noopener noreferrer" className="education__link">
                                                {edu.institution}
                                                <ArrowUpRight size={14} aria-hidden="true" />
                                            </a>
                                            , {edu.location}. GPA {edu.gpa}.
                                        </p>
                                        {edu.coursework && <p className="small-line">{edu.coursework}</p>}
                                    </div>
                                </Rise>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
