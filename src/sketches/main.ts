/* eslint-disable no-param-reassign */
import P5 from 'p5';
import Circles from './circles';
import Colors from './colors';

const getSize = (s: P5) => s.windowWidth / 1.5;
const getRandHSB = (s: P5): string => {
  const color = s.int(s.random(0, 360));

  return `hsb(${color}, 100%, 100%)`;
};

const createSketch = (s: P5) => {
  let circles: Circles;
  let colors: Colors;

  s.setup = () => {
    const size = getSize(s);
    s.createCanvas(size, size);
    s.noStroke();
    s.noLoop();
    circles = new Circles(s);
    colors = new Colors(s);
  };

  s.draw = () => {
    s.background('#eee');
    const color1 = colors.getRandomColor();
    const color2 = colors.getRandomColor();
    colors.setGradient(0, 0, s.width, s.height, color1, color2, 1);

    // circles.drawCircle(s.width / 2, 280, 6);
    circles.drawRandomCircle();
    circles.drawTarget(s.width * 0.75, s.height * 0.3, 120, 6);

    s.push();
    s.noFill();
    s.stroke(getRandHSB(s));
    s.line(0, s.height * 0.33, s.width, s.height * 0.33);
    s.stroke(getRandHSB(s));
    s.rect(s.width * 0.25, s.height * 0.1, s.width * 0.5, s.height * 0.8);
    s.pop();
  };

  s.windowResized = () => {
    const size = getSize(s);
    s.resizeCanvas(size, size);
  };
};

export default createSketch;
