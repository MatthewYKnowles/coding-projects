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
            AddBooksToDictionary(potterBooks);
            FiveToASet fiveToASet = new FiveToASet(_BooksToBuy);
            var priceForLargestSetPossible = fiveToASet.GetPriceForLargestSetPossible();
            AddBooksToDictionary(potterBooks);
            FourToASet fourToASet = new FourToASet(_BooksToBuy);
            var priceForMaximumSetOfFour = fourToASet.GetPriceForMaximumSetOfFour();
            return Math.Min(priceForMaximumSetOfFour, priceForLargestSetPossible);
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

        public double GetPriceForMaximumSetOfFour()
        {
            double priceForMaximumSetOfFour = 0;
            while (_booksToBuy.Any(book => book.Value > 0))
            {
                priceForMaximumSetOfFour += CalculateSetQuantityAndDiscountForFourSetMaximum() * 8;
            }
            return priceForMaximumSetOfFour;
        }

        public double GetPriceForLargestSetPossible()
        {
            double priceForLargestSetPossible = 0;
            while (_booksToBuy.Any(book => book.Value > 0))
            {
                priceForLargestSetPossible += CalculateSetQuantityAndDiscountForMaximumPossible() * 8;
            }
            return priceForLargestSetPossible;
        }

        private double CalculateSetQuantityAndDiscountForMaximumPossible()
        {
            double booksInSet = 0;
            foreach (KeyValuePair<string, double> BookQuantity in _booksToBuy.ToList())
            {
                booksInSet = CreateBiggestSetsPossible(BookQuantity, booksInSet);
            }
            double discount = calculateDiscount(booksInSet);
            return booksInSet * discount;
        }

        private double CalculateSetQuantityAndDiscountForFourSetMaximum()
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
            double discount = calculateDiscount(booksInSet);
            return booksInSet * discount;
        }

        protected abstract bool BookIsValid(KeyValuePair<string, double> bookQuantity, double booksInSet);

        private double CreateBiggestSetsPossible(KeyValuePair<string, double> bookQuantity, double booksInSet)
        {
            if (BookIsValid(bookQuantity, booksInSet))
            {
                _booksToBuy[bookQuantity.Key] -= 1;
                booksInSet += 1;
            }
            return booksInSet;
        }

        private static double calculateDiscount(double booksInSet)
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

        protected override bool BookIsValid(KeyValuePair<string, double> BookQuantity, double booksInSet)
        {
            return BookQuantity.Value > 0 && booksInSet < 4;
        }
    }
    public class FiveToASet : SetPrice
    {
        public FiveToASet(Dictionary<string, double> booksToBuy)
        {
            _booksToBuy = booksToBuy;
        }

        protected override bool BookIsValid(KeyValuePair<string, double> BookQuantity, double booksInSet)
        {
            return BookQuantity.Value > 0;
        }
    }
}
