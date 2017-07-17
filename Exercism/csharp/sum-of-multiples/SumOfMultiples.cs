using System;
using System.Collections.Generic;
using System.Linq;

public static class SumOfMultiples
{
    public static int To(IEnumerable<int> multiples, int maxNumber)
    {
        HashSet<int> uniqueMultiples = new HashSet<int>();

        foreach (int multiple in multiples)
        {
            int currentMultiple = multiple;
            while (currentMultiple < maxNumber)
            {
                uniqueMultiples.Add(currentMultiple);
                currentMultiple += multiple;
            }
        }

        return uniqueMultiples.Sum();
    }
}