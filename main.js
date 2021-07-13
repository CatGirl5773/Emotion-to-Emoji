function check() {
    img = document.getElementById('capture_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "Happy") {
            document.getElementById("update_emoji").innerHTML = '&#128522;';
        }
        if(results[0].label == "Sad") {
            document.getElementById("update_emoji").innerHTML = '&#128546;';
        }
        if(results[0].label == "Angry") {
            document.getElementById("update_emoji").innerHTML = '&#128545;';
        }
        if(results[1].label == "Happy") {
            document.getElementById("update_emoji2").innerHTML = '&#128522;';
        }
        if(results[1].label == "Sad") {
            document.getElementById("update_emoji2").innerHTML = '&#128546;';
        }
        if(results[1].label == "Angry") {
            document.getElementById("update_emoji2").innerHTML = '&#128545;';
        }
    }
}
