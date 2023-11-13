let mouseCursor = document.querySelector(".cursor");
let SmouseCursor = document.querySelector(".cursorSmall");
let BmouseCursor = document.querySelector(".cursorBig");
let navLinks = document.querySelectorAll(".menu li");
let bodyText = document.querySelectorAll(".hoverE");

window.addEventListener("mousemove", cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
    SmouseCursor.style.top = e.pageY + "px";
    SmouseCursor.style.left = e.pageX + "px";
    BmouseCursor.style.top = e.pageY + "px";
    BmouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
        BmouseCursor.classList.add("link-grow2");
        mouseCursor.style.border = "none";
        SmouseCursor.style.opacity = "0";
        BmouseCursor.style.opacity = "1";
    });
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
        BmouseCursor.classList.remove("link-grow2");

        mouseCursor.style.border = "1px solid #FFF";
        SmouseCursor.style.opacity = "1";
        BmouseCursor.style.opacity = "1";
    });
});

bodyText.forEach(link => {
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");

        BmouseCursor.classList.add("link-grow2");

        mouseCursor.style.border = "none";
        SmouseCursor.style.opacity = "0";
        BmouseCursor.style.opacity = "1";
    });
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");

        BmouseCursor.classList.remove("link-grow2");
        mouseCursor.style.border = "1px solid #FFF";
        SmouseCursor.style.opacity = "1";
        BmouseCursor.style.opacity = "1";
    });
});
