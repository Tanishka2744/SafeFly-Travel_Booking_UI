// Login / Signup
document.querySelector(".logsign").addEventListener("click", () => {
    alert("Login & Signup feature coming soon 🚀");
});

// Smooth scroll
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
