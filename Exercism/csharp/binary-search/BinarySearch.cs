using System;

public class BinarySearch
{
    private readonly int[] _input;

    public BinarySearch(int[] input)
    {
        _input = input;
    }

    public int Find(int value)
    {
        return Array.IndexOf(_input, value);
    }
}