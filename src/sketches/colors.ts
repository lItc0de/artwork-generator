import P5, { Color } from 'p5';

const Y_AXIS = 1;
const X_AXIS = 2;

class Colors {
  s: P5;

  constructor(s: P5) {
    this.s = s;
  }

  setGradient(x: number, y: number, w: number, h: number, c1: Color, c2: Color, axis: 1 | 2) {
    this.s.push();
    this.s.noFill();

    if (axis === Y_AXIS) {
      // Top to bottom gradient
      for (let i = y; i <= y + h; i++) {
        const inter = this.s.map(i, y, y + h, 0, 1);
        const c = this.s.lerpColor(c1, c2, inter);
        this.s.stroke(c);
        this.s.line(x, i, x + w, i);
      }
    } else if (axis === X_AXIS) {
      // Left to right gradient
      for (let i = x; i <= x + w; i++) {
        const inter = this.s.map(i, x, x + w, 0, 1);
        const c = this.s.lerpColor(c1, c2, inter);
        this.s.stroke(c);
        this.s.line(i, y, i, y + h);
      }
    }
    this.s.pop();
  }

  drawRandomGradient() {
    const color1 = this.getRandomColor();
    const color2 = this.getRandomColor();
    this.setGradient(0, 0, this.s.width, this.s.height, color1, color2, 1);
  }

  getRandomColor(saturation: number = 100, brightness: number = 100) {
    const color = this.s.int(this.s.random(0, 360));

    return this.s.color(`hsb(${color}, ${saturation}%, ${brightness}%)`);
  }
}

export default Colors;
