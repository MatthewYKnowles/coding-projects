using System.Linq;

public static class Bob
{
    public static string Hey(string statement)
    {
        return AngryResponse(statement)
            ? "Whoa, chill out!"
            : ShouldGiveCalmResponse(statement);
    }

    private static string ShouldGiveCalmResponse(string statement)
    {
        string statementWithoutSpaces = statement.Replace(" ", "");
        if (Empty(statementWithoutSpaces))
        {
            return "Fine. Be that way!";
        }
        if (IsAQuestion(statementWithoutSpaces))
        {
            return "Sure.";
        }
        return "Whatever.";
    }

    private static bool Empty(string statementWithoutSpaces)
    {
        return statementWithoutSpaces == "";
    }

    private static bool IsAQuestion(string statementWithoutSpaces)
    {
        return statementWithoutSpaces.EndsWith("?");
    }

    private static bool AngryResponse(string statement)
    {
        return HasAnyLetters(statement) && AllLettersAreCapitalized(statement);
    }

    private static bool AllLettersAreCapitalized(string statement)
    {
        return statement.ToUpper() == statement;
    }

    private static bool HasAnyLetters(string statement)
    {
        return statement.Any(char.IsLetter);
    }
}