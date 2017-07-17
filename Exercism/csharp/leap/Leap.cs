using System;

public static class Leap
{
    public static bool IsLeapYear(int year)
    {
        return SpecialCaseEveryOneHundredYears(year)
            ? EveryFourHundredYearsIgnoreSpecialCase(year)
            : ShouldBeLeapYear(year);
    }

    public static bool SpecialCaseEveryOneHundredYears(int year)
    {
        return year % 100 == 0;
    }

    public static bool EveryFourHundredYearsIgnoreSpecialCase(int year)
    {
        return year % 400 == 0;
    }

    public static bool ShouldBeLeapYear(int year)
    {
        return year % 4 == 0;
    }
}