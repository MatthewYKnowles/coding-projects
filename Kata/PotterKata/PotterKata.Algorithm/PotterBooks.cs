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
        }

        public double GetPrice(int[] potterBooks)
        {
            AddBooksToDictionary(potterBooks);
            var firstSetOfBooks = calculateFirstSetPrice();
            var secondSetOfBooks = calculateFirstSetPrice();
            return 8 * firstSetOfBooks + 8 * secondSetOfBooks;
        }

        private double calculateFirstSetPrice()
        {
            double firstSetPrice = 0;
            foreach (KeyValuePair<string, double> BookQuantity in _BooksToBuy.ToList())
            {
                if (BookQuantity.Value > 0)
                {
                    _BooksToBuy[BookQuantity.Key] -= 1;
                    firstSetPrice += 1;
                }
            }
            return firstSetPrice * (1 - .05 * (firstSetPrice - 1));
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
