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
// =========================
// TAB 1 — 1-ТАПСЫРМА
// =========================

const domTitle = document.getElementById("domTitle");

if (domTitle) {
    domTitle.textContent = "Сәлем, әлем!";
}


// Жаңа div жасау
const createButton = document.getElementById("createButton");

if (createButton) {

    createButton.addEventListener("click", function () {

        const newDiv = document.createElement("div");

        newDiv.className = "new-div";

        newDiv.textContent = "Мен жаңа элементпін";

        document.getElementById("tab1").appendChild(newDiv);

    });

}


// old-element элементін жою
const oldElement = document.querySelector(".old-element");

if (oldElement) {
    oldElement.remove();
}


// Абзацты басқанда түсі мен өлшемін өзгерту
const changeParagraph =
    document.getElementById("changeParagraph");

if (changeParagraph) {

    changeParagraph.addEventListener("click", function () {

        changeParagraph.style.color = "blue";
        changeParagraph.style.fontSize = "25px";

    });

}


// =========================
// TAB 2 — 2-ТАПСЫРМА
// =========================

const myElement =
    document.getElementById("myElement");

const activeButton =
    document.getElementById("activeButton");

const classListText =
    document.getElementById("classListText");


if (activeButton) {

    activeButton.addEventListener("click", function () {

        myElement.classList.toggle("active");

        console.log(myElement.classList);

        classListText.textContent =
            "Кластар: " + myElement.className;

    });

}