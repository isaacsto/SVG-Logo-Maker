const Shapes = require('./shapes');

test('renders an SVG file', () => {
  const textColor = 'white';
  const shape = new Shapes(textColor, 'circle', 'green');
  shape.render();
  expect(fs.existsSync('logo.svg')).toBe(true);
});



