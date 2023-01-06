const videos = ["Night - 28860.mp4", "Sunrise - 83880.mp4", "Wood Anemones - 112429.mp4"];

const chosenVideo = videos[Math.floor(Math.random() * videos.length)];

const bgVideoSource = document.createElement("source");

bgVideoSource.src = `video/${chosenVideo}`;     // video 폴더 하부에 있는 이미지들이어야 한다.
bgVideoSource.type = `video/mp4`

const bgVideo = document.querySelector("video");
bgVideo.appendChild(bgVideoSource);


//https://www.codingfactory.net/11877 참조