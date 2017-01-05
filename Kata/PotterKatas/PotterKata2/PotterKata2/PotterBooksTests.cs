using NUnit.Framework;
using PotterKata.Algorithm;

namespace PotterKata2
{
    [TestFixture]
    public class PotterBooksTests
    {
        [TestCase(new[] {0}, ExpectedResult = 8)]
        [TestCase(new[] {0, 0}, ExpectedResult = 8 * 2)]
        [TestCase(new[] {0, 0, 0}, ExpectedResult = 8 * 3)]
        [TestCase(new[] {0, 1}, ExpectedResult = 8 * 2 * (1 - .05))]
        public decimal OneBook(int[] books)
        {
            var potterBooks = new PotterBooks(books);
            return potterBooks.Price();
        }
    }
}
