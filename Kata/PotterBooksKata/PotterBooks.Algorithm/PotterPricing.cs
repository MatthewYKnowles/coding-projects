using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PotterBooks.Algorithm
{
    public class BookDiscounts
    {
        public readonly Dictionary<int, decimal> _bookDiscounts = new Dictionary<int, decimal>()
        {
            {1, 1 },
            {2, .95m },
            {3, .90m },
            {4, .80m },
            {5, .75m }
        };

        public decimal getDiscount(int booksInSet)
        {
            return _bookDiscounts[booksInSet];
        }
    }

    public class PotterPricing
    {
        private readonly int[] _books;

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
            PopulateBooksRemainingDictionary();
            var setOfFive = new SetOfFive(_booksRemaining);
            var price1 = setOfFive.GetBookCollectionPrice();

            PopulateBooksRemainingDictionary();
            var setOfFour = new SetOfFour(_booksRemaining);
            decimal price2 = setOfFour.GetBookCollectionPrice();
            return Math.Min(price1, price2);
        }

        private void PopulateBooksRemainingDictionary()
        {
            foreach (var book in _books)
            {
                _booksRemaining[book] += 1;
            }
        }
    }

    public abstract class SetPrice
    {
        protected Dictionary<int, int> _booksRemaining;
        protected BookDiscounts _booksDiscounts;

        public decimal GetBookCollectionPrice()
        {
            decimal price1 = 0;
            while (_booksRemaining.Any(book => book.Value > 0))
            {
                var booksInSet = GetBooksInSet();
                price1 += 8 * booksInSet * _booksDiscounts.getDiscount(booksInSet);
            }
            return price1;
        }

        private int GetBooksInSet()
        {
            var booksInSet = 0;
            foreach (var bookQuantity in _booksRemaining.OrderByDescending(bookQuantity => bookQuantity.Value).ToList())
            {
                if (BookSetRule(bookQuantity, booksInSet))
                {
                    booksInSet += 1;
                    _booksRemaining[bookQuantity.Key] -= 1;
                }
            }

            return booksInSet;
        }

        protected abstract bool BookSetRule(KeyValuePair<int, int> bookQuantity, int booksInSet);
    }

    public class SetOfFive : SetPrice
    {
        public SetOfFive(Dictionary<int, int> booksRemaining)
        {
            _booksRemaining = booksRemaining;
            _booksDiscounts = new BookDiscounts();
        }

        protected override bool BookSetRule(KeyValuePair<int, int> bookQuantity, int booksInSet)
        {
            return bookQuantity.Value > 0;
        }
    }

    public class SetOfFour : SetPrice
    {
        public SetOfFour(Dictionary<int, int> booksRemaining)
        {
            _booksRemaining = booksRemaining;
            _booksDiscounts = new BookDiscounts();
        }

        protected override bool BookSetRule(KeyValuePair<int, int> bookQuantity, int booksInSet)
        {
            return bookQuantity.Value > 0 && booksInSet < 4;
        }
    }
}
