export const getEventColor = (value) => {
  let red = `rgb(233,72,91)`;
  let blue = `rgb(74,111,191)`;
  let green = `rgb(84,160,71)`;
  let purple = `rgb(161,46,143)`;

  switch (value) {
    case "1":
    case "rød scene":
      return red;
    case "2":
    case "blå scene":
      return blue;
    case "3":
    case "grøn scene":
      return green;
    case "4":
    case "lilla scene":
      return purple;
  }
};
