const projectLinks = document.querySelectorAll(".project-hero a");
const projectSections = document.querySelectorAll(".project-section");

function showSection(sectionId) {
    projectSections.forEach(section => {
        section.style.display = "none";
    });

    const section = document.querySelector(sectionId);

    if (section) {
        section.style.display = "block";
    }
}

projectLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const target = this.getAttribute("href");

        if (target === "#web-development") {
            showSection("#web-development");
        } 
        else if (target === "#python-development") {
            showSection("#python-development");
        } 
        else if (target === "#wordpress") {
            showSection("#wordpress");
        }
    });
});

const hash = window.location.hash;

if (hash === "#ecommerce") {
    showSection("#web-development");
} 
else if (hash === "#coral" || hash === "#library") {
    showSection("#python-development");
} 
else if (hash === "#wordpress") {
    showSection("#wordpress");
} 
else {
    showSection("#web-development");
}