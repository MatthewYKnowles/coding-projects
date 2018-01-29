using NUnit.Framework;
using Fibonacci;

namespace Tests
{
    public class FibonacciTests
    {
        FibonacciService _fibonacciService;
        
        [SetUp]
        public void Setup()
        {
            _fibonacciService = new FibonacciService();
        }

        [Test]
        public void OneShouldReturnZero()
        {
            Assert.That(_fibonacciService.GetSumOfEvenValuedTerms(1), Is.EqualTo(0));
        }

        [Test]
        public void TwoShouldReturnTwo()
        {
            Assert.That(_fibonacciService.GetSumOfEvenValuedTerms(2), Is.EqualTo(2));
        }

        [Test]
        public void ThreeShouldReturnTwo()
        {
            Assert.That(_fibonacciService.GetSumOfEvenValuedTerms(3), Is.EqualTo(2));
        }
    }
}