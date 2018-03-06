using System;
using System.Linq;

public static class Raindrops
{
    public static string Convert(int number)
    {
        var raindropSound = "";
        if (number % 3 == 0)
        {
            raindropSound += "Pling";
        }
        if (number % 5 == 0)
        {
            raindropSound += "Plang";
        }
        if (number % 7 == 0)
        {
            raindropSound += "Plong";
        }

        return raindropSound == "" ? number.ToString() : raindropSound;
    }
}