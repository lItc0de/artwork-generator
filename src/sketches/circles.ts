import p5 from 'p5';

class Circles {
  s: p5;

  constructor(s: p5) {
    this.s = s;
  }

  drawCircle(x: number, radius: number, level: number) {
    const color = this.s.int(this.s.random(0, 360));
    const saturation = this.s.int(this.s.map(level, 7, 1, 0, 100));

    this.s.push();

    this.s.fill(`hsb(${color}, ${saturation}%, 100%)`);

    if (this.s.random([0, 1])) {
      this.drawTarget(x, this.s.height / 2, radius * 2, 3);
    } else {
      this.s.ellipse(x, this.s.height / 2, radius * 2, radius * 2);
    }

    this.s.pop();

    if (level <= 1) return;

    const newLevel = level - 1;
    this.drawCircle(x - radius / 2, radius / 2, newLevel);
    this.drawCircle(x + radius / 2, radius / 2, newLevel);
  }

  drawRandomCircle() {
    const x = this.s.random(this.s.width / 5, this.s.width / 1.5);
    const radius = this.s.random(this.s.width / 5, this.s.width / 3);
    const levels = this.s.random(4, 6);

    this.drawCircle(x, radius, levels);
  }

  drawTarget(xloc: number, yloc: number, size: number, num: number) {
    const grayvalues = 255 / num;
    const steps = size / num;
    for (let i = 0; i < num; i++) {
      // this.s.fill(i * grayvalues);
      const color = this.s.int(this.s.random(0, 360));
      const saturation = this.s.int(1 * grayvalues);

      this.s.push();
      this.s.fill(`hsb(${color}, ${saturation}%, 100%)`);
      this.s.translate(xloc, yloc);
      this.s.ellipse(0, 0, size - i * steps, size - i * steps);
      this.s.pop();
    }
  }

  drawRandomTarget() {
    const randMultiplier = this.s.random(0.2, 0.8);
    const randRadius = this.s.int(this.s.random(80, 200));
    this.drawTarget(this.s.width * randMultiplier, this.s.height * randMultiplier, randRadius, 6);
  }
}

export default Circles;
