<?php
declare(strict_types=1);

class RentalInfo
{
    private MovieFactory $movieFactory;
    private ?Customer $customer;

    public function __construct(MovieFactory $movieFactory, Customer $customer)
    {
        $this->movieFactory = $movieFactory;
        $this->customer = $customer;
    }

    public function Statement(): string
    {
        $customer = $this->customer;
        $result = "Rental Record for " . $customer->Name . "\n";
        foreach ($customer->Rentals as $rental) {
            $movie = $this->LookupMovie($rental->MovieId);
            $thisAmount = $this->getAmount($movie, $rental->Days);
            $result .= "\t" . $movie->Title . "\t" . $thisAmount . "\n";
        }

        $totalAmount = $this->determineTotalAmount($customer->Rentals);
        $frequentRenterPoints = $this->determineFrequentRenterPoints($customer->Rentals);

        $result .= "Amount owed is " . $totalAmount . "\n";
        $result .= "You earned " . $frequentRenterPoints . " frequent renter points\n";

        return $result;
    }

    private function LookupMovie(string $id): Movie
    {
        $movies = [
            "F001" => new Movie("Ran", "regular"),
            "F002" => new Movie("Trois Couleurs: Bleu", "regular"),
            "F003" => new Movie("Cars 2", "childrens"),
            "F004" => new Movie("Latest Hit Release", "new"),
        ];
        return $movies[$id];
    }

    private function getAmount(Movie $movie, int $days): float
    {
        $rental = $this->movieFactory->getRental($movie->Code);
        return $rental->amountDue($days);
    }

    private function determineFrequentRenterPoints(array $movieRentals): int
    {
        $frequentRenterPoints = 0;
        foreach ($movieRentals as $movieRental) {
            $movie = $this->LookupMovie($movieRental->MovieId);
            $rental = $this->movieFactory->getRental($movie->Code);
            $frequentRenterPoints += $rental->frequentRenterPointsEarned($movieRental->Days);
        }
        return $frequentRenterPoints;
    }

    private function determineTotalAmount(array $rentals)
    {
        $totalAmount = 0;
        foreach ($rentals as $rental) {
            $movie = $this->LookupMovie($rental->MovieId);
            $totalAmount += $this->getAmount($movie, $rental->Days);
        }
        return $totalAmount;
    }
}

class Customer
{
    public string $Name;
    public array $Rentals;

    public function __construct(string $name, array $rentals)
    {
        $this->Name = $name;
        $this->Rentals = $rentals;
    }
}

class Movie
{
    public string $Title;
    public string $Code;

    public function __construct(string $title, string $code)
    {
        $this->Title = $title;
        $this->Code = $code;
    }
}

class MovieRental
{
    public string $MovieId;
    public int $Days;

    public function __construct(string $movieId, int $days)
    {
        $this->MovieId = $movieId;
        $this->Days = $days;
    }
}

abstract class Rental
{
    abstract public function amountDue(int $days): float;
    public function frequentRenterPointsEarned(int $days): int {
        return 1;
    }
}

class RegularRental extends Rental
{
    public function amountDue(int $days): float
    {
        $thisAmount = 2;
        if ($days > 2) {
            $thisAmount += ($days - 2) * 1.5;
        }
        return $thisAmount;
    }
}

class ChildrensRental extends Rental
{
    public function amountDue(int $days): float
    {
        $thisAmount = 1.5;
        if ($days > 3) {
            $thisAmount += ($days - 3) * 1.5;
        }
        return $thisAmount;
    }
}

class NewRental extends Rental
{
    public function amountDue(int $days): float
    {
        return $days * 3;
    }

    public function frequentRenterPointsEarned(int $days): int
    {
        return $days > 2
            ? 2
            : 1;
    }
}

class MovieFactory
{
    public function getRental(string $movieCode) {
        if ($movieCode == 'regular'){
            return new RegularRental();
        }
        if ($movieCode == 'childrens'){
            return new ChildrensRental();
        }
        if ($movieCode == 'new'){
            return new NewRental();
        }
    }
}