<?php
declare(strict_types=1);

use PHPUnit\Framework\TestCase;


class MovieRentalStoreTest extends TestCase {
    private $classUnderTest;
    protected function setUp(): void
    {
        $this->classUnderTest = new MovieRentalStore();
    }

    public function testOne(): void {
        $properResult =
            "Rental Record for martin\n\tRan\t5\n\tTrois Couleurs: Bleu\t2\nAmount owed is 7\nYou earned 2 frequent renter points\n";
        $customer = (object)[
            'name' => 'martin',
            'rentals' => [(object)['movieID'=> 'F001', 'days' => 3 ], (object)[ 'movieID' => 'F002', 'days' => 1 ]]
    ];
        $actualResult = $this->classUnderTest->getInfo($customer);
        static::assertSame($properResult, $actualResult);
    }
}