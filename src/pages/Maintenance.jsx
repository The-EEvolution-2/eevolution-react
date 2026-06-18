import React, { useState, useEffect, useRef } from 'react';
import { 
    Terminal as TerminalIcon, 
    CheckCircle2, 
    Play, 
    Sparkles, 
    ShieldCheck, 
    Mail, 
    Heart, 
    Database, 
    Cpu, 
    ChevronRight, 
    Activity 
} from 'lucide-react';
import './Maintenance.css';

const logPool = [
    { text: "System shutdown requested... SUCCESS", type: "success" },
    { text: "Verifying current v1 codebase & filesystems...", type: "info" },
    { text: "Initiating student data backup cycle...", type: "info" },
    { text: "Backing up profiles, notes, & resource files...", type: "info" },
    { text: "Data integrity verification: 100% SECURE", type: "success" },
    { text: "Securing local files to encrypted cold storage...", type: "success" },
    { text: "Entering serverless database standby mode...", type: "info" },
    { text: "Configuring PostgreSQL server clusters for v2...", type: "info" },
    { text: "Linking custom backend API gateways...", type: "info" },
    { text: "Testing DB authentication rules...", type: "info" },
    { text: "Database connection: ESTABLISHED", type: "success" },
    { text: "Preparing new server routing routes (v2)...", type: "info" },
    { text: "Parsing updated UI schema components...", type: "info" },
    { text: "Recompiling style sheets and assets...", type: "info" },
    { text: "Optimizing responsive layout grids...", type: "info" },
    { text: "Standing by for admin deployment...", type: "warn" },
    { text: "System Status: UPGRADE IN PROGRESS", type: "success" }
];

const Maintenance = () => {
    const [logs, setLogs] = useState([]);
    const [currentStep, setCurrentStep] = useState(1); // 0: wrapup, 1: database, 2: ui
    const terminalEndRef = useRef(null);

    // Simulate logs printing out
    useEffect(() => {
        let index = 0;
        
        // Print first log immediately
        setLogs([logPool[0]]);
        index++;

        const interval = setInterval(() => {
            if (index < logPool.length) {
                setLogs(prev => [...prev, logPool[index]]);
                
                // Adjust stepper stage based on log index
                if (index === 6) {
                    setCurrentStep(1); // Database phase started
                } else if (index === 11) {
                    setCurrentStep(2); // UI phase started
                }
                index++;
            } else {
                clearInterval(interval);
            }
        }, 1800);

        return () => clearInterval(interval);
    }, []);

    // Auto-scroll terminal
    useEffect(() => {
        if (terminalEndRef.current) {
            terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [logs]);

    return (
        <div className="m-wrapper">
            {/* Visual background grid and glows */}
            <div className="m-grid-pattern"></div>
            <div className="m-glow m-glow-1"></div>
            <div className="m-glow m-glow-2"></div>

            <div className="m-container">
                {/* LEFT PANE: SYSTEM UPGRADE MONITOR (Desktop Only/Hidden or condensed on mobile) */}
                <div className="m-pane-left">
                    <div className="m-monitor-header">
                        <div className="m-monitor-title">
                            <Activity size={18} className="m-pulse-icon" />
                            <span>EEvolution Upgrade Monitor</span>
                        </div>
                        <div className="m-status-indicator">
                            <span className="m-pulse-dot"></span>
                            <span>v2.0 PRE-DEPLOY</span>
                        </div>
                    </div>

                    {/* Stepper Progress */}
                    <div className="m-stepper">
                        <div className={`m-step ${currentStep >= 0 ? 'active' : ''} ${currentStep > 0 ? 'completed' : ''}`}>
                            <div className="m-step-icon">
                                {currentStep > 0 ? <CheckCircle2 size={16} /> : <Play size={14} className="m-play-icon" />}
                            </div>
                            <div className="m-step-content">
                                <h4>Semester Wrap-up & Backup</h4>
                                <p>Archiving courses & database snapshot</p>
                            </div>
                        </div>

                        <div className={`m-step ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
                            <div className="m-step-icon">
                                {currentStep > 1 ? <CheckCircle2 size={16} /> : (currentStep === 1 ? <Activity size={14} className="m-rotate-icon" /> : <ChevronRight size={14} />)}
                            </div>
                            <div className="m-step-content">
                                <h4>Backend & DB Integration</h4>
                                <p>Migrating from serverless BAAS to full database backend</p>
                            </div>
                        </div>

                        <div className={`m-step ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
                            <div className="m-step-icon">
                                {currentStep === 2 ? <Activity size={14} className="m-rotate-icon" /> : <ChevronRight size={14} />}
                            </div>
                            <div className="m-step-content">
                                <h4>UI v2 & Feature Expansion</h4>
                                <p>Deploying new user dashboard & learning modules</p>
                            </div>
                        </div>
                    </div>

                    {/* Simulated Terminal Console */}
                    <div className="m-terminal">
                        <div className="m-terminal-header">
                            <div className="m-terminal-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <span className="m-terminal-file">upgrade_logs.sh</span>
                            <div className="m-terminal-badge"><TerminalIcon size={12} /> Console</div>
                        </div>
                        <div className="m-terminal-body">
                            {logs.map((log, i) => (
                                <div key={i} className={`m-log-line m-log-${log.type}`}>
                                    <span className="m-log-prompt">$</span>
                                    <span className="m-log-text">{log.text}</span>
                                </div>
                            ))}
                            <div className="m-log-line m-log-current">
                                <span className="m-log-prompt">$</span>
                                <span className="m-log-cursor">█</span>
                            </div>
                            <div ref={terminalEndRef} />
                        </div>
                    </div>
                </div>

                {/* RIGHT PANE: MAIN MESSAGE */}
                <div className="m-pane-right">
                    <div className="m-card-glow"></div>
                    
                    {/* Brand Emblem */}
                    <div className="m-brand-header">
                        <div className="m-logo-box">
                            <Cpu className="m-logo-icon" size={26} />
                            <Sparkles className="m-sparkle-overlay" size={14} />
                        </div>
                        <span className="m-brand-name">EEvolution</span>
                    </div>

                    <span className="m-badge">Scheduled Maintenance</span>
                    
                    <h2 className="m-title">
                        Upgrading Our <span className="m-gradient-text">Core Engine</span>
                    </h2>

                    <p className="m-intro">
                        Taking EEvolution to the next level with a dedicated backend and redesigned features.
                    </p>

                    <div className="m-divider"></div>

                    <div className="m-letter">
                        <p>Dear EEvolution Community,</p>
                        <p>
                            With the current semester officially wrapped up and classes temporarily on pause, we are placing EEvolution under scheduled maintenance. We are utilizing this period to transition from a serverless architecture to a robust, fully managed backend database, while designing a brand-new interface and highly requested tools for the next term.
                        </p>
                        <blockquote className="m-quote">
                            "We are incredibly grateful for your cooperation, engagement, and the vital financial support you provided to keep EEvolution running. This platform is built for you, and run by you."
                        </blockquote>
                        <p>
                            We would love to know how you enjoyed being part of EEvolution this past year! Drop us an email and let us know what features or improvements you'd like to see next.
                        </p>
                    </div>

                    {/* Data Security Info Box */}
                    <div className="m-security-box">
                        <div className="m-security-icon-circle">
                            <ShieldCheck size={20} />
                        </div>
                        <div className="m-security-content">
                            <h5>Your Data is Secure</h5>
                            <p>All user profiles, study logs, and files are safely backed up on our secure, encrypted servers.</p>
                        </div>
                    </div>

                    {/* Action Section */}
                    <div className="m-actions">
                        <a 
                            href="mailto:jcsayan7@gmail.com?subject=EEvolution%20Feedback%20%26%20Suggestions" 
                            className="m-btn m-btn-primary"
                        >
                            <Mail size={18} />
                            <span>Share Your Experience</span>
                        </a>
                    </div>

                    {/* Signature */}
                    <div className="m-footer">
                        <span>Made with</span>
                        <Heart size={13} className="m-heart" />
                        <span>for students, by EEvolution Team</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Maintenance;
