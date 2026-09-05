const projectLinks = document.querySelectorAll(".project-hero a");
const projectSection = document.querySelectorAll(".project-section");

projectLinks.forEach(link=>{
    link.addEventListener("click",function(event){
        event.preventDefault();

        projectSection.forEach(section=>{
            section.style.display = "none";
        });

        const target = document.querySelector(this.getAttribute("href"));
        target.style.display = "block"
    });
});

const firstSection = document.querySelector("#web-development");
firstSection.style.display = "block";