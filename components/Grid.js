import Tile from "./Tile.js";

export default class Grid {
  constructor(p, w, h, s) {
    this.p = p;
    this.g_width = w;
    this.g_height = h;
    this.scl = s;
    this.logFPS = false;
    this.frameCount = 0;
    this.lastFrameTime = performance.now();

    this.cells = Array();
    this.current_cell = null;

    for (var y = 0; y < this.g_height; y++) {
      for (var x = 0; x < this.g_width; x++) {
        this.cells.push(
          new Tile(p, {
            pos_i: x,
            pos_j: y,
            size: this.scl,
           // border_width: [0.6, 0.6, 0.6, 0.6],
            border_color: ["gray", "gray", "gray", "gray"],
           // vertex_width: [3, 3, 3, 3],
            vertex_color: ["black", "black", "black", "black"],
            color: [230, 230, 230],
            color_select: [255, 0, 255],
          })
        );
      }
    }
  }
  show() {
    this.logFPS && this.calcFPS();

    //ESTE CÓDIGO FICOU COM 46 FPS
    this.cells.forEach((element) => {
      element.show();
    });

    /* 
 ESTE FICOU COM 40 FPS

this.cells.map((element) => element.show())
 
*/

    /* 
   ESTE CÓDIGO FICOU COM 46 FPS 

    this.cells.forEach(element => {
      element.show();
    }); 

/*     

ESTE CÓDIGO FICOU COM 46 PFS
for (var i = 0; i < this.cells.length; i++) {


      var cell = this.cells[i];
      cell.show();
    } */
  }
  selectCell(mx, my) {
    const p = this.p;

    let x = Math.floor(mx / this.scl);
    let y = Math.floor(my / this.scl);
    if (x > -1 && x < this.g_width) {
      if (y > -1 && y < this.g_height) {
        var index = x + y * this.g_width;

        if (this.current_cell) this.current_cell.select(false);
        this.cells[index].select(true);
        this.current_cell = this.cells[index];
      }
    }
  }

  calcFPS() {
    const current_time = performance.now();
    const deltaTime = current_time - this.lastFrameTime;
    this.frameCount++;
    if (deltaTime >= 1000) {
      const fps = Math.round((this.frameCount * 1000) / deltaTime);
      console.log(`FPS: ${fps}`);
      this.frameCount = 0;
      this.lastFrameTime = current_time;
    }
  }
}
