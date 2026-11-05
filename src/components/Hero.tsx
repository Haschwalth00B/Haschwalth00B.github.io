import { useState } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { siteData } from '../data/siteData';
import SocialIcon from './SocialIcon';

export default function Hero() {
    const [downloaded, setDownloaded] = useState(false);

    const handleDownload = () => {
        setDownloaded(true);
        setTimeout(() => setDownloaded(false), 2000);
        if (typeof gtag === 'function') {
            gtag('event', 'resume_download', { event_category: 'engagement' });
        }
    };

    return (
        <section className="hero" id="home">
            {/* The name is cut into the plate and filled with enamel, like a faceplate. */}
            <div className="hero__plate">
                <h1 className="hero__name" aria-label={siteData.fullName}>
                    <span className="hero__mask" aria-hidden="true">
                        <span className="hero__line">
                            Srivatsa
                        </span>
                    </span>
                    <span className="hero__mask" aria-hidden="true">
                        <span className="hero__line hero__line--second">
                            S Poojari
                        </span>
                    </span>
                </h1>

                    <div className="hero__socials">
                        {siteData.socials.map(s => (
                            <a
                                key={s.name}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="key key--round"
                                aria-label={s.name}
                                title={s.name}
                                onClick={() => {
                                    if (typeof gtag === 'function') {
                                        gtag('event', 'social_click', {
                                            event_category: 'engagement',
                                            platform: s.name,
                                            location: 'hero',
                                        });
                                    }
                                }}
                            >
                                <SocialIcon icon={s.icon} />
                            </a>
                        ))}
                    </div>
            </div>

            <div className="hero__foot">
                <div className="hero__words">
                    <p className="lead">{siteData.hero.statement}</p>
                    <p className="hero__now">{siteData.hero.now}</p>
                </div>

                <div className="hero__actions">
                    {siteData.hero.hasResume && (
                        <a
                            href={siteData.hero.resumeUrl}
                            download
                            onClick={handleDownload}
                            className="key key--solid"
                        >
                            <Download size={18} aria-hidden="true" />
                            <span key={String(downloaded)} className="swap">{downloaded ? 'Downloaded' : 'Download résumé'}</span>
                        </a>
                    )}
                    <a href="#work" className="key">
                        <ArrowDown size={18} aria-hidden="true" />
                        See the work
                    </a>
                </div>
            </div>
        </section>
    );
}
