predict1 = "";
predict2 = "";

Webcam.set({
width : 350,
height : 300,
image_format : "png",
png_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function snap(){
Webcam.snap(function (data_uri) {
document.getElementById("result").innerHTML = "<img id = 'capture_image' src=' "+data_uri+"'>";
});
}

console.log("ml5 version is ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rYzb-zXPo/",modelReady);

function modelReady(){
console.log("Model is ready to use");
}

function speak(){
var synth = window.speechSynthesis;
speak1 = "The first prediction is "+predict1;
speak2 = "The second prediction is "+predict2;
var speech = new SpeechSynthesisUtterance(speak1 + speak2);
synth.speak(speech);
}