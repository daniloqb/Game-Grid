import Grid from "./components/Grid.js";

export default class Sketch {
  #container;

  constructor(params) {
    this.#container = params && params.container ? params.container : "";

    this.sketch = function (p) {
      const cols = 20;
      const rows = 20;
      const size = 20
      let grid = new Grid(p,rows, cols, size);

      p.setup = function () {
        p.createCanvas(rows * size , cols * size);
        
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
