const arrImages = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
];

const slider = document.querySelector(".slider");

for (let i=0; i < arrImages.length; i++) {
    let eleImg = document.createElement("img");
    eleImg.src = arrImages[i];
    eleImg.classList.add("slider-img");

    if (i==0) {
        eleImg.classList.add("active");
    }

    slider.append(eleImg);
}

const list = document.querySelectorAll(".slider-img");

let activeIndex = 0;

let btnDown = document.querySelector(".down");
btnDown.addEventListener("click", function() {

    list[activeIndex].classList.remove("active");
    activeIndex++;
    list[activeIndex].classList.add("active");
});

let btnUp = document.querySelector(".up");
btnUp.addEventListener("click", function() {

    list[activeIndex].classList.remove("active");
    activeIndex--;
    list[activeIndex].classList.add("active");
});

