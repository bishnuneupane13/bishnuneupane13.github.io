import './Dreams.css';

import bmw1 from '../medias/bmw1.jpg';
import bmw2 from '../medias/bmw2.jpg';
import bmw3 from '../medias/bmw3.jpg';
import bmw4 from '../medias/bmw4.jpg';
import bmw5 from '../medias/bmw5.jpg';
import bmw6 from '../medias/bmw6.jpg';
import bmwMain from '../medias/bmw.jpg';

function Dreams() {


    const progress = {
        cpp: false,
        python: true,
        golang: false,
        bugHunting: false,
        pentesting: false,
        certs: false,
        ultimate: false
    };


    const totalItems = Object.keys(progress).length;
    const completedItems = Object.values(progress).filter(Boolean).length;
    const progressPercentage = Math.round((completedItems / totalItems) * 100);

    return (
        <div className="dreams-page">
            <section className="dreams-section" id="dreams">
                <div className="dreams-container">
                    {/* Header */}
                    <header className="dreams-header">
                        <h1>
                            <i className="fa-solid fa-star"></i> My Dreams & Goals
                        </h1>
                        <p>
                            A clear roadmap of where I'm headed — from mastering programming languages
                            to becoming a world-class penetration tester.
                        </p>
                    </header>

                    {/* Interactive Progress Tracker */}
                    <div className="progress-tracker">
                        <div className="progress-header">
                            <h3>
                                <i className="fa-solid fa-list-check"></i> My Progress Tracker
                            </h3>
                            <div className="progress-percentage">
                                <span className="percentage-value">{progressPercentage}%</span>
                                <span className="percentage-label">Complete</span>
                            </div>
                        </div>

                        <div className="progress-bar-container">
                            <div className="progress-bar-bg">
                                <div
                                    className="progress-bar-fill"
                                    style={{ width: `${progressPercentage}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="progress-checklist">
                            {/* Programming Skills */}
                            <div className="progress-category">
                                <h4>
                                    <i className="fa-solid fa-code"></i> Programming Foundations
                                </h4>
                                <div className="progress-items">
                                    <div className={`progress-item ${progress.cpp ? 'completed' : ''}`}>
                                        <div className="checkbox">
                                            {progress.cpp && <i className="fa-solid fa-check"></i>}
                                        </div>
                                        <span className="item-label">C++ Mastery</span>
                                    </div>
                                    <div className={`progress-item ${progress.python ? 'completed' : ''}`}>
                                        <div className="checkbox">
                                            {progress.python && <i className="fa-solid fa-check"></i>}
                                        </div>
                                        <span className="item-label">Python Mastery</span>
                                    </div>
                                    <div className={`progress-item ${progress.golang ? 'completed' : ''}`}>
                                        <div className="checkbox">
                                            {progress.golang && <i className="fa-solid fa-check"></i>}
                                        </div>
                                        <span className="item-label">Go (Golang) Mastery</span>
                                    </div>
                                </div>
                            </div>

                            {/* Security Skills */}
                            <div className="progress-category">
                                <h4>
                                    <i className="fa-solid fa-shield-halved"></i> Security & Goals
                                </h4>
                                <div className="progress-items">
                                    <div className={`progress-item ${progress.bugHunting ? 'completed' : ''}`}>
                                        <div className="checkbox">
                                            {progress.bugHunting && <i className="fa-solid fa-check"></i>}
                                        </div>
                                        <span className="item-label">Bug Hunting & Web Security</span>
                                    </div>
                                    <div className={`progress-item ${progress.pentesting ? 'completed' : ''}`}>
                                        <div className="checkbox">
                                            {progress.pentesting && <i className="fa-solid fa-check"></i>}
                                        </div>
                                        <span className="item-label">Professional Penetration Testing</span>
                                    </div>
                                    <div className={`progress-item ${progress.certs ? 'completed' : ''}`}>
                                        <div className="checkbox">
                                            {progress.certs && <i className="fa-solid fa-check"></i>}
                                        </div>
                                        <span className="item-label">OSCP / CEH Certifications</span>
                                    </div>
                                    <div className={`progress-item ${progress.ultimate ? 'completed' : ''}`}>
                                        <div className="checkbox">
                                            {progress.ultimate && <i className="fa-solid fa-check"></i>}
                                        </div>
                                        <span className="item-label">World-Class Pentester</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Learning Roadmap */}
                    <div className="roadmap-section">
                        <h2 className="roadmap-title">
                            <i className="fa-solid fa-route"></i> My Learning Roadmap
                        </h2>
                        <p className="roadmap-description">
                            This is my structured path to achieving my dream of becoming a top-ranking
                            penetration tester and red team specialist.
                        </p>

                        <div className="roadmap-timeline">
                            {/* Phase 1: Programming Foundations */}
                            <div className="timeline-item">
                                <div className="timeline-marker">
                                    <span className="marker-number">1</span>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-badge phase-1">Phase 1</div>
                                    <h3>
                                        <i className="fa-solid fa-code"></i> Programming Foundations
                                    </h3>
                                    <p className="timeline-desc">
                                        Master core programming languages to build a strong technical foundation
                                        for cybersecurity work.
                                    </p>
                                    <div className="skills-grid">
                                        <div className="skill-item cpp">
                                            <i className="fa-solid fa-c"></i>
                                            <div className="skill-info">
                                                <strong>C++</strong>
                                                <span>Low-level programming, memory management, system understanding</span>
                                            </div>
                                        </div>
                                        <div className="skill-item python">
                                            <i className="fa-brands fa-python"></i>
                                            <div className="skill-info">
                                                <strong>Python</strong>
                                                <span>Scripting, automation, security tools, exploit development</span>
                                            </div>
                                        </div>
                                        <div className="skill-item golang">
                                            <i className="fa-solid fa-g"></i>
                                            <div className="skill-info">
                                                <strong>Go (Golang)</strong>
                                                <span>Modern tooling, concurrent programs, offensive security tools</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Phase 2: Bug Hunting (Simultaneous) */}
                            <div className="timeline-item">
                                <div className="timeline-marker">
                                    <span className="marker-number">2</span>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-badge phase-2">Phase 2 • Simultaneous</div>
                                    <h3>
                                        <i className="fa-solid fa-bug"></i> Bug Hunting & Web Security
                                    </h3>
                                    <p className="timeline-desc">
                                        While learning programming, I'll practice bug hunting to gain real-world
                                        experience in finding and exploiting vulnerabilities.
                                    </p>
                                    <div className="focus-areas">
                                        <div className="focus-item">
                                            <i className="fa-solid fa-globe"></i>
                                            <span>Web Application Security</span>
                                        </div>
                                        <div className="focus-item">
                                            <i className="fa-solid fa-database"></i>
                                            <span>SQL Injection & XSS</span>
                                        </div>
                                        <div className="focus-item">
                                            <i className="fa-solid fa-network-wired"></i>
                                            <span>API Security Testing</span>
                                        </div>
                                        <div className="focus-item">
                                            <i className="fa-solid fa-shield-halved"></i>
                                            <span>OWASP Top 10</span>
                                        </div>
                                        <div className="focus-item">
                                            <i className="fa-solid fa-award"></i>
                                            <span>Bug Bounty Programs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Phase 3: Advanced Security */}
                            <div className="timeline-item">
                                <div className="timeline-marker">
                                    <span className="marker-number">3</span>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-badge phase-3">Phase 3</div>
                                    <h3>
                                        <i className="fa-solid fa-user-secret"></i> Professional Penetration Testing
                                    </h3>
                                    <p className="timeline-desc">
                                        Transition into professional pentesting and red team operations with
                                        advanced techniques and certifications.
                                    </p>
                                    <div className="cert-grid">
                                        <div className="cert-item">
                                            <i className="fa-solid fa-certificate"></i>
                                            <span>OSCP / CEH</span>
                                        </div>
                                        <div className="cert-item">
                                            <i className="fa-solid fa-terminal"></i>
                                            <span>Advanced Exploitation</span>
                                        </div>
                                        <div className="cert-item">
                                            <i className="fa-solid fa-server"></i>
                                            <span>Network Pentesting</span>
                                        </div>
                                        <div className="cert-item">
                                            <i className="fa-brands fa-linux"></i>
                                            <span>Linux Privilege Escalation</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Ultimate Goal */}
                            <div className="timeline-item ultimate-goal">
                                <div className="timeline-marker ultimate">
                                    <i className="fa-solid fa-trophy"></i>
                                </div>
                                <div className="timeline-content goal-content">
                                    <div className="timeline-badge ultimate-badge">Ultimate Goal</div>
                                    <h3>
                                        <i className="fa-solid fa-crown"></i> World-Class Pentester & Red Team Expert
                                    </h3>
                                    <p className="goal-description">
                                        My ultimate aspiration is to become a <strong>top-ranking penetration tester</strong> and
                                        <strong> red team specialist</strong> recognized globally — contributing to major security
                                        research, participating in elite CTF competitions, and helping organizations secure their
                                        infrastructure against sophisticated threats.
                                    </p>
                                    <div className="achievement-goals">
                                        <div className="achievement">
                                            <i className="fa-solid fa-ranking-star"></i>
                                            <span>Top 1% Bug Bounty Hunter</span>
                                        </div>
                                        <div className="achievement">
                                            <i className="fa-solid fa-flag-checkered"></i>
                                            <span>Elite CTF Competitor</span>
                                        </div>
                                        <div className="achievement">
                                            <i className="fa-solid fa-book-open"></i>
                                            <span>Security Researcher & Blogger</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BMW Dream Section */}
                    <div className="bmw-dream-section">
                        <div className="bmw-section-header">
                            <h2>
                                <i className="fa-solid fa-car"></i> Dream Reward Collection
                            </h2>
                            <p>
                                When I achieve my goals and become a successful pentester, I dream of
                                owning a <strong>BMW</strong> — a symbol of the success, dedication,
                                and hard work it took to get there.
                            </p>
                        </div>

                        {/* Auto-scrolling BMW Gallery */}
                        <div className="bmw-gallery-container">
                            <div className="bmw-scroll-wrapper">
                                <div className="bmw-scroll-content">
                                    {/* First set of images */}

                                    <div className="bmw-gallery-item">
                                        <img src={bmw1} alt="BMW 1" />
                                    </div>
                                    <div className="bmw-gallery-item">
                                        <img src={bmw2} alt="BMW 2" />
                                    </div>
                                    <div className="bmw-gallery-item">
                                        <img src={bmw3} alt="BMW 3" />
                                    </div>
                                    <div className="bmw-gallery-item">
                                        <img src={bmw4} alt="BMW 4" />
                                    </div>
                                    <div className="bmw-gallery-item">
                                        <img src={bmw5} alt="BMW 5" />
                                    </div>
                                    <div className="bmw-gallery-item">
                                        <img src={bmw6} alt="BMW 6" />
                                    </div>
                                    <div className="bmw-gallery-item">
                                        <img src={bmwMain} alt="BMW Main" />
                                    </div>

                                    {/* Duplicate set for seamless infinite scroll */}

                                    <div className="bmw-gallery-item">
                                        <img src={bmw1} alt="BMW 1" />
                                    </div>
                                    <div className="bmw-gallery-item">
                                        <img src={bmw2} alt="BMW 2" />
                                    </div>
                                    <div className="bmw-gallery-item">
                                        <img src={bmw3} alt="BMW 3" />
                                    </div>
                                    <div className="bmw-gallery-item">
                                        <img src={bmw4} alt="BMW 4" />
                                    </div>
                                    <div className="bmw-gallery-item">
                                        <img src={bmw5} alt="BMW 5" />
                                    </div>
                                    <div className="bmw-gallery-item">
                                        <img src={bmw6} alt="BMW 6" />
                                    </div>
                                    <div className="bmw-gallery-item">
                                        <img src={bmwMain} alt="BMW Main" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Motivational Quote */}
                    <div className="motivation-quote">
                        <i className="fa-solid fa-quote-left"></i>
                        <p>The expert in anything was once a beginner. Stay focused, work hard, and never stop learning.</p>
                        <i className="fa-solid fa-quote-right"></i>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dreams;
