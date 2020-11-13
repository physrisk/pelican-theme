function doDuckSearch() {
    let fieldObj;
    fieldObj=document.querySelector("#searchInput");
    fieldObj.value="site:rf.mokslasplius.lt "+fieldObj.value;
    return true;
}

function onLoad() {
    fetch("/theme/img/main-bg.svg")
        .then(()=> {
                let bodyObj;
                bodyObj=document.querySelector("body");
                bodyObj.style.backgroundImage="url(\"/theme/img/main-bg.svg\")";
                bodyObj.style.backgroundRepeat="repeat-y";
                bodyObj.style.backgroundPosition="center top";
                bodyObj.style.backgroundSize="100% auto";
            });
    fetch("/sidebar-widgets.html")
        .then((response) => response.text())
        .then((str) => document.querySelector("#js-load-sidebar").innerHTML=str);
}

document.addEventListener("DOMContentLoaded", () => onLoad(), false);
