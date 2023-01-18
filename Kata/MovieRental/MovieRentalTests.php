<?php
require 'MovieRental.php';

class MovieRentalTests extends PHPUnit\Framework\TestCase
{
    private MovieFactory $movieFactory;

    protected function setUp(): void
    {
        $this->movieFactory = new MovieFactory();
    }

    public function testRentMultipleMovies(): void
    {
        $customer = new Customer("matthew", [
            new MovieRental("F001", 3),
            new MovieRental("F002", 1),
        ]);
        $rentalInfo = new RentalInfo($this->movieFactory, $customer);
        $output = $rentalInfo->Statement();
        $expected = 'Rental Record for matthew
	Ran	3.5
	Trois Couleurs: Bleu	2
Amount owed is 5.5
You earned 2 frequent renter points
';
        $this->assertEquals($expected, $output);
    }

    /**
     * @dataProvider oneRentalProvider
     */
    public function testOneRental(string $customerName, string $rentalCode, int $rentalDays, string $movieTitle, float $rentalPrice, int $renterPoints): void
    {
        $customer = $this->createCustomerRentingOneMovie($customerName, $rentalCode, $rentalDays);
        $expected = $this->generateOneRentalReceipt($customerName, $movieTitle, $rentalPrice, $renterPoints);
        $rentalInfo = new RentalInfo($this->movieFactory, $customer);

        $output = $rentalInfo->Statement();

        $this->assertEquals($expected, $output);
    }

    public function oneRentalProvider(): array
    {
        return [
            'regular movie short duration' => ["martin", "F001", 2, 'Ran', 2, 1],
            'regular movie long duration' => ["bob", "F002", 3, 'Trois Couleurs: Bleu', 3.5, 1],
            'childrens movie short duration' => ["kent", "F003", 3, 'Cars 2', 1.5, 1],
            'childrens movie long duration' => ["martin", "F003", 4, 'Cars 2', 3, 1],
            'new movie short duration' => ["martin", "F004", 2, 'Latest Hit Release', 6, 1],
            'new movie long duration bonus renter point' => ["martin", "F004", 3, 'Latest Hit Release', 9, 2],
        ];
    }

    private function generateOneRentalReceipt(string $rentersName, string $movieTitle, float $rentalPrice, int $frequentRenterPoints): string
    {
        return 'Rental Record for ' . $rentersName . '
	' . $movieTitle . '	' . $rentalPrice . '
Amount owed is ' . $rentalPrice . '
You earned ' . $frequentRenterPoints . ' frequent renter points
';
    }

    private function createCustomerRentingOneMovie(string $customerName, string $rentalCode, int $rentalDays): Customer
    {
        return new Customer($customerName, [
            new MovieRental($rentalCode, $rentalDays)
        ]);
    }
}