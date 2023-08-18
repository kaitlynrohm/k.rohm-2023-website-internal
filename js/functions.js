/*Javascript for Maunga club website*/
/*Responsive nav menu code*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

/*Confirmation button for submitting information via the form on the contact us page. */
function enter() {
    confirm("Submit entered information?");
}

/*js for scrolling down when clicking on links within a page (chalets)*/

$('a[href*="#"]').on('click', function(e) {
e.preventDefault()
$('html, body').animate(
    {
    scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
)
})