
var model1 = document.getElementById("model1");
var speed = 5;
var flag = false;
var flag2=false;
function model(takeOrder){
    if (takeOrder === "forward") {
        speed += 5;
        model1.style.left = speed + "px";
        if (!flag) {
            flag2 = false;
            model1.src = 'heavyd-uppercut-special.gif';
            
        }
        flag =true;
    }else if(takeOrder==="backward"){
        flag = false;
        speed += -5;
        model1.style.left=speed + "px"
        if(!flag2){
             model1.src = 'heavyd-stance.gif';

        }
        flag2=true;
    }

}

function heavy(event) {
    console.log(event.key)
    if (event.key === "ArrowRight") {
        model("forward");

    } else if (event.key === "ArrowLeft") {
        model("backward");
    }

}


window.addEventListener("keydown", heavy)












var model2 = document.getElementById("model2");
var speed = 5;
var flag = false;
var flag2=false;
function han(takeOrder){
    if (takeOrder === "forward") {
        speed += 5;
        model2.style.right = speed + "px";
        if (!flag) {
            flag2 = false;
            model2.src = 'hanzo-fireblast.gif';
            
        }
        flag =true;
    }else if(takeOrder==="backward"){
        flag = false;
        speed += -5;
        model2.style.right=speed + "px"
        if(!flag2){
             model2.src = 'han-fire.gif';

        }
        flag2=true;
    }
       
}

function hanzo(event) {
    console.log(event.key)
    if (event.key === "h") {
        han("forward");

    } else if (event.key === "w") {
        han("backward");
    }

}


window.addEventListener("keydown", hanzo)


if(model1===model2){
    
}