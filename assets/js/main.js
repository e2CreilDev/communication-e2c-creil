// animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('montrer');
        }
    });
});

const hidenElements = document.querySelectorAll('.cacher');
hidenElements.forEach((el) => observer.observe(el));