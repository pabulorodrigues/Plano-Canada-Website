
 /* Translation */
 


 const flagsElement = document.getElementById("flags");

 const textsToChange = document.querySelectorAll("[data-section]");
 
 const changeLanguage = async (language) => {
     const requestJson = await fetch(`./languages/${language}.json`);
     const texts = await requestJson.json();
 
     for (const textToChange of textsToChange) {
         const section = textToChange.dataset.section;
         const value = textToChange.dataset.value;
 
 
         textToChange.innerHTML = texts[section][value];
 
     }
 };
 
 flagsElement.addEventListener("click", (e) => {
     changeLanguage(e.target.parentElement.dataset.language);

 });


 










 /* menu */
const primaryNav = document.querySelector('.nav-list');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true );
        document.documentElement.style.overflow = 'hidden';
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        document.documentElement.style.overflow = 'auto';
        navToggle.setAttribute('aria-expanded', false );
    }


    
});




















 







 




/*
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
    }

 

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }

        return this;

    }
}

const mobileNavbar = new MobileNavbar( 
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);


mobileNavbar.init();
/*


/*
document.querySelector(".mobile-menu").addEventListener("click", () =>
document.documentElement.style.overflow = 'hidden'
 );*/
































 



/*

document.body.onresize = function() {
    if (document.body.clientWidth <= 1003) {
        document.querySelector(".container").classList.add("rize-hamburguer")
    }else{
        document.querySelector(".container").classList.remove("rize-hamburguer")
        document.querySelector(".container").classList.remove("show-menu");
    }
};


window.onload = function() {
    if (document.body.clientWidth <= 1000) {
        document.querySelector(".container").classList.add("rize-hamburguer")
    }else{
        document.querySelector(".container").classList.remove("rize-hamburguer")
        
    }
  };

document.querySelector(".hamburguer").addEventListener("click", () =>
 document.querySelector(".container").classList.toggle("show-menu")

);

document.querySelector(".img-wrapper").addEventListener("click", () =>
 document.querySelector(".container").classList.remove("show-menu")

);

 document.querySelector(".banner").addEventListener("click", () =>
 document.querySelector(".container").classList.remove("show-menu")

 ); */
   


 






 
 



    






























/*

.addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
); 

*/