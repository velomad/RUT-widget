const elem = document.createElement("div");
document.body.appendChild(elem);
elem.classList.add("rut-container");
elem.style.position = "absolute";
elem.style.right = 0;
elem.style.top = 0;
elem.style.left = 0;
elem.style.zIndex = 999999;

const headId = document.getElementsByTagName("head")[0];

const tailwindLink = document.createElement("link");
headId.appendChild(tailwindLink);
tailwindLink.href =
    "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";
tailwindLink.type = "text/css";
tailwindLink.rel = "stylesheet";
