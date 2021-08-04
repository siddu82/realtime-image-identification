function setup()
{
    canvas = createCanvas(300,270);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-KNK4forj/model.json',modelLoaded);
}
function modelLoaded()
{
    console.log("model is loaded");
}
function draw()
{
    image(video,0,0,300,270)
    classifier.classify(video, gotResult);
}
function gotResult(error,results)
{
    if(error) {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}