const content = {
    en: {
        pageTitle: "Hi, I'm <strong>Muriel Andermatt</strong>!",
        navAbout: "About Me",
        navTech: "Technologies",
        navProjects: "Projects",
        navContact: "Contact",
        languageBtn: "En",
        aboutTitle: "About Me",
        aboutContent: "I am about to complete my Bachelor's degree in Computer Science with a specialisation in iCompetence and have acquired extensive knowledge in the areas of UI/UX design, web development and mobile apps. My passion lies in designing user-friendly digital experiences that are both functional and aesthetically pleasing. During my studies, I have successfully applied my knowledge in various projects and am now looking forward to applying and deepening it in practice.",
        techTitle: "Technologies",
        projectsTitle: "My Projects",
        projectsContent: "More projects will be uploaded soon.",
        project1Title: "Mobile App - PlAAAAnts",
        project1Content: "The Android app sends notifications about the soil moisture of your plants based on data from a sensor.",
        project1Link: "View on GitHub",
        contactTitle: "Contact",
    },
    de: {
        pageTitle: "Hallo, ich bin <strong>Muriel Andermatt</strong>!",
        navAbout: "Über mich",
        navTech: "Technologien",
        navProjects: "Projekte",
        navContact: "Kontakt",
        languageBtn: "De",
        aboutTitle: "Über mich",
        aboutContent: "Ich stehe kurz vor dem Abschluss meines Bachelor-Studiums Informatik mit Profilierung in iCompetence und habe umfangreiches Wissen in den Bereichen UI/UX-Design, Webentwicklung und Mobile Apps erworben. Meine Leidenschaft liegt darin, benutzerfreundliche digitale Erlebnisse zu gestalten, die sowohl funktional als auch ästhetisch ansprechend sind. Während meines Studiums habe ich mein Wissen in verschiedenen Projekten erfolgreich eingesetzt und freue mich darauf, es nun in der Praxis anzuwenden und zu vertiefen.",
        techTitle: "Technologien",
        projectsTitle: "Meine Projekte",
        projectsContent: "Mehr Projekte werden bald aufgeschaltet.",
        project1Title: "Mobile App - PlAAAAnts",
        project1Content: "Die Android-App sendet Benachrichtigungen zur Bodenfeuchtigkeit deiner Pflanzen basierend auf den Daten eines Sensors.",
        project1Link: "Auf GitHub ansehen",
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
    document.getElementById('projects-tbd-message').textContent = content[lang].projectsContent;
    document.getElementById('project1-title').textContent = content[lang].project1Title;
    document.getElementById('project1-content').textContent = content[lang].project1Content;
    document.getElementById('project1-link').textContent = content[lang].project1Link;
    document.getElementById('contact-title').textContent = content[lang].contactTitle;
}


const dropdownButton = document.querySelector('.drop-btn');
const dropdownContent = document.getElementById('dropdown-content');

function hideDropdown() {
    dropdownContent.style.display = 'none';
}

// dropdownButton.addEventListener('click', function() {
//     if (dropdownContent.style.display === "none") {
//         dropdownContent.style.display = 'block';
//         console.log(dropdownContent);
//     } else {
//         console.log("oh no: " + dropdownContent.style.display);
//         console.log(dropdownContent);
//         hideDropdown();
//     }
// });

// dropdownButton.addEventListener('mouseover', function() {
//     if (dropdownContent.style.display !== 'block') {
//         dropdownContent.style.display = 'block';
//     }
// });


