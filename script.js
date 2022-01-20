console.log('Hello!')

document.querySelector('.navbar');

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if (top >= 17){
        document.querySelector(".container").classList.add('show-menu')
    }else{
        document.querySelector(".container").classList.remove('show-menu');
    } 

}




























/*

.addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
); 

*/