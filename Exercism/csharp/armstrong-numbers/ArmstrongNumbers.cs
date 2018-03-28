using System;
using System.Collections.Generic;
using System.Linq;

public static class ArmstrongNumbers
{
    public static bool IsArmstrongNumber(int number)
    {
        var digits = GetListOfDigits(number);
        var sumOfDigitsSquared = GetSumOfDigitsSquared(digits);
        return number == sumOfDigitsSquared;
    }

    private static int GetSumOfDigitsSquared(List<int> digits)
    {
        int numberOfDigits = digits.Count;
        return digits.Select( x => (int) Math.Pow(x, numberOfDigits)).Sum();
    }

    private static List<int> GetListOfDigits(int number)
    {
        var listOfIntegers = new List<int>();
        while (number > 0)
        {
            listOfIntegers.Add(number % 10);
            number = number / 10;
        }

        return listOfIntegers;
    }
}