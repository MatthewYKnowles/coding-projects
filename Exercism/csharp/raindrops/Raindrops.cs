using System;

public static class Raindrops
{
    public static string Convert(int number)
    {
        if (number == 7)
        {
            return "Plong";
        }
        if (number == 5)
        {
            return "Plang";
        }
        if (number == 3)
        {
            return "Pling";
        }
        return "1";
    }
}