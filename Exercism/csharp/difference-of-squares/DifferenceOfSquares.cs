using System;

public static class Squares
{

    public static int DifferenceOfSquares(int max)
    {
        return SquareOfSums(max) - SumOfSquares(max);
    }

    public static int SquareOfSums(int max)
    {
        return (int)Math.Pow(GetSumOfNumbersToMax(max), 2);
    }

    private static int GetSumOfNumbersToMax(int NumberToSumTo)
    {
        int total = 0;
        for (int number = 0; number <= NumberToSumTo; number++)
        {
            total += number;
        }
        return total;
    }

    public static int SumOfSquares(int max)
    {
        double total = 0;
        for (int number = 0; number <= max; number++)
        {
            total += Math.Pow(number, 2);
        }
        return (int)total;
    }

}