document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    loadProfile();
    renderSections();
    loadFooter();
    initTheme();
    initMobileNav();
}

/**
 * Initialize Theme Toggle
 */
function initTheme() {
    const toggleBtn = document.getElementById('theme-toggle');
    const icon = toggleBtn.querySelector('i');
    const root = document.documentElement;

    // Check for saved preference
    const savedTheme = localStorage.getItem('theme');

    // Apply saved theme
    if (savedTheme === 'light') {
        enableLightMode();
    }

    toggleBtn.addEventListener('click', () => {
        if (root.classList.contains('light-mode')) {
            disableLightMode();
        } else {
            enableLightMode();
        }
    });

    function enableLightMode() {
        root.classList.add('light-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    }

    function disableLightMode() {
        root.classList.remove('light-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    }
}

/**
 * Initialize Mobile Navigation
 */
function initMobileNav() {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');

    // Using delegation since links are added dynamically
    const navLinks = () => document.querySelectorAll('.nav-links li');

    if (!burger) return;

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('active');

        // Toggle Icon
        const icon = burger.querySelector('i');
        if (nav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }

        // Animate Links
        navLinks().forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

    // Close menu when clicking outside or on a link
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') && !nav.contains(e.target) && !burger.contains(e.target)) {
            closeMenu();
        }
    });

    // Delegate click for links
    nav.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            closeMenu();
        }
    });

    // Close menu on resize to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && nav.classList.contains('active')) {
            closeMenu();
        }
    });

    function closeMenu() {
        nav.classList.remove('active');
        const icon = burger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');

        navLinks().forEach(link => {
            link.style.animation = '';
        });
    }
}

/**
 * Loads profile details into the Hero section and Navbar
 */
function loadProfile() {
    const p = siteConfig.profile;

    // Text Content
    document.title = `${p.name} | ${p.title}`;
    document.getElementById('hero-name').textContent = p.name;
    document.getElementById('hero-title').textContent = p.title;
    document.getElementById('hero-tagline').textContent = p.tagline;
    document.getElementById('hero-image').src = p.avatar;
    document.getElementById('nav-logo').textContent = getInitials(p.name) + ".";

    // Contact
    const emailBtn = document.getElementById('contact-email-btn');
    if (emailBtn) emailBtn.href = `mailto:${p.email}`;
}

/**
 * Renders sections based on config
 */
function renderSections() {
    const main = document.getElementById('main-content');
    const navLinks = document.querySelector('.nav-links');
    const sections = siteConfig.sections;

    // Ordered list of sections to render
    const sectionOrder = [
        { key: 'about', render: renderAbout, label: 'About' },
        { key: 'services', render: renderServices, label: 'Services' },
        { key: 'experience', render: renderExperience, label: 'Experience' },
        { key: 'education', render: renderEducation, label: 'Education' },
        { key: 'skills', render: renderSkills, label: 'Skills' },
        { key: 'interests', render: renderInterests, label: 'Interests' },
        { key: 'awards', render: renderAwards, label: 'Awards' },
        { key: 'certifications', render: renderCertifications, label: 'Certifications' },
        { key: 'blog', render: renderBlog, label: 'Blog' },
        { key: 'contact', render: renderContact, label: 'Contact' }
    ];

    sectionOrder.forEach(item => {
        if (sections[item.key]) {
            // Add Nav Link
            const li = document.createElement('li');
            li.innerHTML = `<a href="#${item.key}">${item.label}</a>`;
            navLinks.appendChild(li);

            // Execute specific render function
            item.render(main);
        }
    });

    // Mobile nav toggle logic could go here
}

// =========================================
// RENDER HELPERS
// =========================================

function getTemplate(id) {
    return document.getElementById(id).content.cloneNode(true);
}

function renderAbout(container) {
    const fragment = getTemplate('tpl-about');
    fragment.querySelector('#about-text').innerHTML = `<p>${siteConfig.about.content}</p>`;
    container.appendChild(fragment);
}

function renderServices(container) {
    const fragment = getTemplate('tpl-services');
    const grid = fragment.querySelector('#services-grid');

    siteConfig.services.forEach(svc => {
        const div = document.createElement('div');
        div.className = 'service-card';
        div.innerHTML = `
            <i class="${svc.icon} service-icon"></i>
            <h3>${svc.title}</h3>
            <p>${svc.description}</p>
        `;
        grid.appendChild(div);
    });
    container.appendChild(fragment);
}

function renderExperience(container) {
    const fragment = getTemplate('tpl-experience');
    const timeline = fragment.querySelector('#experience-timeline');

    siteConfig.experience.forEach(exp => {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        div.innerHTML = `
            <span class="timeline-period">${exp.period}</span>
            <h3 class="timeline-role">${exp.role}</h3>
            <h4 class="timeline-company">${exp.company}</h4>
            <p class="timeline-desc">${exp.description}</p>
        `;
        timeline.appendChild(div);
    });
    container.appendChild(fragment);
}

function renderEducation(container) {
    const fragment = getTemplate('tpl-education');
    const timeline = fragment.querySelector('#education-timeline');

    siteConfig.education.forEach(edu => {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        div.innerHTML = `
            <span class="timeline-period">${edu.year}</span>
            <h3 class="timeline-role">${edu.degree}</h3>
            <h4 class="timeline-company">${edu.institution}</h4>
        `;
        timeline.appendChild(div);
    });
    container.appendChild(fragment);
}

function renderSkills(container) {
    const fragment = getTemplate('tpl-skills');
    const list = fragment.querySelector('#skills-list');

    siteConfig.skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.textContent = skill;
        list.appendChild(span);
    });
    container.appendChild(fragment);
}

function renderInterests(container) {
    const fragment = getTemplate('tpl-interests');
    const list = fragment.querySelector('#interests-list');

    siteConfig.interests.forEach(interest => {
        const span = document.createElement('span');
        span.className = 'skill-tag'; // reuse style
        span.textContent = interest;
        list.appendChild(span);
    });
    container.appendChild(fragment);
}

function renderAwards(container) {
    const fragment = getTemplate('tpl-awards');
    const list = fragment.querySelector('#awards-list');

    siteConfig.awards.forEach(item => {
        const li = document.createElement('li');
        li.className = 'award-item';
        li.innerHTML = `<i class="fas fa-trophy award-icon"></i> <span>${item}</span>`;
        list.appendChild(li);
    });
    container.appendChild(fragment);
}

function renderCertifications(container) {
    const fragment = getTemplate('tpl-certifications');
    const list = fragment.querySelector('#certifications-list');

    siteConfig.certifications.forEach(item => {
        const li = document.createElement('li');
        li.className = 'award-item';
        li.innerHTML = `<i class="fas fa-certificate award-icon"></i> <span>${item}</span>`;
        list.appendChild(li);
    });
    container.appendChild(fragment);
}

function renderBlog(container) {
    const fragment = getTemplate('tpl-blog');
    const grid = fragment.querySelector('#blog-grid');
    const modal = fragment.querySelector('#blog-modal');
    const closeBtn = fragment.querySelector('.close-modal');

    // Close logic
    closeBtn.onclick = () => { modal.style.display = 'none'; };
    window.onclick = (e) => {
        if (e.target == modal) modal.style.display = 'none';
    };

    siteConfig.blogs.forEach(blog => {
        const div = document.createElement('div');
        div.className = 'blog-card';
        div.innerHTML = `
            <div class="blog-content">
                <span class="blog-date">${blog.date}</span>
                <h3 class="blog-title">${blog.title}</h3>
                <p class="blog-summary">${blog.summary}</p>
                <a href="#" class="read-more" onclick="openBlog(event, ${blog.id})">
                    Read Article <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        grid.appendChild(div);
    });

    container.appendChild(fragment);
}

function renderContact(container) {
    const fragment = getTemplate('tpl-contact');
    const socialContainer = fragment.querySelector('#contact-socials');
    const socials = siteConfig.profile.social;

    if (socials.linkedin) socialContainer.innerHTML += `<a href="${socials.linkedin}" target="_blank" class="social-icon"><i class="fab fa-linkedin"></i></a>`;
    if (socials.github) socialContainer.innerHTML += `<a href="${socials.github}" target="_blank" class="social-icon"><i class="fab fa-github"></i></a>`;
    if (socials.twitter) socialContainer.innerHTML += `<a href="${socials.twitter}" target="_blank" class="social-icon"><i class="fab fa-twitter"></i></a>`;

    container.appendChild(fragment);
}

function loadFooter() {
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('footer-name').textContent = siteConfig.profile.name;
}

// =========================================
// UTILS
// =========================================
function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('');
}

async function openBlog(e, id) {
    e.preventDefault();
    const blog = siteConfig.blogs.find(b => b.id === id);
    if (!blog) return;

    const modal = document.getElementById('blog-modal');
    const title = document.getElementById('modal-title');
    const date = document.getElementById('modal-date');
    const body = document.getElementById('modal-body');

    title.textContent = "Loading...";
    body.innerHTML = "";
    modal.style.display = "block";

    // Attempt to fetch content
    try {
        const response = await fetch(blog.file);
        if (!response.ok) throw new Error("Could not load blog content");

        const data = await response.json(); // Assuming JSON format for simplicity in static hosting
        title.textContent = data.title || blog.title;
        date.textContent = data.date || blog.date;
        body.innerHTML = data.content; // HTML content allowed

    } catch (err) {
        console.error(err);
        title.textContent = blog.title;
        date.textContent = blog.date;
        body.innerHTML = `<p>Error loading full content. Please check the file path: ${blog.file}</p><p>Summary: ${blog.summary}</p>`;
    }
}
