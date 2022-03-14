"strik";

console.log("alright");

// Responesive Nav Bar
const li = document.querySelector(".list");
const menu = document.getElementById("menu");
const nav = document.querySelector(".innerNav");
function menuBar() {
  if (window.getComputedStyle(menu).getPropertyValue("display") === "block") {
    nav.classList.toggle("innerNav2");
    if (nav.className.length == 18) {
      document.body.style.overflow = "hidden";
    } else if (nav.className.length == 8) {
      document.body.style.overflow = "visible";
    }
  }
  menu.style.transform = "rotate(360deg)";
  setTimeout(() => {
    menu.style.transform = "rotate(0deg)";
  }, 700);
  setInterval(() => {
    if (window.getComputedStyle(nav).getPropertyValue("width") > "844px") {
      nav.classList.remove("innerNav2");
    }
  }, 100);
}

// back images slider

let pic = document.getElementById("photo");
const imgArry = [
  "/web project images/img1.jpg",
  "/web project images/img2.jpg",
  "/web project images/img3.jpg",
  "/web project images/img4.jpg",
  "/web project images/img5.jpg",
];

let art = pic.getAttribute("src");
function onRight() {
  if (imgArry[0] == pic.getAttribute("src")) {
    pic.setAttribute("src", imgArry[1]);
  } else if (imgArry[1] == pic.getAttribute("src")) {
    pic.setAttribute("src", imgArry[2]);
  } else if (imgArry[2] == pic.getAttribute("src")) {
    pic.setAttribute("src", imgArry[3]);
  } else if (imgArry[3] == pic.getAttribute("src")) {
    pic.setAttribute("src", imgArry[4]);
  } else if (imgArry[4] == pic.getAttribute("src")) {
    pic.setAttribute("src", imgArry[0]);
  }
}
function onLeft() {
  if (imgArry[0] == pic.getAttribute("src")) {
    pic.setAttribute("src", imgArry[4]);
  } else if (imgArry[4] == pic.getAttribute("src")) {
    pic.setAttribute("src", imgArry[3]);
  } else if (imgArry[3] == pic.getAttribute("src")) {
    pic.setAttribute("src", imgArry[2]);
  } else if (imgArry[2] == pic.getAttribute("src")) {
    pic.setAttribute("src", imgArry[1]);
  } else if (imgArry[1] == pic.getAttribute("src")) {
    pic.setAttribute("src", imgArry[0]);
  }
}

// sign in system

let sign = document.getElementById("sign");
let signBox = document.getElementById("touchpad");
let cut = document.getElementById("cross");
let backSlogan = document.querySelector(".innerPromo");

// Apar function
cut.onclick = function () {
  if (signBox.style.display === "flex") {
    signBox.style.display = "none";
    backSlogan.style.filter = "none";
  }
  document.body.style.overflow = "visible";
};

// diapar function
sign.onclick = function () {
  if (signBox.style.display === "") {
    signBox.style.display = "flex";
    if (window.innerWidth <= 815) {
      backSlogan.style.filter = "blur(2px)";
    }
  }
  if (signBox.style.display === "none") {
    signBox.style.display = "flex";
    if (window.innerWidth <= 815) {
      backSlogan.style.filter = "blur(2px)";
    }
  }
  document.body.style.overflow = "hidden";
};

// Contend Scroll button

let seeMore = document.querySelector(".moreScroll");
seeMore.style.display = "none";
let detail2 = document.getElementById("moreDetail2");
detail2.style.display = "none";

let detail = document.querySelector(".downRoll");

detail.onclick = () => {
  if (seeMore.style.display === "none") {
    seeMore.style.display = "block";
    detail.style.display = "none";
    detail2.style.display = "block";
    recover.style.display = "block";
  }
};

// contend will go back after clicking this below button

let recover = document.querySelector(".upRoll");

detail2.onclick = () => {
  if (seeMore.style.display === "block") {
    seeMore.style.display = "none";
    detail.style.display = "block";
    recover.style.display = "none";
  }
};

// Customber Atration Fack Number Showing Function

let like = document.getElementById("like");
let review = document.getElementById("review");
let happy = document.getElementById("happy");
let inc = 0;
let inc2 = 0;
let inc3 = 0;
let speed = 10;
let speed2 = 49;
let speed3 = 14;

// like, pantner and happy clints like button
const like1 = document.getElementById("like1");
const like2 = document.getElementById("like2");
const like3 = document.getElementById("like3");

// function runner
let checker = setInterval(likeWork, 10);
let checker2 = setInterval(reviewWork, 10);
let checker3 = setInterval(happyWork, 10);
function happyWork() {
  inc3++;
  let innerNum = (happy.innerHTML = inc * speed3);
  if (inc == 102) {
    clearInterval(checker3);
  }
  // here is like function of website
  like2.onclick = function () {
    if (like2.style.color == "") {
      like2.style.color = "red";
      happy.innerHTML = innerNum + 1;
    } else if (like2.style.color == "red") {
      like2.style.color = "";
      happy.innerHTML = innerNum;
    }
  };
}

function likeWork() {
  inc++;
  let innerNum = (like.innerHTML = inc * speed2);
  if (inc == 102) {
    clearInterval(checker);
  }

  // here is like function of website
  like1.onclick = function () {
    if (like1.style.color == "") {
      like1.style.color = "red";
      like.innerHTML = innerNum + 1;
    } else if (like1.style.color == "red") {
      like1.style.color = "";
      like.innerHTML = innerNum;
    }
  };
}
function reviewWork() {
  inc2++;
  let innerNum = (review.innerHTML = inc * speed);
  if (inc == 102) {
    clearInterval(checker2);
  }

  // here is like function of website
  like3.onclick = function () {
    if (like3.style.color == "") {
      like3.style.color = "red";
      review.innerHTML = innerNum + 1;
    } else if (like3.style.color == "red") {
      like3.style.color = "";
      review.innerHTML = innerNum;
    }
  };
}

// loading page
const loading = document.querySelector(".loading");
const main = document.getElementById("main");
// main mechanism
function loadinfuc() {
  loading.style.display = "none";
}
document.body.addEventListener("load", loadinfuc());

// Primum Ship Button

const buyBtn = document.getElementById("buy");
const butCutBtn = document.getElementById("btnOfCut");
const purches = document.querySelector(".purches");

// primum ship page open function

buyBtn.onclick = () => {
  setTimeout(() => {
    purches.style.display = "flex";
    document.body.style.overflow = "hidden";
  }, 200);
};

// .primum ship page close function

butCutBtn.onclick = () => {
  setTimeout(() => {
    purches.style.display = "none";
    butCutBtn.style.transform = "rotate(0deg)";
  }, 400);
  document.body.style.overflow = "visible";
  butCutBtn.style.transform = "rotate(360deg)";
};

// Buy Page More images sliders

const arrImgs = [
  "/images/decsriptionImg1.jfif",
  "/images/decsriptionImg2.jfif",
  "/images/decsriptionImg3.jfif",
  "/images/decsriptionImg4.jfif",
  "/images/decsriptionImg5.jfif",
  "/images/decsriptionImg6.jfif",
];

const butOfLeftFlow1 = document.getElementById("leftArrowOfImgs1");
const btnOfRightFlow2 = document.getElementById("leftArrowOfImgs2");
let mainImg = document.getElementById("mainAttributeOfImgTag");
let imgCountOriginal = 0;
let staus;

// L.H.S side function
const leftSideBtn = () => {
  // increasing and decreasing number fuction
  imgCountOriginal++;

  // number fixer function
  if (imgCountOriginal >= 6) {
    imgCountOriginal = 0;
  }

  // center div img changer function
  staus = arrImgs[imgCountOriginal];
  if (mainImg.getAttribute("src") != staus) {
    // console.log(imgCountOriginal);
    mainImg.setAttribute("src", staus);
  }
};

// R.H.S side function
const rightSideBtn = () => {
  // increasing and decreasing number function
  imgCountOriginal--;

  // number fixer function
  if (imgCountOriginal == -1) {
    imgCountOriginal = 5;
  }

  // center div img changer function
  staus = arrImgs[imgCountOriginal];
  if (mainImg.getAttribute("src") != staus) {
    // console.log(imgCountOriginal);
    mainImg.setAttribute("src", staus);

    // some styling for center div
    // it doesn't need to change
    mainImg.style.transform = "scale(0.1)";
    setTimeout(() => {
      mainImg.style.transform = "scale(1.2)";
    }, 300);
  }
};

butOfLeftFlow1.addEventListener("click", leftSideBtn);
btnOfRightFlow2.addEventListener("click", rightSideBtn);

// Material of pop
const overBodyCover = document.querySelector(".overBody");
const btnOfInfo = document.querySelectorAll(".info");
const pageCut = document.getElementById("btnOfCutOfBuyPage");
const OnePlace = Array.from(document.querySelectorAll(".onePlace img"));

// Pop up page
btnOfInfo.forEach((btnOfPurhase) => {
  btnOfPurhase.addEventListener("click", () => {
    overBodyCover.style.display = "flex";
    overBodyCover.style.overflow = "scroll";
    document.body.style.overflow = "hidden";

    // Out of OnePlace div
  });
  pageCut.onclick = () => {
    setTimeout(() => {
      overBodyCover.style.display = "none";
      pageCut.style.transform = "rotate(0deg)";
      document.body.style.overflow = "visible";
    }, 400);
    pageCut.style.transform = "rotate(360deg)";
  };
});

//  Scroll sider materials
const swipLeft = document.querySelector(".swipLeft");
const swipRight = document.querySelector(".swipRight");
const boxFordetails = document.querySelector(".boxFordetails");

// Swipt Left sider function
swipLeft.onclick = () => {
  boxFordetails.scrollBy(-580, 0);
};

// Swipt Right sider function
swipRight.onclick = () => {
  boxFordetails.scrollBy(580, 0);
};

// Booking page functions
const containerOfSetImgs = document.querySelectorAll(".workCenter img");
const displayImgs = document.getElementById("dynamicalChanger");
const displayHeading = document.getElementById("changeableTitle");
const displayDescription = document.getElementById("PlaceDescription");
const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, eligendi cupiditate quae natus velit ipsa, quis incidunt sed molestias quas earum alias consequuntur veniam et? Harum voluptate perferendis provident cumque!";
const containerOfImg = [
  {
    img: "/web project images/des-1.jpg",
    title: "Island",
    descriptionOfContent: description,
  },
  {
    img: "/web project images/des-2.jpg",
    title: "Camping",
    descriptionOfContent: description,
  },
  {
    img: "/web project images/des-5.jpg",
    title: "Beach",
    descriptionOfContent: description,
  },
  {
    img: "/web project images/des-6.jpg",
    title: "Mountain",
    descriptionOfContent: description,
  },
  {
    img: "/web project images/des-7.jpg",
    title: "Resort",
    descriptionOfContent: description,
  },
  {
    img: "/web project images/des-8.jpg",
    title: "Beach",
    descriptionOfContent: description,
  },
  {
    img: "/web project images/des-1.jpg",
    title: "Island",
    descriptionOfContent: description,
  },
  {
    img: "/web project images/des-2.jpg",
    title: "Camping",
    descriptionOfContent: description,
  },
  {
    img: "/web project images/des-5.jpg",
    title: "Beach",
    descriptionOfContent: description,
  },
  {
    img: "/web project images/des-6.jpg",
    title: "Mountain",
    descriptionOfContent: description,
  },
  {
    img: "/web project images/des-7.jpg",
    title: "Resort",
    descriptionOfContent: description,
  },
  {
    img: "/web project images/des-8.jpg",
    title: "Beach",
    descriptionOfContent: description,
  },
  {
    img: "/web project images/des-1.jpg",
    title: "Island",
    descriptionOfContent: description,
  },
  {
    img: "/web project images/des-2.jpg",
    title: "Camping",
    descriptionOfContent: description,
  },
  {
    img: "/web project images/des-5.jpg",
    title: "Beach",
    descriptionOfContent: description,
  },
  {
    img: "/web project images/des-6.jpg",
    title: "Mountain",
    descriptionOfContent: description,
  },
  {
    img: "/web project images/des-7.jpg",
    title: "Resort",
    descriptionOfContent: description,
  },
  {
    img: "/web project images/des-8.jpg",
    title: "Beach",
    descriptionOfContent: description,
  },
];

btnOfInfo.forEach((name, index) => {
  name.addEventListener("click", () => {
    switch (true) {
      case index == 0:
        displayImgs.setAttribute("src", containerOfImg[0].img);
        displayHeading.innerHTML = containerOfImg[0].title;
        displayDescription.innerHTML = containerOfImg[0].descriptionOfContent;
        break;
      case index == 1:
        displayImgs.setAttribute("src", containerOfImg[1].img);
        displayHeading.innerHTML = containerOfImg[1].title;
        displayDescription.innerHTML = containerOfImg[1].descriptionOfContent;
        break;
      case index == 2:
        displayImgs.setAttribute("src", containerOfImg[2].img);
        displayHeading.innerHTML = containerOfImg[2].title;
        displayDescription.innerHTML = containerOfImg[2].descriptionOfContent;
        break;
      case index == 3:
        displayImgs.setAttribute("src", containerOfImg[3].img);
        displayHeading.innerHTML = containerOfImg[3].title;
        displayDescription.innerHTML = containerOfImg[3].descriptionOfContent;
        break;
      case index == 4:
        displayImgs.setAttribute("src", containerOfImg[4].img);
        displayHeading.innerHTML = containerOfImg[4].title;
        displayDescription.innerHTML = containerOfImg[4].descriptionOfContent;
        break;
      case index == 5:
        displayImgs.setAttribute("src", containerOfImg[5].img);
        displayHeading.innerHTML = containerOfImg[5].title;
        displayDescription.innerHTML = containerOfImg[5].descriptionOfContent;
        break;
      case index == 6:
        displayImgs.setAttribute("src", containerOfImg[6].img);
        displayHeading.innerHTML = containerOfImg[6].title;
        displayDescription.innerHTML = containerOfImg[6].descriptionOfContent;
        break;
      case index == 7:
        displayImgs.setAttribute("src", containerOfImg[7].img);
        displayHeading.innerHTML = containerOfImg[7].title;
        displayDescription.innerHTML = containerOfImg[7].descriptionOfContent;
        break;
      case index == 8:
        displayImgs.setAttribute("src", containerOfImg[8].img);
        displayHeading.innerHTML = containerOfImg[8].title;
        displayDescription.innerHTML = containerOfImg[8].descriptionOfContent;
        break;
      case index == 9:
        displayImgs.setAttribute("src", containerOfImg[9].img);
        displayHeading.innerHTML = containerOfImg[9].title;
        displayDescription.innerHTML = containerOfImg[9].descriptionOfContent;
        break;
      case index == 10:
        displayImgs.setAttribute("src", containerOfImg[10].img);
        displayHeading.innerHTML = containerOfImg[10].title;
        displayDescription.innerHTML = containerOfImg[10].descriptionOfContent;
        break;
      case index == 11:
        displayImgs.setAttribute("src", containerOfImg[11].img);
        displayHeading.innerHTML = containerOfImg[11].title;
        displayDescription.innerHTML = containerOfImg[11].descriptionOfContent;
        break;
      case index == 12:
        displayImgs.setAttribute("src", containerOfImg[12].img);
        displayHeading.innerHTML = containerOfImg[12].title;
        displayDescription.innerHTML = containerOfImg[12].descriptionOfContent;
        break;
      case index == 13:
        displayImgs.setAttribute("src", containerOfImg[13].img);
        displayHeading.innerHTML = containerOfImg[13].title;
        displayDescription.innerHTML = containerOfImg[13].descriptionOfContent;
        break;
      case index == 14:
        displayImgs.setAttribute("src", containerOfImg[14].img);
        displayHeading.innerHTML = containerOfImg[14].title;
        displayDescription.innerHTML = containerOfImg[14].descriptionOfContent;
        break;
      case index == 15:
        displayImgs.setAttribute("src", containerOfImg[15].img);
        displayHeading.innerHTML = containerOfImg[15].title;
        displayDescription.innerHTML = containerOfImg[15].descriptionOfContent;
        break;
      case index == 16:
        displayImgs.setAttribute("src", containerOfImg[16].img);
        displayHeading.innerHTML = containerOfImg[16].title;
        displayDescription.innerHTML = containerOfImg[16].descriptionOfContent;
        break;
      case index == 17:
        displayImgs.setAttribute("src", containerOfImg[17].img);
        displayHeading.innerHTML = containerOfImg[17].title;
        displayDescription.innerHTML = containerOfImg[17].descriptionOfContent;
        break;
      case index == 18:
        displayImgs.setAttribute("src", containerOfImg[18].img);
        displayHeading.innerHTML = containerOfImg[18].title;
        displayDescription.innerHTML = containerOfImg[18].descriptionOfContent;
        break;

      default:
        break;
    }
  });
});
// End of purchsing page

// Navbar disinvisibility and visibility on scroll
const visibleNavBar = document.getElementById("nav");
window.addEventListener("scroll", () => {
  if (this.pageYOffset > 50) {
    visibleNavBar.style.backgroundColor = "#acb9c7";
  } else {
    visibleNavBar.style.backgroundColor = "#f2f0";
  }
});
// End of disvisibility and visibility Navbar
