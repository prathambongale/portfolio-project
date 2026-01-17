const siteConfig = {
    // =========================================================================
    // FEATURE TOGGLES
    // =========================================================================
    // Set these to true or false to show/hide specific sections
    sections: {
        about: true,
        experience: true,
        education: true,
        skills: true,
        interests: true,
        awards: true,
        certifications: true, // Client can hide this if needed
        services: true,
        blog: true,
        contact: true
    },

    // =========================================================================
    // PERSONAL DETAILS
    // =========================================================================
    // REPLACE these details with your own
    profile: {
        name: "Prathamesh Bongale",
        title: "Senior Software Developer & Consultant",
        tagline: "Helping businesses solve complex issues with elegant digital solutions.",
        email: "contact@prathameshbongale.com",
        location: "Tech City, World",
        social: {
            linkedin: "https://linkedin.com/in/yourprofile",
            github: "https://github.com/yourusername",
            twitter: "https://twitter.com/yourhandle"
        },
        // Path to your profile photo in the assets folder
        // ensuring the file exists in portfolio-project/assets/
        avatar: "assets/profile-placeholder.png" 
    },

    // =========================================================================
    // ABOUT SECTION
    // =========================================================================
    about: {
        heading: "About Me",
        content: `I am a seasoned software developer with a passion for building scalable, 
                  user-centric applications. As a solo entrepreneur and consultant, 
                  I bridge the gap between technical complexity and business goals.`
    },

    // =========================================================================
    // EXPERIENCE
    // =========================================================================
    experience: [
        {
            role: "Senior Consultant",
            company: "Self-Employed",
            period: "2020 - Present",
            description: "Providing high-level architectural advice and full-stack development services to startups and SMEs."
        },
        {
            role: "Lead Developer",
            company: "Tech Corp Inc.",
            period: "2016 - 2020",
            description: "Led a team of 10 developers in migrating legacy monoliths to microservices architecture."
        }
    ],

    // =========================================================================
    // EDUCATION
    // =========================================================================
    education: [
        {
            degree: "M.S. Computer Science",
            institution: "University of Technology",
            year: "2016"
        },
        {
            degree: "B.E. Information Technology",
            institution: "City Engineering College",
            year: "2014"
        }
    ],

    // =========================================================================
    // SKILLS
    // =========================================================================
    skills: [
        "JavaScript / TypeScript", "React & Node.js", "AWS Cloud Architecture", 
        "System Design", "DevOps & CI/CD", "Python / Django"
    ],

    // =========================================================================
    // SERVICES
    // =========================================================================
    services: [
        {
            title: "Custom Web Development",
            icon: "fas fa-code",
            description: "Building tailored web applications from scratch using modern technologies."
        },
        {
            title: "Technical Consulting",
            icon: "fas fa-lightbulb",
            description: "Expert advice on technology stack selection, architecture, and scalability."
        },
        {
            title: "System Optimization",
            icon: "fas fa-rocket",
            description: "Improving the performance and security of existing software systems."
        }
    ],

    // =========================================================================
    // AWARDS & CERTIFICATIONS
    // =========================================================================
    awards: [
        "Best Tech Consultant 2023 - TechWeekly",
        "Hackathon Winner - Global Code 2021"
    ],
    certifications: [
        "AWS Certified Solutions Architect - Professional",
        "Google Cloud Professional Data Engineer"
    ],

    // =========================================================================
    // INTERESTS
    // =========================================================================
    interests: [
        "Open Source Contributing", "Tech Blogging", "AI/ML Research", "Hiking"
    ],

    // =========================================================================
    // BLOG CONFIGURATION
    // =========================================================================
    // To add a new blog, create a JSON file in 'posts/' folder 
    // and add the reference here.
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
