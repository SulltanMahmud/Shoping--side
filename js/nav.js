function changeNavImage() {
  var navImg = document.getElementById("navimg");
  let navsec = document.querySelector(".navbar");
  if (window.innerWidth <= 920) {
    navImg.src = "./assets/asset 1.png";
    navImg.style.width = "70px";
    navImg.style.height = "50px";
    console.log("sacsacasc", navsec);
    navsec.style.backgroundColor = "white";
  } else {
    navImg.src = "./assets/asset 0.png";
    navImg.style.width = "147px";
    navsec.style.backgroundColor = "";
  }
}

changeNavImage();

window.addEventListener("resize", changeNavImage);
