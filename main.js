Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    }
    );
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/aPfPLoucN/model.json",modelLoaded);
function modelLoaded() {
    console.log("model has loaded");
}
function speak() {
    var synth=window.speechSynthesis;
    speak1="the first prediction is"+ Prediction1;
    speak2=="and the second prediction is"+ Prediction2;
    var utterThis=new SpeechSynthesisUtterance(speak1+speak2);
    synth.speak(utterThis);
}
