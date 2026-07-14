//javascript

const works = [
    {
        image: "images/IYKYK.jpg"
    },

    {
        image: "images/oops!.jpg"
    },

    {
        image: "images/heart.jpg"
    },

    {
        image: "images/20250507.jpg"
    },

    {
        image: "images/20250625.png"
    },

    {
        image: "images/toranpu.png"
    },

    {
        image: "images/kurisumasu.png"
    },

    {
        image: "images/weather.gif"
    },

    {
        image: "images/card1.png"
    }
];

let current = 0;

const image = document.getElementById("workImage");

function showWork() {
    image.src = works[current].image;
}

document.querySelector(".next").onclick = () => {
    console.log(current);

    current++;

    if (current >= works.length) {
        current = 0;
    }

    showWork();
}

document.querySelector(".prev").onclick = () => {

    current--;

    if (current < 0) {
        current = works.length - 1;
    }

    showWork();
}

showWork();
