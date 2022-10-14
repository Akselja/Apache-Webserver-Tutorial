//Dark mode section
const darkMode = document.querySelector(".darkmodeButton");
const textTarget = document.querySelectorAll("h1, h2, p, a");
const navbar = document.querySelector("#navbar");
const body = document.querySelector("body");
const dropdown = document.querySelector("#jumpDiv");
const dropdownItem = document.querySelectorAll(".jumpLink");

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

//Jump dropdown section
const jumpButton = document.querySelector(".jumpButton");

jumpButton.addEventListener("click", e => {
    dropdown.classList.toggle("hide");
});