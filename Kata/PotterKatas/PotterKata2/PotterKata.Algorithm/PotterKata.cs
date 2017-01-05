using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PotterKata.Algorithm
{
    public class PotterBooks
    {
        private readonly int[] _books;
        private Dictionary<string, int> _booksLeft = new Dictionary<string, int>();

        public PotterBooks(int[] books)
        {
            _booksLeft["PotterBook1"] = 0;
            _booksLeft["PotterBook2"] = 0;
            _booksLeft["PotterBook3"] = 0;
            _booksLeft["PotterBook4"] = 0;
            _booksLeft["PotterBook5"] = 0;
            _books = books;
        }
        public decimal Price()
        {
            AddPotterBooksToBooksLeft();
            int booksInASet = 0;
            foreach (var potterBook in _booksLeft.ToList())
            {
                if (potterBook.Value > 0)
                {
                    booksInASet += 1;
                    _booksLeft[potterBook.Key] -= 1;
                }
            }
            if (booksInASet > 1)
            {
                return (decimal) (booksInASet * 8 * .95);
            }
            return _books.Length * 8;
        }

        private void AddPotterBooksToBooksLeft()
        {
            foreach (var book in _books)
            {
                string bookName = "PotterBook" + (book + 1);
                _booksLeft[bookName] += 1;
            }
        }
    }
}
