using System;
using System.Collections.Generic;

public static class ArmstrongNumbers
{
    public static bool IsArmstrongNumber(int number)
    {
        var listOfIntegers = new List<int>();
        while (number > 0)
        {
            listOfIntegers.Add(number % 10);
        }
        if (number == 10)
        {
            return false;
        }
        return true;
    }
}