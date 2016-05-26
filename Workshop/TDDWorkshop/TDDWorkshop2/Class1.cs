using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using NUnit.Framework.Constraints;

namespace TDDWorkshop2
{
    [TestFixture]
    public class FizzBuzzTests
    {
        [TestCase(1, "1")]
        [TestCase(2, "2")]
        [TestCase(3, "Fizz")]
        [TestCase(5, "Buzz")]
        [TestCase(6, "Fizz")]
        [TestCase(7, "Monkey")]
        [TestCase(10, "Buzz")]
        [TestCase(14, "Monkey")]
        [TestCase(3*5, "FizzBuzz")]
        [TestCase(3*7, "FizzMonkey")]
        [TestCase(5*7, "BuzzMonkey")]
        [TestCase(3*5*7, "FizzBuzzMonkey")]

        public void FizzBuzzTest(int input, string expectedValue)
        {
            Assert.That(FizzBuzz.Translate(input), Is.EqualTo(expectedValue));
        }
    }

    public class FizzBuzz
    {
        public static string Translate(int input)
        {
            if (ShouldChange(input)) return GetChangeString(input);
            return input.ToString();
        }

        private static string GetChangeString(int input)
        {
            var returnString = "";
            if (ShouldFizz(input)) returnString += "Fizz";
            if (ShouldBuzz(input)) returnString += "Buzz";
            if (ShouldMonkey(input)) returnString += "Monkey";
            return returnString;
        }

        private static bool ShouldChange(int input)
        {
            return ShouldFizz(input) || ShouldBuzz(input) || ShouldMonkey(input);
        }

        private static bool ShouldMonkey(int input)
        {
            return input % 7 == 0;
        }

        private static bool ShouldBuzz(int input)
        {
            return input % 5 == 0;
        }

        private static bool ShouldFizz(int input)
        {
            return input % 3 == 0;
        }
    }
}
