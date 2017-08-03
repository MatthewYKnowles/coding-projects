var MovieRentalStatements = function () { };

MovieRentalStatements.prototype.print = function (customer) {
  var statement = this.buildStatement(customer);
  var result = this.buildString(statement);
  return result;
};

MovieRentalStatements.prototype.buildStatement = function (customer) {
  var statement = {
    customerName: customer.name,
    movies: [],
    totalAmount: 0,
    frequentRenterPoints: 0
  };
  for (var rental of customer.rentals) {
    var movie = movies[rental.movieID];
    let movieRentalAmount = movieFactory(movie.code).getAmount(rental.days);
    statement.movies.push({ title: movie.title, amount: movieRentalAmount });
    statement.totalAmount += movieRentalAmount;
    statement.frequentRenterPoints += shouldAddDoublePoints(movie.code, rental.days) ? 2 : 1;
  }
  return statement;
};

MovieRentalStatements.prototype.buildString = function (statement) {
  var result = `Rental Record for ${statement.customerName}\n`;
  statement.movies.forEach((movie) => {
    result += `\t${movie.title}\t${movie.amount}\n`;
  });
  result += `Amount owed is ${statement.totalAmount}\n`;
  result += `You earned ${statement.frequentRenterPoints} frequent renter points\n`;
  return result;
};

function shouldAddDoublePoints(movieCode, days) {
  return movieCode === "new" && days > 2;
}

function movieFactory(movieCode) {
  if (movieCode === "regular") return regularMovie;
  if (movieCode === "childrens") return childrensMovie;
  return newMovie;
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