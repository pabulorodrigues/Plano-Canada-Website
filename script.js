
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





 









 




   


 






 
 



    






























/*

.addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
); 

*/