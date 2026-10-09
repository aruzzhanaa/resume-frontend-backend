```javascript
document.addEventListener("DOMContentLoaded", function () {
    // =========================
    // ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК
    // =========================

    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    function openTab(tabName, clickedTab) {
        // Убираем активность у всех кнопок и разделов
        tabs.forEach(function (tab) {
            tab.classList.remove("active");
        });

        contents.forEach(function (content) {
            content.classList.remove("active");
        });

        // Активируем выбранную кнопку
        if (clickedTab) {
            clickedTab.classList.add("active");
        }

        // Показываем соответствующий раздел
        const selectedContent = document.getElementById(tabName);

        if (selectedContent) {
            selectedContent.classList.add("active");
        } else {
            console.error("Не найден раздел с id:", tabName);
        }
    }

    tabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
            const tabName = tab.getAttribute("data-tab");
            openTab(tabName, tab);
        });
    });

    // Показываем первую активную вкладку
    const initialTab = document.querySelector(".tab.active") || tabs[0];

    if (initialTab) {
        openTab(initialTab.getAttribute("data-tab"), initialTab);
    }

    console.log("Переключение вкладок подключено");
    console.log("Найдено кнопок:", tabs.length);
console.log("Найдено разделов:", contents.length);

tabs.forEach(function (tab) {
    console.log(
        "Кнопка:",
        tab.textContent.trim(),
        "| data-tab:",
        tab.getAttribute("data-tab")
    );
});

    // =========================
    // СМЕНА ТЕМЫ
    // =========================

    const themeButton = document.getElementById("themeButton");

    if (themeButton) {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark");
            themeButton.textContent = "☀️";
        } else {
            document.body.classList.remove("dark");
            themeButton.textContent = "🌙";
        }

        themeButton.addEventListener("click", function () {
            document.body.classList.toggle("dark");

            const isDark = document.body.classList.contains("dark");

            themeButton.textContent = isDark ? "☀️" : "🌙";
            localStorage.setItem("theme", isDark ? "dark" : "light");
        });
    }

    // =========================
    // ЗАДАНИЕ 1 — DOM
    // =========================

    const domTitle = document.getElementById("domTitle");

    if (domTitle) {
        domTitle.textContent = "Сәлем, әлем!";
    }

    const createButton = document.getElementById("createButton");

    if (createButton) {
        createButton.addEventListener("click", function () {
            const newDiv = document.createElement("div");

            newDiv.className = "new-div";
            newDiv.textContent = "Мен жаңа элементпін";

            const tab1 = document.getElementById("tab1");

            if (tab1) {
                tab1.appendChild(newDiv);
            }
        });
    }

    const oldElement = document.querySelector(".old-element");

    if (oldElement) {
        oldElement.remove();
    }

    const changeParagraph = document.getElementById("changeParagraph");

    if (changeParagraph) {
        changeParagraph.addEventListener("click", function () {
            changeParagraph.style.color = "blue";
            changeParagraph.style.fontSize = "25px";
        });
    }

    // =========================
    // ЗАДАНИЕ 2 — CLASSLIST
    // =========================

    const myElement = document.getElementById("myElement");
    const activeButton = document.getElementById("activeButton");
    const classListText = document.getElementById("classListText");

    if (activeButton && myElement) {
        activeButton.addEventListener("click", function () {
            myElement.classList.toggle("active");

            console.log(myElement.classList);

            if (classListText) {
                classListText.textContent =
                    "Кластар: " + myElement.className;
            }
        });
    }

    console.log("Resume application started");
});
```
