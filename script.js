
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

 );

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


 





 









 




   


 






 
 



    






























/*

.addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
); 

*/