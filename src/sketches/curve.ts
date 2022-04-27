import P5 from 'p5';
import Colors from './colors';

class Curves {
  s: P5;

  colors: Colors;

  constructor(s: P5) {
    this.s = s;
    this.colors = new Colors(this.s);
  }

  draw() {
    this.s.push();
    // this.s.beginShape();

    this.s.rotate(this.s.int(this.s.random(0, 90)));

    const stepsize = 1;
    const colorStepSize = 50;
    let xoff = 0.0;
    let c1 = this.colors.getRandomColor();
    let c2 = this.colors.getRandomColor();

    for (let x = 0; x <= this.s.width; x += stepsize) {
      const y = this.s.map(this.s.noise(xoff), 0, 1, this.s.height / 8, this.s.height / 3);
      // this.s.vertex(x, y);
      this.colors.setGradient(x - stepsize, y, stepsize, y, c1, c2, 1);
      xoff += 0.05;

      if (x % colorStepSize === 0) {
        c1 = c2;
        c2 = this.colors.getRandomColor();
      }
    }

    // this.s.vertex(this.s.width, this.s.height);
    // this.s.vertex(0, this.s.height);

    // this.s.endShape(this.s.CLOSE);
    this.s.pop();
  }
}

export default Curves;
