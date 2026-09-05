const roles = [
    "Web Developer",
    "Python Developer",
    "WordPress Developer",
    // "AI/ML Engineer"
];

const role = document.getElementById("role");

let roleIndex = 0;
let charIndex = roles[roleIndex].length;
let deleting = true;

function typeRole(){
    const currentRole = roles[roleIndex];

    if(deleting){
        role.textContent = currentRole.substring(0,charIndex);
        charIndex--;

        if(charIndex < 0){
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            charIndex = 0;
            setTimeout(typeRole,500);
            return;
        }

    }else{
        const nextRole = roles[roleIndex];

        role.textContent = nextRole.substring(0,charIndex);
        charIndex++;

        if(charIndex > nextRole.length) { 
            deleting = true;
            charIndex = nextRole.length;
            setTimeout(typeRole,1500);
            return;
        }
    }

    setTimeout(typeRole,deleting ? 80 : 120);
}

typeRole();