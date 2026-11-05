import { Fragment } from 'react';
import { siteData } from '../data/siteData';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__columns">
                <div>
                    <p className="footer__first">{siteData.fullName}</p>
                    <p>{siteData.location}</p>
                    <p>{siteData.timezone}</p>
                </div>
                <nav aria-label="Footer">
                    <p className="footer__first">On this page</p>
                    {siteData.nav.map(item => (
                        <p key={item.href}><a href={item.href}>{item.label}</a></p>
                    ))}
                </nav>
                <div>
                    <p className="footer__first">Elsewhere</p>
                    {siteData.socials.map(s => (
                        <p key={s.name}>
                            <a
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    if (typeof gtag === 'function') {
                                        gtag('event', 'social_click', {
                                            event_category: 'engagement',
                                            platform: s.name,
                                            location: 'footer',
                                        });
                                    }
                                }}
                            >
                                {s.name}
                            </a>
                        </p>
                    ))}
                </div>
                <div>
                    <p className="footer__first">Pictures</p>
                    <p className="footer__credits">
                        Recoloured in cobalt:{' '}
                        {siteData.credits.map((c, i) => (
                            <Fragment key={c.url}>
                                <a href={c.url} target="_blank" rel="noopener noreferrer">{c.title}</a>
                                {c.by && ` by ${c.by}`},{' '}
                                <a href={c.licenceUrl} target="_blank" rel="noopener noreferrer">{c.licence}</a>
                                {i < siteData.credits.length - 1 ? '; ' : ', via Wikimedia Commons.'}
                            </Fragment>
                        ))}
                    </p>
                </div>
            </div>

            <p className="footer__wordmark" aria-hidden="true">Srivatsa</p>
            <div className="footer__legal">
                <p>© {year} {siteData.fullName}</p>
                <p>Designed by <a href={siteData.designedByUrl} target="_blank" rel="noopener noreferrer">{siteData.designedBy}</a></p>
            </div>
        </footer>
    );
}
