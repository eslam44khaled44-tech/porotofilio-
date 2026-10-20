
// =========================
// 1. Select Elements
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const languageBtn = document.getElementById("languageBtn");


// =========================
// 2. Mobile Navigation
// =========================

menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuBtn.setAttribute("aria-expanded", isOpen);

    menuBtn.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});


// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});


// Close the menu when clicking outside it

document.addEventListener("click", (event) => {
    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedMenuButton = menuBtn.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});


// =========================
// 3. Language Switcher
// =========================

let currentLanguage = localStorage.getItem("portfolioLanguage") || "en";


function changeLanguage(language) {

    currentLanguage = language;

    // Change page language and direction

    document.documentElement.lang = language;

    document.documentElement.dir =
        language === "ar" ? "rtl" : "ltr";

    document.body.classList.toggle(
        "arabic",
        language === "ar"
    );


    // Update all elements that have language attributes

    const translatedElements = document.querySelectorAll(
        "[data-en][data-ar]"
    );

    translatedElements.forEach((element) => {

        const translatedText = element.dataset[language];

        if (translatedText !== undefined) {
            element.textContent = translatedText;
        }

    });


    // Update language button

    languageBtn.textContent =
        language === "en" ? "AR" : "EN";


    // Update browser tab title

    document.title =
        language === "en"
            ? "Asmaa Khaled | Front-End Developer"
            : "أسماء خالد | مطورة واجهات أمامية";


    // Save language preference

    localStorage.setItem("portfolioLanguage", language);
}


// Switch between Arabic and English

languageBtn.addEventListener("click", () => {

    const newLanguage =
        currentLanguage === "en" ? "ar" : "en";

    changeLanguage(newLanguage);

});


// =========================
// 4. Current Year
// =========================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =========================
// 5. Initialize Website
// =========================
