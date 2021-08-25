using System.Collections.Generic;
using System.Linq;

public class BowlingGame
{
    private readonly List<int> rolls = new List<int>();
    public void Roll(int pins)
    {
        rolls.Add(pins);
    }

    public int? Score()
    {
        var score = rolls[0];
        var doubleScore = false;
        
        for (int i = 1; i < rolls.Count; i++)
        {
            if (doubleScore)
            {
                score += rolls[i];
                doubleScore = false;
            }
            score += rolls[i];
            if (rolls[i] + rolls[i-1] == 10)
            {
                doubleScore = true;
            }
        }
        return score;
    }
}