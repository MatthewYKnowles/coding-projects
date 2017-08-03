describe('Rental', function () {
  var stuff;
  var customer;

  beforeEach(function () {
    stuff = new Rental();
    customer = {
      name: 'Steven',
    }
  });
  it('should rent Cars 2 for 3 days', function () {
    let movie = { id: 'F003', name: 'Cars 2', price: 1.5, points: 1 }
    testOneRental(movie, 3);
  });
  it('should rent Cars 2 for 4 days', function () {
    let movie = { id: 'F003', name: 'Cars 2', price: 3, points: 1 }
    testOneRental(movie, 4);
  });
  it('should rent Cars 2 for 5 days', function () {
    let movie = { id: 'F003', name: 'Cars 2', price: 4.5, points: 1 }
    testOneRental(movie, 5);
  });
  it('should rent Wolverine for 1 days', function () {
    let movie = { id: 'F004', name: 'Wolverine', price: 3, points: 1 }
    testOneRental(movie, 1);
  });
  it('should rent Wolverine for 2 days', function () {
    let movie = { id: 'F004', name: 'Wolverine', price: 6, points: 1 }
    testOneRental(movie, 2);
  });
  it('should rent Wolverine for 3 days', function () {
    let movie = { id: 'F004', name: 'Wolverine', price: 9, points: 2 }
    testOneRental(movie, 3);
  });
  it('should rent Trois Couleurs: Bleu for 2 days', function () {
    let movie = { id: 'F002', name: 'Trois Couleurs: Bleu', price: 2, points: 1 }
    testOneRental(movie, 2);
  });
  it('should rent Trois Couleurs: Bleu for 3 days', function () {
    let movie = { id: 'F002', name: 'Trois Couleurs: Bleu', price: 3.5, points: 1 }
    testOneRental(movie, 3);
  });

  it('should return the price of four movies', function () {
    var properResult =
      'Rental Record for martin\n' +
      '\tRan\t3.5\n' +
      '\tTrois Couleurs: Bleu\t2\n' +
      '\tCars 2\t1.5\n' +
      '\tWolverine\t15\n' +
      'Amount owed is 22\n' +
      'You earned 5 frequent renter points\n';

    var customer = {
      name: 'martin',
      rentals: [
        { movieID: 'F001', days: 3 },
        { movieID: 'F002', days: 1 },
        { movieID: 'F003', days: 3 },
        { movieID: 'F004', days: 5 },
      ]
    };

    var actualResult = stuff.statement(customer)
    expect(actualResult).toEqual(properResult);
  });
  function testOneRental(movie, rentalDays) {
    customer.rentals = [{ movieID: movie.id, days: rentalDays }]
    let expectedResult = oneMovieRentalString(customer.name, movie);
    expect(stuff.statement(customer)).toEqual(expectedResult);
  }
});
function oneMovieRentalString(name, movie) {
  return `Rental Record for ${name}\n` +
    `\t${movie.name}\t${movie.price}\n` +
    `Amount owed is ${movie.price}\n` +
    `You earned ${movie.points} frequent renter points\n`;
}