console.log('Hello!')

document.querySelector('.navbar');

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if (top >= 17){
        document.querySelector(".container").classList.add('change-color')
    }else{
        document.querySelector(".container").classList.remove('change-color');
    } 

}

document.querySelector(".menu-social").addEventListener("click", () =>
 document.querySelector(".container").classList.toggle("show-social")
); 

 


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

document.querySelector(".navbar").addEventListener("click", () =>
 document.querySelector(".container").classList.remove("show-menu")

);

 document.querySelector(".banner").addEventListener("click", () =>
 document.querySelector(".container").classList.remove("show-menu")

 );

 /*.addEventListener("click", () =>*/

 /*
document.body.onresize = function() {
    if (document.body.clientWidth < 1000) {
        document.querySelector(".hamburguer").classList.add("show-hamburguer")
    }else{
        document.querySelector(".hamburguer").classList.remove("show-hamburguer");
    } 

}; */
    






























/*

.addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
); 

*/