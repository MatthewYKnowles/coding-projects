using System;
using System.Collections.Generic;

public class KindergartenGarden
{
    private readonly string _diagram;
    private readonly List<string> _students = new List<string>()
    {
        "Alice", "Bob", "Charlie", "David", "Eve", "Fred", "Ginny", "Harriet", "Ilena", "Joseph", "Kincaid", "Larry"
    };

    private readonly Dictionary<char, Plant> _plantKey = new Dictionary<char, Plant>()
    {
        {'C', Plant.Clover},
        {'G', Plant.Grass},
        {'R', Plant.Radishes},
        {'V', Plant.Violets},
    };

    public KindergartenGarden(string diagram)
    {
        _diagram = diagram;
    }

    public IEnumerable<Plant> Plants(string student)
    {
        var topRowOfPlants = _diagram.Split("\n")[0];
        var bottomRowOfPlants = _diagram.Split("\n")[1];
        var studentIndex = _students.IndexOf(student) * 2;
        var alicePlants = new[]
        {
            _plantKey[topRowOfPlants[studentIndex]], _plantKey[topRowOfPlants[studentIndex + 1]],
            _plantKey[bottomRowOfPlants[studentIndex]], _plantKey[bottomRowOfPlants[studentIndex + 1]]
        };
        return alicePlants;
    }
}





public enum Plant
{
    Violets,
    Radishes,
    Clover,
    Grass
}