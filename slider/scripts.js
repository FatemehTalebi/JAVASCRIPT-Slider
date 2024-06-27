var next=document.querySelector('.next')
var prev=document.querySelector('.prev')
var slides=document.getElementsByClassName("slide")
var n=0
function noActive (){
    for (let i=0;i<slides.length;i++){
        slides[i].classList.remove('active')
    }
}

function displayNon(){
    for (let i=0;i<slides.length;i++){
        slides[i].style.display='none'
    }
}

// next button
next.addEventListener('click', function (){
    n++
    if (n>slides.length-1){
        n=0
    }
    displayNon()
    noActive();
    slides[n].style.display='block'
    slides[n].classList.add='active'


});
// prev button
prev.addEventListener('click', function (){
    n--
    if (n<0){
        n=slides.length-1
    }
    displayNon()
    noActive();
    slides[n].style.display='block'
    slides[n].classList.add='active'


});

setInterval(function(){
    n++;
    if (n>slides.length-1){
        n=0
    }
    displayNon()
    noActive();
    slides[n].style.display='block'
    slides[n].classList.add='active'
},3000)

function slide(index){
    n=index
    if (n<0){
        n=slides.length-1
    }
    displayNon()
    noActive();
    slides[n].style.display='block'
    slides[n].classList.add('active')
}
