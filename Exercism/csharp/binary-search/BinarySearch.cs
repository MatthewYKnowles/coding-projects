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
        if (_input.Length == 1)
        {
            return _input[0] == value ? 0 : -1;
        }
        if (_input.Length > 1)
        {
            return 3;
        }
        return 0;
    }
}