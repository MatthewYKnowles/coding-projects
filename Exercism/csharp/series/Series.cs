using System;
using System.Collections.Generic;
using System.Linq;

public static class Series
{
    public static string[] Slices(string numbers, int sliceLength)
    {
        ValidateInputs(numbers, sliceLength);
        var answer = new List<string>();
        for (var i = 0; i <= numbers.Length - sliceLength; i++)
        {
            answer.Add(numbers.Substring(i, sliceLength));
        }
        return answer.ToArray();
    }

    private static void ValidateInputs(string numbers, int sliceLength)
    {
        if (sliceLength <= 0 || numbers.Length < sliceLength)
        {
            throw new ArgumentException();
        }

    }
}