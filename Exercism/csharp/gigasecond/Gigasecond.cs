using System;

public static class Gigasecond
{
    public static DateTime Date(DateTime birthDate)
    {
        var oneBillion = Math.Pow(10, 9);
        return birthDate.AddSeconds(oneBillion);
    }
}