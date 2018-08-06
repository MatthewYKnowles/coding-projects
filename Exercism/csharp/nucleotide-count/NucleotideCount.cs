using System;
using System.Collections.Generic;
using System.Linq;

public class NucleotideCount
{
    public Dictionary<char, int> NucleotideCounts { get; }
    
    public NucleotideCount(string sequence)
    {
        NucleotideCounts = InitialNucleotideCounts();
        PopulateNucleotideCounts(sequence);
    }

    private Dictionary<char, int> InitialNucleotideCounts()
    {
        return new Dictionary<char, int>
        {
            ['A'] = 0,
            ['C'] = 0,
            ['G'] = 0,
            ['T'] = 0
        };
    }

    private void PopulateNucleotideCounts(string sequence)
    {
        foreach (var nucleotide in sequence)
        {
            CheckForInvalidNucleotide(nucleotide);
            NucleotideCounts[nucleotide] += 1;
        }
    }

    private static void CheckForInvalidNucleotide(char nucleotide)
    {
        if (InvalidNucleotide(nucleotide))
        {
            throw new ArgumentException();
        }
    }

    private static bool InvalidNucleotide(char nucleotide)
    {
        return !"ACGT".Contains(nucleotide);
    }
}