document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu--inicio a');

    function changeLinkState() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    changeLinkState();
    window.addEventListener('scroll', changeLinkState);
});

function abrirLinkedIn() {
    window.open("https://www.linkedin.com/in/julian-mui%C3%B1os-0857a7187/", "_blank");
}
