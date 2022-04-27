/* eslint-disable no-param-reassign */
import P5 from 'p5';
import RandomnessGenerator from './randomnessGenerator';

const getSize = (s: P5) => {
  if (s.windowWidth > s.windowHeight) {
    return s.windowHeight / 1.5;
  }

  return s.windowWidth / 1.5;
};
const getRandHSB = (s: P5): string => {
  const color = s.int(s.random(0, 360));

  return `hsb(${color}, 100%, 100%)`;
};

const createSketch = (s: P5) => {
  let randomnessGenerator: RandomnessGenerator;

  s.setup = () => {
    const size = getSize(s);
    s.createCanvas(size, size);
    s.noStroke();
    s.noLoop();
    randomnessGenerator = new RandomnessGenerator(s);
  };

  s.draw = () => {
    s.background('#eee');
    randomnessGenerator.drawShuffle();

    s.push();
    s.noFill();
    s.stroke(getRandHSB(s));
    const mult = s.random(0.2, 0.8);
    s.line(0, s.height * mult, s.width, s.height * mult);
    s.stroke(getRandHSB(s));
    s.rect(s.width * 0.25, s.height * mult * 0.9, s.width * mult, s.height * 0.8);
    s.pop();
  };

  s.windowResized = () => {
    const size = getSize(s);
    s.resizeCanvas(size, size);
  };
};

export default createSketch;
