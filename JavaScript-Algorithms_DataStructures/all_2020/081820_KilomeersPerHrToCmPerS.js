function cockroachSpeed(s) {
  // What is s? The format and the what it represents.
    // s is the speed in kilometers per hour in float format
  // What is the conversion formula?
   // centimeters per second = kilometers per hour × 27.777778
  var centimetersPerSecond = s * 27.777778;
  // How do you round down and cast to an integer?
  centimetersPerSecond = Math.floor(centimetersPerSecond);
  return centimetersPerSecond;
 }