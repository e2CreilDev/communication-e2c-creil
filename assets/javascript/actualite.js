// animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

const hidenElements = document.querySelectorAll('.hidden');
hidenElements.forEach((el) => observer.observe(el));

// afficher burger
function afficherBurger(){
    document.querySelector(".listHumburger").classList.add("afficher");
}
