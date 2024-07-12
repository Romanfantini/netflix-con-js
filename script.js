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
    imgUrl: "./assets/18.png",
    alt: "film 18",
  },
  {
    imgUrl: "./assets/9.png",
    alt: "film 9",
  },
  {
    imgUrl: "./assets/5.png",
    alt: "film 5",
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
    imgUrl: "./assets/18.png",
    alt: "film 18",
  },
  {
    imgUrl: "./assets/9.png",
    alt: "film 9",
  },
  {
    imgUrl: "./assets/5.png",
    alt: "film 5",
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


/**costanti per la creazione della navbar */
const offCanvas = document.getElementById("offcanvasMenù");
const navbar = document.getElementById("navbar");

/*costanti per la creazione dello slideShow*/
const slideshow1 = document.getElementById("slideshow1");
const slideshow2 = document.getElementById("slideshow2");
const slideshow3 = document.getElementById("slideshow3");

/*creo funzione per creare offCanvas laterale*/

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

/*ittero l'array */
navbarList.forEach(canvasItem => {
  createOffCanvas(canvasItem)
})
/*creo funzione per creare la navbar list con link */
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
/*ittero l'array */

navbarList.forEach(navItem => {
    createNavbartest(navItem)
})

/*creo funzione per creare lo slideshow della row 1*/
const createSlide1 = (imgSlide) => {
    const divSwiper = document.createElement("div");
    divSwiper.setAttribute("class", "swiper-slide")

    const filmCard = document.createElement("div");
    filmCard.setAttribute("class","filmCard")
    
    const img = document.createElement("img");
    
    img.src = imgSlide.imgUrl
    img.alt = imgSlide.alt
    img.setAttribute("class", "h-100 w-100 ")

    filmCard.append(img)
    divSwiper.append(filmCard)
    slideshow1.appendChild(divSwiper)    
}

 
    
/*ittero l'array 1 */

imgRow1.forEach(row1 => {
    createSlide1(row1)
})
/*creo funzione per creare l'array 2*/
const createSlide2 = (imgSlide) => {
  const divSwiper = document.createElement("div");
  divSwiper.setAttribute("class", "swiper-slide")

  const filmCard = document.createElement("div");
  filmCard.setAttribute("class","filmCard")
  
  const img = document.createElement("img");
  
  img.src = imgSlide.imgUrl
  img.alt = imgSlide.alt
  img.setAttribute("class", "h-100 w-100 ")

  filmCard.append(img)
  divSwiper.append(filmCard)
  slideshow2.appendChild(divSwiper)    
}
/*ittero la row 2 di immagini */
imgRow2.forEach(row2 => {
  createSlide2(row2)
})

const createSlide3 = (imgSlide) => {
  const divSwiper = document.createElement("div");
  divSwiper.setAttribute("class", "swiper-slide")

  const filmCard = document.createElement("div");
  filmCard.setAttribute("class","filmCard")
  
  const img = document.createElement("img");
  
  img.src = imgSlide.imgUrl
  img.alt = imgSlide.alt
  img.setAttribute("class", "h-100 w-100 ")

  filmCard.append(img)
  divSwiper.append(filmCard)
  slideshow3.appendChild(divSwiper)    
}
/*ittero la row 2 di immagini */
imgRow3.forEach(row2 => {
  createSlide3(row2)
})



/*js di swiper, ho messo un loop automatico con un leggero ritardo, senza togliere quello manuale */
const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: "auto",
    spaceBetween: 50,
     autoplay: {
      deelay: 1,
     },
   
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 1,
      slideShadows: true,
    },
    

    
    
  });