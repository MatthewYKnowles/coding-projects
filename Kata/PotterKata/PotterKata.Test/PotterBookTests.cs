using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using PotterKata.Algorithm;

namespace PotterKata.Test
{
    [TestFixture]
    public class PotterBookTests
    {
        [Test]
        public void OneBookTest()
        {
            PotterBooks potterBooks = new PotterBooks();
            int[] booksToBuy = {0};
            Assert.That(potterBooks.GetPrice(booksToBuy), Is.EqualTo(8));
        }
        [Test]
        public void TwoBookTest()
        {
            PotterBooks potterBooks = new PotterBooks();
            int[] booksToBuy = {0, 0};
            Assert.That(potterBooks.GetPrice(booksToBuy), Is.EqualTo(16));
        }
        [Test]
        public void TwoDifferentBooksTest()
        {
            PotterBooks potterBooks = new PotterBooks();
            int[] booksToBuy = {0, 1};
            Assert.That(potterBooks.GetPrice(booksToBuy), Is.EqualTo(16 * (1-.05)));
        }
        [Test]
        public void TwoDifferentBooksThreeTotalBooksTest()
        {
            PotterBooks potterBooks = new PotterBooks();
            int[] booksToBuy = {0, 1, 1};
            Assert.That(potterBooks.GetPrice(booksToBuy), Is.EqualTo(16 * (1-.05)+ 8));
        }
        [Test]
        public void ThreeDifferentBooksTest()
        {
            PotterBooks potterBooks = new PotterBooks();
            int[] booksToBuy = {0, 1, 2};
            Assert.That(potterBooks.GetPrice(booksToBuy), Is.EqualTo(24 * .90));
        }
        [Test]
        public void FourDifferentBooksTest()
        {
            PotterBooks potterBooks = new PotterBooks();
            int[] booksToBuy = {0, 1, 2, 3};
            Assert.That(potterBooks.GetPrice(booksToBuy), Is.EqualTo(32 * .80));
        }
    }
}
