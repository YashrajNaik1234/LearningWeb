const slides = document.querySelectorAll(".slides img");
let slideind = 0;
let intervalid = null;

//initializeslider();
document.addEventListener("DOMContentLoaded",initializeslider);

function initializeslider(){
    if(slides.length > 0){
        slides[slideind].classList.add("displayslide");
        intervalid = setInterval(nextslide, 5000);
    }
}

function showslide(index){
    if(index >= slides.length){
        slideind = 0;
    }
    else if(index < 0){
        slideind = slides.length - 1;
    }

    slides.forEach(slide =>{
        slide.classList.remove("displayslide");
    });
    slides[slideind].classList.add("displayslide");
}

function prevslide(){
    clearInterval(intervalid);
    slideind--;
    showslide(slideind);
}

function nextslide(){
    slideind++;
    showslide(slideind);
}