import Tile from "./components/Tile.js";

export default class Sketch {
  #container;

  constructor(params) {
    this.#container = params && params.container ? params.container : "";

    this.sketch = function (p) {
      let tile = new Tile(p, {
        pos_i: 1,
        pos_j: 1,
        size: 20,
        border_width: [0, 0, 0, 0],
        border_color: ["red", "red", "red", "red"],
        vertex_width: [2, 2, 2, 2],
        vertex_color: ["black", "black", "black", "black"],
        color: "green",
      });

      p.setup = function () {
        p.createCanvas(200, 200);
      };

      p.draw = function () {
        p.background(220);
        tile.show();
      };
    };
  }

  execute() {
    this.p5_2 = new p5(this.sketch, this.#container);
  }
}
