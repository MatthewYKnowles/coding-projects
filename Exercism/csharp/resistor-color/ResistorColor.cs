using System.Collections.Generic;
using System.Linq;

public static class ResistorColor
{
    private static readonly List<Resistor> Resistors = new List<Resistor>()
    {
        new Resistor {Color = "black", SignificantFigures = 0},
        new Resistor {Color = "brown", SignificantFigures = 1},
        new Resistor {Color = "red", SignificantFigures = 2},
        new Resistor {Color = "orange", SignificantFigures = 3},
        new Resistor {Color = "yellow", SignificantFigures = 4},
        new Resistor {Color = "green", SignificantFigures = 5},
        new Resistor {Color = "blue", SignificantFigures = 6},
        new Resistor {Color = "violet", SignificantFigures = 7},
        new Resistor {Color = "grey", SignificantFigures = 8},
        new Resistor {Color = "white", SignificantFigures = 9}
    };

    public static int ColorCode(string color) => Resistors.Find(x => x.Color == color).SignificantFigures;

    public static string[] Colors() => Resistors.Select(x => x.Color).ToArray();
}

public struct Resistor
{
    public string Color { get; set; }
    public int SignificantFigures { get; set; }
}