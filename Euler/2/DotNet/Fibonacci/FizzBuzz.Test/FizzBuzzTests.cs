using NUnit.Framework;
using FizzBuzz.Service;

namespace Tests
{
    public class FizzBuzzTests
    {
        private FizzBuzzService fizzBuzzService;
        
        [SetUp]
        public void Setup()
        {
            fizzBuzzService = new FizzBuzzService();
        }

        [Test]
        public void Test1()
        {
            Assert.That(fizzBuzzService.Translate(1), Is.EqualTo("1"));
        }
    }
}