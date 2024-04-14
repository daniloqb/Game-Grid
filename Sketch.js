export default class Sketch {

  #container;
  

  constructor(params) {

    this.#container = params && params.container ? params.container : "";

    this.sketch = function (p) {
      p.setup = function(){
        p.createCanvas(200,200)
      };

      p.draw = function () {
        p.background(220);

        p.ellipse(p.width / 2, p.height / 2, 20, 20);
      };
    };
  }

  execute() {
    this.p5_2 = new p5(this.sketch, this.#container);
   
  }


}
