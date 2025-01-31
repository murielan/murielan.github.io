const content = {
    en: {
        pageTitle: "Hi, I'm <strong>Muriel Andermatt</strong>!",
        navAbout: "About Me",
        navTech: "Technologies",
        navProjects: "Projects",
        navContact: "Contact",
        languageBtn: "EN",
        aboutTitle: "About Me",
        aboutContent: "I am a recent Computer Science graduate with a specialization in Design and Management (iCompetence) and possess extensive knowledge in UI/UX design, web development, and mobile app development. My passion for designing data-driven, user-friendly and aesthetically pleasing solutions has driven me through my studies. I have successfully demonstrated my skills in numerous projects and am now eager to apply and further expand my knowledge in a professional setting.",
        techTitle: "Technologies",
        projectsTitle: "My Projects",
        projectsContent: "A selection of my current projects:",
        project1Title: "Mobile App - PlAAAAnts",
        project1Content: "The Android app sends notifications about the soil moisture of your plants based on data from a sensor.",
        project1Link: "View on GitHub",
        project2Title: "Webshop - Winterhart",
        project2Content: "Development of the webshop for the clothing brand Winterhart using Wordpress.",
        project2Link: "Live Webshop",
        project3Title: "Website - Visita",
        project3Content: "Redesign of the Visita Treuhand AG website with its own content management system (CMS).",
        project3Link: "Live Website",
        contactTitle: "Contact",
    },
    de: {
        pageTitle: "Hallo, ich bin <strong>Muriel Andermatt</strong>!",
        navAbout: "Über mich",
        navTech: "Technologien",
        navProjects: "Projekte",
        navContact: "Kontakt",
        languageBtn: "DE",
        aboutTitle: "Über mich",
        aboutContent: "Ich bin eine frischgebackene Informatik-Absolventin mit Vertiefung in Design und Management (iCompetence) und verfüge über umfangreiches Wissen in den Bereichen UI/UX-Design, Webentwicklung und der Entwicklung mobiler Anwendungen. Meine Leidenschaft für das Entwerfen datengetriebener, benutzerfreundlicher und ästhetisch ansprechender Lösungen hat mich durch Studium getrieben. In zahlreichen Projekten konnte ich meine Fähigkeiten erfolgreich unter Beweis stellen. Jetzt bin ich bereit, mein Wissen in einer professionellen Umgebung weiter einzusetzen und zu erweitern.",
        techTitle: "Technologien",
        projectsTitle: "Meine Projekte",
        projectsContent: "Eine Auswahl meiner aktuellen Projekte:",
        project1Title: "Mobile App - PlAAAAnts",
        project1Content: "Die Android-App sendet Benachrichtigungen zur Bodenfeuchtigkeit deiner Pflanzen basierend auf den Daten eines Sensors.",
        project1Link: "Auf GitHub ansehen",
        project2Title: "Webshop - Winterhart",
        project2Content: "Entwicklung des Webshops für die Kleidermarke Winterhart unter Verwendung von Wordpress.",
        project2Link: "Webseite ansehen",
        project3Title: "Webseite - Visita",
        project3Content: "Neugestaltung von der Visita Treuhand AG Webseite mit eigenem Content-Management-System (CMS).",
        project3Link: "Webseite ansehen",
        contactTitle: "Kontakt",
    }
};

function setLanguage(lang) {
    document.getElementById('page-title').innerHTML = content[lang].pageTitle;

    // Reset the typewriter animation
    const titleElement = document.getElementsByClassName('typewriter').item(0);
    titleElement.classList.remove('typewriter');
    void titleElement.offsetWidth;
    titleElement.classList.add('typewriter');

    document.getElementById('nav-about').textContent = content[lang].navAbout;
    document.getElementById('nav-tech').textContent = content[lang].navTech;
    document.getElementById('nav-projects').textContent = content[lang].navProjects;
    document.getElementById('nav-contact').textContent = content[lang].navContact;
    document.getElementById('language-btn').textContent = content[lang].languageBtn;
    document.getElementById('about-title').textContent = content[lang].aboutTitle;
    document.getElementById('about-content').textContent = content[lang].aboutContent;
    document.getElementById('tech-title').textContent = content[lang].techTitle;
    document.getElementById('projects-title').textContent = content[lang].projectsTitle;
    document.getElementById('project1-title').textContent = content[lang].project1Title;
    document.getElementById('project1-content').textContent = content[lang].project1Content;
    document.getElementById('project1-link').textContent = content[lang].project1Link;
    document.getElementById('project2-title').textContent = content[lang].project2Title;
    document.getElementById('project2-content').textContent = content[lang].project2Content;
    document.getElementById('project2-link').textContent = content[lang].project2Link;
    document.getElementById('project3-title').textContent = content[lang].project3Title;
    document.getElementById('project3-content').textContent = content[lang].project3Content;
    document.getElementById('project3-link').textContent = content[lang].project3Link;
    document.getElementById('contact-title').textContent = content[lang].contactTitle;
}
const dropBtn = document.getElementById('drop-btn');
const wholeEl = document.getElementById('language-dropdown');
const dropdownContent = document.getElementById('dropdown-content');
const languageEls = document.getElementsByClassName('hideDropdown');

dropBtn.addEventListener('click', () => {
    dropdownContent.style.display = "block";
});

dropBtn.addEventListener('mouseover', () => {
    dropdownContent.style.display = "block";
});

wholeEl.addEventListener('mouseover', () => {
    dropdownContent.style.display = "block";
});

wholeEl.addEventListener('mouseout', () => {
    dropdownContent.style.display = "none";
});

Array.from(languageEls).forEach(el => {
    el.addEventListener('click', () => {
        dropdownContent.style.display = 'none';
    });
});

function toggleImageSize() {
    this.size
}
