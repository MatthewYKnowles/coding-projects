var Rental = function () { };

Rental.prototype.statement = function (customer) {
  var totalAmount = 0;
  var frequentRenterPoints = 0;
  var result = `Rental Record for ${customer.name}\n`;
  for (var rental of customer.rentals) {
    var movie = movies[rental.movieID];
    totalAmount += calculateRentalAmount(movie.code, rental.days);
    frequentRenterPoints += shouldAddDoublePoints(movie.code, rental.days) ? 2 : 1;
    result += `\t${movie.title}\t${calculateRentalAmount(movie.code, rental.days)}\n`;
  }
  result += `Amount owed is ${totalAmount}\n`;
  result += `You earned ${frequentRenterPoints} frequent renter points\n`;
  return result;
};

function shouldAddDoublePoints(movieCode, days) {
  return movieCode === "new" && days > 2;
}

function calculateRentalAmount(movieCode, days) {
  if (movieCode === "regular") return regularMovie.getAmount(days);
  if (movieCode === "childrens") return childrensMovie.getAmount(days);
  return newMovie.getAmount(days);
}

var movies = {
  F001: { title: "Ran", code: "regular" },
  F002: { title: "Trois Couleurs: Bleu", code: "regular" },
  F003: { title: "Cars 2", code: "childrens" },
  F004: { title: "Wolverine", code: "new" },
};

var regularMovie = {
  getAmount: function (days) {
    var priceForMultipleDays = 2 + 1.5 * (days - 2);
    return days > 1 ? priceForMultipleDays : 2;
  }
};

var childrensMovie = {
  getAmount: function (days) {
    var priceForMoreThanTwoDays = 1.5 + 1.5 * (days - 3);
    return days > 2 ? priceForMoreThanTwoDays : 1.5;
  }
};

var newMovie = {
  getAmount: function (days) {
    return days * 3;
  }
};