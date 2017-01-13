using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PotterBooks.Algorithm
{
    public class PotterPricing
    {
        private readonly int[] _books;
        private readonly Dictionary<int, decimal> _bookDiscounts = new Dictionary<int, decimal>()
        {
            {1, 1 },
            {2, .95m },
            {3, .90m },
            {4, .80m },
            {5, .75m }
        };

        private Dictionary<int, int> _booksRemaining = new Dictionary<int, int>()
        {
            {0, 0 },
            {1, 0 },
            {2, 0 },
            {3, 0 },
            {4, 0 },
        };

        public PotterPricing(int[] books)
        {
            _books = books;
        }
        public decimal GetPrice()
        {
            decimal price = 0;
            PopulateBooksRemainingDictionary();
            while (_booksRemaining.Any(book => book.Value > 0))
            {
                var booksInSet = GetBooksInSet();
                price += 8 * booksInSet * _bookDiscounts[booksInSet];
                PopulateBooksRemainingDictionary();
            }
            return price;
        }

        private int GetBooksInSet()
        {
            var booksInSet = 0;
            foreach (var bookQuantity in _booksRemaining.ToList())
            {
                if (bookQuantity.Value > 0)
                {
                    booksInSet += 1;
                    _booksRemaining[bookQuantity.Key] -= 1;
                }
            }
            return booksInSet;
        }

        private void PopulateBooksRemainingDictionary()
        {
            foreach (var book in _books)
            {
                _booksRemaining[book] += 1;
            }
        }
    }
}
