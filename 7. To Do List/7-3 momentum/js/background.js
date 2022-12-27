const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;     // image 폴더 하부에 있는 이미지들이어야 한다.

document.body.appendChild(bgImage);