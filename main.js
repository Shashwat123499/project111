//https://teachablemachine.withgoogle.com/models/jIjQCLBa-/

Webcam.set ({
    width: 350,
    height:300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("webcam_view");

Webcam.attach('#webcam_view');

function capture_image() {
    Webcam.snap (function (data_uri) {
        document.getElementById("snapshot").innerHTML = '<img id="captured_img" src="' + data_uri + '">';
    });
}

console.log("ml5 version : ", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/jIjQCLBa-/model.json', modelLoaded);
