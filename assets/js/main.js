/*=============== SHOW MENU ===============*/
const showMenu=(toggleId,navId)=>{
    const toggle=document.getElementById(toggleId),
    nav=document.getElementById(navId);
    
    // Validate that variables exist
    if(toggle&&nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu');
        });
    }
}

showMenu('navToggle','navMenu');

/*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu=document.getElementById('navMenu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach((link)=>{
    link.addEventListener('click',linkAction);
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections=document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY=window.pageYOffset;

    sections.forEach((current)=>{
        const sectionHeight=current.offsetHeight;
        const sectionTop=current.offsetTop-50;
        const sectionId=current.getAttribute('id');
        
        if(scrollY> sectionTop && scrollY<= sectionTop+sectionHeight){
            document.querySelector(`.nav__menu a[href*="${sectionId}"]`).classList.add('active-link')
    }
    else {
        document.querySelector(`.nav__menu a[href*="${sectionId}"]`).classList.remove('active-link')
    }
})
}

window.addEventListener('scroll',scrollActive);

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header=document.getElementById('header');
    (this.scrollY>=80)? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp(){
    const scrollUp=document.getElementById('scrollUp');
    (this.scrollY>=560) ? scrollUp.classList.add('show-scroll')
    :scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll',scrollUp);
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("themeButton");
const darkTheme = "dark-theme";
const iconDark = "bx-toggle-right";
const iconLight = "bx-toggle-left";

// Get saved theme/icon from localStorage
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Get current theme/icon
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconDark) ? iconDark : iconLight;

// Apply saved settings (if any)
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList.remove(iconDark, iconLight);
  themeButton.classList.add(selectedIcon === iconDark ? iconDark : iconLight);
}

// Toggle theme on button click
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconDark);
  themeButton.classList.toggle(iconLight);

  // Save the new theme and icon
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
