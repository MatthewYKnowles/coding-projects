using NUnit.Framework;

namespace PotterKata.Test
{
    [TestFixture]
    public class PotterKataTests
    {
        [TestCase(new[] {0}, ExpectedResult = 8)]
        [TestCase(new[] {0, 1}, ExpectedResult = 8 * 2 * (1 - .05))]
        [TestCase(new[] {0, 1, 2}, ExpectedResult = 8 * 3 * (1 - .10))]
        [TestCase(new[] {0, 1, 2, 3}, ExpectedResult = 8 * 4 * (1 - .20))]
        [TestCase(new[] {0, 1, 2, 3, 4}, ExpectedResult = 8 * 5 * (1 - .25))]
        [TestCase(new[] {0, 0}, ExpectedResult = 8 * 2)]
        [TestCase(new[] {0, 0, 0}, ExpectedResult = 8 * 3)]
        [TestCase(new[] {0, 1, 0, 1}, ExpectedResult = 8 * 2 * (1 - .05) + (8 * 2 * (1-.05)))]
        [TestCase(new[] {0, 1, 0, 1, 0, 1, 2, 3, 4}, ExpectedResult = (8 * 5 * (1 - .25)) + (8 * 2 * (1 - .05)) + (8 * 2 * (1-.05)))]
        public decimal PotterTests(int[] books)
        {
            var potterKata = new Algorithm.PotterKata(books);
            return potterKata.GetPrice();
        }
    }
}
