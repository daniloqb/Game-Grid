import Grid from "./components/Grid.js";

export default class Sketch {
  #container;

  constructor(params) {
    this.#container = params && params.container ? params.container : "";

    this.sketch = function (p) {
      const cols = 140;
      const rows = 140;
      const size = 5
      let grid = new Grid(p,rows, cols, size);

      p.setup = function () {
        p.createCanvas(rows * size , cols * size);
        p.noLoop();
        p.background(220);
        grid.init();
        
      };

      p.draw = function () {
      
        grid.show();
      };

      p.mousePressed = function(){

        var cell = grid.selectCell(p.mouseX,p.mouseY);
        p.redraw();
        
       
      }
    };
  }

  execute() {
    this.p5_2 = new p5(this.sketch, this.#container);
  }
}
