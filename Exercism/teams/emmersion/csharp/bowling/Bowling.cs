using System.Collections.Generic;
using System.Linq;

public class BowlingGame
{
    private readonly List<int> _rolls = new List<int>();
    public void Roll(int pins)
    {
        _rolls.Add(pins);
    }

    public int? Score()
    {
        var score = 0;
        for (int i = 0; i < _rolls.Count; i++)
        {
            score += _rolls[i];
            
        }
        return _rolls.Sum();
    }
}