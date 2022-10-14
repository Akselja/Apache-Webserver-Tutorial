//--Dark mode section--
const darkMode = document.querySelector(".darkmodeButton");
const textTarget = document.querySelectorAll("h1, h2, p, a");
const navbar = document.querySelector("#navbar");
const body = document.querySelector("body");
const dropdown = document.querySelector("#jumpDiv");
const dropdownItem = document.querySelectorAll(".jumpLink");

//Adds 
darkMode.addEventListener("click", () => {
    if (darkMode.textContent === "Dark Mode") {
        darkMode.textContent = "Light Mode";
    } else if (darkMode.textContent === "Light Mode") {
        darkMode.textContent = "Dark Mode";
    }
    dropdown.classList.toggle("darkmodeBackground");
    navbar.classList.toggle("darkmodeBackground");
    body.classList.toggle("darkmodeBackground");
    textTarget.forEach(e => e.classList.toggle("darkmodeText"));
});

//--Jump dropdown section--
const jumpButton = document.querySelector(".jumpButton");

//Dropdown animation and triggering
let bool = true;
jumpButton.addEventListener("click", e => {
    //Logic to get the slideup to work each time
    dropdown.classList.remove("slideUp");
    bool = !bool;
    if (bool === true) {
        dropdown.classList.add("slideUp");
    }
    
    //Logic to get the hide button to syncronize with the slideup animation whenever necessary
    if (bool === true) {
        setTimeout(() => {
            dropdown.classList.toggle("hide");
        }, 300);
    } else {
        dropdown.classList.toggle("hide");
    }
    dropdown.classList.toggle("slideDown");
});