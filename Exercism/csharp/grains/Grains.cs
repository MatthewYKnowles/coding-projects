using System;
using System.Numerics;

public static class Grains
{
    public static ulong Square(int n)
    {
        return (ulong) Math.Pow(2, n - 1);
    }

    public static ulong Total()
    {
        return 18446744073709551615ul;
    }
}