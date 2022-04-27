import P5 from 'p5';
import Circles from './circles';
import Colors from './colors';
import Curves from './curve';

class RandomnessGenerator {
  s: P5;

  circles: Circles;

  colors: Colors;

  curves: Curves;

  random: string[][] = [
    ['gradient', 'target', 'curve'],
    ['gradient', 'innerCircles', 'target'],
    ['gradient', 'innerCircles'],
    ['gradient', 'target', 'target'],
    ['curve', 'innerCircles'],
    ['curve', 'target'],
    ['target', 'curve', 'target', 'target'],
  ];

  constructor(s: P5) {
    this.s = s;
    this.circles = new Circles(this.s);
    this.colors = new Colors(this.s);
    this.curves = new Curves(this.s);
  }

  get mapping(): {[key: string]: () => void} {
    return {
      innerCircles: () => this.circles.drawRandomCircle(),
      target: () => this.circles.drawRandomTarget(),
      gradient: () => this.colors.drawRandomGradient(),
      curve: () => this.curves.draw(),
    };
  }

  draw(identifier: string) {
    const fn = this.mapping[identifier];
    if (typeof fn === 'function') {
      fn();
    }
  }

  drawShuffle() {
    (this.s.random(this.random) as string[]).forEach((identifier) => {
      this.draw(identifier);
    });
  }
}

export default RandomnessGenerator;
