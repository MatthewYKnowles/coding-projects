using System;
using System.Collections.Generic;
using System.ComponentModel;

public static class BeerSong
{
    public static string Recite(int initalNumberOfBottles, int totalVerses)
    {
        var verses = new List<string> { };
        for (var currentVerse = 0; currentVerse < totalVerses; currentVerse++)
        {
            verses.Add(Verse(initalNumberOfBottles - currentVerse));
        }

        return String.Join("\n\n", verses);
    }

    public static string Verse(int number)
    {
        switch (number)
        {
            case 0:
                return "No more bottles of beer on the wall, " +
                       "no more bottles of beer.\n" +
                       "Go to the store and buy some more, " +
                       "99 bottles of beer on the wall.";
            case 1:
                return $"1 bottle of beer on the wall, " +
                       $"1 bottle of beer.\n" +
                       $"Take it down and pass it around, " +
                       $"no more bottles of beer on the wall.";
            default:
                return $"{number} {Container(number)} of beer on the wall, " +
                       $"{number} {Container(number)} of beer.\n" +
                       $"Take one down and pass it around, " +
                       $"{number - 1} {Container(number - 1)} of beer on the wall.";
        }
    }

    public static string Container(int number)
    {
        return number == 1 ? "bottle" : "bottles";
    }
}