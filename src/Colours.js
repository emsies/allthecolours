import React from 'react';

// Based off of http://jsfiddle.net/XpSVq/
const Swatch = ({ red, blue, green }) => <td style={{ backgroundColor: `rgb(${red},${green},${blue})` }} />;

const Colours = () => {
  const colorRange = 256;
  const steps = 8;
  const halfStep = steps / 2;

  const colorSteps = [];
  for (let i = 0; i <= colorRange; i = i + steps) {
    colorSteps.push(i);
  }

  let numberOfRows = (colorSteps.length - 1) * halfStep;
  let numberOfColumns = colorSteps.length - 1;
  let z = 0;

  const colorPallete = [];

  for (var y = 0; y < numberOfRows; y++) {
    const colorPalleteRow = [];
    let tmp_z = (y % halfStep) * steps;
    let tmp_z_end = tmp_z + steps;

    for (let x = 0; x < numberOfColumns; x++) {
      for (z = tmp_z; z < tmp_z_end; z++) {
        const colorSwatch = { red: colorSteps[x], green: colorSteps[Math.floor(y / halfStep)], blue: colorSteps[z] };

        colorPalleteRow.push(colorSwatch);
      }
    }

    colorPallete.push(colorPalleteRow);
  }

  return (
    <main>
      <table id="container">
        <tbody>
          {colorPallete.map((colorPalleteRow, index) => (
            <tr key={index}>
              {colorPalleteRow.map(({ red, green, blue }) => (
                <Swatch key={Math.random()} red={red} green={green} blue={blue} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Colours;
