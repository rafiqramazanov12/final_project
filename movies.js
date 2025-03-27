let arr = [
    {
        id: 1,
        img: "img.png",
        date: 2019,
        channel: "Movie",
        text: "PG",
        title: "The Great Lands",
    },
    {
        id: 2,
        img: "img_second.png",
        date: 2019,
        channel: "TV Series",
        text: "PG",
        title: "The Diary",
    },
    {
        id: 3,
        img: "img_thrid.png",
        date: 2017,
        channel: "Movie",
        text: "18+",
        title: "Earth’s Untouched",
    },
    {
        id: 4,
        img: "img_fourth.png",
        date: 2019,
        channel: "Movie",
        text: "E",
        title: "No Land Beyond",
    },
    {
        id: 5,
        img: "img_fifth.png",
        date: 2016,
        channel: "TV Series",
        text: "PG",
        title: "During The Hunt",
    },
    {
        id: 6,
        img: "img_sixth.png",
        date: 2016,
        channel: "Movie",
        text: "TV Series",
        title: "Autosport The Series",
    },
    {
        id: 7,
        img: "img_seventh.png",
        date: 2017,
        channel: "Movie",
        text: "E",
        title: "Same Answer II",
    },
    {
        id: 8,
        img: "img_eighth.png",
        date: 2016,
        channel: "TV Series",
        text: "PG",
        title: "Below Echo",
    },
    {
        id: 9,
        img: "img_nineth.png",
        date: 2015,
        channel: "TV Series",
        text: "E",
        title: "The Rockies",
    }, {
        id: 10,
        img: "tenth_img.png",
        date: 2017,
        channel: "Movie",
        text: "PG",
        title: "Relentless",
    }, {
        id: 11,
        img: "eleventh_img.png",
        date: 2018,
        channel: "TV Series",
        text: "18+",
        title: "Community of Ours",
    },
    {
        id: 12  ,
        img: "twelfth_img.png",
        date: 2015,
        channel: "Movie",
        text: "PG",
        title: "Van Life",
    },
    {
        id: 13,
        img: "img_thirteenth.png",
        date: 2021,
        channel: "Movie",
        text: "PG",
        title: "The Heiress",
    },
    {
        id: 14,
        img: "img_fourteenth.png",
        date: 2017,
        channel: "Movie",
        text: "18+",
        title: "Off the Track",
    },
    {
        id: 15,
        img: "img_fifteenth.png",
        date: 2017,
        channel: "Movie",
        text: "E",
        title: "Whispering Hill",
    },
    {
        id: 16,
        img: "img_sixteenth.png",
        date: 2013,
        channel: "TV Series",
        text: "PG",
        title: "112",
    },
    {
        id: 17,
        img: "img_seventeenth.png",
        date: 2017,
        channel: "Movie",
        text: "E",
        title: "Lone Heart",
    },
    {
        id: 18,
        img: "img_eighteenth.png",
        date: 2018,
        channel: "TV Series",
        text: "PG",
        title: "Production Line",
    },
    {
        id: 19,
        img: "img_nineteenth.png",
        date: 2016,
        channel: "TV Series",
        text: "E",
        title: "Dogs",
    },
    {
        id: 20,
        img: "img_twentieth.png",
        date: 2020,
        channel: "TV Series",
        text: "PG",
        title: "Asia in 24 Days",
    },
    {
        id: 21,
        img: "img_twentyfirst.png",
        date: 2016,
        channel: "TV Series",
        text: "PG",
        title: "The Tasty Tour",
    },
    {
        id: 22,
        img: "img_twentysecond.png",
        date: 2017,
        channel: "Movie",
        text: "18+",
        title: "Darker",
    },
    {
        id: 23,
        img: "img_twentythird.png",
        date: 2018,
        channel: "TV Series",
        text: "18+",
        title: "Unresolved Cases",
    },
    {
        id: 24,
        img: "img_twentyfourth.png",
        date: 2017,
        channel: "Movie",
        text: "18+",
        title: "Mission: Saturn",
        icon:"img_logo"
    },

];  



let container = document.getElementById("container");
let searchBox = document.querySelector(".search-box");


function displayCards(filteredArr) {
    container.innerHTML = ""; 
    filteredArr.forEach(item => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img id="container_img" src="/images/${item.img}" alt="${item.title}">

            <div id="container_box_parent">
                <div id="container_box">
                    <p id="container_date">${item.date}</p>
                    <p id="container_channel">${item.channel}</p>
                    <p id="container_text">${item.text}</p>
                </div>
                <h2 id="container_title">${item.title}</h2>
            </div>
        `;
        container.appendChild(card);
    });
}

displayCards(arr);

searchBox.addEventListener("input", (e) => {
    let searchText = e.target.value.toLowerCase();
    let filteredArr = arr.filter(item => item.title.toLowerCase().includes(searchText));
    displayCards(filteredArr);
});
