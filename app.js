const redCountBox = document.querySelector(".red-count-box");
const greenCountBox = document.querySelector(".green-count-box");
const blueCountBox = document.querySelector(".blue-count-box");
const switchButton = document.querySelector(".switch-button");
const redSlider = document.querySelector("#red-slider");
const greenSlider = document.querySelector("#green-slider");
const blueSlider = document.querySelector("#blue-slider");
const textRGBOut = document.querySelector(".text-rgb-out");
const backgroundRGBOut = document.querySelector(".background-rgb-out");


var redCount = 0;
var greenCount = 0;
var blueCount = 0;

var toggle = 0;

var myJqueryTarget = "color";

//Here starts the main class---------------------------------------
class ColorChangerApp {
  
  //Defining sliders-----------------------------------
  
  slideRedActionOne(){
    
    redSlider.addEventListener("mousedown", () => {
     
      this.slideRedActionTwo()
      
   })
                               
                                
}
  
  slideRedActionTwo(){
    
    redSlider.addEventListener("mousemove", () => {
      
      this.slideRedResult()
      
    })   
   
    
  }
  
  slideRedResult(){
    
    let redValue = document.getElementById("red-slider").value;
    //console.log(redValue);
    redCountBox.innerHTML = parseInt(redValue);
    
    redCount = parseInt(redValue);
    //console.log(parseInt(redValue));
    starter();
      
  }
  
  
  slideGreenActionOne(){
    
    greenSlider.addEventListener("mousedown", () => {
     
      this.slideGreenActionTwo()
      
   })
                               
                                
}
  
  slideGreenActionTwo(){
    
    
    greenSlider.addEventListener("mousemove", () => {
      
      this.slideGreenResult()
      
    })   
   
    
  }
  
  slideGreenResult(){
    
    
    let greenValue = document.getElementById("green-slider").value;
    //console.log(redValue);
    greenCountBox.innerHTML = parseInt(greenValue);
    
    greenCount = parseInt(greenValue);
    //console.log(parseInt(redValue));
    starter();
      
  }
  
  slideBlueActionOne(){
    
    blueSlider.addEventListener("mousedown", () => {
     
      this.slideBlueActionTwo()
      
   })
                               
                                
}
  
  slideBlueActionTwo(){
    
    
    blueSlider.addEventListener("mousemove", () => {
      
      this.slideBlueResult()
      
    })   
   
    
  }
  
  slideBlueResult(){
    
    
    let blueValue = document.getElementById("blue-slider").value;
    //console.log(redValue);
    blueCountBox.innerHTML = parseInt(blueValue);
    
    blueCount = parseInt(blueValue);
    //console.log(parseInt(redValue));
    starter();
      
  }
  
  //Defining sliders end-----------------------------------
  
  switchTheme() {
    
    switchButton.addEventListener("click", this.switcher);
    
    
  }
  switcher(){
    
    
  if(toggle === 0){
    
    myJqueryTarget = "color";
    
    toggle = 1;
    switchButton.innerHTML = "TEXT"
    backgroundRGBOut.innerHTML =  `rgb(${redCount}, ${greenCount}, ${blueCount})`
  }
  else{
    toggle === 1
    
     myJqueryTarget = "backgroundColor";
    
    toggle = 0;
    switchButton.innerHTML = "BACKGROUND"
    textRGBOut.innerHTML =  `rgb(${redCount}, ${greenCount}, ${blueCount})`
  }
  
  
  
};
  
};
//End of the main class---------------------------------------


 var starter = () => {
  
  
  $(".output-box").css(`${myJqueryTarget}`, `rgb(${redCount}, ${greenCount}, ${blueCount})`);
  
  
}
 
 document.addEventListener("DOMContentLoaded", () => {
    
  const colorChangerApp = new ColorChangerApp();
  
         colorChangerApp.switchTheme();
 
         colorChangerApp.slideRedActionOne();
         colorChangerApp.slideGreenActionOne();
         colorChangerApp.slideBlueActionOne();
  
   //console.log(parseInt(redSlider));
  
  
  
});

