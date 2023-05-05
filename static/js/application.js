function doSearch() {
    let fieldObj;
    fieldObj = document.querySelector("#searchInput");
    fieldObj.value = fieldObj.value + " site:rf.mokslasplius.lt";
    return true;
}

function getBackground() {
    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        fetch("/theme/img/main-bg-dark.svg").then(() => {
            let bodyObj;
            bodyObj = document.querySelector("body");
            bodyObj.style.backgroundImage =
                'url("/theme/img/main-bg-dark.svg")';
            bodyObj.style.backgroundRepeat = "repeat-y";
            bodyObj.style.backgroundPosition = "center top";
            bodyObj.style.backgroundSize = "100% auto";
        });
    } else {
        fetch("/theme/img/main-bg.svg").then(() => {
            let bodyObj;
            bodyObj = document.querySelector("body");
            bodyObj.style.backgroundImage = 'url("/theme/img/main-bg.svg")';
            bodyObj.style.backgroundRepeat = "repeat-y";
            bodyObj.style.backgroundPosition = "center top";
            bodyObj.style.backgroundSize = "100% auto";
        });
    }
}

document.addEventListener("DOMContentLoaded", () => getBackground(), false);
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => getBackground());

window.MathJax = { tex: { tags: "ams" } };
