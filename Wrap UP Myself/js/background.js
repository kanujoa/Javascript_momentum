const videos = ["night.mp4", "christmas.mp4", "orora.mp4", "river.mp4", "halloween.mp4"];

const chosenVideo = videos[Math.floor(Math.random() * videos.length)];

const bgVideoSource = document.createElement("source");

bgVideoSource.src = `video/${chosenVideo}`;     // video 폴더 하부에 있는 이미지들이어야 한다.
bgVideoSource.type = `video/mp4`


const bgVideo = document.querySelector("video");
bgVideo.appendChild(bgVideoSource);


//https://www.codingfactory.net/11877 참조