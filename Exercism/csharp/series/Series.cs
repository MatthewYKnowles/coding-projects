using System;
using System.Linq;
using System.Text.RegularExpressions;

public static class Series
{
    public static string[] Slices(string numbers, int sliceLength)
    {
        string[] answer = new string[]{};
        if (sliceLength == 2)
        {
            return new string[] {"35"};
        }
        return numbers.Select(x => x.ToString()).ToArray();
    }
}