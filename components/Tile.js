export default class Tile {
  #p;

  constructor(p, params) {
    this.#p = p;
    this.color = params && (params.color ? params.color : false);

    this.vertex_width =
      params && (params.vertex_width ? params.vertex_width : [0, 0, 0, 0]);
    this.vertex_color =
      params && (params.vertex_color ? params.vertex_color : [0, 0, 0, 0]);

    this.border_width =
      params && (params.border_width ? params.border_width : [0, 0, 0, 0]);
    this.border_color =
      params && (params.border_color ? params.border_color : [0, 0, 0, 0]);
    let pos_i = params && (params.pos_i ? params.pos_i : 0);
    let pos_j = params && (params.pos_j ? params.pos_j : 0);
    let s = params && (params.size ? params.size : 0);

    this.x = pos_i * s;
    this.y = pos_j * s;
    this.size = s;
  }

  show() {
    //melhorar a leitura
    const p = this.#p;
    const size = this.size;
    const x = this.x;
    const y = this.y;
    const color = this.color;

    // desenha o tile
    p.noStroke();
    color ? p.fill(p.color(color)) : p.noFill();
    size > 0 && p.rect(x, y, size, size);
    this.drawPerimeter();
  }

  drawPerimeter() {
    // melhorar a leitura
    const p = this.#p;
    const border_color = this.border_color;
    const border_width = this.border_width;
    const vertex_width = this.vertex_width;
    const vertex_color = this.vertex_color;
    const x_left = this.x;
    const x_right = this.x + this.size;
    const y_up = this.y;
    const y_bottom = this.y + this.size;

    //TOP
    p.strokeWeight(border_width[0]);
    p.stroke(p.color(border_color[0]));
    p.line(x_left, y_up, x_right, y_up);

    //RIGHT
    p.strokeWeight(border_width[1]);
    p.stroke(p.color(border_color[1]));
    p.line(x_right, y_up, x_right, y_bottom);

    //BOTTOM
    p.strokeWeight(border_width[2]);
    p.stroke(p.color(border_color[2]));
    p.line(x_right, y_bottom, x_left, y_bottom);

    //LEFT

    p.strokeWeight(border_width[3]);
    p.stroke(p.color(border_color[3]));
    p.line(x_left, y_bottom, x_left, y_up);

    //VERTICES

    p.beginShape(p.POINTS);

    p.stroke(p.color(vertex_color[0]));
    p.strokeWeight(vertex_width[0]);
    p.vertex(x_left, y_up);

    p.stroke(p.color(vertex_color[1]));
    p.strokeWeight(vertex_width[1]);
    p.vertex(x_right, y_up);

    p.stroke(p.color(vertex_color[2]));
    p.strokeWeight(vertex_width[2]);
    p.vertex(x_right, y_bottom);

    p.stroke(p.color(vertex_color[3]));
    p.strokeWeight(vertex_width[3]);
    p.vertex(x_left, y_bottom);

    p.endShape();
  }
}
