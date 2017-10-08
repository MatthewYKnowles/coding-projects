using System.Linq;

public static class Bob
{
    public static string Hey(string statement)
    {
        return AngryResponse(statement)
            ? "Whoa, chill out!"
            : GetCalmResponse(statement);
    }

    private static string GetCalmResponse(string statement)
    {
        string statementWithoutSpaces = statement.Replace(" ", "");
        if (NoStatement(statementWithoutSpaces))
        {
            return "Fine. Be that way!";
        }
        if (Question(statementWithoutSpaces))
        {
            return "Sure.";
        }
        return "Whatever.";
    }

    private static bool NoStatement(string statement)
    {
        return string.IsNullOrWhiteSpace(statement);
    }

    private static bool Question(string statement)
    {
        return statement.EndsWith("?");
    }

    private static bool AngryResponse(string statement)
    {
        return HasLetters(statement) && AllLettersCapitalized(statement);
    }

    private static bool AllLettersCapitalized(string statement)
    {
        return statement.ToUpper() == statement;
    }

    private static bool HasLetters(string statement)
    {
        return statement.Any(char.IsLetter);
    }
}