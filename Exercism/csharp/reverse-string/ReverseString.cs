using System;

public static class ReverseString
{
    public static string Reverse(string input)
    {
        var inputAsChars = input.ToCharArray();
        Array.Reverse(inputAsChars);
        return new string(inputAsChars);
    }
}