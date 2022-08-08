const mobileToggle = document.querySelector(".mobile-toggle")

const navLinks = document.querySelector(".nav-links")


mobileToggle.addEventListener("click", () => {
    const isToggled = navLinks.getAttribute("data-nav-toggled")

    if (isToggled === "false") {
        navLinks.setAttribute("data-nav-toggled", "true")
        mobileToggle.setAttribute("aria-expanded", "true")
    } else {
        navLinks.setAttribute("data-nav-toggled", "false")
        mobileToggle.setAttribute("aria-expanded", "false")

    }
})