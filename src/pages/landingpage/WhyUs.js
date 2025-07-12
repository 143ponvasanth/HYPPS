import React, { useEffect, useState } from 'react';
import './WhyUs.css';
import {
    Globe,
    Unlock,
    Clock,
    Grid,
    ShieldCheck,
    Video
} from 'lucide-react';

function WhyChooseUs() {
    const [isVisible, setIsVisible] = useState(false);
    const [showAllFeatures, setShowAllFeatures] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 576);
    
    const features = [
        {
            icon: <Globe size={36} />,
            title: "Global Access",
            description: "Learn or teach from anywhere, anytime with just an internet connection."
        },
        {
            icon: <Unlock size={36} />,
            title: "Zero Barriers",
            description: "No degrees or prerequisites. Just passion, skills, and a desire to grow."
        },
        {
            icon: <Clock size={36} />,
            title: "Flexible Scheduling",
            description: "Take or host classes at your own pace and convenience."
        },
        {
            icon: <Grid size={36} />,
            title: "Wide Range of Subjects",
            description: "From coding to cooking, we've got everything covered."
        },
        {
            icon: <Video size={36} />,
            title: "Live & Recorded Classes",
            description: "Join real-time sessions or watch recorded classes at your convenience."
        },
        {
            icon: <ShieldCheck size={36} />,
            title: "Safe & Verified Environment",
            description: "AI moderation and manual reviews keep learning secure and trustworthy."
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.whyus-container');
            if (element) {
                const top = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (top < windowHeight - 100) {
                    setIsVisible(true);
                    window.removeEventListener('scroll', handleScroll);
                }
            }
        };

        const handleResize = () => {
            const mobile = window.innerWidth < 576;
            setIsMobile(mobile);
            if (!mobile) {
                setShowAllFeatures(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`whyus-container ${isVisible ? 'whyus-visible' : ''}`}>
            <div className="whyus-wrapper">
                <div className="whyus-header">
                    <h1 className="whyus-title">Why choose us</h1>
                    <p className="whyus-subtitle">
                        Discover the advantages that make our platform the perfect choice for learners and educators worldwide.
                    </p>
                </div>
                <div className={`whyus-featuresGrid ${isMobile ? 'whyus-mobile' : ''} ${showAllFeatures ? 'whyus-expanded' : ''}`}>
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="whyus-featureCard"
                            style={{
                                display: !isMobile || showAllFeatures || index < 3 ? 'flex' : 'none'
                            }}
                        >
                            <div className="whyus-iconWrapper">
                                {feature.icon}
                            </div>
                            <h3 className="whyus-featureTitle">{feature.title}</h3>
                            <p className="whyus-featureDescription">{feature.description}</p>
                        </div>
                    ))}
                </div>
                {isMobile && !showAllFeatures && (
                    <button 
                        className="whyus-viewMoreButton" 
                        onClick={() => setShowAllFeatures(true)}
                    >
                        View More
                    </button>
                )}
            </div>
        </div>
    );
}

export default WhyChooseUs;