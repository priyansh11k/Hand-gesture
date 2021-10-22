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

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rYzb-zXPo/model.json",modelReady);

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



function check(){
    img = document.getElementById("capture_image");
    classifier.classify(img,gotResult);
    }  



    function gotResult(error,results){
    if(error){
    console.error(error);
    
    }
    else{
    console.log(results);
    document.getElementById("result_name").innerHTML = results[0].label;
    document.getElementById("result_name2").innerHTML = results[1].label;
    predict1 = results[0].label;
    predict2 = results[1].label;
    speak();
    if(predict1 == "Amazing"){
    document.getElementById("update_emoji").innerHTML = "&#128076";
    }
    if (predict1 == "Best") {
      document.getElementById("update_emoji").innerHTML = "&#128077"  ;
    }
    if (predict1 == "Victory") {
    document.getElementById ("update_emoji").innerHTML = "&#9996";
    }
    if (predict2 == "Amazing") {
     document.getElementById("update_emoji2").innerHTML = "&#128076";
    }
    if (predict2 == "Best") {
        document.getElementById("update_emoji2").innerHTML = "&#128077"  ;
      }
      if (predict2 == "Victory") {
        document.getElementById ("update_emoji2").innerHTML = "&#9996";
        }
    
    
    }
    
    }
