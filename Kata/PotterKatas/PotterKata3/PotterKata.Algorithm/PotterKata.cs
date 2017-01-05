using System.Collections.Generic;
using System.Linq;

namespace PotterKata.Algorithm
{
    public class PotterKata
    {
        private readonly int[] _books;
        private readonly Dictionary<double, decimal> _volumeDiscount = new Dictionary<double, decimal>()
        {
            {1, (decimal) 1.0 },
            {2, (decimal) .95 },
            {3, (decimal) .90 },
            {4, (decimal) .80 },
            {5, (decimal) .75 }
        };

        private readonly Dictionary<int, int> _booksLeft = new Dictionary<int, int>()
        {
            {0, 0 },
            {1, 0 },
            {2, 0 },
            {3, 0 },
            {4, 0 },
        };

        public PotterKata(int[] books)
        {
            _books = books;
        }

        public decimal GetPrice()
        {
            AddBooksToBooksLeftDictionary();
            decimal currentPrice = 0;
            while (_booksLeft.Any(book => book.Value > 0))
            {
                var booksInASet = CalculateBooksInASet();
                currentPrice += booksInASet * 8 * _volumeDiscount[booksInASet];
            }
            return currentPrice;
        }

        private int CalculateBooksInASet()
        {
            int booksInASet = 0;
            foreach (var book in _booksLeft.ToList())
            {
                if (book.Value > 0)
                {
                    booksInASet += 1;
                    _booksLeft[book.Key] -= 1;
                }
            }
            return booksInASet;
        }

        private void AddBooksToBooksLeftDictionary()
        {
            foreach (int bookNumber in _books)
            {
                _booksLeft[bookNumber] += 1;
            }
        }
    }
}
