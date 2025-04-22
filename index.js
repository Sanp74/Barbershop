
const btnLeft =document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click",e => moveToRight())
setInterval(()=>{
    moveToRight();
},3000);

let operacion =0,
    counter =0,
    whidtimg= 100 / sliderSection.length;

function moveToRight(){
    if (counter >= sliderSection.length-1){
        counter=0;
        operacion=0;
        slider.style.transform=`translate(-${operacion}%)`;
        slider.style.transition ="none";
        return;
    }
    counter++;
    operacion = operacion + whidtimg;
    slider.style.transform = `translate(-${operacion}% )`;
    slider.style.transition = "all ease .6s"
    
}

function  moveToLeft(){
    counter--;
    if (counter<0){
        counter = sliderSection.length-1;
        operacion = whidtimg*(sliderSection.length-1);
        slider.style.transform = `translate(-${operacion}% );`
        slider.style.transition ="none";
        return;
    }
    operacion = operacion - whidtimg;
    slider.Style.transform = `translate(-${operacion}% );`
    slider.Style.transition = "all ease .6s"
    
}