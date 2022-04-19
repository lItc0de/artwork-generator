/* eslint-disable no-param-reassign */
import P5 from 'p5';

const getSize = (s: P5) => s.windowWidth / 1.5;

const createSketch = (s: P5) => {
  s.setup = () => {
    const size = getSize(s);
    s.createCanvas(size, size);
    s.noStroke();
    s.noLoop();
  };

  s.draw = () => {
    s.background('#000');
    s.rect(20, 20, 20);
  };

  s.windowResized = () => {
    const size = getSize(s);
    s.resizeCanvas(size, size);
  };
};

export default createSketch;
