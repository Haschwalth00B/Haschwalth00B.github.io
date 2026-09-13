import { siteData } from '../data/siteData';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="layout-main">
                <div className="footer__inner">
                    <span className="footer__copy">
                        © {year} {siteData.fullName} · Udupi, Karnataka, India
                    </span>
                    <div className="footer__links">
                        {siteData.socials.map(s => (
                            <a
                                key={s.name}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer__link"
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
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
