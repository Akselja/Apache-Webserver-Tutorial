
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
    navbar.classList.toggle("darkmodeNavbar");
    body.classList.toggle("darkmodeBackground");
    textTarget.forEach(e => e.classList.toggle("darkmodeText"));
});