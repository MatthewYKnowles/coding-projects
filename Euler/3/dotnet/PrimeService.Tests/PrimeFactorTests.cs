using System;
using System.Collections.Generic;
using NUnit.Framework;
using PrimeFactor.Service;

namespace Tests
{
    public class PrimeFactorTests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void PrimeFactorOfOne()
        {
            var primeFactorService = new PrimeFactorService();
            Assert.That(primeFactorService.getPrimeFactor(1), Is.EqualTo(new List<int> {1}));
        }
    }
}