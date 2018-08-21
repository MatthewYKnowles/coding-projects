using System;

public struct Clock
{
    private readonly int _hours;
    private readonly int _minutes;

    public Clock(int hours, int minutes)
    {
        _hours = CalculateHours(hours + HoursFromMinutes(minutes));
        _minutes = CalculateMinutes(minutes);
    }

    public Clock Add(int minutesToAdd)
    {
        return new Clock(_hours, _minutes + minutesToAdd);
    }
    
    public Clock Subtract(int minutesToSubtract)
    {
        return new Clock(_hours, _minutes - minutesToSubtract);
    }
    
    public override string ToString()
    {
        return $"{_hours:00}:{_minutes:00}";
    }
    
    private static int HoursFromMinutes(int minutes)
    {
        return (int) Math.Floor((decimal)minutes/60);
    }
    
    private static int CalculateMinutes(int minutes)
    {
        return CalculateTimeUnit(minutes, 60);
    }
    
    private static int CalculateHours(int hours)
    {
        return CalculateTimeUnit(hours, 24);
    }

    private static int CalculateTimeUnit(int timeUnit, int upperLimit)
    {
        var timeUnitRemainder = timeUnit % upperLimit;
        return timeUnitRemainder < 0 
            ? timeUnitRemainder + upperLimit
            : timeUnitRemainder;
    }
}