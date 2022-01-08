module.exports = function reverse (n) {
  var temp, reverseInt = 0;
  
  while (n) {
    temp = n % 10;
    reverseInt = (reverseInt * 10) + temp;
    n = parseInt(n / 10);
  }
  if (reverseInt < 0){
      reverseInt = reverseInt * -1;
  }
  return reverseInt;
}
