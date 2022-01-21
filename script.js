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



























/*

.addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
); 

*/