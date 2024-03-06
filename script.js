document.addEventListener("DOMContentLoaded", () => {
    let previousScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
        let currentScrollY = window.scrollY;
        if (previousScrollY > currentScrollY) {
            document.getElementById("header").style.top = '0';
        } else {
            document.getElementById("header").style.top = "-7vh";
            document.getElementById("header").addEventListener("mouseover", () => {
                document.getElementById("header").style.top = "0vh";
            })
        }
        previousScrollY = currentScrollY;
    });

    document.querySelectorAll(".input-field").forEach((element, id) => {
        element.addEventListener("focus", () => {
            if (id === 0) {
                document.getElementById("first-text").style = "transform: translateY(-70%); background: #533592; z-index: 2; color:white";
            } else if (id === 1) {
                document.getElementById("second-text").style = "transform: translateY(-70%); background-color: #533592; z-index:  2; color:white";
            }
        });

        element.addEventListener("blur", () => {
            if (!element.value.trim() && id === 0) {
                document.getElementById("first-text").style = "transform: translateY(50%); background: transparent; z-index: 0;";
            } else if (!element.value.trim() && id === 1) {
                document.getElementById("second-text").style = "transform: translateY(50%); background: transparent; z-index: 0;";
            }
        });
    });

    let textarea = document.getElementById("text-area");

    textarea.addEventListener("focus", () => {
        if (!textarea.value.trim()) {
            document.getElementById("three-text").style = "transform: translateY(-70%); background: #533592; z-index: 2; color: #FFF";
        }
    });

    document.getElementById("text-area").addEventListener("blur", () => {
        if (!textarea.value.trim()) {
            document.getElementById("three-text").style = "transform: translateY(50%); background: transparent; z-index: 0;";
        }
    });

    document.querySelector(".menu").addEventListener("click", ()=>{
        document.querySelector(".nav-bar").classList.add("active")
    })
    document.querySelector(".close").addEventListener("click", ()=>{
        document.querySelector(".nav-bar").classList.remove("active")
    })
    document.querySelectorAll(".element").forEach((element)=>{
        element.addEventListener("click", ()=>{
            document.querySelector(".nav-bar").classList.remove("active")
        })
    })
});
 