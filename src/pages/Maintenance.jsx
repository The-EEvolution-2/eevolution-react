import React from 'react';
import { 
    CheckCircle2, 
    Sparkles, 
    ShieldCheck, 
    Mail, 
    Heart, 
    Cpu, 
    Calendar,
    ArrowRight
} from 'lucide-react';
import './Maintenance.css';

const Maintenance = () => {
    return (
        <div className="m-wrapper">
            {/* Ambient elegant background */}
            <div className="m-bg-glow"></div>
            <div className="m-grid"></div>

            <div className="m-card">
                {/* Status Header */}
                <div className="m-header">
                    <div className="m-logo">
                        <Cpu size={22} className="m-logo-icon" />
                        <span className="m-logo-text">EEvolution <span className="m-ver">v2.0</span></span>
                    </div>
                    <div className="m-status-badge">
                        <span className="m-status-pulse"></span>
                        <span>Upgrading Core Systems</span>
                    </div>
                </div>

                <div className="m-content-grid">
                    {/* LEFT COLUMN: Progress & Info */}
                    <div className="m-left-col">
                        <div className="m-info-section">
                            <span className="m-section-label">Upgrade Roadmap</span>
                            <div className="m-timeline">
                                <div className="m-timeline-item completed">
                                    <div className="m-timeline-icon">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <div className="m-timeline-details">
                                        <h6>Semester Wrap-up</h6>
                                        <p>Data backup & course archiving completed.</p>
                                    </div>
                                </div>

                                <div className="m-timeline-item active">
                                    <div className="m-timeline-icon">
                                        <Sparkles size={14} className="m-pulse-sparkle" />
                                    </div>
                                    <div className="m-timeline-details">
                                        <h6>Database Integration</h6>
                                        <p>Migrating to a dedicated secure backend database.</p>
                                    </div>
                                </div>

                                <div className="m-timeline-item pending">
                                    <div className="m-timeline-icon">
                                        <ArrowRight size={14} />
                                    </div>
                                    <div className="m-timeline-details">
                                        <h6>v2 UI & New Sections</h6>
                                        <p>Deploying redesigned dashboard and features.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Security Assurance Card */}
                        <div className="m-security-card">
                            <ShieldCheck size={20} className="m-sec-icon" />
                            <div className="m-sec-text">
                                <h6>Data Protection</h6>
                                <p>Your profiles, course notes, and history are encrypted and safe in our servers.</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Announcement Message */}
                    <div className="m-right-col">
                        <h1 className="m-title">
                            We are preparing <br />
                            <span className="m-gradient">something special.</span>
                        </h1>
                        
                        <p className="m-subtitle">
                            EEvolution is undergoing scheduled maintenance to transition to a more powerful core.
                        </p>

                        <div className="m-letter">
                            <p>Dear EEvolution Community,</p>
                            <p>
                                As the semester has ended and active classes are paused, we are taking EEvolution offline for a major upgrade. We are introducing a dedicated backend database system and a completely fresh user interface with brand new sections.
                            </p>
                            <p className="m-highlight-text">
                                Thank you for a year filled with cooperation, engagement, and the generous financial support that kept EEvolution running. This platform is built on your trust.
                            </p>
                            <p>
                                We would love to hear from you during this period! Email us to share how you enjoyed being part of EEvolution and what improvements we can make.
                            </p>
                        </div>

                        {/* CTA Action button */}
                        <div className="m-actions">
                            <a 
                                href="mailto:jcsayan7@gmail.com?subject=EEvolution%20v2%20Suggestions%20%26%20Feedback" 
                                className="m-cta-btn"
                            >
                                <Mail size={16} />
                                <span>Email Us Your Feedback</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Signature */}
                <div className="m-footer">
                    <span>Designed with</span>
                    <Heart size={12} className="m-heart-icon" />
                    <span>for students, by EEvolution Team</span>
                </div>
            </div>
        </div>
    );
};

export default Maintenance;
