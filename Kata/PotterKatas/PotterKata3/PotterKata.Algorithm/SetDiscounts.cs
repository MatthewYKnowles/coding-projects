using System.Collections.Generic;

namespace PotterKata.Algorithm
{
    public class SetDiscounts
    {
        public readonly Dictionary<double, decimal> _volumeDiscount = new Dictionary<double, decimal>()
        {
            {1, (decimal) 1.0 },
            {2, (decimal) .95 },
            {3, (decimal) .90 },
            {4, (decimal) .80 },
            {5, (decimal) .75 }
        };

        public SetDiscounts()
        {
        }
    }
}