using System;

public class Robot
{
    private string _name;

    public Robot()
    {
        _name = GenerateName();
    }


    public string Name
    {
        get
        {
            return _name;
        }
    }

    public void Reset()
    {
        string v = GenerateName();
        Console.WriteLine(v);
        _name = v;
    }

    private string GenerateName()
    {
        return GenerateRandomLetter() + GenerateRandomLetter() + GenerateRandomDigit() + GenerateRandomDigit() + GenerateRandomDigit();
    }

    private static int GenerateRandomDigit()
    {
        return new Random().Next(0, 9);
    }

    private static string GenerateRandomLetter()
    {
        string v = ((char)new Random().Next(65, 90)).ToString();
        Console.WriteLine(v);
        return v;
    }
}