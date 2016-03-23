using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;

namespace AbelTDDByExampleMoney
{
    [TestFixture]
    public class Test
    {
        [Test]
        public void Multiplication()
        {
            Dollar five = new Dollar(5);
            Dollar product = five.times(2);
            Assert.That(product.Amount, Is.EqualTo(10));
            product = five.times(3);
            Assert.That(product.Amount, Is.EqualTo(15));
        }
    }

    public class Dollar
    {
        public int Amount;

        public Dollar(int amount)
        {
            Amount = amount;
        }

        public Dollar times(int multiplier)
        {
            return new Dollar(Amount * multiplier);
        }
    }
}
