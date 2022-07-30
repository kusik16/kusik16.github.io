const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    closeElem = document.querySelector(".menu__close");
    overlay = document.querySelector(".menu__overlay");
    links = document.querySelectorAll(".menu__link");
    mybutton = document.querySelector(".pageup");
    counters = document.querySelectorAll(".skills__ratings-counter"),
    lines = document.querySelectorAll(".skills__ratings-line span");

hamburger.addEventListener("click", () => {
    menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
    menu.classList.remove("active");
});

overlay.addEventListener("click", () => {
    menu.classList.remove("active");
});

mybutton.addEventListener("click", topFunction);

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

links.forEach((item) => {
    item.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

//Get the button:

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 1500 ||
        document.documentElement.scrollTop > 1500
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
