using System;
using System.Collections.Generic;
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
            var priceForMaximumSetOfFour = GetPriceForMaximumSetOfFour(potterBooks);
            return Math.Min(priceForMaximumSetOfFour, priceForLargestSetPossible);
        }

        private double GetPriceForMaximumSetOfFour(int[] potterBooks)
        {
            double priceForMaximumSetOfFour = 0;
            AddBooksToDictionary(potterBooks);
            while (_BooksToBuy.Any(book => book.Value > 0))
            {
                priceForMaximumSetOfFour += CalculateSetQuantityAndDiscountForFourSetMaximum() * 8;
            }
            return priceForMaximumSetOfFour;
        }

        private double GetPriceForLargestSetPossible(int[] potterBooks)
        {
            double priceForLargestSetPossible = 0;
            AddBooksToDictionary(potterBooks);
            while (_BooksToBuy.Any(book => book.Value > 0))
            {
                priceForLargestSetPossible += CalculateSetQuantityAndDiscountForMaximumPossible() * 8;
            }
            return priceForLargestSetPossible;
        }

        private double CalculateSetQuantityAndDiscountForMaximumPossible()
        {
            double booksInSet = 0;
            foreach (KeyValuePair<string, double> BookQuantity in _BooksToBuy.ToList())
            {
                booksInSet = CreateBiggestSetsPossible(BookQuantity, booksInSet);
            }
            double discount = calculateDiscount(booksInSet);
            return booksInSet * discount;
        }

        private double CalculateSetQuantityAndDiscountForFourSetMaximum()
        {
            double booksInSet = 0;
            foreach (KeyValuePair<string, double> BookQuantity in _BooksToBuy.ToList())
            {
                if (BookQuantity.Value > 0 && booksInSet < 4)
                {
                    _BooksToBuy[BookQuantity.Key] -= 1;
                    booksInSet += 1;
                }
            }
            double discount = calculateDiscount(booksInSet);
            return booksInSet * discount;
        }

        private double CreateBiggestSetsPossible(KeyValuePair<string, double> BookQuantity, double booksInSet)
        {
            if (BookQuantity.Value > 0)
            {
                _BooksToBuy[BookQuantity.Key] -= 1;
                booksInSet += 1;
            }
            return booksInSet;
        }

        private static double calculateDiscount(double booksInSet)
        {
            return booksInSet < 4 ? (1 - .05 * (booksInSet - 1)) : (1 - .05 * booksInSet);
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
}
