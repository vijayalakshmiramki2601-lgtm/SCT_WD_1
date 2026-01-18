// Active menu
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

// Theme toggle
document.getElementById("themeBtn").addEventListener("click", () => {
    document.body.classList.toggle("alt");
});