// This file was auto-generated based on version 1.0.0 of the canonical data.

using System.Reflection.Metadata;
using Xunit;

public class ResistorColorTest
{
    [Fact]
    public void TestZeroReturnsZero()
    {
        Assert.Equal(LuhnAlgorithm.GetCheckDigit(0), 0);
    }
    [Fact]
    public void TestOneReturnsEight()
    {
        Assert.Equal(LuhnAlgorithm.GetCheckDigit(1), 8);
    }
    [Fact]
    public void Test2Returns6()
    {
        Assert.Equal(LuhnAlgorithm.GetCheckDigit(2), 6);
    }
    [Fact]
    public void TwoDigits10()
    {
        Assert.Equal(LuhnAlgorithm.GetCheckDigit(10), 9);
    }
    [Fact]
    public void TwoDigits11()
    {
        Assert.Equal(LuhnAlgorithm.GetCheckDigit(11), 7);
    }
    [Fact]
    public void TwoDigits15()
    {
        Assert.Equal(LuhnAlgorithm.GetCheckDigit(15), 8);
    }
}