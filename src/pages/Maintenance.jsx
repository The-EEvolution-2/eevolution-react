import React from 'react';
import { Settings, Wrench, ShieldCheck, Mail, Heart, Database, Sparkles } from 'lucide-react';
import './Maintenance.css';

const Maintenance = () => {
    return (
        <div className="maintenance-wrapper">
            {/* Background glowing blobs */}
            <div className="glow-orb glow-orb-1"></div>
            <div className="glow-orb glow-orb-2"></div>
            <div className="glow-orb glow-orb-3"></div>

            <div className="maintenance-card">
                {/* Header Icon Animation */}
                <div className="maintenance-icon-container">
                    <div className="icon-ring-outer"></div>
                    <div className="icon-ring-inner"></div>
                    <div className="gear-spinner">
                        <Settings size={48} className="gear-icon" />
                    </div>
                    <div className="wrench-overlay">
                        <Wrench size={24} className="wrench-icon" />
                    </div>
                    <div className="sparkle-badge">
                        <Sparkles size={16} className="sparkle-icon" />
                    </div>
                </div>

                {/* Content */}
                <span className="maintenance-badge">Maintenance Mode</span>
                <h1 className="maintenance-title">
                    EEvolution <span className="highlight-text">is Upgrading</span>
                </h1>
                
                <p className="maintenance-subtitle">
                    Preparing for the next semester with a powerful new core.
                </p>

                <div className="maintenance-divider"></div>

                <div className="maintenance-message">
                    <p>
                        As the semester has ended and classes are temporarily inactive, we are transitioning EEvolution to a major new version. During this scheduled downtime, we are integrating a robust backend database architecture, introducing a completely redesigned modern user interface, and building brand-new features to elevate your academic experience.
                    </p>
                    <p className="highlight-quote">
                        "Thank you for an incredible year of cooperation, engagement, and the financial support that kept our servers running and EEvolution alive."
                    </p>
                    <p>
                        We would love to know how you enjoyed EEvolution this past year! Email us to share your stories, experience, or any ideas on how we can improve.
                    </p>
                </div>

                {/* Security Box */}
                <div className="security-assurance">
                    <div className="security-icon-box">
                        <ShieldCheck size={20} className="security-icon" />
                    </div>
                    <div className="security-text">
                        <h4>Data Security Guaranteed</h4>
                        <p>All your user profiles, study materials, and records are stored safely and securely in our database servers.</p>
                    </div>
                </div>

                {/* Email Action */}
                <div className="action-container">
                    <a 
                        href="mailto:jcsayan7@gmail.com?subject=My%20EEvolution%20Experience%20%26%20Feedback" 
                        className="email-button"
                    >
                        <Mail size={18} />
                        <span>Share Your Experience</span>
                    </a>
                </div>

                {/* Footer Signature */}
                <div className="maintenance-footer">
                    <span>Made with</span>
                    <Heart size={14} className="heart-icon" />
                    <span>for students, by EEvolution Team</span>
                </div>
            </div>
        </div>
    );
};

export default Maintenance;
