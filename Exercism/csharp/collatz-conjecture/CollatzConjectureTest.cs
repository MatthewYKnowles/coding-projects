// This file was auto-generated based on version 1.1.1 of the canonical data.

using Xunit;
using System;

public class CollatzConjectureTest
{
    [Fact]
         public void Zero_steps_for_one()
         {
             Assert.Equal(0, CollatzConjecture.Steps(1));
         }
    
    [Fact]
    public void One_steps_for_one()
    {
        Assert.Equal(1, CollatzConjecture.Steps(2));
    }
    
    [Fact]
    public void Two_steps_for_one()
    {
        Assert.Equal(2, CollatzConjecture.Steps(4));
    }

    [Fact]
    public void Divide_if_even()
    {
        Assert.Equal(4, CollatzConjecture.Steps(16));
    }

    [Fact]
    public void Even_and_odd_steps()
    {
        Assert.Equal(9, CollatzConjecture.Steps(12));
    }

    [Fact]
    public void Large_number_of_even_and_odd_steps()
    {
        Assert.Equal(152, CollatzConjecture.Steps(1000000));
    }

    [Fact]
    public void Zero_is_an_error()
    {
        Assert.Throws<ArgumentException>(() => CollatzConjecture.Steps(0));
    }

    [Fact]
    public void Negative_value_is_an_error()
    {
        Assert.Throws<ArgumentException>(() => CollatzConjecture.Steps(-15));
    }
}