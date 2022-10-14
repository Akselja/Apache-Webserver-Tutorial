
//Dark mode section
const darkMode = document.querySelector(".darkmodeButton");
const textTarget = document.querySelectorAll("h1, h2, p, a");
const navbar = document.querySelector("#navbar");
const body = document.querySelector("body");

darkMode.addEventListener("click", () => {
    if (darkMode.textContent === "Dark Mode") {
        darkMode.textContent = "Light Mode";
    } else if (darkMode.textContent === "Light Mode") {
        darkMode.textContent = "Dark Mode";
    }
    navbar.classList.toggle("darkmodeBackground");
    body.classList.toggle("darkmodeBackground");
    textTarget.forEach(e => e.classList.toggle("darkmodeText"));
});

//Jump dropdown section
const jumpButton = document.querySelector(".jumpButton");
const dropdown = document.querySelector("#jumpDiv");

jumpButton.addEventListener("click", e => {
    dropdown.classList.toggle("hide");
});

