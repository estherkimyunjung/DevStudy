//To convert fahrenheit to celsius:
//celsius = (fahrenheit - 32) * (5/9)

// function weatherInfo (temp) {
//   var c = convertToCelsius(temp)
//   if (c < 0)
//     return (c + " is freezing temperature")
//   else
//     return (c + " is above freezing temperature")
// }

// function convertToCelsius (temperature) {
//   var celsius = (temperature - 32) * (5/9)
//   return celsius
// }


const weatherInfo = (temp, celsius = convertToCelsius(temp)) =>
  `${celsius} is ${celsius > 0 ? 'above ' : ''}freezing temperature`;

const convertToCelsius = (temp) => (temp - 32) * (5 / 9); 