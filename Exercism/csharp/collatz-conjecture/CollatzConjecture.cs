using System;

public static class CollatzConjecture
{
    public static int Steps(int number)
    {
        CheckForInvalidInput(number);
        return CalculateCollatzSteps(number);
    }

    private static int CalculateCollatzSteps(int number)
    {
        int steps = 0;
        int currentNumber = number;

        while (currentNumber > 1)
        {
            steps += 1;
            currentNumber = GetNextCollatzNumber(currentNumber);
        }

        return steps;
    }

    private static int GetNextCollatzNumber(int number)
    {

        return number.IsEven() ? EvenCollatzNumber(number) : OddCollatzNumber(number);
    }

    private static Boolean IsEven(this int number)
    {
        return number % 2 == 0;
    }
    
    private static int OddCollatzNumber(int number)
    {
        return number * 3 + 1;
    }

    private static int EvenCollatzNumber(int number)
    {
        return number / 2;
    }

    private static void CheckForInvalidInput(int number)
    {
        if (number <= 0)
        {
            throw new ArgumentException();
        }
    }
}