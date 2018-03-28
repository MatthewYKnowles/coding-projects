using System;

public static class CollatzConjecture
{
    public static long Steps(long number)
    {
        CheckForInvalidInput(number);
        return CalculateCollatzSteps(number);
    }

    private static long CalculateCollatzSteps(long number)
    {
        var steps = 0;

        for (var currentNumber = number; currentNumber > 1; steps++)
        {
            currentNumber = GetNextCollatzNumber(currentNumber);
        }

        return steps;
    }

    private static long GetNextCollatzNumber(long number)
    {

        return number.IsEven() ? number.EvenCollatzNumber() : number.OddCollatzNumber();
    }

    private static bool IsEven(this long number)
    {
        return number % 2 == 0;
    }
    
    private static long OddCollatzNumber(this long number)
    {
        return number * 3 + 1;
    }

    private static long EvenCollatzNumber(this long number)
    {
        return number / 2;
    }

    private static void CheckForInvalidInput(long number)
    {
        if (number <= 0)
        {
            throw new ArgumentException(nameof(number));
        }
    }
}