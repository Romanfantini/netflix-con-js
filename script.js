const imgRow1 = [
  {
    imgUrl: "./assets/1.png",
    alt: "film 1",
  },
  {
    imgUrl: "./assets/2.png",
    alt: "film 2",
  },
  {
    imgUrl: "./assets/3.png",
    alt: "film 3",
  },
  {
    imgUrl: "./assets/4.png",
    alt: "film 4",
  },
  {
    imgUrl: "./assets/5.png",
    alt: "film 5",
  },
  {
    imgUrl: "./assets/6.png",
    alt: "film 6",
  },
  {
    imgUrl: "./assets/7.png",
    alt: "film 7",
  },
  {
    imgUrl: "./assets/8.png",
    alt: "film 8",
  },
];

const imgRow2 = [
  {
    imgUrl: "./assets/9.png",
    alt: "film 9",
  },
  {
    imgUrl: "./assets/5.png",
    alt: "film 5",
  },
  {
    imgUrl: "./assets/8.png",
    alt: "film 8",
  },
  {
    imgUrl: "./assets/12.png",
    alt: "film 12",
  },
  {
    imgUrl: "./assets/18.png",
    alt: "film 18",
  },
  {
    imgUrl: "./assets/15.png",
    alt: "film 15",
  },
  {
    imgUrl: "./assets/7.png",
    alt: "film 7",
  },
  {
    imgUrl: "./assets/1.png",
    alt: "film 1",
  },
];

const imgRow3 = [
  {
    imgUrl: "./assets/9.png",
    alt: "film 9",
  },
  {
    imgUrl: "./assets/10.png",
    alt: "film 10",
  },
  {
    imgUrl: "./assets/11.png",
    alt: "film 11",
  },
  {
    imgUrl: "./assets/12.png",
    alt: "film 12",
  },
  {
    imgUrl: "./assets/13.png",
    alt: "film 13",
  },
  {
    imgUrl: "./assets/14.png",
    alt: "film 14",
  },
  {
    imgUrl: "./assets/15.png",
    alt: "film 15",
  },
  {
    imgUrl: "./assets/16.png",
    alt: "film 16",
  },
];

const navbarList = [
  {
    text: "Home",
    link: "#home",
  },
  {
    text: "Tv Shows",
    link: "#tvshows",
  },
  {
    text: "Movies",
    link: "#movies",
  },
  {
    text: "Recently Added",
    link: "#recentlyadded",
  },
  {
    text: "My List",
    link: "#mylist",
  },
];



const offCanvas = document.getElementById("offcanvasMenù");
const navbar = document.getElementById("navbar");
const slideshow1 = document.getElementById("slideshow1")

const createOffCanvas = (canvasElement) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  
  a.setAttribute("href", canvasElement.link)
  a.setAttribute("class", "nav-link")
  a.textContent = canvasElement.text

  li.append(a)
  li.setAttribute("class", "h5")
  offCanvas.appendChild(li)
}

navbarList.forEach(canvasItem => {
  createOffCanvas(canvasItem)
})

const createNavbartest = (navbartext) => {
    const li = document.createElement("li");
    const a =document.createElement("a");

    a.setAttribute("class", "nav-link text-white ")
    a.setAttribute("href", navbartext.link)
    a.innerText = navbartext.text

    li.append(a)
    li.setAttribute("class", "fw-bold h5")
    navbar.appendChild(li)
}

navbarList.forEach(navItem => {
    createNavbartest(navItem)
})


const createSlide1 = (imgSlide1) => {
    const divSwiper = document.createElement("div");
    divSwiper.setAttribute("class", "swiper-slide")

    const filmCard = document.createElement("div");
    filmCard.setAttribute("class","filmCard")
    
    const img = document.createElement("img");
    
    img.src = imgSlide1.imgUrl
    img.alt = imgSlide1.alt
    img.setAttribute("class", "h-100 w-100 object-fit-fil")

    filmCard.append(img)
    divSwiper.append(filmCard)
    slideshow1.appendChild(divSwiper)    
}

imgRow1.forEach(row1 => {
    createSlide1(row1)
})


const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: "auto",
    spaceBetween: 20,
  });