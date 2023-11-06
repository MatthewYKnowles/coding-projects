<?php
declare(strict_types=1);

use PHPUnit\Framework\TestCase;


class MovieRentalStoreTest extends TestCase
{
    public function testOne(): void {
        $movieRentalStore = new MovieRentalStore();
        static::assertSame(15, $movieRentalStore->rental(15));
    }
}