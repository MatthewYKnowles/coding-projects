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
        private Dictionary<string, double> _BooksToBuy = new Dictionary<string, double>();

        public PotterBooks()
        {
            _BooksToBuy["book1"] = 0;
            _BooksToBuy["book2"] = 0;
            _BooksToBuy["book3"] = 0;
            _BooksToBuy["book4"] = 0;
            _BooksToBuy["book5"] = 0;
        }

        public double GetPrice(int[] potterBooks)
        {
            var priceForLargestSetPossible = GetPriceForLargestSetPossible(potterBooks);
            var priceForMaximumSetOfFour = GPriceForMaximumSetOfFour(potterBooks);
            return Math.Min(priceForMaximumSetOfFour, priceForLargestSetPossible);
        }

        private double GPriceForMaximumSetOfFour(int[] potterBooks)
        {
            AddBooksToDictionary(potterBooks);
            FourToASet fourToASet = new FourToASet(_BooksToBuy);
            return fourToASet.GetPrice();
        }

        private double GetPriceForLargestSetPossible(int[] potterBooks)
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
        protected Dictionary<string, double> _booksToBuy;

        public double GetPrice()
        {
            double priceForLargestSetPossible = 0;
            while (_booksToBuy.Any(book => book.Value > 0))
            {
                priceForLargestSetPossible += CalculateSetQuantityAndDiscount() * 8;
            }
            return priceForLargestSetPossible;
        }

        private double CalculateSetQuantityAndDiscount()
        {
            double booksInSet = 0;
            foreach (KeyValuePair<string, double> BookQuantity in _booksToBuy.ToList())
            {
                if (BookIsValid(BookQuantity, booksInSet))
                {
                    _booksToBuy[BookQuantity.Key] -= 1;
                    booksInSet += 1;
                }
            }
            return booksInSet * CalculateDiscount(booksInSet);
        }

        protected abstract bool BookIsValid(KeyValuePair<string, double> bookQuantity, double booksInSet);

        private static double CalculateDiscount(double booksInSet)
        {
            return booksInSet < 4 ? (1 - .05 * (booksInSet - 1)) : (1 - .05 * booksInSet);
        }
    }

    public class FourToASet : SetPrice
    {
        public FourToASet(Dictionary<string, double> booksToBuy)
        {
            _booksToBuy = booksToBuy;
        }

        protected override bool BookIsValid(KeyValuePair<string, double> bookQuantity, double booksInSet)
        {
            return bookQuantity.Value > 0 && booksInSet < 4;
        }
    }
    public class FiveToASet : SetPrice
    {
        public FiveToASet(Dictionary<string, double> booksToBuy)
        {
            _booksToBuy = booksToBuy;
        }

        protected override bool BookIsValid(KeyValuePair<string, double> bookQuantity, double booksInSet)
        {
            return bookQuantity.Value > 0;
        }
    }
}
