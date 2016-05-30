
var months = {
  a01: "January",
  a02: "February",
  a03: "March",
  a04: "April",
  a05: "May",
  a06: "June",
  a07: "July",
  a08: "August",
  a09: "September",
  a10: "October",
  a11: "November",
  a12: "December",
};
var dateString = {
  a01: "1st",
  a02: "2nd",
  a03: "3rd",
  a04: "4th",
  a05: "5th",
  a06: "6th",
  a07: "7th",
  a08: "8th",
  a09: "9th",
  a10: "10th",
  a11: "11th",
  a12: "12th",
  a13: "13th",
  a14: "14th",
  a15: "15th",
  a16: "16th",
  a17: "17th",
  a18: "18th",
  a19: "19th",
  a20: "20th",
  a21: "21st",
  a22: "22nd",
  a23: "23rd",
  a24: "24th",
  a25: "25th",
  a26: "26th",
  a27: "27th",
  a28: "28th",
  a29: "29th",
  a30: "30th",
  a31: "31st"
};

function makeFriendlyDates(array) {
  var startDate = array[0].split("-");
  var endDate = array[1].split("-");
  var firstMonth = monthLookup(startDate[1]);
  var secondMonth = monthLookup(endDate[1]);
  var answer = [];
  firstDate = firstMonth + " " + dateStringLookup(startDate[2]);
  if (array[0] == array[1]){return [firstDate + ", " + startDate[0]];}
  var secondDate = "";
  if (firstMonth != secondMonth || startDate[0] != endDate[0]) {secondDate += secondMonth + " ";}
  secondDate += dateStringLookup(endDate[2]);
  if (olderThanOneYear(array)){
    firstDate += ", " + startDate[0];
    secondDate += ", " + endDate[0];
  }
  else if (startDate[0] == endDate[0]  && firstMonth != secondMonth) {firstDate += ", " + startDate[0];}
  else if (firstMonth === secondMonth && startDate[0] != endDate[0]) {firstDate += ", " + startDate[0];}
  answer.push(firstDate);
  answer.push(secondDate);
  return answer;
}

function olderThanOneYear(array) {
  var dateOneInSeconds = makeDate(array[0]);
  var dateTwoInSeconds = makeDate(array[1]);
  var dateDifference = dateTwoInSeconds - dateOneInSeconds;
  console.log(dateDifference);
  return dateDifference >= 31536000000;
}

function makeDate(string){
  var array = string.split("-");
  var date = new Date();
  return date.setFullYear(parseInt(array[0]), parseInt(array[1]) - 1, parseInt(array[2]));
}

function monthLookup(month) {
  var monthNumber = "a" + month;
  return months[monthNumber];
}

function dateStringLookup(date) {
  var dateNumber =  "a" + date;
  return dateString[dateNumber];
}
