
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
const closeNav = document.querySelector('.container');

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

/*close menu aside if touch in body*/

closeNav.addEventListener("click", () =>
  primaryNav.setAttribute('data-visible', false)
);

closeNav.addEventListener("click", () =>
 document.documentElement.style.overflow = 'auto'

);

closeNav.addEventListener("click", () =>
 navToggle.setAttribute('aria-expanded', false)
);

/*close menu aside if touch in menu itens*/

primaryNav.addEventListener("click", () =>
 primaryNav.setAttribute('data-visible', false)
)

primaryNav.addEventListener("click", () =>
 document.documentElement.style.overflow = 'auto'
);

primaryNav.addEventListener("click", () =>
 navToggle.setAttribute('aria-expanded', false)
);

 







 





   


 






 
 



    






























/*

.addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
); 

*/