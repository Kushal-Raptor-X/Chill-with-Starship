
let ss;
//var time;

function preload() {
  // Load model with normalise parameter set to true
  ss = loadModel('ss.obj', true);
  //getTime();
}



function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);
}

function draw() {
  background(110, 110, 110);
  scale(3); // Scaled to make model fit into canvas
    rotateX(frameCount * 0.3);
    rotateY(frameCount * 1);
    rotateZ(frameCount * 0.3);

  normalMaterial(); // For effect
  model(ss);


}

// async function getTime(){
//     var response = await fetch("http://worldtimeapi.org/api/timezone/Etc/GMT-5");
//     var responseJSON = await response.json();
  
//     var datetime = responseJSON.datetime;
//     //var date = datetime.slice(0,10);
//     var time = datetime.slice(12,20);
    
//     if(time !== undefined){
//         text(time,displayWidth-100,100);
//         console.log(time);
//     }
// }

//code to paste in index.html's body
//<iframe src="https://open.spotify.com/embed/playlist/5FNzjB7gjPw5soHsczDQ8F" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
