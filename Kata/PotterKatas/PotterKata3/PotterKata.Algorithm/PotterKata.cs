using System;
using System.Collections.Generic;
using System.Linq;

namespace PotterKata.Algorithm
{
    public class PotterKata
    {
        private readonly int[] _books;

        private readonly Dictionary<int, int> _booksLeft = new Dictionary<int, int>()
        {
            {0, 0 },
            {1, 0 },
            {2, 0 },
            {3, 0 },
            {4, 0 },
        };

        private readonly SetDiscounts _setDiscounts;

        public PotterKata(int[] books)
        {
            _books = books;
            _setDiscounts = new SetDiscounts();
        }

        public decimal GetPrice()
        {
            AddBooksToBooksLeftDictionary();
            var setOfFiveBooks = new SetOfFiveBooks(_booksLeft);
            var firstPrice = setOfFiveBooks.CalculatePriceForSet();

            AddBooksToBooksLeftDictionary();
            decimal secondPrice = 0;
            while (_booksLeft.Any(book => book.Value > 0))
            {
                var booksInASet = CalculateBooksInASetOfFour();
                secondPrice += booksInASet * 8 * _setDiscounts._volumeDiscount[booksInASet];
            }
            return Math.Min(firstPrice, secondPrice);
        }

        private decimal CalculatePriceForSetsOfFive()
        {
            decimal firstPrice = 0;
            while (_booksLeft.Any(book => book.Value > 0))
            {
                var booksInASet = CalculateBooksInASet();
                firstPrice += booksInASet * 8 * _setDiscounts._volumeDiscount[booksInASet];
            }
            return firstPrice;
        }

        private int CalculateBooksInASetOfFour()
        {
            int booksInASet = 0;
            foreach (var book in _booksLeft.ToList())
            {
                if (book.Value > 0 && booksInASet < 4)
                {
                    booksInASet += 1;
                    _booksLeft[book.Key] -= 1;
                }
            }
            return booksInASet;
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

    public abstract class SetOfBooks
    {
        protected Dictionary<int, int> _booksLeft;
        protected SetDiscounts _setDiscounts;

        protected abstract bool BookSetRule(KeyValuePair<int, int> book);

        protected int CalculateBooksInASet()
        {
            int booksInASet = 0;
            foreach (var book in _booksLeft.ToList())
            {
                if (BookSetRule(book))
                {
                    booksInASet += 1;
                    _booksLeft[book.Key] -= 1;
                }
            }
            return booksInASet;
        }
    }

    public class SetOfFiveBooks : SetOfBooks
    {
        public SetOfFiveBooks(Dictionary<int, int> booksLeft)
        {
            _booksLeft = booksLeft;
            _setDiscounts = new SetDiscounts();
        }

        public decimal CalculatePriceForSet()
        {
            decimal firstPrice = 0;
            while (_booksLeft.Any(book => book.Value > 0))
            {
                var booksInASet = CalculateBooksInASet();
                firstPrice += booksInASet * 8 * _setDiscounts._volumeDiscount[booksInASet];
            }
            return firstPrice;
        }

        protected override bool BookSetRule(KeyValuePair<int, int> book)
        {
            return book.Value > 0;
        }
    }
}
