using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

public class NucleotideCount
{
    public Dictionary<char, int> NucleotideCounts { get; set; }
    
    public NucleotideCount(string sequence)
    {
        NucleotideCounts = new Dictionary<char, int>
        {
            ['A'] = 0,
            ['C'] = 0,
            ['G'] = 0,
            ['T'] = 0
        };

        PopulateCucleotideCounts(sequence);
    }

    private void PopulateCucleotideCounts(string sequence)
    {
        foreach (var nucleotide in sequence)
        {
            if (NotValidNucleotide(nucleotide))
            {
                throw new InvalidNucleotideException();
            }

            NucleotideCounts[nucleotide] += 1;
        }
    }

    private static bool NotValidNucleotide(char nucleotide)
    {
        return !"ACGT".Contains(nucleotide);
    }
}

public class InvalidNucleotideException : Exception { }
