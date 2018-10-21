var convertToRoman = function(num) {

  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var romanized = '';
///Cycle through decimalValue array
  for (var index = 0; index < decimalValue.length; index++) {
    //While index is less than the number given, push roman numeral to romanized array.
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      //Remove matched decimal
      num -= decimalValue[index];
      
      
    }
  }

  return romanized;
}


convertToRoman(36);