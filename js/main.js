let allImages = document.getElementsByClassName("img-gallery");
let imageText = document.getElementById("image-text");
let selectedImage = document.getElementById("selected-image");

Array.from(allImages).forEach(function (element) {
  element.onclick = function () {
    selectedImage.src = element.src;
    imageText.innerHTML = `Selected Image :- ${element.title}`;
  };
});
