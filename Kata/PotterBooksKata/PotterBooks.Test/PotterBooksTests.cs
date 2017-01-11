using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using PotterBooks.Algorithm;

namespace PotterBooks.Test
{
    [TestFixture]
    public class PotterBooksTests
    {
        [TestCase(new [] {0}, ExpectedResult = 8)]
        [TestCase(new [] {0, 1}, ExpectedResult = 8 * 2 * (1 - .05))]
        [TestCase(new [] {0, 1, 2}, ExpectedResult = 8 * 3 * (1 - .10))]
        [TestCase(new [] {0, 1, 2, 3}, ExpectedResult = 8 * 4 * (1 - .20))]
        [TestCase(new [] {0, 1, 2, 3, 4}, ExpectedResult = 8 * 5 * (1 - .25))]
        [TestCase(new [] {0, 0}, ExpectedResult = 8 * 2)]
        [TestCase(new [] {0, 0, 0}, ExpectedResult = 8 * 3)]
        [TestCase(new [] {0, 1, 2, 3, 4, 0, 1, 2, 3, 4}, ExpectedResult = 8 * 5 * 2 * (1 -.25))]
        [TestCase(new [] {0, 1, 2, 3, 4, 0, 1, 2}, ExpectedResult = 8 * 4 * 2 * (1 -.20))]
        public decimal PotterPricingTests(int[] books)
        {
            var potterBooks = new PotterPricing(books);
            return potterBooks.GetPrice();
        }
    }
}
