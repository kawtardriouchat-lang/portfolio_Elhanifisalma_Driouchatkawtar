const prices = {
    "Cheese Cake": "8€",
    "Chocolate Cake": "10€",
    "Peanut Butter Cake": "9€",
    "Tiramisu": "11€",

    "Viande Rôtie": "24€",
    "Pavé de Mulet Noir": "28€",
    "Paella Royale": "30€",
    "Croquettes Croustillantes": "18€",

    "Recette de Fromage Pané": "12€",
    "Porc Rôti": "16€",
    "Ballotine de Saumon": "20€",
    "Bocadillo de Rabo de Vaca": "22€"
};

const items = document.querySelectorAll(".item");

items.forEach(item => {

    const title = item.querySelector("p").textContent;

    const price = document.createElement("span");
    price.classList.add("price");
    price.textContent = prices[title];

    item.appendChild(price);
});

const searchInput = document.createElement("input");

searchInput.type = "text";
searchInput.placeholder = "Search dishes...";

searchInput.style.width = "100%";
searchInput.style.padding = "15px";
searchInput.style.marginBottom = "25px";
searchInput.style.borderRadius = "30px";
searchInput.style.border = "2px solid #a68942";
searchInput.style.fontSize = "18px";
searchInput.style.outline = "none";

const rightPanel = document.querySelector(".right-panel");

rightPanel.prepend(searchInput);


searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    items.forEach(item => {

        const text = item.innerText.toLowerCase();

        if (text.includes(value)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }

    });

});

const sections = document.querySelectorAll(".menu-section, .left-panel");

window.addEventListener("scroll", revealSections);

function revealSections() {

    sections.forEach(section => {

        const windowHeight = window.innerHeight;

        const sectionTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add("show");
        }

    });

}

revealSections();

const loader = document.createElement("div");

loader.id = "loader";

loader.innerHTML = `
    <div class="spinner"></div>
`;

document.body.prepend(loader);


const style = document.createElement("style");

style.innerHTML = `

#loader{
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #f5f1e8;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:9999;
    top:0;
    left:0;
}

.spinner{
    width:70px;
    height:70px;
    border:8px solid #d8cdb8;
    border-top:8px solid #a68942;
    border-radius:50%;
    animation: spin 1s linear infinite;
}

@keyframes spin{
    100%{
        transform: rotate(360deg);
    }
}

.price{
    display:block;
    margin-top:6px;
    color:#a68942;
    font-size:1.1rem;
    font-weight:bold;
}

`;

document.head.appendChild(style);

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.transition = "0.6s";

        setTimeout(() => {
            loader.remove();
        }, 600);

    }, 1200);

});


items.forEach(item => {

    item.addEventListener("mousemove", (e) => {

        const rect = item.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 12;
        const rotateY = (x - centerX) / 12;

        item.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.05)
        `;

    });


    item.addEventListener("mouseleave", () => {

        item.style.transform = `
            rotateX(0)
            rotateY(0)
            scale(1)
        `;

    });

});

items.forEach(item => {

    item.addEventListener("click", () => {

        item.classList.add("clicked");

        setTimeout(() => {
            item.classList.remove("clicked");
        }, 200);

    });

});