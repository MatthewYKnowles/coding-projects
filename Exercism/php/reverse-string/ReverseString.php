<?php

declare(strict_types=1);

function reverseString(string $text): string
{
    $reversedValue = "";
    for ($x = strlen($text) - 1; $x >= 0; $x--) {
        $reversedValue .= $text[$x];
    }
    return $reversedValue;
}
