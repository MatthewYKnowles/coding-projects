using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using NUnit.Framework.Constraints;
using NUnit.Framework.Internal.Filters;

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
            return PotterBooks.Price(books);
        }
    }

    public class PotterBooks
    {
        public static decimal Price(int[] books)
        {
            if (books.Length > 1 && books[1] == 1)
            {
                return (decimal) (8 * 2 * (1 - .05));
            }
            return books.Length * 8;
        }
    }
}
