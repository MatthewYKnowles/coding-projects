using System;

public static class Gigasecond
{
    public static DateTime Add(DateTime moment)
    {
        var oneBillion = Math.Pow(10, 9);
        return moment.AddSeconds(oneBillion);
    }
}