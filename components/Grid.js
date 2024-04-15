import Tile from "./Tile.js";

export default class Grid {
  constructor(p, w, h, s) {
    this.p = p;
    this.g_width = w;
    this.g_height = h;
    this.scl = s;

    this.cells = Array();
    this.cells_selected = Array();
    this.current_cell = null;

    for (var y = 0; y < this.g_height; y++) {
      for (var x = 0; x < this.g_width; x++) {
        this.cells.push(
          new Tile(p, {
            pos_i: x,
            pos_j: y,
            size: this.scl,
            border_width: [0.6, 0.6, 0.6, 0.6],
            border_color: ["gray", "gray", "gray", "gray"],
            vertex_width: [3, 3, 3, 3],
            vertex_color: ["black", "black", "black", "black"],
            color: [230, 230, 230],
            color_select: [255,0,255],
          })
        );
      }
    }
  }
  show() {
    for (var i = 0; i < this.cells.length; i++) {
      var cell = this.cells[i];
      cell.show();
    }
  }
  selectCell(mx,my){

    const p = this.p;

    console.log("Mouse: ",p.mouseX, p.mouseY);
    
    let x = Math.floor((mx)/this.scl);
    let y = Math.floor((my)/this.scl);
    console.log("X,Y: ",x,y);
    var index = x + (y * this.g_width);
    console.log("index: ",index);
    if (this.current_cell) this.current_cell.select(false);
    this.cells[index].select(true);
    this.current_cell = this.cells[index];
  }
}
