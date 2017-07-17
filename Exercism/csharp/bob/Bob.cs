using System.Linq;

public static class Bob
{
    public static string Hey(string statement)
    {
        return IsAngryResponse(statement)
            ? "Whoa, chill out!"
            : GetCalmResponse(statement);
    }

    private static string GetCalmResponse(string statement)
    {
        string statementWithoutSpaces = statement.Replace(" ", "");
        if (IsEmpty(statementWithoutSpaces))
        {
            return "Fine. Be that way!";
        }
        if (IsAQuestion(statementWithoutSpaces))
        {
            return "Sure.";
        }
        return "Whatever.";
    }

    private static bool IsEmpty(string statementWithoutSpaces)
    {
        return string.IsNullOrWhiteSpace(statementWithoutSpaces);
    }

    private static bool IsAQuestion(string statementWithoutSpaces)
    {
        return statementWithoutSpaces.EndsWith("?");
    }

    private static bool IsAngryResponse(string statement)
    {
        return HasAnyLetters(statement) && AreAllLettersCapitalized(statement);
    }

    private static bool AreAllLettersCapitalized(string statement)
    {
        return statement.ToUpper() == statement;
    }

    private static bool HasAnyLetters(string statement)
    {
        return statement.Any(char.IsLetter);
    }
}