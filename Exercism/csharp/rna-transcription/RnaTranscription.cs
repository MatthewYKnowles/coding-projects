using System.Collections.Generic;

public static class Complement
{
    private static readonly Dictionary<char, string> BasePairs = new Dictionary<char, string>()
    {
        {'G', "C"},
        {'C', "G"},
        {'T', "A"},
        {'A', "U"}
    };

    public static string OfDna(string nucleotide)
    {
        string transcribedDna = "";
        foreach (char dna in nucleotide)
        {
            transcribedDna += BasePairs[dna];
        }
        return transcribedDna;
    }
}