function Add(stringOfNumbers) {
  var deliminator = ",";
  var numbers = stringOfNumbers;
  if (numbers.startsWith("//")) {
    deliminator = numbers[2];
    numbers = numbers.substring(4);
  }
  var re = new RegExp(deliminator, "g");
  let numbersWithoutNewLine = numbers.replace("\n", ",");
  let commaSeperatedNumbers = numbersWithoutNewLine.replace(re, ",");
  let splitNumbers = commaSeperatedNumbers.split(",");
  let accumulator = sumUpArrayOfNumbers(splitNumbers);
  if (accumulator === 0) { return ""; }
  return accumulator.toString();
}

function sumUpArrayOfNumbers(splitNumbers) {
  let accumulator = 0;
  for (let i = 0; i < splitNumbers.length; i++) {
    accumulator += parseInt(splitNumbers[i]);
  }
  return accumulator;
}