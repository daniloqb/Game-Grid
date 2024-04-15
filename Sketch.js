import Grid from "./components/Grid.js";

export default class Sketch {
  #container;

  constructor(params) {
    this.#container = params && params.container ? params.container : "";

    this.sketch = function (p) {
      let grid = new Grid(p,8, 8, 60);
      let current_cell;

      p.setup = function () {
        p.createCanvas(480, 480);
        
      };

      p.draw = function () {
        p.background(220);
        grid.show();
      };

      p.mousePressed = function(){

        var cell = grid.selectCell(p.mouseX,p.mouseY);
        
       
      }
    };
  }

  execute() {
    this.p5_2 = new p5(this.sketch, this.#container);
  }
}
