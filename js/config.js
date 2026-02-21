const siteConfig = {
    // =========================================================================
    // FEATURE TOGGLES
    // =========================================================================
    // Set these to true or false to show/hide specific sections
    sections: {
        about: true,
        experience: false,
        education: false,
        skills: false,
        interests: false,
        awards: false,
        certifications: false,
        services: true,
        blog: false,
        contact: true
    },

    // =========================================================================
    // PERSONAL DETAILS
    // =========================================================================
    profile: {
        name: "Prathamesh Bongale",
        title: "Technology Advisor",
        tagline: "Providing strategic guidance businesses need without the overhead of a full-time CTO",
        email: "prathamesh@digitamygdala.com",
        location: "Johannesburg, South Africa",
        social: {
            linkedin: "https://www.linkedin.com/in/prathamesh-bongale/"
        },
        // Path to your profile photo in the assets folder
        avatar: "assets/prathamesh_bongale.png",
        calendly: "https://calendly.com/prathamesh-digitamygdala/30min"
    },

    // =========================================================================
    // ABOUT SECTION
    // =========================================================================
    about: {
        heading: "About",
        content: `I am a seasoned technology professional with 12+ years of enterprise delivery 
                  experience and 8 years of deep domain expertise in digital insurance. As the 
                  founder of <strong>Digitamygdala</strong>, I bridge the gap between technical 
                  complexity and business objectives — helping companies build scalable, compliant 
                  technology systems that stand the test of growth.<br><br>
                  Having led Digital insurance platform — one of South Africa's 
                  most complex insurance systems — I understand what breaks at scale and how to 
                  prevent it. My approach is hands-on: production-ready code, not just PowerPoint decks.<br><br>
                  Whether you're a startup founder making your first technology decisions or an 
                  established company navigating technical debt, I provide the strategic guidance 
                  you need without the overhead of a full-time CTO.`
    },

    // =========================================================================
    // SERVICES
    // =========================================================================
    services: [
        {
            title: "Technology Health Check",
            icon: "fas fa-stethoscope",
            description: "A half-day technical assessment of your systems, architecture, security posture, and POPIA compliance gaps. You receive a written one-page report with prioritised recommendations and clear next steps."
        },
        {
            title: "Fractional CTO Retainer",
            icon: "fas fa-chess-king",
            description: "Part-time strategic technology leadership for your company. 10–15 hours per month of architecture decisions, vendor selection, team hiring guidance, and strategic planning — without the R80k–R120k/month cost of a full-time CTO."
        },
        {
            title: "Architecture Review & Technology Roadmap",
            icon: "fas fa-map-location-dot",
            description: "A comprehensive audit of your current technology stack to identify performance bottlenecks, security risks, and technical debt. We provide a 12-month strategic roadmap that aligns your architecture with your business growth goals."
        }
    ],

    // =========================================================================
    // BLOG CONFIGURATION
    // =========================================================================
    blogs: [
        {
            id: 1,
            title: "The Future of Serverless Architecture",
            date: "Oct 12, 2023",
            summary: "Why moving to serverless might be the best decision for your startup.",
            file: "posts/blog1.json"
        },
        {
            id: 2,
            title: "Scaling Node.js Applications",
            date: "Sep 28, 2023",
            summary: "Tips and tricks for handling high concurrency in Node.js.",
            file: "posts/blog2.json"
        }
    ]
};

