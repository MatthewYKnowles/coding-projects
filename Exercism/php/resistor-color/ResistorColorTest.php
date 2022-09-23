<?php


declare(strict_types=1);

class ResistorColorTest extends PHPUnit\Framework\TestCase
{
    public static function setUpBeforeClass(): void
    {
        require_once 'ResistorColor.php';
    }

    public function testColors(): void
    {
        $this->assertEquals(COLORS, [
            "black",
            "brown",
            "red",
            "orange",
            "yellow",
            "green",
            "blue",
            "violet",
            "grey",
            "white"
        ]);
    }

    public function testBlackColorCode(): void
    {
        $this->assertEquals(colorCode("black"), 0);
    }

    public function testOrangeColorCode(): void
    {
        $this->assertEquals(colorCode("orange"), 3);
    }

    public function testWhiteColorCode(): void
    {
        $this->assertEquals(colorCode("white"), 9);
    }
}
