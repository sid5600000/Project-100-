var SpeechRecognition = window.webkitSpeechRecognition;
var content;
var recognition = new SpeechRecognition();

function start()
{   
    recognition.start();
} 

recognition.onresult = function(event){
    console.log(event);
    content = event.results[0][0].transcript;
    content = content.toLowerCase();
    if (content == "take my selfie"){
        speak();
    }
}


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});




function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function(){
        img_id = "img1";
        snap_shot();

        speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },5000);

    setTimeout(function(){
        img_id = "img2";
        snap_shot();

        speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },10000);

    setTimeout(function(){
        img_id = "img3";
        snap_shot();

        speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },15000);


}

function snap_shot(){
    Webcam.snap(function(data_uri){
        if (img_id == "img1"){
             document.getElementById("Selfie1").innerHTML = "<img id='img1' src='" + data_uri + "' >";
        }

        if (img_id == "img2"){
            document.getElementById("Selfie2").innerHTML = "<img id='img2' src='" + data_uri + "' >";
       }

       if (img_id == "img3"){
        document.getElementById("Selfie3").innerHTML = "<img id='img3' src='" + data_uri + "' >";
   }
    });
}