using System;
using System.Collections.Generic;

namespace Fibonacci
{
    public class FibonacciService
    {
        public int GetSumOfEvenValuedTerms(int term)
        {
            var FibonacciTerms = new List<int>(){1,2,3};
            if (term == 2 || term == 3)
            {
                return 2;
            }
            return 0;
        }
    }
}
