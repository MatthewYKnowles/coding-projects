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
            double totalPrice = 0;
            AddBooksToDictionary(potterBooks);
            while (_BooksToBuy.Any(book => book.Value > 0))
            {
                totalPrice += CalculateSetQuantityAndDiscount() * 8;
            }
            return totalPrice;
        }

        private double CalculateSetQuantityAndDiscount()
        {
            double booksInSet = 0;
            foreach (KeyValuePair<string, double> BookQuantity in _BooksToBuy.ToList())
            {
                if (BookQuantity.Value > 0)
                {
                    _BooksToBuy[BookQuantity.Key] -= 1;
                    booksInSet += 1;
                }
            }
            return booksInSet * (1 - .05 * (booksInSet - 1));
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
