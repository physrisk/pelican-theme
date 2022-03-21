function doSearch() {
    let fieldObj;
    fieldObj=document.querySelector("#searchInput");
    fieldObj.value=fieldObj.value+" site:rf.mokslasplius.lt";
    return true;
}

function onLoad() {
    fetch("/theme/img/main-bg.svg")
        .then(() => {
                let bodyObj;
                bodyObj=document.querySelector("body");
                bodyObj.style.backgroundImage="url(\"/theme/img/main-bg.svg\")";
                bodyObj.style.backgroundRepeat="repeat-y";
                bodyObj.style.backgroundPosition="center top";
                bodyObj.style.backgroundSize="100% auto";
            });
}

document.addEventListener("DOMContentLoaded", () => onLoad(), false);

window.MathJax={tex:{tags:'ams'}};
