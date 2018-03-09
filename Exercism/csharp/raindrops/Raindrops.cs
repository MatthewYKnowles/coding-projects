using System.Collections.Generic;
using System.Runtime.InteropServices.ComTypes;
using System.Text;

public static class Raindrops
{
    private static readonly Dictionary<int, string> RainSoundDictionary = new Dictionary<int, string>()
    {
        {3, "Pling"},
        {5, "Plang"},
        {7, "Plong"}
    };
    
    public static string Convert(int number)
    {
        var raindropSound = new StringBuilder();
        foreach (var rainSoundNumber in RainSoundDictionary)
        {
            if (number.IsMultipleOf(rainSoundNumber.Key))
            {
                raindropSound.Append(rainSoundNumber.Value);
            }
        }
        return raindropSound.Length == 0 ? number.ToString() : raindropSound.ToString();
    }
}

public static class IntExtension
{
    public static bool IsMultipleOf(this int number, int multiple)
    {
        return number % multiple == 0;
    }
}