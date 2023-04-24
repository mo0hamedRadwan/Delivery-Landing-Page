/* ================= Show Menu ============== */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    // Validate that variable exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu');
        });
    }
}

showMenu('nav-toggle', 'nav-menu');

/* =================== Remove Menu Mobile ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click nav__links, we remove the show menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* =================== Scroll Section Active Link ====================*/
const scections = document.querySelectorAll("section[id]")

function scrollActive() {
    const scrollY = window.pageYOffset;
    scections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        
        let sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/* ============== Change Background Header =============== */
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than 80 view height, add the scroll-header class to header tag
    if (this.scrollY >= 80)
        header.classList.add('scroll-header');
    else
        header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/* =============== Show Scroll Top ================= */

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the Scroll is highter than 560 viewport height, add the show-scroll class to a tag with the scroll-top
    if (this.scrollY >= 560)
        scrollUp.classList.add('show-scroll');
    else
        scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/* ================== Dark Light Theme ================ */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-toggle-right';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme)? 'bx-toggle-left' : 'box-toggle-right';

// We obtain the current theme that the interface has by validation
if (selectedTheme) {
    // if validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    document.body.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme);
} 

themeButton.addEventListener('click', () => {
    // Add or remove the / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme)

    // We save the theme and the current icon that the user choose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});