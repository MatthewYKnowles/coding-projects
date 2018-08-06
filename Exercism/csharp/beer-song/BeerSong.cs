using System;
using System.Collections.Generic;

public static class BeerSong
{
    public static string Recite(int initalNumberOfBottles, int totalVerses)
    {
        var verses = new List<string>{};
        for (var currentVerse = 0; currentVerse < totalVerses; currentVerse++)
        {
            var bottlesOnWall = BottlesOnWallFactory.GetBottlesOnWall(initalNumberOfBottles - currentVerse);
            verses.Add(bottlesOnWall.getSongVerse(initalNumberOfBottles - currentVerse));
        }
        return String.Join("\n\n", verses);
    }
}

public static class BottlesOnWallFactory
{
    public static BottlesOnWall GetBottlesOnWall(int bottles)
    {
        switch (bottles)
        {
            case 0:
                return new NoBottleOnWall();
            case 1:
                return new OneBottleOnWall();
            case 2:
                return new TwoBottlesOnWall();
            default:
                return new MoreThanTwoBottlesOnWall();
        }
    }
}

public interface BottlesOnWall
{
    string getSongVerse(int bottles);
}

public class MoreThanTwoBottlesOnWall : BottlesOnWall
{
    public string getSongVerse(int bottles)
    {
        return $"{bottles} bottles of beer on the wall, {bottles} bottles of beer.\n" +
               $"Take one down and pass it around, {bottles - 1} bottles of beer on the wall.";
    }
}

public class TwoBottlesOnWall : BottlesOnWall
{
    public string getSongVerse(int bottles)
    {
        return $"2 bottles of beer on the wall, 2 bottles of beer.\n" +
               $"Take one down and pass it around, 1 bottle of beer on the wall.";
    }
}

public class OneBottleOnWall : BottlesOnWall
{
    public string getSongVerse(int bottles)
    {
        return $"1 bottle of beer on the wall, 1 bottle of beer.\n" +
               $"Take it down and pass it around, no more bottles of beer on the wall.";
    }
}

public class NoBottleOnWall : BottlesOnWall
{
    public string getSongVerse(int bottles)
    {
        return "No more bottles of beer on the wall, no more bottles of beer.\n" +
               "Go to the store and buy some more, 99 bottles of beer on the wall.";
    }
}