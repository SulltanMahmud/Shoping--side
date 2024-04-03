function changeNavImage() {
  var navImg = document.getElementById("navimg");
  if (window.innerWidth <= 768) {
    navImg.src = "./assets/asset 1.png";
    navImg.style.width = "70px";
    navImg.style.height = "50px";
  }
}

changeNavImage();

window.addEventListener("resize", changeNavImage);
