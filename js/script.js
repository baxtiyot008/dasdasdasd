// class Car {
//     constructor(name, year){
//         this.name = name;
//         this.year = year
//     };
// };
// class Model extends Car{
//     constructor(name, year, color){
//         super(name, year)
//         this.color = color;
//     };
//     age(){
//         return new Date().getFullYear() - this.year;
//     }
// };
// let Lambargini = new Model("Lambargini", 2010, "qora");
// let bugatti = new Model("bugatti", 2007, "kulirang");
// let juguli = new Model("juguli", 1984., "qizil");
// console.log(bugatti.age());

    
////////////////////////////////////////////////////////Slider//////////////////////////////////////////////////////


class Slider {
    constructor(options){
        this.slider = document.querySelector(options.slider);
        this.sliderLine = this.slider.querySelector(".slider__line");
        this.slides = this.sliderLine.children;
        this.prev = this.slider.querySelector(".slider__prev");
        this.next = this.slider.querySelector(".slider__next"); 
    
        
        
        this.width = this.slider.clientWidth;
        this.height = this.slider.clientHeight;
        this.dir = options.direction.toUpperCase() == "Y" ? options.direction.toUpperCase() : "X";
        this.moveTime = options.runTime != undefined ? options.runTime : 1000;
        this.interval = options.interval != undefined ? options.interval : 3000;
         
        
        
    }
}


const slider = new Slider({
    slider: ".slider",
    direction: "X",
    runTime: 1000,
    interval: 3000
});