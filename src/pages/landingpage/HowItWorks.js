import React from 'react';
import { UserPlus, BookOpen, Users, ArrowRight, Star, CheckCircle } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            icon: <UserPlus className="step-icon" />,
            title: 'Sign Up',
            description: 'Create your free account as a teacher or student.',
            bgGradient: 'bg-gradient-blue-purple',
            features: ['Free forever', 'Instant access', 'No credit card']
        },
        {
            icon: <BookOpen className="step-icon" />,
            title: 'Start Learning or Teaching',
            description: 'Browse classes or host your own lessons.',
            bgGradient: 'bg-gradient-green-teal',
            features: ['1000+ courses', 'Live sessions', 'Expert teachers']
        },
        {
            icon: <Users className="step-icon" />,
            title: 'Connect & Grow',
            description: 'Engage with global learners, share skills, and build your community.',
            bgGradient: 'bg-gradient-orange-pink',
            features: ['Global community', 'Skill sharing', 'Network building']
        }
    ];

    return (
        <section className="how-it-works-section">
            <div className="container">
                {/* Header */}
                <div className="header">
                    <div className="badge">
                        <Star className="badge-icon" />
                        <span className="badge-text">Trusted by 50,000+ learners worldwide</span>
                    </div>

                    <h2 className="title">
                        How It Works
                    </h2>
                    <p className="subtitle">
                        Transform your learning journey in just <span className="subtitle-highlight">three simple steps</span>.
                        Join our vibrant community and unlock your potential today.
                    </p>
                </div>

                {/* Steps */}
                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">
                            {/* Step Card */}
                            <div className="step-card-inner">
                                {/* Animated Background */}
                                <div className={`step-bg-gradient ${step.bgGradient}`}></div>

                                {/* Floating Step Number */}
                                <div className="step-number">
                                    <div className={`step-number-inner ${step.bgGradient}`}>
                                        <span className="step-number-text">{index + 1}</span>
                                    </div>
                                </div>

                                {/* Main Icon */}
                                <div className="step-icon-container">
                                    <div className={`step-icon ${step.bgGradient}`}>
                                        {step.icon}
                                    </div>
                                    {/* Glow Effect */}
                                    <div className={`step-icon-glow ${step.bgGradient}`}></div>
                                </div>

                                {/* Content */}
                                <div className="step-content">
                                    <h3 className="step-title">
                                        {step.title}
                                    </h3>
                                    <p className="step-description">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Features List */}
                                <div className="features-list">
                                    {step.features.map((feature, idx) => (
                                        <div key={idx} className="feature-item">
                                            <CheckCircle className="feature-icon" />
                                            <span className="feature-text">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Connecting Arrow */}
                            {index < steps.length - 1 && (
                                <div className="connecting-arrow">
                                    <div className="flex items-center">
                                        <ArrowRight className="arrow-icon" />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;