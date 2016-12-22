using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PotterKata.Algorithm
{
    public class PotterBooks
    {
        private Dictionary<string, decimal> _BooksToBuy = new Dictionary<string, decimal>();

        public PotterBooks()
        {
            _BooksToBuy["book1"] = 0;
            _BooksToBuy["book2"] = 0;
            _BooksToBuy["book3"] = 0;
            _BooksToBuy["book4"] = 0;
            _BooksToBuy["book5"] = 0;
        }

        public decimal GetPrice(int[] potterBooks)
        {
            var priceForLargestSetPossible = GetPriceForLargestSetPossible(potterBooks);
            var priceForMaximumSetOfFour = GPriceForMaximumSetOfFour(potterBooks);
            return Math.Min(priceForMaximumSetOfFour, priceForLargestSetPossible);
        }

        private decimal GPriceForMaximumSetOfFour(int[] potterBooks)
        {
            AddBooksToDictionary(potterBooks);
            FourToASet fourToASet = new FourToASet(_BooksToBuy);
            return fourToASet.GetPrice();
        }

        private decimal GetPriceForLargestSetPossible(int[] potterBooks)
        {
            AddBooksToDictionary(potterBooks);
            FiveToASet fiveToASet = new FiveToASet(_BooksToBuy);
            return fiveToASet.GetPrice();
        }

        private void AddBooksToDictionary(int[] potterBooks)
        {
            foreach (int bookNumber in potterBooks)
            {
                string bookName = "book" + (bookNumber + 1);
                _BooksToBuy[bookName] += 1;
            }
        }
    }

    public abstract class SetPrice
    {
        protected Dictionary<string, decimal> _booksToBuy;

        public decimal GetPrice()
        {
            decimal priceForLargestSetPossible = 0;
            while (_booksToBuy.Any(book => book.Value > 0))
            {
                priceForLargestSetPossible += CalculateSetQuantityAndDiscount() * 8;
            }
            return priceForLargestSetPossible;
        }

        private decimal CalculateSetQuantityAndDiscount()
        {
            decimal booksInSet = 0;
            foreach (var BookQuantity in _booksToBuy.OrderByDescending(key => key.Value).ToList())
            {
                if (BookIsValid(BookQuantity, booksInSet))
                {
                    _booksToBuy[BookQuantity.Key] -= 1;
                    booksInSet += 1;
                }
            }
            return booksInSet * CalculateDiscount(booksInSet);
        }

        protected abstract bool BookIsValid(KeyValuePair<string, decimal> bookQuantity, decimal booksInSet);

        private static decimal CalculateDiscount(decimal booksInSet)
        {
            return (decimal) (booksInSet < 4 ? (1 - .05 * (double) (booksInSet - 1)) : (1 - .05 * (double) booksInSet));
        }
    }

    public class FourToASet : SetPrice
    {
        public FourToASet(Dictionary<string, decimal> booksToBuy)
        {
            _booksToBuy = booksToBuy;
        }

        protected override bool BookIsValid(KeyValuePair<string, decimal> bookQuantity, decimal booksInSet)
        {
            return bookQuantity.Value > 0 && booksInSet < 4;
        }
    }
    public class FiveToASet : SetPrice
    {
        public FiveToASet(Dictionary<string, decimal> booksToBuy)
        {
            _booksToBuy = booksToBuy;
        }

        protected override bool BookIsValid(KeyValuePair<string, decimal> bookQuantity, decimal booksInSet)
        {
            return bookQuantity.Value > 0;
        }
    }
}
