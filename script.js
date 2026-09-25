// ==============================
// ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК
// ==============================

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(function(tab) {

    tab.addEventListener("click", function() {

        // Получаем название вкладки
        const tabName = tab.getAttribute("data-tab");

        // Убираем активное состояние
        tabs.forEach(function(item) {
            item.classList.remove("active");
        });

        contents.forEach(function(content) {
            content.classList.remove("active");
        });

        // Делаем выбранную вкладку активной
        tab.classList.add("active");

        const selectedContent =
            document.getElementById(tabName);

        if (selectedContent) {
            selectedContent.classList.add("active");
        }

    });

});


// ==============================
// ТЁМНАЯ ТЕМА
// ==============================

const themeButton =
    document.getElementById("themeButton");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeButton.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


// ==============================
// СОХРАНЕНИЕ ТЕМЫ
// ==============================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeButton.textContent = "☀️";
}


// ==============================
// КОНСОЛЬ
// ==============================

console.log("Resume application started");
console.log("Аружан Амангельдиева");
console.log("Frontend: HTML + CSS + JavaScript");
console.log("Backend: Dart");