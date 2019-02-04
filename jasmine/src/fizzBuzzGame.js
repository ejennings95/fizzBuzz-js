var fizzBuzz = function(i){
  if (i % 3 === 0 && i % 5 === 0) {
  return 'fizzbuzz';
} else if (i % 3 === 0) {
  return 'fizz';
} else if (i % 5 === 0) {
  return 'buzz';
} else {
  return i;
}
}

var game = function(num){
  for (i = 1; i <= num; i++) {
  console.log(fizzBuzz(i));
  }
}
